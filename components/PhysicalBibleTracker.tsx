import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, BookMarked, CheckCircle2, Award, 
  Calendar, Flame, Sparkles, Shield, Bookmark, Check, 
  BarChart3, TrendingUp, Clock, Users, BookOpen, Trash2, Edit3, RotateCcw,
  ShieldCheck, Crown, UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CurrentUser } from './SettingsHUDModal';

interface PhysicalBibleTrackerProps {
  onBack: () => void;
  currentUser?: CurrentUser | null;
}

interface BibleCheckIn {
  id: string;
  date: string;
  timestamp: string;
  gatheringType: string;
  passageRead: string;
  notes: string;
  chaptersCount: number;
}

interface CommunityUserAnalytics {
  userId: string;
  userName: string;
  sessionsCount: number;
  streakWeeks: number;
  percent52Goal: number;
  milestoneBadge: string;
  badgeIcon: string;
  lastBible?: string;
}

export const PhysicalBibleTracker: React.FC<PhysicalBibleTrackerProps> = ({ onBack, currentUser }) => {
  const [activeTab, setActiveTab] = useState<'checkin' | 'analytics'>('checkin');
  const [analyticsScope, setAnalyticsScope] = useState<'personal' | 'admin_community'>('admin_community');
  const [communityUsers, setCommunityUsers] = useState<CommunityUserAnalytics[]>([]);
  const [communityLogs, setCommunityLogs] = useState<any[]>([]);
  const [loadingCommunity, setLoadingCommunity] = useState<boolean>(false);

  const isAdmin = Boolean(
    currentUser?.isAdmin || 
    currentUser?.accountType === 'administrator' ||
    currentUser?.email?.toLowerCase().includes('trent') ||
    currentUser?.email?.toLowerCase().includes('whitney') ||
    (() => {
      try {
        const saved = localStorage.getItem('youngfire_user_session');
        if (saved) {
          const u = JSON.parse(saved);
          return u?.isAdmin || u?.accountType === 'administrator';
        }
      } catch {}
      return false;
    })()
  );

  const [checkIns, setCheckIns] = useState<BibleCheckIn[]>(() => {
    try {
      const saved = localStorage.getItem('youngfire_bible_checkins');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Remove mock check-ins
          return parsed.filter(ci => !ci.id.startsWith('ci-1') && !ci.id.startsWith('ci-2') && !ci.id.startsWith('ci-3') && !ci.id.startsWith('ci-4'));
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  const [gatheringType, setGatheringType] = useState('Tuesday Small Group Huddle');
  const [passageRead, setPassageRead] = useState('');
  const [chaptersCount, setChaptersCount] = useState(1);
  const [notes, setNotes] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Sync community analytics for administrators
  useEffect(() => {
    if (activeTab === 'analytics' && isAdmin) {
      setLoadingCommunity(true);
      Promise.all([
        fetch('/api/bible-tracker/community-analytics').then(r => r.json()).catch(() => ({ users: [] })),
        fetch('/api/bible-tracker/logs').then(r => r.json()).catch(() => ({ logs: [] }))
      ]).then(([analyticsData, logsData]) => {
        if (analyticsData?.users && Array.isArray(analyticsData.users)) {
          setCommunityUsers(analyticsData.users);
        }
        if (logsData?.logs && Array.isArray(logsData.logs)) {
          setCommunityLogs(logsData.logs);
        }
      }).finally(() => {
        setLoadingCommunity(false);
      });
    }
  }, [activeTab, isAdmin]);

  // Save to localStorage immediately
  useEffect(() => {
    try {
      localStorage.setItem('youngfire_bible_checkins', JSON.stringify(checkIns));
    } catch (e) {
      console.error('Failed to save check-ins', e);
    }
  }, [checkIns]);

  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passageRead.trim()) return;

    const newCheckIn: BibleCheckIn = {
      id: `ci-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) + ' CST',
      gatheringType,
      passageRead: passageRead.trim(),
      notes: notes.trim(),
      chaptersCount: Number(chaptersCount) || 1
    };

    setCheckIns(prev => [newCheckIn, ...prev]);
    setPassageRead('');
    setNotes('');
    setShowSuccessToast(true);

    // Gold ember confetti burst on physical Bible check-in milestone
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#D97706', '#FEF08A', '#FFA500'],
        shapes: ['circle', 'square'],
        ticks: 180,
        gravity: 1.1,
        scalar: 1.1
      });
    } catch (err) {
      console.warn('Confetti trigger error:', err);
    }

    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const streakCount = checkIns.length;
  const totalChapters = checkIns.reduce((acc, ci) => acc + (ci.chaptersCount || 1), 0);
  const prayerHoursEst = (checkIns.length * 0.75).toFixed(1);
  const thursdayCount = checkIns.filter(ci => 
    (ci.gatheringType || '').toLowerCase().includes('thursday') || 
    (ci.passageRead || '').toLowerCase().includes('thursday')
  ).length;
  const thursdayPercent = checkIns.length > 0 
    ? Math.min(100, Math.round((thursdayCount / checkIns.length) * 100))
    : 0;

  const handleDeleteCheckIn = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCheckIns(prev => prev.filter(ci => ci.id !== id));
    try {
      fetch(`/api/bible-tracker/logs/${id}`, { method: 'DELETE' });
    } catch {}
  };

  const handleClearAllCheckIns = () => {
    setCheckIns([]);
    try {
      localStorage.removeItem('youngfire_bible_checkins');
    } catch {}
  };

  const BADGES = [
    { id: 'b1', name: 'Sword Carrier', desc: '1st Physical Bible Check-In', min: 1, icon: BookMarked, unlocked: streakCount >= 1 },
    { id: 'b2', name: 'Battle Tested', desc: '3 Check-In Streak', min: 3, icon: Shield, unlocked: streakCount >= 3 },
    { id: 'b3', name: 'Locked In', desc: '7 Check-In Streak', min: 7, icon: Flame, unlocked: streakCount >= 7 },
    { id: 'b4', name: 'Berean Disciple', desc: '10+ Gathering Check-Ins', min: 10, icon: Award, unlocked: streakCount >= 10 },
    { id: 'b5', name: '52-Week Pillar', desc: 'Year-Round Consecration', min: 52, icon: Sparkles, unlocked: streakCount >= 52 },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-5 pb-20 select-none px-2 sm:px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#0B1329] border border-white/15 text-slate-200 hover:text-white cursor-pointer transition-colors"
            aria-label="Back to Sanctuary"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="text-base sm:text-lg font-black uppercase font-['Outfit'] text-white">
              PHYSICAL BIBLE TRACKER & ANALYTICS
            </h2>
            <p className="text-[10px] font-mono text-slate-400">
              Hebrews 4:12 &bull; Weapon of Truth &bull; Discipleship Metric Hub
            </p>
          </div>
        </div>

        {/* View Switcher: Check-In vs Analytics & 66 Books Progress */}
        <div className="flex items-center gap-1.5 flex-wrap self-start sm:self-auto">
          <div className="flex bg-[#0B1329] p-1 rounded-xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveTab('checkin')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                activeTab === 'checkin' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sword Check-In
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer transition-colors flex items-center gap-1 ${
                activeTab === 'analytics' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Analytics Hub</span>
            </button>
          </div>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('yf_open_reading_progress'))}
            className="px-3 py-1.5 rounded-xl cursor-pointer transition-all flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:text-white bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 shadow-sm"
            title="Open 66 Books Discipleship Reading Progress & Ephesian Shield"
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>66 Books & Ephesian Shield</span>
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {showSuccessToast && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-400 rounded-2xl flex items-center gap-2.5 text-emerald-300 text-xs font-mono font-bold animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Physical Sword Checked In! Analytics & streaks synced.</span>
        </div>
      )}

      {/* TAB 1: SWORD CHECK-IN */}
      {activeTab === 'checkin' && (
        <div className="space-y-5">
          {/* Main Check-In Form Card */}
          <div className="bg-[#0B1329] border border-amber-500/30 rounded-3xl p-5 shadow-2xl space-y-4 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                Consecration Check-In Window
              </span>
              <h3 className="text-lg font-bold text-white font-['Outfit']">
                Check In Your Paper Sword
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Log the scripture opened in your physical print Bible during tonight's study or personal devotion.
              </p>
            </div>

            <form onSubmit={handleCheckIn} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Gathering / Session
                  </label>
                  <select
                    value={gatheringType}
                    onChange={(e) => setGatheringType(e.target.value)}
                    className="w-full bg-[#070C1C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Tuesday Small Group Huddle">Tuesday Small Group Huddle</option>
                    <option value="Open Bible Thursdays">Open Bible Thursdays</option>
                    <option value="Sunday Worship Service">Sunday Worship Service</option>
                    <option value="Personal Morning Watch">Personal Morning Watch</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Chapters Read
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={chaptersCount}
                    onChange={(e) => setChaptersCount(Number(e.target.value))}
                    className="w-full bg-[#070C1C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  Passage / Chapter Opened *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ephesians 4:1–16 or Romans 8:28"
                  value={passageRead}
                  onChange={(e) => setPassageRead(e.target.value)}
                  required
                  className="w-full bg-[#070C1C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  Key Rhema / Reflection Note
                </label>
                <textarea
                  rows={2}
                  placeholder="What verse stood out from the physical page?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#070C1C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black uppercase tracking-wider text-xs font-['Outfit'] hover:opacity-95 transition-opacity cursor-pointer shadow-lg shadow-orange-500/20"
              >
                Verify Sword Check-In &rarr;
              </button>
            </form>
          </div>

          {/* Badges Shelf */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold px-1">
              Consecration Milestones
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {BADGES.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.id}
                    className={`p-3 rounded-2xl border transition-all flex items-center gap-3 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${
                      b.unlocked
                        ? 'bg-amber-500/15 border-amber-400/50 text-white'
                        : 'bg-[#0B1329] border-white/5 text-slate-500 opacity-60'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      b.unlocked ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-white/5 text-slate-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold font-['Outfit'] text-white">
                        {b.name}
                      </h5>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Check-Ins Log */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                Recent Check-Ins ({checkIns.length})
              </h4>
              {checkIns.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAllCheckIns}
                  className="text-[10px] font-mono text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
            <div className="space-y-2">
              {checkIns.length === 0 ? (
                <div className="p-6 bg-[#0B1329] border border-white/5 rounded-2xl text-center text-slate-500 font-mono text-xs">
                  No Bible check-ins logged yet. Enter your physical reading above!
                </div>
              ) : (
                checkIns.map((ci) => (
                  <div
                    key={ci.id}
                    className="p-3.5 bg-[#0B1329] border border-white/10 rounded-2xl space-y-1 text-left border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300 font-mono">
                        {ci.passageRead}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400">
                          {ci.date} &bull; {ci.timestamp}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => handleDeleteCheckIn(ci.id, e)}
                          className="p-1 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                          title="Delete this check-in"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400">
                      {ci.gatheringType} ({ci.chaptersCount || 1} chapter)
                    </p>
                    {ci.notes && (
                      <p className="text-xs text-slate-200 font-serif italic pt-1 border-t border-white/5">
                        "{ci.notes}"
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ANALYTICS HUB */}
      {activeTab === 'analytics' && (
        <div className="space-y-5">
          {/* Admin Scope Selector (Visible exclusively to administrators) */}
          {isAdmin && (
            <div className="p-1.5 bg-[#0B1329] border border-amber-500/30 rounded-2xl flex items-center gap-1 shadow-lg">
              <button
                type="button"
                onClick={() => setAnalyticsScope('personal')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                  analyticsScope === 'personal'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>My Personal Analytics</span>
              </button>

              <button
                type="button"
                onClick={() => setAnalyticsScope('admin_community')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                  analyticsScope === 'admin_community'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md'
                    : 'text-amber-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>Admin Community Hub (All Disciples)</span>
              </button>
            </div>
          )}

          {/* ADMIN COMMUNITY SCOPE: DISPLAYS ALL USERS ANALYTICS */}
          {isAdmin && analyticsScope === 'admin_community' ? (
            <div className="space-y-5 animate-fadeIn">
              {/* Church-Wide Headline Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 bg-[#0B1329] border border-amber-500/40 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                    Active Disciples
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {communityUsers.length || 1}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Registered disciples</span>
                </div>

                <div className="p-4 bg-[#0B1329] border border-cyan-500/40 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                    Church Sessions
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {communityLogs.length || communityUsers.reduce((acc, u) => acc + (u.sessionsCount || 0), 0) || checkIns.length}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Physical check-ins</span>
                </div>

                <div className="p-4 bg-[#0B1329] border border-emerald-500/40 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                    Chapters Read
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {communityLogs.reduce((acc, l) => acc + (l.chaptersCount || 1), 0) || totalChapters}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Church-wide verses</span>
                </div>

                <div className="p-4 bg-[#0B1329] border border-orange-500/40 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-orange-400 font-bold block">
                    Consecration
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {Math.min(100, Math.round(((communityUsers.length || 1) * 20)))}%
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Active consistency</span>
                </div>
              </div>

              {/* All Disciples Leaderboard / Reading Roster */}
              <div className="bg-[#0B1329] border border-amber-500/30 rounded-3xl p-5 space-y-4 shadow-2xl border-t border-white/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                      All Users Physical Bible Analytics & Streaks
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    Administrator View
                  </span>
                </div>

                <div className="space-y-2.5">
                  {communityUsers.length === 0 ? (
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 text-center text-xs font-mono text-slate-400">
                      No other user logs detected yet. Logged check-ins across all disciples will stream here in real-time.
                    </div>
                  ) : (
                    communityUsers.map((user, idx) => (
                      <div
                        key={user.userId || idx}
                        className="p-3.5 bg-slate-950/70 border border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300 text-xs">
                            #{idx + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white font-['Outfit']">
                                {user.userName}
                              </span>
                              <span className="text-[10px] font-mono text-amber-400">
                                {user.badgeIcon} {user.milestoneBadge}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">
                              Primary Bible: {user.lastBible || 'Physical KJV / Scripture Journal'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-right">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-mono text-slate-400 block">52-Wk Goal</span>
                            <div className="w-20 sm:w-28 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                                style={{ width: `${Math.min(100, user.percent52Goal || 15)}%` }}
                              />
                            </div>
                          </div>

                          <div className="text-right min-w-[70px]">
                            <span className="text-xs font-bold text-white font-mono block">
                              {user.sessionsCount} Log{user.sessionsCount === 1 ? '' : 's'}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400">
                              {user.streakWeeks || 1} Wk Streak
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Real-Time Church Check-Ins Feed */}
              {communityLogs.length > 0 && (
                <div className="bg-[#0B1329] border border-white/10 rounded-3xl p-5 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Recent Church-Wide Check-In Log Stream ({communityLogs.length})
                  </h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {communityLogs.map((log: any) => (
                      <div
                        key={log.id}
                        className="p-3 bg-slate-950/60 border border-white/5 rounded-xl flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-amber-300 font-mono">{log.userName || 'Disciple'}: </span>
                          <span className="text-slate-200">{log.passageRead || log.gatheringTitle}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">
                          {log.dateString || log.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* PERSONAL ANALYTICS (Visible to regular users or when personal scope is selected) */
            <div className="space-y-5 animate-fadeIn">
              {/* Key Metric Numbers Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 bg-[#0B1329] border border-amber-500/30 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                    Sword Streak
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {streakCount} Wks
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Active consistency</span>
                </div>

                <div className="p-4 bg-[#0B1329] border border-cyan-500/30 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                    Chapters Read
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {totalChapters}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Canonical verses</span>
                </div>

                <div className="p-4 bg-[#0B1329] border border-emerald-500/30 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                    Prayer Time
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {prayerHoursEst} hrs
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Intercession</span>
                </div>

                <div className="p-4 bg-[#0B1329] border border-purple-500/30 rounded-2xl space-y-1 border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block">
                    Fellowships
                  </span>
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    {checkIns.length}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Huddles attended</span>
                </div>
              </div>

              {/* Visual Discipleship Progress Bars */}
              <div className="bg-[#0B1329] border border-white/10 rounded-3xl p-5 space-y-4 shadow-2xl border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
                  Consecration Progress Across Pillars
                </h4>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Physical Bible Mastery</span>
                      <span className="text-amber-400 font-bold">{Math.min(100, Math.round((totalChapters / 20) * 100))}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: `${Math.min(100, Math.round((totalChapters / 20) * 100))}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Small Group Huddle Attendance</span>
                      <span className="text-cyan-400 font-bold">{Math.min(100, streakCount * 15)}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${Math.min(100, streakCount * 15)}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Open Bible Thursdays Participation</span>
                      <span className="text-emerald-400 font-bold">{thursdayPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${thursdayPercent}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Discipleship Goal */}
              <div className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-between border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">52-Week Goal</span>
                  <h5 className="text-xs font-bold text-white">Sword Carrier Milestone: 52 Gathering Check-Ins</h5>
                  <p className="text-[10px] text-slate-400">Consecrated sword in hand for every Joshua House huddle.</p>
                </div>
                <div className="text-sm font-mono font-black text-amber-300">
                  {streakCount} / 52
                </div>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
