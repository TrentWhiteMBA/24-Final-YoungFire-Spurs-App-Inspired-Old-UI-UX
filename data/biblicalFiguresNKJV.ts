/**
 * YoungFire Comprehensive Biblical Figures Directory (NKJV)
 * Exhaustive database of biblical names and figures with NKJV Scripture citations,
 * historical covenant eras, Hebrew/Greek name meanings, and geo-coordinates for the Imperial Atlas.
 */

export interface BiblicalFigure {
  id: string;
  name: string;
  aliases?: string[];
  testament: 'OT' | 'NT';
  era: string;
  meaning: string;
  primaryScripture: string;
  allScriptures: string[];
  role: string;
  description: string;
  locationName: string;
  coords: [number, number];
  bookId: string;
  chapter: number;
}

export const BIBLICAL_FIGURES_NKJV: BiblicalFigure[] = [
  {
    "id": "adam",
    "name": "Adam",
    "aliases": [
      "First Man",
      "Son of God"
    ],
    "testament": "OT",
    "era": "Creation & Antediluvian",
    "meaning": "Man, formed from red earth (Hebrew: אָדָם)",
    "primaryScripture": "Genesis 2:7 (NKJV)",
    "allScriptures": [
      "Genesis 1:26–28",
      "Genesis 2:7–25",
      "Genesis 3:1–24",
      "Romans 5:14",
      "1 Corinthians 15:22, 45"
    ],
    "role": "First Human Being & Federal Head",
    "description": "Created directly by God from the dust of the ground. Given dominion over Eden, husband of Eve, father of Cain, Abel, and Seth. Lived 930 years.",
    "locationName": "Garden of Eden (Tigris-Euphrates River Valley)",
    "coords": [
      31,
      47.4
    ],
    "bookId": "GEN",
    "chapter": 2
  },
  {
    "id": "eve",
    "name": "Eve",
    "aliases": [
      "Mother of All Living",
      "Hawwah"
    ],
    "testament": "OT",
    "era": "Creation & Antediluvian",
    "meaning": "Living, Life-Giver (Hebrew: חַוָּה)",
    "primaryScripture": "Genesis 3:20 (NKJV)",
    "allScriptures": [
      "Genesis 2:18–25",
      "Genesis 3:1–20",
      "Genesis 4:1–2",
      "2 Corinthians 11:3",
      "1 Timothy 2:13"
    ],
    "role": "First Woman & Mother of all Living",
    "description": "Fashioned by the Lord God from Adam’s rib to be a companion corresponding to him. Mother of Cain, Abel, and Seth, through whose seed the Messiah was promised (Genesis 3:15).",
    "locationName": "Garden of Eden",
    "coords": [
      31.02,
      47.45
    ],
    "bookId": "GEN",
    "chapter": 3
  },
  {
    "id": "abel",
    "name": "Abel",
    "aliases": [
      "Righteous Abel"
    ],
    "testament": "OT",
    "era": "Antediluvian Era",
    "meaning": "Breath, Vapor (Hebrew: הֶבֶל)",
    "primaryScripture": "Genesis 4:4 (NKJV)",
    "allScriptures": [
      "Genesis 4:1–10",
      "Matthew 23:35",
      "Hebrews 11:4",
      "Hebrews 12:24"
    ],
    "role": "First Shepherd & Righteous Martyr",
    "description": "Second son of Adam and Eve who offered to God the firstborn of his flock and their fat, an acceptable sacrifice offered by faith.",
    "locationName": "Outskirts of Eden",
    "coords": [
      31.1,
      47.3
    ],
    "bookId": "GEN",
    "chapter": 4
  },
  {
    "id": "cain",
    "name": "Cain",
    "aliases": [
      "Firstborn of Adam"
    ],
    "testament": "OT",
    "era": "Antediluvian Era",
    "meaning": "Acquired, Possessed (Hebrew: קַיִן)",
    "primaryScripture": "Genesis 4:1–16 (NKJV)",
    "allScriptures": [
      "Genesis 4:1–17",
      "Hebrews 11:4",
      "1 John 3:12",
      "Jude 1:11"
    ],
    "role": "Tiller of Ground & Builder of First City",
    "description": "First child born to Adam and Eve. Murdered his brother Abel out of jealousy and dwelt in the Land of Nod east of Eden.",
    "locationName": "Land of Nod (East of Eden)",
    "coords": [
      31.5,
      48.2
    ],
    "bookId": "GEN",
    "chapter": 4
  },
  {
    "id": "seth",
    "name": "Seth",
    "aliases": [
      "Appointed Seed"
    ],
    "testament": "OT",
    "era": "Antediluvian Era",
    "meaning": "Appointed, Substituted (Hebrew: שֵׁת)",
    "primaryScripture": "Genesis 4:25 (NKJV)",
    "allScriptures": [
      "Genesis 4:25–26",
      "Genesis 5:3–8",
      "Luke 3:38"
    ],
    "role": "Patriarch of the Godly Line of Faith",
    "description": "Third named son of Adam and Eve, granted in place of Abel. In his days, men began to call upon the name of the Lord.",
    "locationName": "Southern Mesopotamia",
    "coords": [
      31.2,
      47.1
    ],
    "bookId": "GEN",
    "chapter": 4
  },
  {
    "id": "enoch",
    "name": "Enoch",
    "aliases": [
      "Prophet who Walked with God"
    ],
    "testament": "OT",
    "era": "Antediluvian Era",
    "meaning": "Dedicated, Consecrated (Hebrew: חֲנוֹךְ)",
    "primaryScripture": "Genesis 5:24 (NKJV)",
    "allScriptures": [
      "Genesis 5:18–24",
      "Luke 3:37",
      "Hebrews 11:5",
      "Jude 1:14–15"
    ],
    "role": "Seventh from Adam & Translated Prophet",
    "description": "Walked in unbroken fellowship with God for 300 years and was taken up without experiencing physical death.",
    "locationName": "Mesopotamia",
    "coords": [
      32,
      45
    ],
    "bookId": "GEN",
    "chapter": 5
  },
  {
    "id": "methuselah",
    "name": "Methuselah",
    "aliases": [
      "Longest-Living Human"
    ],
    "testament": "OT",
    "era": "Antediluvian Era",
    "meaning": "When he dies it shall be sent (Hebrew: מְתוּשֶׁלַח)",
    "primaryScripture": "Genesis 5:27 (NKJV)",
    "allScriptures": [
      "Genesis 5:21–27",
      "1 Chronicles 1:3",
      "Luke 3:37"
    ],
    "role": "Patriarch of Longevity",
    "description": "Son of Enoch and grandfather of Noah. Lived 969 years, the longest recorded lifespan in human history, dying the year of the Great Deluge.",
    "locationName": "Southern Mesopotamia",
    "coords": [
      31.8,
      45.5
    ],
    "bookId": "GEN",
    "chapter": 5
  },
  {
    "id": "noah",
    "name": "Noah",
    "aliases": [
      "Preacher of Righteousness",
      "Builder of the Ark"
    ],
    "testament": "OT",
    "era": "The Deluge & Post-Flood Covenant",
    "meaning": "Rest, Comfort (Hebrew: נֹחַ)",
    "primaryScripture": "Genesis 6:8–9 (NKJV)",
    "allScriptures": [
      "Genesis 6:1–22",
      "Genesis 7:1–24",
      "Genesis 8:1–22",
      "Genesis 9:1–29",
      "Hebrews 11:7",
      "1 Peter 3:20",
      "2 Peter 2:5"
    ],
    "role": "Righteous Ark Builder & Covenant Pioneer",
    "description": "Found grace in the eyes of the Lord. Built the Ark to the saving of his household amidst a corrupt generation. Established God’s rainbow covenant.",
    "locationName": "Mount Ararat (Eastern Anatolia / Armenia)",
    "coords": [
      39.7025,
      44.2991
    ],
    "bookId": "GEN",
    "chapter": 6
  },
  {
    "id": "shem",
    "name": "Shem",
    "aliases": [
      "Father of the Semites"
    ],
    "testament": "OT",
    "era": "Post-Flood Patriarchs",
    "meaning": "Name, Renown (Hebrew: שֵׁם)",
    "primaryScripture": "Genesis 9:26 (NKJV)",
    "allScriptures": [
      "Genesis 5:32",
      "Genesis 9:18–27",
      "Genesis 10:21–31",
      "Luke 3:36"
    ],
    "role": "Patriarch of the Messianic Line",
    "description": "Eldest son of Noah, blessed by his father. Ancestor of Abraham and the Semitic lineage through which Christ arrived.",
    "locationName": "Mesopotamia / Near East",
    "coords": [
      33.5,
      44
    ],
    "bookId": "GEN",
    "chapter": 9
  },
  {
    "id": "ham",
    "name": "Ham",
    "aliases": [
      "Son of Noah"
    ],
    "testament": "OT",
    "era": "Post-Flood Patriarchs",
    "meaning": "Hot, Warm (Hebrew: חָם)",
    "primaryScripture": "Genesis 9:22 (NKJV)",
    "allScriptures": [
      "Genesis 9:18–27",
      "Genesis 10:6–20",
      "1 Chronicles 1:8"
    ],
    "role": "Father of Canaan, Cush, Mizraim, and Phut",
    "description": "Son of Noah whose descendants populated Northeast Africa, Egypt (Land of Ham), and Canaan.",
    "locationName": "Egypt & Africa",
    "coords": [
      30.0444,
      31.2357
    ],
    "bookId": "GEN",
    "chapter": 9
  },
  {
    "id": "japheth",
    "name": "Japheth",
    "aliases": [
      "Son of Noah"
    ],
    "testament": "OT",
    "era": "Post-Flood Patriarchs",
    "meaning": "Enlarged, Fair (Hebrew: יֶפֶת)",
    "primaryScripture": "Genesis 9:27 (NKJV)",
    "allScriptures": [
      "Genesis 9:18–27",
      "Genesis 10:2–5",
      "1 Chronicles 1:5"
    ],
    "role": "Patriarch of Maritime & Coastland Nations",
    "description": "Son of Noah blessed that God would enlarge him and that he would dwell in the tents of Shem.",
    "locationName": "Coastlands of the Mediterranean & Asia Minor",
    "coords": [
      38,
      30
    ],
    "bookId": "GEN",
    "chapter": 9
  },
  {
    "id": "nimrod",
    "name": "Nimrod",
    "aliases": [
      "Mighty Hunter Before the Lord"
    ],
    "testament": "OT",
    "era": "Tower of Babel Era",
    "meaning": "We Shall Rebel (Hebrew: נִמְרוֹד)",
    "primaryScripture": "Genesis 10:8–10 (NKJV)",
    "allScriptures": [
      "Genesis 10:8–12",
      "1 Chronicles 1:10",
      "Micah 5:6"
    ],
    "role": "Founder of Babel & Assyrian Imperial Power",
    "description": "Son of Cush who established the first world empire encompassing Babel, Erech, Accad, Calneh in Shinar, and Nineveh.",
    "locationName": "Babel / Shinar (Mesopotamia)",
    "coords": [
      32.5364,
      44.4208
    ],
    "bookId": "GEN",
    "chapter": 10
  },
  {
    "id": "terah",
    "name": "Terah",
    "aliases": [
      "Father of Abraham"
    ],
    "testament": "OT",
    "era": "Patriarchal Beginnings",
    "meaning": "Station, Delay (Hebrew: תֶּרַח)",
    "primaryScripture": "Genesis 11:26–32 (NKJV)",
    "allScriptures": [
      "Genesis 11:24–32",
      "Joshua 24:2",
      "1 Chronicles 1:26"
    ],
    "role": "Father of Abram, Nahor, and Haran",
    "description": "Led his family out of Ur of the Chaldeans to go to Canaan, settling in Haran where he died at 205 years.",
    "locationName": "Haran (Upper Mesopotamia)",
    "coords": [
      36.8647,
      39.0272
    ],
    "bookId": "GEN",
    "chapter": 11
  },
  {
    "id": "abraham",
    "name": "Abraham",
    "aliases": [
      "Abram",
      "Friend of God",
      "Father of the Faithful"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Father of a Multitude of Nations (Hebrew: אַבְרָהָם)",
    "primaryScripture": "Genesis 12:1–3 (NKJV)",
    "allScriptures": [
      "Genesis 12:1–20",
      "Genesis 15:1–21",
      "Genesis 17:1–27",
      "Genesis 22:1–19",
      "Romans 4:1–25",
      "Galatians 3:6–9",
      "Hebrews 11:8–19"
    ],
    "role": "Patriarch of the Abrahamic Covenant",
    "description": "Called by God from Ur of the Chaldeans to inherit Canaan. Exhibited unwavering faith, offering Isaac upon Mount Moriah. God swore by Himself to bless all families of the earth through his seed.",
    "locationName": "Hebron (Oak of Mamre) & Mount Moriah",
    "coords": [
      31.5293,
      35.0938
    ],
    "bookId": "GEN",
    "chapter": 12
  },
  {
    "id": "sarah",
    "name": "Sarah",
    "aliases": [
      "Sarai",
      "Mother of Nations"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Princess, Noblewoman (Hebrew: שָׂרָה)",
    "primaryScripture": "Genesis 17:15–16 (NKJV)",
    "allScriptures": [
      "Genesis 12:10–20",
      "Genesis 18:9–15",
      "Genesis 21:1–7",
      "Hebrews 11:11",
      "1 Peter 3:6"
    ],
    "role": "Matriarch of the Promised Covenant Child",
    "description": "Wife of Abraham who bore Isaac at 90 years of age according to the miraculous divine promise. Buried in the cave of Machpelah.",
    "locationName": "Hebron (Cave of Machpelah)",
    "coords": [
      31.5247,
      35.1107
    ],
    "bookId": "GEN",
    "chapter": 17
  },
  {
    "id": "hagar",
    "name": "Hagar",
    "aliases": [
      "Handmaid of Sarah"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Flight, Stranger (Hebrew: הָגָר)",
    "primaryScripture": "Genesis 16:13 (NKJV)",
    "allScriptures": [
      "Genesis 16:1–16",
      "Genesis 21:9–21",
      "Galatians 4:21–31"
    ],
    "role": "Mother of Ishmael",
    "description": "Egyptian maidservant who encountered the Angel of the Lord at Beer Lahai Roi, giving God the name El Roi (\"You-Are-the-God-Who-Sees\").",
    "locationName": "Beer Lahai Roi (Wilderness of Shur)",
    "coords": [
      30.9,
      34.4
    ],
    "bookId": "GEN",
    "chapter": 16
  },
  {
    "id": "ishmael",
    "name": "Ishmael",
    "aliases": [
      "Firstborn of Abraham"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "God Will Hear (Hebrew: יִשְׁמָעֵאל)",
    "primaryScripture": "Genesis 16:11 (NKJV)",
    "allScriptures": [
      "Genesis 16:11–16",
      "Genesis 17:20",
      "Genesis 21:13–21",
      "Genesis 25:12–18"
    ],
    "role": "Father of Twelve Princes & Nomadic Tribes",
    "description": "Son of Abraham and Hagar. Lived in the Wilderness of Paran as an archer; God promised he would father twelve rulers.",
    "locationName": "Wilderness of Paran",
    "coords": [
      30.1,
      34.2
    ],
    "bookId": "GEN",
    "chapter": 16
  },
  {
    "id": "melchizedek",
    "name": "Melchizedek",
    "aliases": [
      "King of Salem",
      "Priest of the Most High God"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "King of Righteousness (Hebrew: מַלְכִּי־צֶדֶק)",
    "primaryScripture": "Genesis 14:18–20 (NKJV)",
    "allScriptures": [
      "Genesis 14:18–20",
      "Psalm 110:4",
      "Hebrews 5:6–10",
      "Hebrews 7:1–17"
    ],
    "role": "Royal Priest Prefiguring the Priesthood of Christ",
    "description": "King of Salem who brought out bread and wine to Abram after the victory over Chedorlaomer and blessed him. Received tithes from Abraham.",
    "locationName": "Salem (Ancient Jerusalem)",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "GEN",
    "chapter": 14
  },
  {
    "id": "lot",
    "name": "Lot",
    "aliases": [
      "Nephew of Abraham"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Veil, Covering (Hebrew: לוֹט)",
    "primaryScripture": "Genesis 19:15–16 (NKJV)",
    "allScriptures": [
      "Genesis 13:5–13",
      "Genesis 14:11–16",
      "Genesis 19:1–38",
      "Luke 17:28–32",
      "2 Peter 2:7–8"
    ],
    "role": "Patriarch of Moab and Ammon",
    "description": "Accompanied Abraham to Canaan, pitched his tent toward Sodom, and was delivered by angels before the city was destroyed with fire and brimstone.",
    "locationName": "Sodom & Zoar (Dead Sea Plain)",
    "coords": [
      31.1,
      35.4
    ],
    "bookId": "GEN",
    "chapter": 13
  },
  {
    "id": "isaac",
    "name": "Isaac",
    "aliases": [
      "Child of Promise"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Laughter (Hebrew: יִצְחָק)",
    "primaryScripture": "Genesis 21:1–3 (NKJV)",
    "allScriptures": [
      "Genesis 21:1–8",
      "Genesis 22:1–14",
      "Genesis 24:62–67",
      "Genesis 26:1–33",
      "Hebrews 11:20"
    ],
    "role": "Patriarch of the Covenant Line",
    "description": "Only son of Abraham and Sarah through whom the seed was named. Submissively carried the wood up Mount Moriah. Dug again the wells of Abraham.",
    "locationName": "Beersheba & Gerar",
    "coords": [
      31.2456,
      34.7925
    ],
    "bookId": "GEN",
    "chapter": 21
  },
  {
    "id": "rebekah",
    "name": "Rebekah",
    "aliases": [
      "Wife of Isaac"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Ensnarer, Tied Firmly (Hebrew: רִבְקָה)",
    "primaryScripture": "Genesis 24:60 (NKJV)",
    "allScriptures": [
      "Genesis 24:15–67",
      "Genesis 25:21–28",
      "Genesis 27:5–17",
      "Romans 9:10"
    ],
    "role": "Matriarch & Mother of Jacob and Esau",
    "description": "Daughter of Bethuel chosen by God at the well of Nahor for Isaac. Received divine revelation regarding the two nations in her womb.",
    "locationName": "Hebron & Beersheba",
    "coords": [
      31.25,
      34.8
    ],
    "bookId": "GEN",
    "chapter": 24
  },
  {
    "id": "esau",
    "name": "Esau",
    "aliases": [
      "Edom"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Hairy, Rough (Hebrew: עֵשָׂו)",
    "primaryScripture": "Genesis 25:25–34 (NKJV)",
    "allScriptures": [
      "Genesis 25:25–34",
      "Genesis 27:30–40",
      "Genesis 32:3–8",
      "Genesis 33:1–16",
      "Hebrews 12:16"
    ],
    "role": "Firstborn of Isaac & Father of Edomites",
    "description": "Cunning hunter who sold his birthright to Jacob for a bowl of red stew. Later reconciled with Jacob and settled in Mount Seir.",
    "locationName": "Mount Seir (Edom / Petra)",
    "coords": [
      30.3285,
      35.4444
    ],
    "bookId": "GEN",
    "chapter": 25
  },
  {
    "id": "jacob",
    "name": "Jacob",
    "aliases": [
      "Israel",
      "The Supplanter"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "He Who Grasps the Heel / Prince with God (Hebrew: יַעֲקֹב / יִשְׂרָאֵל)",
    "primaryScripture": "Genesis 32:28 (NKJV)",
    "allScriptures": [
      "Genesis 25:26–34",
      "Genesis 28:10–22",
      "Genesis 32:22–32",
      "Genesis 35:9–15",
      "Genesis 49:1–33",
      "Romans 9:13"
    ],
    "role": "Patriarch of the Twelve Tribes of Israel",
    "description": "Son of Isaac and Rebekah who beheld the ladder of angels at Bethel. Wrestled with God at Penuel, receiving the name Israel. Father of the twelve tribes.",
    "locationName": "Bethel & Penuel (Jabbok River)",
    "coords": [
      32.1963,
      35.7003
    ],
    "bookId": "GEN",
    "chapter": 28
  },
  {
    "id": "leah",
    "name": "Leah",
    "aliases": [
      "First Wife of Jacob"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Weary, Delicate (Hebrew: לֵאָה)",
    "primaryScripture": "Genesis 29:31–35 (NKJV)",
    "allScriptures": [
      "Genesis 29:16–35",
      "Genesis 30:1–21",
      "Genesis 31:4–16",
      "Ruth 4:11"
    ],
    "role": "Mother of Six Tribes (Reuben, Simeon, Levi, Judah, Issachar, Zebulun)",
    "description": "Elder daughter of Laban whose unloved condition moved the Lord to open her womb, giving birth to Judah (the royal line) and Levi (the priestly line).",
    "locationName": "Paddan Aram & Hebron",
    "coords": [
      31.5293,
      35.0938
    ],
    "bookId": "GEN",
    "chapter": 29
  },
  {
    "id": "rachel",
    "name": "Rachel",
    "aliases": [
      "Beloved Wife of Jacob"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Ewe, Gentle Lamb (Hebrew: רָחֵל)",
    "primaryScripture": "Genesis 29:17–18 (NKJV)",
    "allScriptures": [
      "Genesis 29:6–30",
      "Genesis 30:1–24",
      "Genesis 35:16–20",
      "Jeremiah 31:15",
      "Matthew 2:18"
    ],
    "role": "Mother of Joseph and Benjamin",
    "description": "Younger daughter of Laban, beloved by Jacob who served fourteen years for her. Died giving birth to Benjamin near Bethlehem, where her tomb stands.",
    "locationName": "Ephrath (Bethlehem)",
    "coords": [
      31.7054,
      35.2024
    ],
    "bookId": "GEN",
    "chapter": 29
  },
  {
    "id": "judah",
    "name": "Judah",
    "aliases": [
      "Lion of Judah"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Praise, Celebrated (Hebrew: יְהוּדָה)",
    "primaryScripture": "Genesis 49:8–10 (NKJV)",
    "allScriptures": [
      "Genesis 29:35",
      "Genesis 37:26–27",
      "Genesis 38:1–30",
      "Genesis 44:18–34",
      "Genesis 49:8–12",
      "Hebrews 7:14",
      "Revelation 5:5"
    ],
    "role": "Patriarch of the Royal Scepter Line & Kings of Israel",
    "description": "Fourth son of Jacob and Leah. Offered himself as surety for Benjamin before Joseph in Egypt. Jacob prophesied the scepter would not depart from Judah until Shiloh comes.",
    "locationName": "Hebron & Goshen",
    "coords": [
      31.53,
      35.09
    ],
    "bookId": "GEN",
    "chapter": 29
  },
  {
    "id": "joseph",
    "name": "Joseph",
    "aliases": [
      "Zaphenath-Paneah",
      "Dreamer",
      "Governor of Egypt"
    ],
    "testament": "OT",
    "era": "Patriarchal / Egyptian Sojourn",
    "meaning": "May He Add / God Shall Enlarge (Hebrew: יוֹסֵף)",
    "primaryScripture": "Genesis 50:20 (NKJV)",
    "allScriptures": [
      "Genesis 37:1–36",
      "Genesis 39:1–23",
      "Genesis 41:1–57",
      "Genesis 45:1–28",
      "Genesis 50:15–26",
      "Hebrews 11:22"
    ],
    "role": "Deliverer of Israel & Prime Minister of Egypt",
    "description": "Favored son of Jacob who received the coat of many colors. Sold into slavery, preserved through Potiphar’s house and prison, and elevated to second-in-command over Egypt to preserve life.",
    "locationName": "Memphis / Avaris (Land of Goshen, Egypt)",
    "coords": [
      30.7865,
      31.8315
    ],
    "bookId": "GEN",
    "chapter": 37
  },
  {
    "id": "benjamin",
    "name": "Benjamin",
    "aliases": [
      "Son of the Right Hand"
    ],
    "testament": "OT",
    "era": "Patriarchal Era",
    "meaning": "Son of My Right Hand (Hebrew: בִּנְיָמִין)",
    "primaryScripture": "Genesis 35:18 (NKJV)",
    "allScriptures": [
      "Genesis 35:16–20",
      "Genesis 42:1–38",
      "Genesis 44:1–34",
      "Genesis 49:27",
      "Philippians 3:5"
    ],
    "role": "Youngest Son of Jacob & Patriarch of Benjamin",
    "description": "Second son of Rachel, born on the way to Ephrath. His tribe produced King Saul and the Apostle Paul.",
    "locationName": "Bethlehem / Jerusalem area",
    "coords": [
      31.72,
      35.21
    ],
    "bookId": "GEN",
    "chapter": 35
  },
  {
    "id": "moses",
    "name": "Moses",
    "aliases": [
      "Lawgiver",
      "Servant of the Lord",
      "Man of God"
    ],
    "testament": "OT",
    "era": "Exodus & Wilderness Wanderings",
    "meaning": "Drawn from Water (Hebrew: מֹשֶׁה)",
    "primaryScripture": "Exodus 3:14 (NKJV)",
    "allScriptures": [
      "Exodus 2:1–25",
      "Exodus 3:1–22",
      "Exodus 14:1–31",
      "Exodus 20:1–17",
      "Deuteronomy 34:1–12",
      "Hebrews 11:23–29"
    ],
    "role": "Prophet, Lawgiver & Deliverer of Israel",
    "description": "Raised in Pharaoh’s palace, fled to Midian, encountered the burning bush. Led Israel out of Egypt through the Red Sea and delivered the Ten Commandments atop Mount Sinai.",
    "locationName": "Mount Sinai (Horeb) & Mount Nebo",
    "coords": [
      28.5392,
      33.975
    ],
    "bookId": "EXO",
    "chapter": 3
  },
  {
    "id": "aaron",
    "name": "Aaron",
    "aliases": [
      "First High Priest of Israel"
    ],
    "testament": "OT",
    "era": "Exodus Era",
    "meaning": "Exalted, Mountain of Strength (Hebrew: אַהֲרֹן)",
    "primaryScripture": "Exodus 28:1–3 (NKJV)",
    "allScriptures": [
      "Exodus 4:14–16",
      "Exodus 7:1–2",
      "Exodus 28:1–43",
      "Leviticus 8:1–36",
      "Numbers 17:1–11",
      "Hebrews 5:4"
    ],
    "role": "First High Priest of the Levitical Order",
    "description": "Brother and spokesman of Moses. Consecrated with holy garments and the breastplate with Urim and Thummim. His rod budded to confirm his divine priesthood.",
    "locationName": "Mount Hor (Wilderness of Zin)",
    "coords": [
      30.3167,
      35.4
    ],
    "bookId": "EXO",
    "chapter": 4
  },
  {
    "id": "miriam",
    "name": "Miriam",
    "aliases": [
      "Miriam the Prophetess"
    ],
    "testament": "OT",
    "era": "Exodus Era",
    "meaning": "Rebellion, Bitter (Hebrew: מִרְיָם)",
    "primaryScripture": "Exodus 15:20–21 (NKJV)",
    "allScriptures": [
      "Exodus 2:4–8",
      "Exodus 15:20–21",
      "Numbers 12:1–15",
      "Micah 6:4"
    ],
    "role": "Prophetess & Leader of Worship at Red Sea",
    "description": "Sister of Moses and Aaron who watched over Moses in the Nile and led the daughters of Israel with timbrels and dancing after the crossing of the Red Sea.",
    "locationName": "Kadesh Barnea",
    "coords": [
      30.65,
      34.4167
    ],
    "bookId": "EXO",
    "chapter": 15
  },
  {
    "id": "joshua",
    "name": "Joshua",
    "aliases": [
      "Joshua Son of Nun",
      "Hoshea"
    ],
    "testament": "OT",
    "era": "Conquest of Canaan",
    "meaning": "The Lord is Salvation (Hebrew: יְהוֹשֻׁעַ)",
    "primaryScripture": "Joshua 1:9 (NKJV)",
    "allScriptures": [
      "Exodus 17:8–16",
      "Numbers 14:6–9",
      "Joshua 1:1–9",
      "Joshua 6:1–27",
      "Joshua 24:14–15"
    ],
    "role": "Commander of Israel & Conqueror of Canaan",
    "description": "Minister to Moses, one of twelve spies with Caleb who gave a good report. Led Israel across the Jordan, brought down the walls of Jericho, and settled the twelve tribes.",
    "locationName": "Jericho & Timnath Serah",
    "coords": [
      31.8708,
      35.4439
    ],
    "bookId": "JOS",
    "chapter": 1
  },
  {
    "id": "caleb",
    "name": "Caleb",
    "aliases": [
      "Caleb Son of Jephunneh"
    ],
    "testament": "OT",
    "era": "Conquest Era",
    "meaning": "Faithful, Whole-Hearted (Hebrew: כָּלֵב)",
    "primaryScripture": "Joshua 14:10–12 (NKJV)",
    "allScriptures": [
      "Numbers 13:30",
      "Numbers 14:24",
      "Joshua 14:6–14",
      "Joshua 15:13–19"
    ],
    "role": "Heroic Spy who Wholly Followed the Lord",
    "description": "Demonstrated exceptional courage saying: \"Let us go up at once and possess it.\" At 85 years of age, he boldly claimed: \"Give me this mountain (Hebron)!\" and conquered the Anakim.",
    "locationName": "Hebron (Kirjath Arba)",
    "coords": [
      31.5293,
      35.0938
    ],
    "bookId": "JOS",
    "chapter": 14
  },
  {
    "id": "rahab",
    "name": "Rahab",
    "aliases": [
      "Rahab of Jericho"
    ],
    "testament": "OT",
    "era": "Conquest Era",
    "meaning": "Spacious, Broad (Hebrew: רָחָב)",
    "primaryScripture": "Joshua 2:9–11 (NKJV)",
    "allScriptures": [
      "Joshua 2:1–21",
      "Joshua 6:22–25",
      "Matthew 1:5",
      "Hebrews 11:31",
      "James 2:25"
    ],
    "role": "Heroine of Faith & Ancestress of David and Jesus",
    "description": "Hid the two Hebrew spies in Jericho, declaring that the Lord God is God in heaven and earth. Bound the scarlet cord in her window for deliverance.",
    "locationName": "Jericho (Tell es-Sultan)",
    "coords": [
      31.8708,
      35.4439
    ],
    "bookId": "JOS",
    "chapter": 2
  },
  {
    "id": "deborah",
    "name": "Deborah",
    "aliases": [
      "Mother in Israel",
      "Prophetess of Lapidoth"
    ],
    "testament": "OT",
    "era": "Period of the Judges",
    "meaning": "Bee (Hebrew: דְּבוֹרָה)",
    "primaryScripture": "Judges 4:4–9 (NKJV)",
    "allScriptures": [
      "Judges 4:1–24",
      "Judges 5:1–31"
    ],
    "role": "Judge, Prophetess & Military Deliverer",
    "description": "Judged Israel under the Palm Tree of Deborah between Ramah and Bethel. Commissioned Barak and joined him to overthrow Sisera’s chariots at Mount Tabor.",
    "locationName": "Mount Tabor & Kedesh",
    "coords": [
      32.6868,
      35.3892
    ],
    "bookId": "JDG",
    "chapter": 4
  },
  {
    "id": "gideon",
    "name": "Gideon",
    "aliases": [
      "Jerubbaal",
      "Mighty Man of Valor"
    ],
    "testament": "OT",
    "era": "Period of the Judges",
    "meaning": "Hewer, Feller (Hebrew: גִּדְעוֹן)",
    "primaryScripture": "Judges 6:12 (NKJV)",
    "allScriptures": [
      "Judges 6:11–40",
      "Judges 7:1–25",
      "Judges 8:1–35",
      "Hebrews 11:32"
    ],
    "role": "Judge who Delivered Israel from Midian",
    "description": "Threshed wheat in a winepress when the Angel of the Lord greeted him. Tore down Baal’s altar and defeated a host of 135,000 Midianites with only 300 men with trumpets, pitchers, and torches.",
    "locationName": "Spring of Harod & Ophrah",
    "coords": [
      32.5517,
      35.39
    ],
    "bookId": "JDG",
    "chapter": 6
  },
  {
    "id": "samson",
    "name": "Samson",
    "aliases": [
      "Nazarite Strongman"
    ],
    "testament": "OT",
    "era": "Period of the Judges",
    "meaning": "Like the Sun (Hebrew: שִׁמְשׁוֹן)",
    "primaryScripture": "Judges 16:28–30 (NKJV)",
    "allScriptures": [
      "Judges 13:1–25",
      "Judges 14:1–20",
      "Judges 15:1–20",
      "Judges 16:1–31",
      "Hebrews 11:32"
    ],
    "role": "Nazarite Judge of Miraculous Strength",
    "description": "Consecrated from the womb as a Nazarite. Endowed with supernatural Holy Spirit strength to slay a thousand Philistines with a donkey’s jawbone; pulled down the temple of Dagon in his death.",
    "locationName": "Zorah & Gaza",
    "coords": [
      31.5,
      34.4667
    ],
    "bookId": "JDG",
    "chapter": 13
  },
  {
    "id": "ruth",
    "name": "Ruth",
    "aliases": [
      "The Moabitess"
    ],
    "testament": "OT",
    "era": "Judges Era",
    "meaning": "Friend, Companion (Hebrew: רוּת)",
    "primaryScripture": "Ruth 1:16–17 (NKJV)",
    "allScriptures": [
      "Ruth 1:1–22",
      "Ruth 2:1–23",
      "Ruth 3:1–18",
      "Ruth 4:1–22",
      "Matthew 1:5"
    ],
    "role": "Faithful Convert & Great-Grandmother of King David",
    "description": "Clung to Naomi declaring: \"Your people shall be my people, and your God, my God.\" Gleaned in the fields of Boaz who became her kinsman-redeemer.",
    "locationName": "Bethlehem (Judah)",
    "coords": [
      31.7054,
      35.2024
    ],
    "bookId": "RUT",
    "chapter": 1
  },
  {
    "id": "boaz",
    "name": "Boaz",
    "aliases": [
      "Kinsman Redeemer of Bethlehem"
    ],
    "testament": "OT",
    "era": "Judges Era",
    "meaning": "In Him is Strength (Hebrew: בֹּעַז)",
    "primaryScripture": "Ruth 2:4 (NKJV)",
    "allScriptures": [
      "Ruth 2:1–23",
      "Ruth 3:1–18",
      "Ruth 4:1–22",
      "1 Chronicles 2:11–12"
    ],
    "role": "Kinsman-Redeemer Prefiguring Christ",
    "description": "Mighty man of wealth who showed covenant lovingkindness (chesed) to Ruth and redeemed the estate of Elimelech.",
    "locationName": "Bethlehem (Judah)",
    "coords": [
      31.7054,
      35.2024
    ],
    "bookId": "RUT",
    "chapter": 2
  },
  {
    "id": "samuel",
    "name": "Samuel",
    "aliases": [
      "Prophet, Priest, and Last Judge"
    ],
    "testament": "OT",
    "era": "Transition from Judges to United Monarchy",
    "meaning": "Heard of God / Asked of God (Hebrew: שְׁמוּאֵל)",
    "primaryScripture": "1 Samuel 3:10 (NKJV)",
    "allScriptures": [
      "1 Samuel 1:1–28",
      "1 Samuel 3:1–21",
      "1 Samuel 7:1–17",
      "1 Samuel 10:1",
      "1 Samuel 16:1–13",
      "Acts 3:24"
    ],
    "role": "Seer & Anointed Kingmaker of Israel",
    "description": "Dedicated by his mother Hannah at Shiloh. Heard the Lord speak as a young boy; the Lord let none of his words fall to the ground. Anointed Saul and David.",
    "locationName": "Shiloh & Ramah",
    "coords": [
      32.0561,
      35.2894
    ],
    "bookId": "1SA",
    "chapter": 3
  },
  {
    "id": "saul",
    "name": "Saul",
    "aliases": [
      "King Saul",
      "First King of Israel"
    ],
    "testament": "OT",
    "era": "United Monarchy",
    "meaning": "Asked For (Hebrew: שָׁאוּל)",
    "primaryScripture": "1 Samuel 10:1 (NKJV)",
    "allScriptures": [
      "1 Samuel 9:1–27",
      "1 Samuel 10:1–27",
      "1 Samuel 13:1–14",
      "1 Samuel 15:1–35",
      "1 Samuel 31:1–6"
    ],
    "role": "First Monarch of the United Kingdom",
    "description": "Tall and handsome son of Kish anointed by Samuel. Victorious at first, but disqualified for offering illicit sacrifice and sparing Agag, leading to David’s elevation.",
    "locationName": "Gibeah of Saul & Mount Gilboa",
    "coords": [
      31.8239,
      35.2311
    ],
    "bookId": "1SA",
    "chapter": 10
  },
  {
    "id": "david",
    "name": "David",
    "aliases": [
      "King David",
      "Man After God’s Own Heart",
      "Sweet Psalmist of Israel"
    ],
    "testament": "OT",
    "era": "United Monarchy",
    "meaning": "Beloved (Hebrew: דָּוִד)",
    "primaryScripture": "1 Samuel 16:13 (NKJV)",
    "allScriptures": [
      "1 Samuel 16:1–13",
      "1 Samuel 17:1–58",
      "2 Samuel 5:1–12",
      "2 Samuel 7:1–29",
      "Psalm 23:1–6",
      "Matthew 1:1",
      "Acts 13:22"
    ],
    "role": "King of Israel & Recipient of the Davidic Covenant",
    "description": "Shepherd boy from Bethlehem who felled Goliath with a sling and stone. Unified the twelve tribes, conquered Jerusalem (Zion), and received God’s eternal covenant promise of a Messiah.",
    "locationName": "City of David (Jerusalem)",
    "coords": [
      31.7733,
      35.2356
    ],
    "bookId": "1SA",
    "chapter": 16
  },
  {
    "id": "jonathan",
    "name": "Jonathan",
    "aliases": [
      "Prince of Israel"
    ],
    "testament": "OT",
    "era": "United Monarchy",
    "meaning": "Yahweh Has Given (Hebrew: יְהוֹנָתָן)",
    "primaryScripture": "1 Samuel 18:1–3 (NKJV)",
    "allScriptures": [
      "1 Samuel 14:1–15",
      "1 Samuel 18:1–4",
      "1 Samuel 20:1–42",
      "2 Samuel 1:17–27"
    ],
    "role": "Covenant Brother of David & Valiant Prince",
    "description": "Eldest son of Saul who scaled the cliff at Michmash by faith. Loved David as his own soul and made a covenant protecting him from Saul’s wrath.",
    "locationName": "Michmash Pass & Mount Gilboa",
    "coords": [
      31.87,
      35.28
    ],
    "bookId": "1SA",
    "chapter": 18
  },
  {
    "id": "solomon",
    "name": "Solomon",
    "aliases": [
      "Jedidiah",
      "King Solomon",
      "The Preacher (Kohelet)"
    ],
    "testament": "OT",
    "era": "Golden Age of United Monarchy",
    "meaning": "Peaceable, Rest (Hebrew: שְׁלֹמֹה)",
    "primaryScripture": "1 Kings 3:9–12 (NKJV)",
    "allScriptures": [
      "1 Kings 3:1–28",
      "1 Kings 6:1–38",
      "1 Kings 8:1–66",
      "1 Kings 10:1–29",
      "Proverbs 1:1",
      "Ecclesiastes 1:1"
    ],
    "role": "Wisest King of Israel & Builder of the First Temple",
    "description": "Son of David and Bathsheba. Asked God for an understanding heart to judge Israel. Built the magnificent Holy Temple on Mount Moriah, author of Proverbs and Song of Solomon.",
    "locationName": "Temple Mount (Mount Moriah, Jerusalem)",
    "coords": [
      31.778,
      35.2354
    ],
    "bookId": "1KI",
    "chapter": 3
  },
  {
    "id": "elijah",
    "name": "Elijah",
    "aliases": [
      "Elijah the Tishbite",
      "Prophet of Fire"
    ],
    "testament": "OT",
    "era": "Divided Kingdom (Northern Kingdom)",
    "meaning": "My God is Yahweh (Hebrew: אֵלִיָּהוּ)",
    "primaryScripture": "1 Kings 18:36–39 (NKJV)",
    "allScriptures": [
      "1 Kings 17:1–24",
      "1 Kings 18:1–46",
      "1 Kings 19:1–18",
      "2 Kings 2:1–14",
      "Malachi 4:5",
      "Matthew 17:1–4"
    ],
    "role": "Prophet of Power who Called Down Fire on Carmel",
    "description": "Challenged King Ahab and 450 prophets of Baal on Mount Carmel where fire consumed the sacrifice. Heard the still small voice at Horeb and was caught up into heaven in a whirlwind.",
    "locationName": "Mount Carmel & Cherith Ravine",
    "coords": [
      32.73,
      35.04
    ],
    "bookId": "1KI",
    "chapter": 17
  },
  {
    "id": "elisha",
    "name": "Elisha",
    "aliases": [
      "Prophet of the Double Portion"
    ],
    "testament": "OT",
    "era": "Divided Kingdom",
    "meaning": "God is Salvation (Hebrew: אֱלִישָׁע)",
    "primaryScripture": "2 Kings 2:9–12 (NKJV)",
    "allScriptures": [
      "1 Kings 19:19–21",
      "2 Kings 2:1–25",
      "2 Kings 4:1–44",
      "2 Kings 5:1–27",
      "2 Kings 6:1–23"
    ],
    "role": "Successor to Elijah with Double-Portion Anointing",
    "description": "Plowed with twelve yoke of oxen when Elijah cast his mantle on him. Performed twice as many recorded miracles as Elijah, including raising the Shunammite’s son and cleansing Naaman.",
    "locationName": "Abel Meholah & Samaria",
    "coords": [
      32.35,
      35.53
    ],
    "bookId": "2KI",
    "chapter": 2
  },
  {
    "id": "hezekiah",
    "name": "Hezekiah",
    "aliases": [
      "King Hezekiah of Judah"
    ],
    "testament": "OT",
    "era": "Divided Kingdom (Judah)",
    "meaning": "Yahweh Strengthens (Hebrew: חִזְקִיָּהוּ)",
    "primaryScripture": "2 Kings 18:5–7 (NKJV)",
    "allScriptures": [
      "2 Kings 18:1–37",
      "2 Kings 19:1–37",
      "2 Kings 20:1–21",
      "2 Chronicles 29:1–36",
      "Isaiah 37:1–38"
    ],
    "role": "Righteous Reforming King of Judah",
    "description": "Trusted in the Lord and cleaved to Him. Reopened the Temple, broke down pagan altars, built the famous water tunnel to Siloam, and witnessed the angelic slaughter of 185,000 Assyrians.",
    "locationName": "Jerusalem (Hezekiah’s Tunnel & Pool of Siloam)",
    "coords": [
      31.77,
      35.234
    ],
    "bookId": "2KI",
    "chapter": 18
  },
  {
    "id": "isaiah",
    "name": "Isaiah",
    "aliases": [
      "The Messianic Prophet",
      "Prophet of the Holy One of Israel"
    ],
    "testament": "OT",
    "era": "Divided Kingdom (Judah)",
    "meaning": "Yahweh is Salvation (Hebrew: יְשַׁעְיָהוּ)",
    "primaryScripture": "Isaiah 6:8 (NKJV)",
    "allScriptures": [
      "Isaiah 6:1–13",
      "Isaiah 7:14",
      "Isaiah 9:6–7",
      "Isaiah 40:1–31",
      "Isaiah 53:1–12",
      "Luke 4:17–21"
    ],
    "role": "Prince of the Prophets & Herald of the Suffering Servant",
    "description": "Beheld the Lord high and lifted up in the Temple. Prophesied the virgin birth of Immanuel, the government on Christ’s shoulder, and the substitutionary atonement of Isaiah 53.",
    "locationName": "Royal Court of Jerusalem",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "ISA",
    "chapter": 6
  },
  {
    "id": "jeremiah",
    "name": "Jeremiah",
    "aliases": [
      "The Weeping Prophet"
    ],
    "testament": "OT",
    "era": "Fall of Jerusalem & Babylonian Exile",
    "meaning": "Yahweh Will Exalt / Launch Forth (Hebrew: יִרְמְיָהוּ)",
    "primaryScripture": "Jeremiah 1:5 (NKJV)",
    "allScriptures": [
      "Jeremiah 1:1–19",
      "Jeremiah 20:9",
      "Jeremiah 29:11",
      "Jeremiah 31:31–34",
      "Lamentations 3:22–24"
    ],
    "role": "Prophet of the New Covenant",
    "description": "Ordained a prophet before he was formed in the belly. Faithfully warned Judah for 40 years despite imprisonment and the muddy dungeon. Foretold the New Covenant written on the heart.",
    "locationName": "Anathoth & Jerusalem",
    "coords": [
      31.815,
      35.26
    ],
    "bookId": "JER",
    "chapter": 1
  },
  {
    "id": "ezekiel",
    "name": "Ezekiel",
    "aliases": [
      "Prophet by the River Chebar",
      "Watchman of Israel"
    ],
    "testament": "OT",
    "era": "Babylonian Exile",
    "meaning": "God Strengthens (Hebrew: יְחֶזְקֵאל)",
    "primaryScripture": "Ezekiel 37:4–5 (NKJV)",
    "allScriptures": [
      "Ezekiel 1:1–28",
      "Ezekiel 3:16–21",
      "Ezekiel 36:26–27",
      "Ezekiel 37:1–14",
      "Ezekiel 47:1–12"
    ],
    "role": "Priest & Apocalyptic Prophet in Babylon",
    "description": "Prophesied among the Jewish exiles at Tel Abib by the Chebar canal. Saw the chariot-throne of God, the valley of dry bones brought to life, and the river flowing from the New Temple.",
    "locationName": "Chebar Canal (Babylon / Tel Abib)",
    "coords": [
      32,
      44.7
    ],
    "bookId": "EZK",
    "chapter": 1
  },
  {
    "id": "daniel",
    "name": "Daniel",
    "aliases": [
      "Belteshazzar",
      "Man Greatly Beloved"
    ],
    "testament": "OT",
    "era": "Babylonian & Persian Empires",
    "meaning": "God is My Judge (Hebrew: דָּנִיֵּאל)",
    "primaryScripture": "Daniel 6:10 (NKJV)",
    "allScriptures": [
      "Daniel 1:1–21",
      "Daniel 2:19–49",
      "Daniel 6:1–28",
      "Daniel 7:13–14",
      "Daniel 9:1–27",
      "Matthew 24:15"
    ],
    "role": "Statesman, Prophet & Imperial Prime Minister",
    "description": "Resolved not to defile himself with the king’s delicacies. Interpreted Nebuchadnezzar’s dream of the four world empires. Delivered unharmed from the den of lions.",
    "locationName": "Babylon & Susa (Shushan)",
    "coords": [
      32.1892,
      48.2433
    ],
    "bookId": "DAN",
    "chapter": 1
  },
  {
    "id": "shadrach_meshach_abednego",
    "name": "Shadrach, Meshach & Abed-Nego",
    "aliases": [
      "Hananiah, Mishael & Azariah",
      "The Three Hebrew Youths"
    ],
    "testament": "OT",
    "era": "Babylonian Empire",
    "meaning": "Servants of Yahweh: Yahweh is Gracious, Who is Like God?, Yahweh is My Helper",
    "primaryScripture": "Daniel 3:16–18 (NKJV)",
    "allScriptures": [
      "Daniel 1:6–17",
      "Daniel 3:1–30",
      "Hebrews 11:34"
    ],
    "role": "Faithful Confessors in the Fiery Furnace",
    "description": "Refused to bow before Nebuchadnezzar’s golden image in the plain of Dura. Cast into the furnace heated seven times hotter; beheld walking loose with a Fourth Man like the Son of God.",
    "locationName": "Plain of Dura (Babylon)",
    "coords": [
      32.45,
      44.5
    ],
    "bookId": "DAN",
    "chapter": 3
  },
  {
    "id": "ezra",
    "name": "Ezra",
    "aliases": [
      "Ezra the Scribe",
      "Priest of the Law of God"
    ],
    "testament": "OT",
    "era": "Post-Exilic Restoration",
    "meaning": "Help, Helper (Hebrew: עֶזְרָא)",
    "primaryScripture": "Ezra 7:10 (NKJV)",
    "allScriptures": [
      "Ezra 7:1–28",
      "Ezra 8:21–36",
      "Ezra 10:1–17",
      "Nehemiah 8:1–18"
    ],
    "role": "Scribe who Prepared His Heart to Seek the Law",
    "description": "Led the second wave of exiles back to Jerusalem. Read the Book of the Law of Moses aloud from sunrise until midday at the Water Gate, sparking holy repentance.",
    "locationName": "Jerusalem (Water Gate)",
    "coords": [
      31.776,
      35.236
    ],
    "bookId": "EZR",
    "chapter": 7
  },
  {
    "id": "nehemiah",
    "name": "Nehemiah",
    "aliases": [
      "Cupbearer to King Artaxerxes",
      "Governor of Judah"
    ],
    "testament": "OT",
    "era": "Post-Exilic Restoration",
    "meaning": "Yahweh Comforts (Hebrew: נְחֶמְיָה)",
    "primaryScripture": "Nehemiah 4:14 (NKJV)",
    "allScriptures": [
      "Nehemiah 1:1–11",
      "Nehemiah 2:1–20",
      "Nehemiah 4:1–23",
      "Nehemiah 6:15–16",
      "Nehemiah 8:10"
    ],
    "role": "Wall Builder & Reformer Governor of Judah",
    "description": "Wept and prayed upon hearing Jerusalem’s walls were broken down. Rebuilt the walls of Jerusalem in only 52 days with workers holding a trowel in one hand and a weapon in the other.",
    "locationName": "Susa & Jerusalem Walls",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "NEH",
    "chapter": 1
  },
  {
    "id": "esther",
    "name": "Esther",
    "aliases": [
      "Hadassah",
      "Queen Esther"
    ],
    "testament": "OT",
    "era": "Persian Empire",
    "meaning": "Star (Persian: Esther) / Myrtle (Hebrew: הֲדַסָּה)",
    "primaryScripture": "Esther 4:14–16 (NKJV)",
    "allScriptures": [
      "Esther 2:7–20",
      "Esther 4:1–17",
      "Esther 5:1–8",
      "Esther 7:1–10",
      "Esther 9:20–32"
    ],
    "role": "Jewish Queen of Persia who Saved Her People",
    "description": "Orphan raised by Mordecai who obtained the crown of Persia. Risked her life entering the king’s court unsummoned: \"If I perish, I perish!\" Overthrew Haman’s plot.",
    "locationName": "Palace of Susa (Shushan)",
    "coords": [
      32.1892,
      48.2433
    ],
    "bookId": "EST",
    "chapter": 4
  },
  {
    "id": "job",
    "name": "Job",
    "aliases": [
      "Righteous Sufferer of Uz"
    ],
    "testament": "OT",
    "era": "Patriarchal Era (Land of Uz)",
    "meaning": "Persecuted / Turning Back (Hebrew: אִיּוֹב)",
    "primaryScripture": "Job 19:25–26 (NKJV)",
    "allScriptures": [
      "Job 1:1–22",
      "Job 2:1–10",
      "Job 19:25–27",
      "Job 42:1–17",
      "Ezekiel 14:14",
      "James 5:11"
    ],
    "role": "Patriarch of Steadfast Faith through Suffering",
    "description": "Blameless and upright man who feared God and shunned evil. Lost his wealth and children yet declared: \"I know that my Redeemer lives!\" The Lord restored twice as much.",
    "locationName": "Land of Uz (East of Jordan / Edom)",
    "coords": [
      30.5,
      35.8
    ],
    "bookId": "JOB",
    "chapter": 1
  },
  {
    "id": "jonah",
    "name": "Jonah",
    "aliases": [
      "Jonah Son of Amittai"
    ],
    "testament": "OT",
    "era": "Divided Kingdom (Reign of Jeroboam II)",
    "meaning": "Dove (Hebrew: יוֹנָה)",
    "primaryScripture": "Jonah 2:9 (NKJV)",
    "allScriptures": [
      "Jonah 1:1–17",
      "Jonah 2:1–10",
      "Jonah 3:1–10",
      "Jonah 4:1–11",
      "Matthew 12:39–41"
    ],
    "role": "Prophet to Nineveh & Sign of the Resurrection",
    "description": "Fled to Tarshish from the presence of the Lord. Swallowed by a great fish; repented in its belly, preached to Nineveh, and witnessed a citywide revival of 120,000 souls.",
    "locationName": "Joppa (Jaffa) & Nineveh",
    "coords": [
      36.36,
      43.15
    ],
    "bookId": "JON",
    "chapter": 1
  },
  {
    "id": "john_the_baptist",
    "name": "John the Baptist",
    "aliases": [
      "Forerunner of Christ",
      "Voice in the Wilderness"
    ],
    "testament": "NT",
    "era": "Dawn of the Gospel Era",
    "meaning": "Yahweh Has Been Gracious (Hebrew: יוֹחָנָן)",
    "primaryScripture": "John 1:29 (NKJV)",
    "allScriptures": [
      "Luke 1:5–25, 57–80",
      "Matthew 3:1–17",
      "Mark 1:1–11",
      "John 1:19–34",
      "Matthew 11:11"
    ],
    "role": "Herald of the Messiah & Prophet in the Spirit of Elijah",
    "description": "Filled with the Holy Spirit from his mother’s womb. Preached repentance in the wilderness of Judea, baptized Jesus in the Jordan River, and proclaimed: \"Behold! The Lamb of God!\"",
    "locationName": "Bethany Beyond the Jordan & Machaerus",
    "coords": [
      31.8361,
      35.5489
    ],
    "bookId": "MAT",
    "chapter": 3
  },
  {
    "id": "mary_mother_of_jesus",
    "name": "Mary, Mother of Jesus",
    "aliases": [
      "Virgin Mary",
      "Handmaid of the Lord"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Exalted / Beloved (Hebrew: מִרְיָם)",
    "primaryScripture": "Luke 1:38, 46–49 (NKJV)",
    "allScriptures": [
      "Luke 1:26–56",
      "Luke 2:1–52",
      "John 2:1–11",
      "John 19:25–27",
      "Acts 1:14"
    ],
    "role": "Favored Virgin Chosen to Bear the Incarnate Son of God",
    "description": "Conceived the Lord Jesus by the Holy Spirit. Sang the Magnificat, stood faithfully at the foot of the Cross, and was with the disciples praying in the Upper Room at Pentecost.",
    "locationName": "Nazareth (Galilee) & Bethlehem",
    "coords": [
      32.7019,
      35.2979
    ],
    "bookId": "LUK",
    "chapter": 1
  },
  {
    "id": "joseph_of_nazareth",
    "name": "Joseph of Nazareth",
    "aliases": [
      "Husband of Mary",
      "The Just Carpenter"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Yahweh Shall Add (Hebrew: יוֹסֵף)",
    "primaryScripture": "Matthew 1:19–21 (NKJV)",
    "allScriptures": [
      "Matthew 1:18–25",
      "Matthew 2:13–23",
      "Luke 2:1–7, 41–51"
    ],
    "role": "Earthly Guardian & Legal Father of Jesus",
    "description": "Just man of the royal lineage of David who obeyed the angel’s instruction in dreams, took Mary as wife, fled with the child Jesus to Egypt, and raised Him in Nazareth.",
    "locationName": "Nazareth & Bethlehem",
    "coords": [
      32.7019,
      35.2979
    ],
    "bookId": "MAT",
    "chapter": 1
  },
  {
    "id": "jesus_christ",
    "name": "Jesus Christ",
    "aliases": [
      "Yeshua the Messiah",
      "Son of God",
      "Son of Man",
      "King of Kings",
      "Alpha and Omega"
    ],
    "testament": "NT",
    "era": "The Messianic Age & Eternal Covenant",
    "meaning": "Yahweh is Salvation (Hebrew: יֵשׁוּעַ / Greek: Ἰησοῦς)",
    "primaryScripture": "John 14:6 (NKJV)",
    "allScriptures": [
      "Matthew 1:21",
      "John 1:1–14",
      "John 3:16",
      "Romans 5:8",
      "Philippians 2:9–11",
      "Revelation 1:8, 17–18"
    ],
    "role": "The Son of the Living God, Savior & Redeemer of Mankind",
    "description": "Conceived by the Holy Spirit, born of the Virgin Mary. Lived a sinless life, performed signs and wonders, died substitutionally upon the Cross for the sins of the world, rose bodily on the third day, ascended into heaven, and is coming again in glory.",
    "locationName": "Jerusalem, Nazareth & Sea of Galilee",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "JHN",
    "chapter": 1
  },
  {
    "id": "peter",
    "name": "Apostle Peter",
    "aliases": [
      "Simon Peter",
      "Cephas",
      "Rock"
    ],
    "testament": "NT",
    "era": "Gospel & Apostolic Age",
    "meaning": "A Stone / Rock (Greek: Πέτρος / Aramaic: כֵּיפָא)",
    "primaryScripture": "Matthew 16:16–18 (NKJV)",
    "allScriptures": [
      "Matthew 4:18–20",
      "Matthew 16:13–19",
      "Luke 22:31–34",
      "John 21:15–19",
      "Acts 2:14–41",
      "1 Peter 1:3–9"
    ],
    "role": "Apostle of the Circumcision & Fisher of Men",
    "description": "Fisherman of Capernaum who confessed: \"You are the Christ, the Son of the living God.\" Preached at Pentecost where 3,000 were converted; opened the door of the Gospel to the Gentiles.",
    "locationName": "Capernaum (Sea of Galilee) & Jerusalem",
    "coords": [
      32.8804,
      35.5753
    ],
    "bookId": "MAT",
    "chapter": 16
  },
  {
    "id": "john_the_apostle",
    "name": "Apostle John",
    "aliases": [
      "Son of Thunder (Boanerges)",
      "The Disciple Whom Jesus Loved",
      "John the Theologian"
    ],
    "testament": "NT",
    "era": "Apostolic Age & Apocalypse",
    "meaning": "Yahweh is Gracious (Hebrew: יוֹחָנָן)",
    "primaryScripture": "John 20:30–31 (NKJV)",
    "allScriptures": [
      "Matthew 4:21–22",
      "John 13:23",
      "John 19:26–27",
      "1 John 1:1–4",
      "Revelation 1:1–9"
    ],
    "role": "Beloved Apostle, Evangelist & Seer of Patmos",
    "description": "Brother of James who leaned on Jesus’ bosom at the Last Supper. Stood at the foot of the Cross, authored five New Testament books, and received the Apocalypse on the Isle of Patmos.",
    "locationName": "Isle of Patmos (Aegean Sea) & Ephesus",
    "coords": [
      37.5117,
      26.5478
    ],
    "bookId": "REV",
    "chapter": 1
  },
  {
    "id": "andrew",
    "name": "Apostle Andrew",
    "aliases": [
      "First-Called Apostle"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Manly, Valiant (Greek: Ἀνδρέας)",
    "primaryScripture": "John 1:40–42 (NKJV)",
    "allScriptures": [
      "Matthew 4:18–19",
      "John 1:40–42",
      "John 6:8–9",
      "John 12:20–22"
    ],
    "role": "Apostle who First Brought Peter to Jesus",
    "description": "Brother of Simon Peter and disciple of John the Baptist who heard John say: \"Behold the Lamb of God!\" and immediately brought his brother Simon to the Messiah.",
    "locationName": "Bethsaida & Capernaum",
    "coords": [
      32.8804,
      35.5753
    ],
    "bookId": "JHN",
    "chapter": 1
  },
  {
    "id": "james_son_of_zebedee",
    "name": "James Son of Zebedee",
    "aliases": [
      "Son of Thunder (Boanerges)",
      "Apostle James the Greater"
    ],
    "testament": "NT",
    "era": "Gospel & Early Church",
    "meaning": "Supplanter (Hebrew: יַעֲקֹב / Greek: Ἰάκωβος)",
    "primaryScripture": "Mark 3:17 (NKJV)",
    "allScriptures": [
      "Matthew 4:21–22",
      "Mark 9:2",
      "Mark 10:35–45",
      "Acts 12:1–2"
    ],
    "role": "Apostle & First Apostolic Martyr",
    "description": "Brother of the Apostle John and part of Jesus’ inner circle of three with Peter and John at the Transfiguration and Gethsemane. First apostle martyred by Herod Agrippa.",
    "locationName": "Sea of Galilee & Jerusalem",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "ACT",
    "chapter": 12
  },
  {
    "id": "philip_the_apostle",
    "name": "Apostle Philip",
    "aliases": [
      "Philip of Bethsaida"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Lover of Horses (Greek: Φίλιππος)",
    "primaryScripture": "John 1:43–46 (NKJV)",
    "allScriptures": [
      "Matthew 10:3",
      "John 1:43–46",
      "John 6:5–7",
      "John 14:8–9"
    ],
    "role": "Apostle who brought Nathanael to Christ",
    "description": "Called by Jesus saying: \"Follow Me!\" Philip immediately found Nathanael declaring: \"We have found Him of whom Moses and the prophets wrote!\"",
    "locationName": "Bethsaida of Galilee",
    "coords": [
      32.909,
      35.631
    ],
    "bookId": "JHN",
    "chapter": 1
  },
  {
    "id": "nathanael",
    "name": "Bartholomew (Nathanael)",
    "aliases": [
      "An Israelite in Whom is No Deceit"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Gift of God (Hebrew: נְתַנְאֵל / Aramaic: בַּר־תּוֹלְמַי)",
    "primaryScripture": "John 1:47–50 (NKJV)",
    "allScriptures": [
      "Matthew 10:3",
      "John 1:45–51",
      "John 21:2"
    ],
    "role": "Apostle who beheld the open heavens",
    "description": "Beheld by Jesus under the fig tree before Philip called him; confessed: \"Rabbi, You are the Son of God! You are the King of Israel!\"",
    "locationName": "Cana of Galilee",
    "coords": [
      32.7483,
      35.3381
    ],
    "bookId": "JHN",
    "chapter": 1
  },
  {
    "id": "matthew",
    "name": "Apostle Matthew",
    "aliases": [
      "Levi Son of Alphaeus",
      "The Tax Collector"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Gift of Yahweh (Hebrew: מַתִּתְיָהוּ)",
    "primaryScripture": "Matthew 9:9 (NKJV)",
    "allScriptures": [
      "Matthew 9:9–13",
      "Mark 2:14",
      "Luke 5:27–32"
    ],
    "role": "Apostle & Author of the First Gospel",
    "description": "Sitting at the tax office in Capernaum when Jesus said: \"Follow Me.\" Rose up, left all, and held a great feast in his house for Jesus.",
    "locationName": "Capernaum",
    "coords": [
      32.8804,
      35.5753
    ],
    "bookId": "MAT",
    "chapter": 9
  },
  {
    "id": "thomas",
    "name": "Apostle Thomas",
    "aliases": [
      "Didymus (The Twin)"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Twin (Aramaic: תְּאוֹמָא / Greek: Δίδυμος)",
    "primaryScripture": "John 20:27–28 (NKJV)",
    "allScriptures": [
      "John 11:16",
      "John 14:5",
      "John 20:24–29",
      "Acts 1:13"
    ],
    "role": "Apostle who Proclaimed \"My Lord and My God!\"",
    "description": "Initially demanded to see the print of the nails in Jesus’ hands. Upon touching the wounds of the risen Christ, proclaimed the supreme confession of Jesus’ deity.",
    "locationName": "Upper Room, Jerusalem",
    "coords": [
      31.7719,
      35.2294
    ],
    "bookId": "JHN",
    "chapter": 20
  },
  {
    "id": "paul",
    "name": "Apostle Paul",
    "aliases": [
      "Saul of Tarsus",
      "Apostle to the Gentiles"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Little, Small (Latin: Paulus) / Asked For (Hebrew: שָׁאוּל)",
    "primaryScripture": "Galatians 2:20 (NKJV)",
    "allScriptures": [
      "Acts 9:1–22",
      "Acts 13:1–3",
      "Romans 1:16",
      "Philippians 3:7–14",
      "2 Timothy 4:7–8"
    ],
    "role": "Apostle to the Gentiles & Author of 13 Epistles",
    "description": "Pharisee who persecuted the early Church until transformed by the risen Christ on the road to Damascus. Planted churches across Asia Minor and Greece, author of Romans and Ephesians.",
    "locationName": "Tarsus, Damascus & Rome",
    "coords": [
      33.5138,
      36.2765
    ],
    "bookId": "ACT",
    "chapter": 9
  },
  {
    "id": "stephen",
    "name": "Stephen",
    "aliases": [
      "Stephen the Protomartyr",
      "Full of Faith and Power"
    ],
    "testament": "NT",
    "era": "Early Church (Jerusalem)",
    "meaning": "Crown, Garland (Greek: Στέφανος)",
    "primaryScripture": "Acts 7:55–60 (NKJV)",
    "allScriptures": [
      "Acts 6:1–15",
      "Acts 7:1–60",
      "Acts 8:1–2"
    ],
    "role": "First Christian Deacon & First Martyr",
    "description": "One of the seven deacons who did great wonders among the people. Beheld the heavens opened and the Son of Man standing at the right hand of God before being stoned, praying for his persecutors.",
    "locationName": "Jerusalem (Lion’s Gate / Stephen’s Gate)",
    "coords": [
      31.7806,
      35.2389
    ],
    "bookId": "ACT",
    "chapter": 7
  },
  {
    "id": "philip_the_evangelist",
    "name": "Philip the Evangelist",
    "aliases": [
      "Philip the Deacon"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Lover of Horses (Greek: Φίλιππος)",
    "primaryScripture": "Acts 8:5–8, 35–38 (NKJV)",
    "allScriptures": [
      "Acts 6:5",
      "Acts 8:4–40",
      "Acts 21:8–9"
    ],
    "role": "Evangelist in Samaria & to the Ethiopian Eunuch",
    "description": "Preached Christ in Samaria with demonic deliverances and healings. Led by the Spirit to the desert road to Gaza, where he guided the Ethiopian Eunuch to Christ in Isaiah 53.",
    "locationName": "Samaria & Caesarea Maritima",
    "coords": [
      32.5019,
      34.8911
    ],
    "bookId": "ACT",
    "chapter": 8
  },
  {
    "id": "barnabas",
    "name": "Barnabas",
    "aliases": [
      "Joses",
      "Son of Encouragement"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Son of Consolation (Aramaic: בַּר נַבָּא)",
    "primaryScripture": "Acts 11:22–24 (NKJV)",
    "allScriptures": [
      "Acts 4:36–37",
      "Acts 9:26–27",
      "Acts 11:22–26",
      "Acts 13:1–4",
      "1 Corinthians 9:6"
    ],
    "role": "Good Man Full of the Holy Spirit & Paul’s Companion",
    "description": "Levite from Cyprus who sold land to lay proceeds at the apostles’ feet. Championed Saul to the skeptical Jerusalem apostles and co-led the first missionary journey.",
    "locationName": "Antioch (Syria) & Cyprus",
    "coords": [
      36.2021,
      36.1606
    ],
    "bookId": "ACT",
    "chapter": 11
  },
  {
    "id": "timothy",
    "name": "Timothy",
    "aliases": [
      "Beloved Son in the Faith"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Honoring God (Greek: Τιμόθεος)",
    "primaryScripture": "2 Timothy 1:5–7 (NKJV)",
    "allScriptures": [
      "Acts 16:1–5",
      "1 Corinthians 4:17",
      "Philippians 2:19–22",
      "1 Timothy 1:1–3",
      "2 Timothy 4:1–5"
    ],
    "role": "Young Apostolic Overseer & Pastor of Ephesus",
    "description": "Taught the Holy Scriptures from childhood by his grandmother Lois and mother Eunice. Joined Paul’s second missionary journey and became apostolic leader of the church at Ephesus.",
    "locationName": "Lystra & Ephesus",
    "coords": [
      37.9489,
      27.3639
    ],
    "bookId": "1TI",
    "chapter": 1
  },
  {
    "id": "mary_magdalene",
    "name": "Mary Magdalene",
    "aliases": [
      "Apostle to the Apostles"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Mary of Magdala (Tower)",
    "primaryScripture": "John 20:17–18 (NKJV)",
    "allScriptures": [
      "Luke 8:1–3",
      "Matthew 27:55–61",
      "Mark 16:1–9",
      "John 20:1–18"
    ],
    "role": "First Witness of the Risen Christ",
    "description": "Delivered of seven demons by Jesus. Supported His ministry, stood by His Cross, and was the first person to behold and proclaim the resurrected Lord.",
    "locationName": "Magdala (Sea of Galilee) & Jerusalem",
    "coords": [
      32.825,
      35.518
    ],
    "bookId": "JHN",
    "chapter": 20
  },
  {
    "id": "cornelius",
    "name": "Cornelius the Centurion",
    "aliases": [
      "First Gentile Convert"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Of a Horn (Latin)",
    "primaryScripture": "Acts 10:1–4, 44–48 (NKJV)",
    "allScriptures": [
      "Acts 10:1–48",
      "Acts 11:1–18"
    ],
    "role": "Roman Centurion of the Italian Cohort",
    "description": "Devout man who gave alms generously and prayed continually. Sent for Peter, upon which the Holy Spirit fell upon all Gentiles present with tongues and praise.",
    "locationName": "Caesarea Maritima",
    "coords": [
      32.5019,
      34.8911
    ],
    "bookId": "ACT",
    "chapter": 10
  },
  {
    "id": "lazarus",
    "name": "Lazarus of Bethany",
    "aliases": [
      "Friend of Jesus"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "God has Helped (Hebrew: Eleazar)",
    "primaryScripture": "John 11:43–44 (NKJV)",
    "allScriptures": [
      "John 11:1–45",
      "John 12:1–11"
    ],
    "role": "Brother of Mary and Martha Raised from the Dead",
    "description": "Dead and entombed four days until Jesus cried with a loud voice: \"Lazarus, come forth!\" A living sign causing many to believe in Christ.",
    "locationName": "Bethany (Mount of Olives)",
    "coords": [
      31.77,
      35.26
    ],
    "bookId": "JHN",
    "chapter": 11
  },
  {
    "id": "martha",
    "name": "Martha of Bethany",
    "aliases": [
      "Sister of Mary and Lazarus"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Lady, Mistress (Aramaic: מָרְתָא)",
    "primaryScripture": "John 11:25–27 (NKJV)",
    "allScriptures": [
      "Luke 10:38–42",
      "John 11:1–44",
      "John 12:1–2"
    ],
    "role": "Hospitable Disciple who Confessed Christ as the Resurrection",
    "description": "Welcomed Jesus into her home. When Lazarus died, proclaimed: \"Yes, Lord, I believe that You are the Christ, the Son of God, who is to come into the world.\"",
    "locationName": "Bethany (Near Jerusalem)",
    "coords": [
      31.77,
      35.26
    ],
    "bookId": "JHN",
    "chapter": 11
  },
  {
    "id": "mary_of_bethany",
    "name": "Mary of Bethany",
    "aliases": [
      "Sister of Martha and Lazarus"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Beloved (Hebrew: מִרְיָם)",
    "primaryScripture": "Luke 10:39, 42 (NKJV)",
    "allScriptures": [
      "Luke 10:38–42",
      "John 11:1–45",
      "John 12:1–8"
    ],
    "role": "Disciple at Jesus’ Feet who Anointed Him for Burial",
    "description": "Sat at Jesus’ feet hearing His word, choosing the \"good part\" that would not be taken from her. Poured expensive spikenard oil over His feet before His Passion.",
    "locationName": "Bethany",
    "coords": [
      31.77,
      35.26
    ],
    "bookId": "JHN",
    "chapter": 12
  },
  {
    "id": "nicodemus",
    "name": "Nicodemus",
    "aliases": [
      "Ruler of the Jews",
      "Pharisee"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Conqueror of the People (Greek: Νικόδημος)",
    "primaryScripture": "John 3:1–3 (NKJV)",
    "allScriptures": [
      "John 3:1–21",
      "John 7:50–52",
      "John 19:39–42"
    ],
    "role": "Member of the Sanhedrin who Aided Jesus’ Burial",
    "description": "Came to Jesus by night and received the teaching of being born again and John 3:16. Boldly defended Jesus in the council and brought 100 pounds of myrrh and aloes for His burial.",
    "locationName": "Jerusalem",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "JHN",
    "chapter": 3
  },
  {
    "id": "joseph_of_arimathea",
    "name": "Joseph of Arimathea",
    "aliases": [
      "Prominent Council Member"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Yahweh Shall Add (Hebrew: יוֹסֵף)",
    "primaryScripture": "Matthew 27:57–60 (NKJV)",
    "allScriptures": [
      "Matthew 27:57–60",
      "Mark 15:43–46",
      "Luke 23:50–53",
      "John 19:38"
    ],
    "role": "Disciple who Provided the Empty Tomb",
    "description": "Secret disciple of Jesus who waited for the kingdom of God. Went boldly to Pilate to ask for the body of Jesus and laid Him in his own new rock-hewn tomb.",
    "locationName": "Golgotha / Garden Tomb (Jerusalem)",
    "coords": [
      31.7842,
      35.23
    ],
    "bookId": "MAT",
    "chapter": 27
  },
  {
    "id": "zacchaeus",
    "name": "Zacchaeus",
    "aliases": [
      "Chief Tax Collector of Jericho"
    ],
    "testament": "NT",
    "era": "Gospel Era",
    "meaning": "Pure, Innocent (Hebrew: זַכַּי)",
    "primaryScripture": "Luke 19:5, 9–10 (NKJV)",
    "allScriptures": [
      "Luke 19:1–10"
    ],
    "role": "Repentant Tax Collector",
    "description": "Short in stature, climbed a sycamore tree to see Jesus passing through Jericho. Welcomed Jesus into his home with joyful restitution and salvation.",
    "locationName": "Jericho",
    "coords": [
      31.8708,
      35.4439
    ],
    "bookId": "LUK",
    "chapter": 19
  },
  {
    "id": "silas",
    "name": "Silas",
    "aliases": [
      "Silvanus",
      "Prophet & Apostle Companion"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Wood, Forest (Latin: Silvanus / Aramaic: שְׁאִילָא)",
    "primaryScripture": "Acts 16:25–26 (NKJV)",
    "allScriptures": [
      "Acts 15:22, 32, 40",
      "Acts 16:19–40",
      "1 Thessalonians 1:1",
      "1 Peter 5:12"
    ],
    "role": "Prophet & Missionary Companion of Paul",
    "description": "Leading man among the brethren in Jerusalem who accompanied Paul on his second missionary journey. Sang hymns at midnight in the Philippian jail before the earthquake.",
    "locationName": "Philippi & Corinth",
    "coords": [
      41.0125,
      24.2864
    ],
    "bookId": "ACT",
    "chapter": 16
  },
  {
    "id": "luke",
    "name": "Luke the Evangelist",
    "aliases": [
      "The Beloved Physician"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Light-Giving (Greek: Λουκᾶς)",
    "primaryScripture": "Colossians 4:14 (NKJV)",
    "allScriptures": [
      "Colossians 4:14",
      "2 Timothy 4:11",
      "Philemon 1:24",
      "Luke 1:1–4",
      "Acts 1:1–3"
    ],
    "role": "Physician, Historian & Author of Luke and Acts",
    "description": "Gentile doctor and faithful companion of Paul during his Roman imprisonments. Authored the Gospel of Luke and the Book of Acts with orderly historical precision.",
    "locationName": "Antioch & Rome",
    "coords": [
      41.9028,
      12.4964
    ],
    "bookId": "LUK",
    "chapter": 1
  },
  {
    "id": "mark",
    "name": "John Mark",
    "aliases": [
      "Mark the Evangelist"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Polite, Shining (Latin: Marcus / Hebrew: יוֹחָנָן)",
    "primaryScripture": "2 Timothy 4:11 (NKJV)",
    "allScriptures": [
      "Acts 12:12",
      "Acts 13:5, 13",
      "Acts 15:37–39",
      "Colossians 4:10",
      "1 Peter 5:13"
    ],
    "role": "Evangelist & Author of the Gospel of Mark",
    "description": "Son of Mary in whose house the disciples prayed in Jerusalem. Assistant to Peter and Paul; commended by Paul: \"Get Mark and bring him with you, for he is useful to me for ministry.\"",
    "locationName": "Jerusalem & Rome",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "MRK",
    "chapter": 1
  },
  {
    "id": "apollos",
    "name": "Apollos of Alexandria",
    "aliases": [
      "Eloquent Preacher of the Scriptures"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Belonging to Apollo (Greek: Ἀπολλώς)",
    "primaryScripture": "Acts 18:24–28 (NKJV)",
    "allScriptures": [
      "Acts 18:24–28",
      "Acts 19:1",
      "1 Corinthians 1:12",
      "1 Corinthians 3:6",
      "Titus 3:13"
    ],
    "role": "Fervent in Spirit & Mighty in the Scriptures",
    "description": "Learned Jewish believer from Alexandria who spoke boldly in Ephesus. Instructed more accurately by Aquila and Priscilla; vigorously refuted opponents showing from Scriptures that Jesus is the Christ.",
    "locationName": "Alexandria & Corinth",
    "coords": [
      31.2001,
      29.9187
    ],
    "bookId": "ACT",
    "chapter": 18
  },
  {
    "id": "priscilla_aquila",
    "name": "Priscilla & Aquila",
    "aliases": [
      "Fellow Workers in Christ Jesus"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Ancient (Latin: Prisca) & Eagle (Latin: Aquila)",
    "primaryScripture": "Romans 16:3–4 (NKJV)",
    "allScriptures": [
      "Acts 18:1–3, 18, 26",
      "Romans 16:3–5",
      "1 Corinthians 16:19",
      "2 Timothy 4:19"
    ],
    "role": "Tentmakers & Pillar Church Leaders",
    "description": "Husband and wife who hosted Paul in Corinth and Ephesus, expounded the way of God more accurately to Apollos, and risked their own necks for Paul’s life.",
    "locationName": "Corinth, Ephesus & Rome",
    "coords": [
      37.9056,
      22.8803
    ],
    "bookId": "ACT",
    "chapter": 18
  },
  {
    "id": "lydia",
    "name": "Lydia of Thyatira",
    "aliases": [
      "Seller of Purple"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "From Lydia (Greek: Λυδία)",
    "primaryScripture": "Acts 16:14–15 (NKJV)",
    "allScriptures": [
      "Acts 16:14–15, 40"
    ],
    "role": "First European Convert & Church Hostess",
    "description": "Merchant of purple dyed goods worshiping at the riverside of Philippi. The Lord opened her heart to heed Paul’s message, and her household was baptized.",
    "locationName": "Philippi (Riverside of Gangites)",
    "coords": [
      41.0125,
      24.2864
    ],
    "bookId": "ACT",
    "chapter": 16
  },
  {
    "id": "james_the_just",
    "name": "James the Just",
    "aliases": [
      "Brother of the Lord",
      "Leader of the Jerusalem Church"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Supplanter (Hebrew: יַעֲקֹב / Greek: Ἰάκωβος)",
    "primaryScripture": "James 1:1 (NKJV)",
    "allScriptures": [
      "Matthew 13:55",
      "Acts 15:13–21",
      "Acts 21:18",
      "1 Corinthians 15:7",
      "Galatians 1:19",
      "Galatians 2:9",
      "James 1:1"
    ],
    "role": "Pillar Apostle & Author of the Epistle of James",
    "description": "Half-brother of Jesus who became a believer after the Resurrection when Christ appeared to him personally. Presided over the Jerusalem Council and taught practical holy living.",
    "locationName": "Jerusalem",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "JAS",
    "chapter": 1
  },
  {
    "id": "jude",
    "name": "Jude (Brother of James)",
    "aliases": [
      "Judas Son of Mary and Joseph"
    ],
    "testament": "NT",
    "era": "Apostolic Age",
    "meaning": "Praise (Hebrew: יְהוּדָה / Greek: Ἰούδας)",
    "primaryScripture": "Jude 1:1, 3 (NKJV)",
    "allScriptures": [
      "Matthew 13:55",
      "Jude 1:1–25"
    ],
    "role": "Author of the General Epistle of Jude",
    "description": "Brother of James and servant of Jesus Christ who urged believers to \"contend earnestly for the faith which was once for all delivered to the saints.\"",
    "locationName": "Jerusalem",
    "coords": [
      31.7767,
      35.2345
    ],
    "bookId": "JUD",
    "chapter": 1
  }
];

export default BIBLICAL_FIGURES_NKJV;
