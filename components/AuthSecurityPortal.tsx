import React, { useState, useRef } from 'react';
import { 
  Flame, Shield, Lock, Mail, ArrowRight, UserCheck, 
  CheckCircle2, Heart, Upload, Camera, Sparkles, Image as ImageIcon,
  ShieldAlert, Users, Calendar, Music, AlertCircle
} from 'lucide-react';
import { CurrentUser } from './SettingsHUDModal';
import { MINISTRY_ROLES, ADMIN_SECURITY_PASSCODE, getRoleById } from '../data/ministryRoles';
import { authInstance, googleProviderInstance } from '../config';
import { signInWithPopup } from 'firebase/auth';

interface AuthSecurityPortalProps {
  onAuthenticated: (user: CurrentUser) => void;
  onBackToWelcome?: () => void;
}

// Consecrated Avatar Presets for YoungFire Disciples
const AVATAR_PRESETS = [
  { id: 'av_pulpit', label: 'Pulpit Truth', url: '/image_4.png' },
  { id: 'av_commission', label: 'Youth Commission', url: '/image_7.png' },
  { id: 'av_huddle', label: 'Discipleship Huddle', url: '/image_6.png' },
  { id: 'av_fellowship', label: 'Consecrated Fellowship', url: '/image_5.png' },
  { id: 'av_family', label: 'YoungFire Family', url: '/image_3.png' },
  { id: 'av_sisterhood', label: 'Sisterhood & Unity', url: '/image_2.png' }
];

export const AuthSecurityPortal: React.FC<AuthSecurityPortalProps> = ({ onAuthenticated }) => {
  const [authMode, setAuthMode] = useState<'signin' | 'register' | 'forgot'>('signin');
  const [email, setEmail] = useState('trentwhite0308@gmail.com');
  const [password, setPassword] = useState('youngfire2026');
  const [name, setName] = useState('Trent D. White');
  const [birthday, setBirthday] = useState('03-08');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 1. Account Type (Member vs Administrator)
  const [accountType, setAccountType] = useState<'member' | 'administrator'>('member');
  const [adminPasscode, setAdminPasscode] = useState('');

  // 2. Ministry Role (Prayer Warrior, Disciple, Photographer, Event Facilitator, Member, etc.)
  const [selectedMinistryRoleId, setSelectedMinistryRoleId] = useState<string>('disciple');

  // 3. Discipleship Cohort (Brotherhood vs Sisterhood)
  const [selectedCohort, setSelectedCohort] = useState<'brother' | 'sister'>('brother');
  
  // 4. Profile Avatar Upload & Presets
  const [avatarImage, setAvatarImage] = useState<string>(AVATAR_PRESETS[0].url);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedRoleObj = getRoleById(selectedMinistryRoleId);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      if (uploadEvent.target?.result) {
        setAvatarImage(uploadEvent.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const emailLower = email.toLowerCase().trim();
    const isAdminUser = emailLower.includes('trent') || 
                        emailLower.includes('whitney') || 
                        emailLower.includes('admin');

    // Registration validations
    let isElevatedAdmin = false;
    if (authMode === 'register') {
      if (accountType === 'administrator') {
        if (adminPasscode.trim() !== ADMIN_SECURITY_PASSCODE && !isAdminUser) {
          setErrorMessage('Invalid Administrator Security Key. Please verify authorization key with ministry leadership.');
          return;
        }
        isElevatedAdmin = true;
      }
    } else {
      isElevatedAdmin = isAdminUser;
    }
    
    let resolvedGender: 'male' | 'female' = 'male';
    if (emailLower.includes('whitney')) {
      resolvedGender = 'female';
    } else if (authMode === 'register') {
      resolvedGender = selectedCohort === 'brother' ? 'male' : 'female';
    }

    const defaultAvatar = resolvedGender === 'male'
      ? '/image_4.png'
      : '/image_2.png';

    const roleObj = getRoleById(selectedMinistryRoleId);

    const user: CurrentUser = {
      id: `usr-${Date.now()}`,
      name: name.trim() || (isElevatedAdmin ? (emailLower.includes('whitney') ? 'Whitney White' : 'Trent D. White') : 'YoungFire Disciple'),
      email: email.trim(),
      gender: resolvedGender,
      avatar: avatarImage || defaultAvatar,
      isAdmin: isElevatedAdmin,
      accountType: isElevatedAdmin ? 'administrator' : 'member',
      role: roleObj.label,
      ministryRoleId: roleObj.id,
      ministryRoleLabel: roleObj.label,
      calling: roleObj.defaultCalling,
      birthday: birthday.trim() || (isElevatedAdmin ? (emailLower.includes('whitney') ? '06-15' : '03-08') : '09-14')
    };

    // If new registration, sync to roster database and local storage so they appear in Admin CMS & Sanctuary Roster
    if (authMode === 'register') {
      const newRosterDoc = {
        id: user.id,
        fullName: user.name,
        name: user.name,
        role: `${roleObj.label} • ${isElevatedAdmin ? 'Administrator' : 'Member'}`,
        calling: roleObj.defaultCalling,
        group: selectedCohort === 'brother' ? 'Men On Fire' : 'Women Ignited',
        gender: resolvedGender,
        avatar: user.avatar,
        email: user.email,
        birthday: user.birthday,
        churchMembership: 'Joshua House of Worship',
        residence: 'San Antonio, TX',
        accountType: isElevatedAdmin ? 'administrator' : 'member',
        isAdmin: isElevatedAdmin,
        ministryRole: roleObj.label
      };

      try {
        const saved = localStorage.getItem('youngfire_member_roster_v2');
        const list = saved ? JSON.parse(saved) : [];
        list.unshift(newRosterDoc);
        localStorage.setItem('youngfire_member_roster_v2', JSON.stringify(list));
      } catch {}

      fetch('/api/roster', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRosterDoc)
      }).catch(() => {});
    }

    // Persist device session
    try {
      localStorage.setItem('youngfire_device_session_v1', JSON.stringify(user));
      localStorage.setItem('youngfire_user_session', JSON.stringify(user));
    } catch {}

    onAuthenticated(user);
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage('');
    let googleName = '';
    let googleEmail = '';
    let googleAvatar = '';
    let googleUid = '';

    // 1. Try real Firebase Google Authentication Popup
    if (authInstance && googleProviderInstance && typeof signInWithPopup === 'function') {
      try {
        const result = await signInWithPopup(authInstance, googleProviderInstance);
        if (result?.user) {
          googleName = result.user.displayName || '';
          googleEmail = result.user.email || '';
          googleAvatar = result.user.photoURL || '';
          googleUid = result.user.uid;
        }
      } catch (err: any) {
        console.warn('[Firebase Auth] Google popup blocked or cancelled:', err);
      }
    }

    // 2. Fallback if popup cancelled or running in restricted iframe
    if (!googleEmail) {
      if (email.trim()) {
        googleEmail = email.trim();
        googleName = name.trim() || email.split('@')[0].replace(/[._]/g, ' ');
      } else {
        const promptInput = window.prompt("Enter your Google Account email:", "disciple@gmail.com");
        if (!promptInput || !promptInput.trim()) return;
        googleEmail = promptInput.trim();
        googleName = name.trim() || googleEmail.split('@')[0].replace(/[._]/g, ' ');
      }
      googleUid = `google-${Date.now().toString(36)}`;
    }

    const emailLower = googleEmail.toLowerCase();
    const isAdmin = Boolean(
      emailLower.includes('trent') || 
      emailLower.includes('whitney') || 
      emailLower.includes('admin')
    );

    const resolvedGender: 'male' | 'female' = emailLower.includes('whitney') ? 'female' : 'male';
    const roleObj = getRoleById(selectedMinistryRoleId || 'disciple');

    const user: CurrentUser = {
      id: googleUid || `google-${Date.now()}`,
      name: googleName || (isAdmin ? 'YoungFire Facilitator' : 'YoungFire Disciple'),
      email: googleEmail,
      gender: resolvedGender,
      avatar: googleAvatar || (resolvedGender === 'female' ? '/image_2.png' : '/image_4.png'),
      isAdmin,
      accountType: isAdmin ? 'administrator' : 'member',
      role: isAdmin ? 'Lead Facilitator' : roleObj.label,
      ministryRoleId: isAdmin ? 'event_facilitator' : roleObj.id,
      ministryRoleLabel: isAdmin ? 'Lead Facilitator' : roleObj.label,
      calling: isAdmin ? 'Sanctuary Leadership & Overseer' : roleObj.defaultCalling,
      birthday: isAdmin ? (emailLower.includes('whitney') ? '06-15' : '03-08') : '09-14'
    };

    try {
      localStorage.setItem('youngfire_device_session_v1', JSON.stringify(user));
      localStorage.setItem('youngfire_user_session', JSON.stringify(user));
    } catch {}

    onAuthenticated(user);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Password reset instructions sent to your email.');
    setTimeout(() => {
      setMessage('');
      setAuthMode('signin');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#040711] text-white flex flex-col justify-center items-center p-3 sm:p-5 select-none py-8">
      <div className="w-full max-w-lg bg-[#0B1329] border border-amber-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5">
        
        {/* Emblem & Branding */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/30 border border-white/20">
            <Flame className="w-8 h-8 text-slate-950 fill-current" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-[0.2em] font-['Outfit'] text-white">
              YOUNG<span className="text-amber-400">FIRE</span>
            </h1>
            <p className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
              Joshua House of Worship &bull; San Antonio, TX
            </p>
          </div>
        </div>

        {/* Status Toast */}
        {message && (
          <div className="p-3 bg-emerald-500/20 border border-emerald-400 rounded-xl text-emerald-300 text-xs font-mono font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{message}</span>
          </div>
        )}

        {/* Error Toast */}
        {errorMessage && (
          <div className="p-3 bg-rose-500/20 border border-rose-400 rounded-xl text-rose-300 text-xs font-mono font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Tab Toggle: Sign In vs Register */}
        <div className="flex bg-[#070C1C] p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => {
              setAuthMode('signin');
              setErrorMessage('');
            }}
            className={`flex-1 py-2 rounded-lg cursor-pointer transition-colors text-center font-bold ${
              authMode === 'signin' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setAuthMode('register');
              setErrorMessage('');
              setName('');
              setEmail('');
              setPassword('');
              setAdminPasscode('');
            }}
            className={`flex-1 py-2 rounded-lg cursor-pointer transition-colors text-center font-bold ${
              authMode === 'register' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Register Disciple / Admin
          </button>
        </div>

        {/* Sign In / Register Form */}
        {authMode !== 'forgot' ? (
          <form onSubmit={handleSignIn} className="space-y-4">
            {authMode === 'register' && (
              <>
                {/* 1. Full Name */}
                <div>
                  <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jordan Matthews"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-[#070C1C] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* 2. REGISTER AS: MEMBER OR ADMINISTRATOR */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-300 font-bold flex items-center justify-between">
                    <span>Register As (Account Access Level)</span>
                    <span className="text-amber-400 text-[10px]">Required *</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Member Account */}
                    <button
                      type="button"
                      onClick={() => setAccountType('member')}
                      className={`p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                        accountType === 'member'
                          ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400'
                          : 'bg-[#070C1C] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                          accountType === 'member' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/10 text-amber-400'
                        }`}>
                          <Users className="w-4 h-4" />
                        </div>
                        {accountType === 'member' && (
                          <span className="text-[9px] font-mono font-bold text-amber-400 uppercase">Selected</span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-['Outfit']">YoungFire Member</div>
                        <div className="text-[10px] text-slate-400 font-mono">Sanctuary Disciple</div>
                      </div>
                    </button>

                    {/* Administrator Account */}
                    <button
                      type="button"
                      onClick={() => {
                        setAccountType('administrator');
                        setAdminPasscode('');
                      }}
                      className={`p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                        accountType === 'administrator'
                          ? 'bg-gradient-to-tr from-amber-600/30 to-orange-600/30 border-amber-400 shadow-md ring-1 ring-amber-400'
                          : 'bg-[#070C1C] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                          accountType === 'administrator' ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-bold' : 'bg-white/10 text-amber-400'
                        }`}>
                          <ShieldAlert className="w-4 h-4" />
                        </div>
                        {accountType === 'administrator' && (
                          <span className="text-[9px] font-mono font-bold text-amber-400 uppercase">Selected</span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-['Outfit']">Administrator</div>
                        <div className="text-[10px] text-amber-300 font-mono">Leadership & CMS</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Administrator Passcode Gate */}
                {accountType === 'administrator' && (
                  <div className="p-3 bg-amber-950/40 rounded-2xl border border-amber-500/40 space-y-1.5 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-mono text-amber-300 font-bold flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                        <span>Administrator Security Authorization Key</span>
                      </label>
                      <span className="text-[9px] font-mono text-amber-400/90 font-bold">Confidential</span>
                    </div>
                    <input
                      type="password"
                      value={adminPasscode}
                      onChange={(e) => setAdminPasscode(e.target.value)}
                      placeholder="Enter Administrator Authorization Key"
                      className="w-full bg-[#050A18] border border-amber-500/50 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-amber-300"
                    />
                    <p className="text-[10px] font-mono text-slate-300">
                      Unlocks Admin CMS, Theme Controls, Zoom Global Sync, and Ministry Meeting Flyer Broadcasts.
                    </p>
                  </div>
                )}

                {/* 3. SELECT MINISTRY ROLE (Prayer Warrior, Disciple, Photographer, Event Facilitator, Member, etc.) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-mono text-slate-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Select Ministry Role & Calling</span>
                    </label>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      {selectedRoleObj.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                    {MINISTRY_ROLES.map((r) => {
                      const isSelected = selectedMinistryRoleId === r.id;
                      return (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setSelectedMinistryRoleId(r.id)}
                          className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? `${r.badgeBg} ${r.borderColor} ring-1 ring-amber-400 shadow-md`
                              : 'bg-[#070C1C] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className={`text-[10px] font-mono font-bold ${r.badgeText} truncate`}>
                              {r.label}
                            </span>
                            {isSelected && <CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" />}
                          </div>
                          <span className="text-[9px] text-slate-400 line-clamp-2 leading-tight">
                            {r.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Calling Focus Indicator */}
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400 font-bold uppercase flex-shrink-0">Calling:</span>
                    <span className="truncate">{selectedRoleObj.defaultCalling}</span>
                  </div>
                </div>

                {/* 4. DISCIPLESHIP FELLOWSHIP COHORT (Brother vs Sister) */}
                <div>
                  <label className="text-[11px] font-mono text-slate-300 font-bold block mb-1.5 flex items-center justify-between">
                    <span>Discipleship Fellowship Cohort</span>
                    <span className="text-amber-400 text-[10px]">Required *</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Brother Option */}
                    <button
                      type="button"
                      onClick={() => setSelectedCohort('brother')}
                      className={`p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                        selectedCohort === 'brother'
                          ? 'bg-orange-500/20 border-orange-500 shadow-md ring-1 ring-orange-400'
                          : 'bg-[#070C1C] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                          selectedCohort === 'brother' ? 'bg-orange-500 text-slate-950 font-bold' : 'bg-white/10 text-orange-400'
                        }`}>
                          <Shield className="w-4 h-4" />
                        </div>
                        {selectedCohort === 'brother' && (
                          <span className="text-[9px] font-mono font-bold text-orange-400 uppercase">Selected</span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-['Outfit']">Brother</div>
                        <div className="text-[10px] text-slate-400 font-mono">Men On Fire Brotherhood</div>
                      </div>
                    </button>

                    {/* Sister Option */}
                    <button
                      type="button"
                      onClick={() => setSelectedCohort('sister')}
                      className={`p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                        selectedCohort === 'sister'
                          ? 'bg-rose-500/20 border-rose-500 shadow-md ring-1 ring-rose-400'
                          : 'bg-[#070C1C] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                          selectedCohort === 'sister' ? 'bg-rose-500 text-slate-950 font-bold' : 'bg-white/10 text-rose-400'
                        }`}>
                          <Heart className="w-4 h-4" />
                        </div>
                        {selectedCohort === 'sister' && (
                          <span className="text-[9px] font-mono font-bold text-rose-400 uppercase">Selected</span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-['Outfit']">Sister</div>
                        <div className="text-[10px] text-slate-400 font-mono">Women Ignited Sisterhood</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 5. PROFILE AVATAR UPLOAD & SELECTION */}
                <div className="p-3 bg-slate-950/60 rounded-2xl border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-mono text-slate-300 font-bold flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-amber-400" />
                      <span>Profile Avatar</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[10px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Upload Photo</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={avatarImage}
                        alt="Profile Preview"
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-400/80 shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 rounded-full p-0.5">
                        <Sparkles className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <span className="text-[9px] font-mono text-slate-400 block mb-1">Or select consecrated icon:</span>
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                        {AVATAR_PRESETS.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setAvatarImage(p.url)}
                            className={`w-7 h-7 rounded-xl overflow-hidden border transition-all flex-shrink-0 cursor-pointer ${
                              avatarImage === p.url ? 'border-amber-400 scale-110 ring-1 ring-amber-400' : 'border-white/20 opacity-70 hover:opacity-100'
                            }`}
                            title={p.label}
                          >
                            <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. BIRTHDAY (MM-DD) FOR CALENDAR CELEBRATIONS */}
                <div className="p-3 bg-slate-950/60 rounded-2xl border border-white/10 space-y-1">
                  <label className="text-[11px] font-mono text-slate-300 font-bold flex items-center gap-1.5">
                    <span>🎂</span>
                    <span>Birthday (MM-DD for Sanctuary Calendar)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="09-14"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    maxLength={5}
                    className="w-full bg-[#070C1C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                  <p className="text-[10px] text-slate-400 font-mono">
                    Format: MM-DD (e.g. 03-08, 09-14) for birthday cake markers on the sanctuary calendar.
                  </p>
                </div>
              </>
            )}

            <div>
              <label className="text-[11px] font-mono text-slate-400 block mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  placeholder="disciple@jhow.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#070C1C] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-mono text-slate-400">Password</label>
                <button
                  type="button"
                  onClick={() => setAuthMode('forgot')}
                  className="text-[10px] font-mono text-amber-400 hover:underline cursor-pointer"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#070C1C] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black uppercase tracking-wider text-xs font-['Outfit'] hover:opacity-95 transition-opacity cursor-pointer shadow-lg shadow-orange-500/20"
            >
              {authMode === 'signin' 
                ? 'Enter Sanctuary →' 
                : accountType === 'administrator'
                  ? 'Complete Administrator Registration →'
                  : 'Complete Disciple Registration →'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div>
              <label className="text-[11px] font-mono text-slate-400 block mb-1">Account Email</label>
              <input
                type="email"
                placeholder="disciple@jhow.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#070C1C] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer"
            >
              Send Password Reset
            </button>
            <button
              type="button"
              onClick={() => setAuthMode('signin')}
              className="w-full text-center text-xs font-mono text-slate-400 hover:text-white"
            >
              Back to Sign In
            </button>
          </form>
        )}

        {/* Official Google-Themed Sign In Button */}
        <div className="pt-2 border-t border-white/10 space-y-3">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-sans font-medium text-xs sm:text-sm border border-slate-300 shadow-md flex items-center justify-center gap-3 cursor-pointer transition-all active:scale-[0.99]"
          >
            {/* Official Google 4-Color SVG Icon */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span className="font-semibold text-slate-800 tracking-normal">Continue with Google</span>
          </button>
          <p className="text-[10px] text-center text-slate-400 font-mono">
            Joshua House of Worship YoungFire Sanctuary Protocol
          </p>
        </div>

      </div>
    </div>
  );
};
