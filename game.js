(() => {
  'use strict';

  const $ = selector => document.querySelector(selector);
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const random = (min, max) => min + Math.random() * (max - min);
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const savedLanguage = (() => {
    try { return localStorage.getItem('chromeRush.language') || 'de'; }
    catch { return 'de'; }
  })();
  let currentLanguage = savedLanguage === 'en' ? 'en' : 'de';
  const i18n = {
    de: {
      active: 'AKTIV',
      altitudeTier: 'HÖHENSTUFE',
      backToMenu: 'ZURÜCK ZUM MENÜ',
      bigDilfWon: 'BIG DILF HAT GEWONNEN',
      blackCoins: 'SCHWARZE COINS',
      blackWallet: 'SCHWARZ',
      boost: 'BOOST',
      buyCar: 'CAR KAUFEN',
      buySkin: 'SKIN KAUFEN',
      challengeComplete: 'CHALLENGE GESCHAFFT',
      challengeLocked: 'CHALLENGE GESPERRT',
      change: 'ÄNDERN',
      chooseOpponent: 'WÄHLE DEINEN GEGNER',
      claimGoat: 'GOAT ABHOLEN',
      collection: 'SAMMLUNG',
      collectionAriaCars: 'Eigene Car-Sammlung',
      collectionAriaSkins: 'Eigene Skin-Sammlung',
      collectionSubtitle: 'Deine freigeschalteten SKINS und Bestleistungen',
      completed: 'GESCHAFFT',
      currentCar: 'AKTUELLES CAR',
      date: 'DATUM',
      distance: 'DISTANZ',
      dodgeOrLose: 'AUSWEICHEN ODER VERLIEREN',
      doubleJump: 'DOPPELSPRUNG',
      doubleJumpHeight: '2x HÖHE FÜR 5 SEKUNDEN',
      effectLevel: 'EFFEKTSTUFE',
      enterName: 'GIB DEINEN NAMEN EIN',
      finalReward: 'FINALER PREIS',
      fireHotDogs: 'FEUER-HOTDOGS!',
      free: 'KOSTENLOS',
      gameOver: 'GAME OVER',
      hennessyAttack: 'HENNESSY-ANGRIFF',
      hennessyHit: 'HENNESSY-TREFFER!',
      hotDogAttack: 'HOTDOG-ANGRIFF',
      hotDogHit: 'HOTDOG-TREFFER!',
      keepClimbing: 'WEITER KLETTERN',
      levelOpen: 'LEVEL OFFEN',
      levelProgress: 'LEVEL-FORTSCHRITT',
      loading: 'LÄDT...',
      locked: 'GESPERRT',
      menuTitle: 'MENU',
      milestone: 'MEILENSTEIN',
      moreBlackCoins: 'MEHR SCHWARZE COINS',
      moreGoldCoins: 'MEHR GOLD COINS',
      newHighscore: 'NEUER',
      noScoresYet: 'NOCH KEINE SCORES',
      nothingHere: 'NOTHING HERE',
      offline: 'OFFLINE · SPÄTER ERNEUT VERSUCHEN',
      openProgress: 'FORTSCHRITT ANSEHEN',
      paidLevelOpen: 'BEZAHLT · LEVEL OFFEN',
      payment: 'BEZAHLEN',
      player: 'SPIELER',
      playersAndCars: 'SPIELER & CARS',
      preview: 'VORSCHAU',
      readyToClaim: 'BEREIT ZUM ABHOLEN',
      restart: 'NEUSTART',
      score: 'PUNKTE:',
      selectCar: 'CAR AUSWÄHLEN',
      selectSkin: 'SKIN AUSWÄHLEN',
      selectedInShop: '✓ IM SHOP AUSGEWÄHLT',
      setName: 'NAMEN SETZEN',
      searchCollection: 'SAMMLUNG DURCHSUCHEN',
      searchShop: 'SHOP DURCHSUCHEN',
      shopSubtitle: 'Schalte Spieler frei und verbessere dein Fahrzeug',
      shopCurrency: 'SHOP-WÄHRUNG',
      skin: 'SKIN',
      startGame: 'SPIEL STARTEN',
      stayOnPlatforms: 'BLEIB AUF DEN PLATTFORMEN',
      tapAgainMusic: 'Zum erneuten Musiktest tippen',
      unlockable: 'FREISCHALTBAR',
      unlockableCar: 'FREISCHALTBARES CAR',
      unlockableSkin: 'FREISCHALTBARER SKIN',
      unlocked: 'FREIGESCHALTET',
      unlockGoatMessage: 'GOAT FREIGESCHALTET · CHROME RUSH GESCHAFFT!',
      unlockMore: 'MEHR FREISCHALTEN',
      unlockSkin: 'SKIN FREISCHALTEN',
      unlockVehicle: 'FAHRZEUG FREISCHALTEN',
      youFell: 'Du bist gefallen. Noch ein Versuch!',
      youHitFlames: 'Du hast die Flammen berührt!',
      youHitObstacle: 'Du hast ein Hindernis getroffen!',
      yourGold: 'DEIN GOLD'
    },
    en: {
      active: 'ACTIVE',
      altitudeTier: 'ALTITUDE TIER',
      backToMenu: 'BACK TO MENU',
      bigDilfWon: 'THE BIG DILF WON',
      blackCoins: 'BLACK COINS',
      blackWallet: 'BLACK',
      boost: 'BOOST',
      buyCar: 'BUY CAR',
      buySkin: 'BUY SKIN',
      challengeComplete: 'CHALLENGE COMPLETE',
      challengeLocked: 'CHALLENGE LOCKED',
      change: 'CHANGE',
      chooseOpponent: 'CHOOSE YOUR OPPONENT',
      claimGoat: 'CLAIM GOAT',
      collection: 'COLLECTION',
      collectionAriaCars: 'Owned vehicle collection',
      collectionAriaSkins: 'Owned skin collection',
      collectionSubtitle: 'Your unlocked SKINS and personal bests',
      completed: 'COMPLETED',
      currentCar: 'CURRENT CAR',
      date: 'DATE',
      distance: 'DISTANCE',
      dodgeOrLose: 'DODGE OR LOSE',
      doubleJump: 'DOUBLE JUMP',
      doubleJumpHeight: '2x HEIGHT FOR 5 SECONDS',
      effectLevel: 'EFFECT LEVEL',
      enterName: 'ENTER YOUR NAME',
      finalReward: 'FINAL REWARD',
      fireHotDogs: 'FIRE HOT DOGS!',
      free: 'FREE',
      gameOver: 'GAME OVER',
      hennessyAttack: 'HENNESSY ATTACK',
      hennessyHit: 'HENNESSY HIT!',
      hotDogAttack: 'HOT DOG ATTACK',
      hotDogHit: 'HOT DOG HIT!',
      keepClimbing: 'KEEP CLIMBING',
      levelOpen: 'LEVEL OPEN',
      levelProgress: 'LEVEL PROGRESS',
      loading: 'LOADING...',
      locked: 'LOCKED',
      menuTitle: 'MENU',
      milestone: 'MILESTONE',
      moreBlackCoins: 'MORE BLACK COINS',
      moreGoldCoins: 'MORE GOLD COINS',
      newHighscore: 'NEW',
      noScoresYet: 'NO SCORES YET',
      nothingHere: 'NOTHING HERE',
      offline: 'OFFLINE · TRY AGAIN LATER',
      openProgress: 'VIEW PROGRESS',
      paidLevelOpen: 'PAID · LEVEL OPEN',
      payment: 'PAYMENT',
      player: 'PLAYER',
      playersAndCars: 'PLAYERS & CARS',
      preview: 'PREVIEW',
      readyToClaim: 'READY TO CLAIM',
      restart: 'RESTART',
      score: 'SCORE:',
      selectCar: 'SELECT CAR',
      selectSkin: 'SELECT SKIN',
      selectedInShop: '✓ SELECTED IN SHOP',
      setName: 'SET NAME',
      searchCollection: 'SEARCH COLLECTION',
      searchShop: 'SEARCH SHOP',
      shopSubtitle: 'Unlock characters and upgrade your ride',
      shopCurrency: 'SHOP CURRENCY',
      skin: 'SKIN',
      startGame: 'PLAY THE GAME',
      stayOnPlatforms: 'STAY ON THE PLATFORMS',
      tapAgainMusic: 'Tap again to preview music',
      unlockable: 'UNLOCKABLE',
      unlockableCar: 'UNLOCKABLE CAR',
      unlockableSkin: 'UNLOCKABLE SKIN',
      unlocked: 'UNLOCKED',
      unlockGoatMessage: 'GOAT UNLOCKED · CHROME RUSH COMPLETE!',
      unlockMore: 'UNLOCK MORE',
      unlockSkin: 'UNLOCK SKIN',
      unlockVehicle: 'UNLOCK VEHICLE',
      youFell: 'You fell — one more climb!',
      youHitFlames: 'You hit the flames!',
      youHitObstacle: 'You hit an obstacle!',
      yourGold: 'YOUR GOLD'
    }
  };
  const t = key => i18n[currentLanguage]?.[key] || i18n.en[key] || key;
  const isGerman = () => currentLanguage === 'de';
  const normalizeSearch = value => String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
  const matchesSearch = (label, term) => !term || normalizeSearch(label).includes(term);
  const searchEmptyMarkup = () => `<div class="search-empty"><strong>${isGerman() ? 'NICHTS GEFUNDEN' : 'NO RESULTS'}</strong><span>${isGerman() ? 'Versuche einen anderen Namen' : 'Try another name'}</span></div>`;
  function translateChallengeText(text = '') {
    if (!isGerman() || !text) return text;
    let output = String(text)
      .replace(/Finish a Run/gi, 'Beende einen Run')
      .replace(/Finish a run/gi, 'Beende einen Run')
      .replace(/Reach exactly/gi, 'Erreiche genau')
      .replace(/Reach/gi, 'Erreiche')
      .replace(/Collect every single/gi, 'Sammle jeden')
      .replace(/Collect every/gi, 'Sammle jeden')
      .replace(/Collect/gi, 'Sammle')
      .replace(/Unlock/gi, 'Schalte frei')
      .replace(/using any/gi, 'mit einem beliebigen')
      .replace(/using the/gi, 'mit dem')
      .replace(/using/gi, 'mit')
      .replace(/with any Skin/gi, 'mit einem beliebigen SKIN')
      .replace(/with exactly/gi, 'mit genau')
      .replace(/with/gi, 'mit')
      .replace(/against/gi, 'gegen')
      .replace(/and/gi, 'und')
      .replace(/in one Run/gi, 'in einem Run')
      .replace(/Bottles/gi, 'Flaschen')
      .replace(/Shoes/gi, 'Schuhe')
      .replace(/Gold Coins/gi, 'Gold Coins')
      .replace(/Black Coins/gi, 'Schwarze Coins')
      .replace(/Coins/gi, 'Coins')
      .replace(/Cars/gi, 'CARS')
      .replace(/Skins/gi, 'SKINS')
      .replace(/Car/gi, 'CAR')
      .replace(/Skin/gi, 'SKIN')
      .replace(/Level/gi, 'Level');
    return output;
  }
  function translateProgressText(text = '') {
    if (!isGerman() || !text) return text;
    return String(text)
      .replace(/FINISH/g, 'ABSCHLUSS')
      .replace(/EXACT/g, 'GENAU')
      .replace(/LOCKED/g, 'GESPERRT')
      .replace(/UNLOCKED/g, 'FREI')
      .replace(/BOTTLES/g, 'FLASCHEN')
      .replace(/SHOES/g, 'SCHUHE')
      .replace(/BLACK COINS/g, 'SCHWARZE COINS')
      .replace(/COINS/g, 'COINS');
  }
  const challengeState = (complete, text, progress) => ({ complete, text: translateChallengeText(text), progress: translateProgressText(progress) });

  const characters = [
    { name: 'GEORGE', image: 'assets/character_1.png', legCut: 790, cost: 0 },
    { name: 'URCH', image: 'assets/character_2.png', legCut: 820, cost: 0, challenge: 'urchExact200' },
    { name: 'TONE', image: 'assets/character_3.png', legCut: 820, cost: 0, challenge: 'tunTun15' },
    { name: 'BEN', image: 'assets/skin_ben.png', legCutRatio: .71, cost: 1000 },
    { name: 'FABEL', image: 'assets/skin_fabel.png', legCutRatio: .66, cost: 1000 },
    { name: 'MOM', image: 'assets/skin_mom.png', legCutRatio: .69, cost: 1000 },
    { name: 'PATTY', image: 'assets/skin_patty.png', legCutRatio: .67, cost: 1000 },
    { name: 'PETE', image: 'assets/skin_pete.png', legCutRatio: .70, cost: 0, challenge: 'peteMercedes300sl500' },
    { name: 'VIVI', image: 'assets/skin_vivi.png', legCutRatio: .69, cost: 0, challenge: 'vivi650' },
    { name: 'VRO', image: 'assets/skin_vro.png', legCutRatio: .69, cost: 1000 },
    { name: '6IX9INE', image: 'assets/unlock_6ix9ine.png', cost: 0, challenge: 'cars20', celebrity: true },
    { name: 'HARDEN', image: 'assets/unlock_harden.png', cost: 0, challenge: 'chestnut400', celebrity: true },
    { name: 'BIENMACHINE', image: 'assets/unlock_binemachine.png', cost: 0, challenge: 'viviFabel' },
    { name: 'MICHA', image: 'assets/unlock_micha.png', cost: 0, challenge: 'bigDilfUrch500' },
    { name: 'MBEEZY', image: 'assets/unlock_mbeezy.png', cost: 0, challenge: 'chestnutTone250' },
    { name: 'BIGMAX', image: 'assets/unlock_bigmax.png', cost: 0, challenge: 'momPete250' },
    { name: 'DONR', image: 'assets/unlock_donr.png', cost: 0, challenge: 'blackBigDilf10' },
    { name: 'BRIAN', image: 'assets/unlock_brian.png', cost: 0, challenge: 'goldRun400' },
    { name: 'CR7', image: 'assets/unlock_cr7.png', cost: 0, challenge: 'youngCris1000', celebrity: true },
    { name: 'KRISTALL', image: 'assets/unlock_kristall.png', cost: 0, challenge: 'kristall' },
    { name: 'MICHA MOMO', image: 'assets/unlock_micha_momo.png', cost: 0, challenge: 'michaChestnut750' },
    { name: 'KVK', image: 'assets/unlock_kvk.png', cost: 0, challenge: 'hennessyVro20' },
    { name: 'A2W', image: 'assets/unlock_a2w.png', cost: 0, challenge: 'mbeezy1000' },
    { name: 'YE', image: 'assets/unlock_ye.png', cost: 0, challenge: 'black50', celebrity: true },
    { name: 'HUSTLAUI', image: 'assets/unlock_hustlaui.png', cost: 0, challenge: 'a2wDonr' },
    { name: 'RAV', image: 'assets/unlock_rav.png', cost: 0, challenge: 'georgeMx5_300' },
    { name: 'MUTTI', image: 'assets/unlock_mutti.png', cost: 0, challenge: 'obamaVeyron850', celebrity: true },
    { name: 'R9', image: 'assets/unlock_r9.png', cost: 0, challenge: 'f50_400', celebrity: true },
    { name: 'BIANCA', image: 'assets/unlock_bianca.png', cost: 0, challenge: 'yeMaybach', celebrity: true },
    { name: 'OBAMA', image: 'assets/unlock_obama.png', cost: 0, challenge: 'phantom500', celebrity: true },
    { name: 'THERI', image: 'assets/unlock_theri.png', cost: 0, challenge: 'hustlauiUrch' },
    { name: 'DRE', image: 'assets/unlock_dre.png', cost: 0, challenge: 'benBugatti1000' },
    { name: 'BASO', image: 'assets/unlock_baso.png', cost: 0, challenge: 'ben500' },
    { name: 'BENNI', image: 'assets/unlock_benni.png', cost: 0, challenge: 'score800' },
    { name: 'PAUL', image: 'assets/unlock_paul.png', cost: 0, challenge: 'ebikeChestnut300' },
    { name: 'SAM', image: 'assets/unlock_sam.png', cost: 1000 },
    { name: 'PUYAN', image: 'assets/unlock_puyan.png', cost: 0, challenge: 'samFiat500' },
    { name: 'BASTI', image: 'assets/unlock_basti.png', cost: 0, challenge: 'cars15Brian' },
    { name: 'ELLI', image: 'assets/unlock_elli.png', cost: 0, challenge: 'basti250Brian500' },
    { name: 'BECCA', image: 'assets/unlock_becca.png', cost: 0, challenge: 'goldFabel500' },
    { name: 'SGA', image: 'assets/unlock_sga.png', cost: 0, challenge: 'phantomMansory', celebrity: true },
    { name: 'NEYMAR', image: 'assets/unlock_neymar.png', cost: 0, challenge: 'r9_750', celebrity: true },
    { name: 'YOUNG CRIS', image: 'assets/unlock_young_cris.png', cost: 0, challenge: 'bigDilf600', celebrity: true },
    { name: 'DRAKE', image: 'assets/unlock_drake.png', cost: 0, challenge: 'chestnutUnlocked', celebrity: true },
    { name: 'SEXYYRED', image: 'assets/unlock_sexyyred.png', cost: 0, challenge: 'drake500', celebrity: true },
    { name: 'HARALD', image: 'assets/unlock_harald.png', cost: 0, challenge: 'haraldExact400Chestnut', celebrity: true },
    { name: 'KIM', image: 'assets/unlock_kim.png', cost: 0, challenge: 'yeBianca', celebrity: true },
    { name: 'ESCOBAR', image: 'assets/unlock_escobar.png', cost: 0, challenge: 'goldRun800', celebrity: true },
    { name: 'MARADONNA', image: 'assets/unlock_maradonna.png', cost: 0, challenge: 'brian1250', celebrity: true },
    { name: 'JA', image: 'assets/unlock_ja.png', cost: 0, challenge: 'jaguar500', celebrity: true },
    { name: 'SAWA', image: 'assets/unlock_sawa.png', cost: 0, challenge: 'sawaFabel800' },
    { name: 'MARK', image: 'assets/unlock_mark.png', cost: 0, challenge: 'markYoungCrisCr7' },
    { name: 'BIG A', image: 'assets/unlock_big_a.png', cost: 0, challenge: 'bigACollect' },
    { name: 'CARSPOTTER', image: 'assets/unlock_carspotter.png', cost: 0, challenge: 'carspotterAllCars' },
    { name: 'SPEED', image: 'assets/unlock_speed.png', cost: 0, challenge: 'speedCr7_1250', celebrity: true },
    { name: 'LARA', image: 'assets/unlock_lara.png', cost: 0, challenge: 'lara250' },
    { name: 'GREEK MOM', image: 'assets/unlock_greek_mom.png', cost: 0, challenge: 'tunTun25' },
    { name: 'ELKE', image: 'assets/unlock_elke.png', cost: 0, challenge: 'elkeMom1000' },
    { name: 'LEHMANN', image: 'assets/unlock_lehmann.png', cost: 0, challenge: 'lehmannExact200' },
    { name: 'RIM', image: 'assets/unlock_rim.png', cost: 0, challenge: 'rimLehmann850' },
    { name: 'NESSI', image: 'assets/skin_nessi.png', legCutRatio: .68, cost: 1000 },
    { name: 'MAG', image: 'assets/unlock_mag.png', cost: 0, challenge: 'magNessi500' },
    { name: 'MEB', image: 'assets/unlock_meb.png', cost: 0, challenge: 'mebAli1000' },
    { name: 'ALI', image: 'assets/unlock_ali.png', cost: 0, challenge: 'aliBigAElli800', celebrity: true },
    { name: 'JERRY', image: 'assets/unlock_jerry.png', cost: 0, challenge: 'jerryExact233' },
    { name: 'ELON', image: 'assets/unlock_elon.png', cost: 0, challenge: 'elonPolestar500', celebrity: true },
    { name: 'OPRAH', image: 'assets/unlock_oprah.png', cost: 0, challenge: 'oprahShoesBottles20', celebrity: true },
    { name: 'EINSTEIN', image: 'assets/unlock_einstein.png', cost: 0, challenge: 'einstein1300', celebrity: true },
    { name: 'LEO', image: 'assets/unlock_leo.png', cost: 0, challenge: 'leo1400', celebrity: true },
    { name: 'USAIN', image: 'assets/unlock_usain.png', cost: 0, challenge: 'usain2000', celebrity: true },
    { name: 'BUBBLEPAT GOLD', image: 'assets/skin_bubblepat_gold.png', legCutRatio: .67, cost: 0, challenge: 'bubblepatGoldExact', hiddenUnlockable: true },
    { name: 'RIMIBOY GOLD', image: 'assets/skin_rimiboy_gold.png', legCutRatio: .67, cost: 0, challenge: 'rimiboyGoldExact', hiddenUnlockable: true },
    { name: 'JG (ILOVEVRO)', image: 'assets/skin_jg_ilovevro.png', legCutRatio: .67, cost: 0, challenge: 'jgIlovevroExact', hiddenUnlockable: true }
  ];

  const opponents = [
    { id: 'big-dilf', name: 'BIG DILF', unlockCoins: 0, card: 'assets/opponent_big_dilf.png', background: 'assets/opponent_big_dilf_bg.png', accent: '#8e1736', soft: '#f3dce3', skyTop: '#e4b9c5', skyBottom: '#7b2942', platform: '#f0d3ca', edge: '#76263d' },
    { id: 'chestnut', name: 'CHESTNUT', unlockCoins: 1000, card: 'assets/opponent_chestnut.png', background: 'assets/opponent_chestnut_bg.png', accent: '#ce382e', soft: '#f7e0cb', skyTop: '#f2c37e', skyBottom: '#b34236', platform: '#f0d59e', edge: '#873326' }
  ];

  const starterSkinOrder = ['GEORGE', 'FABEL', 'MOM', 'VRO', 'BEN', 'NESSI', 'SAM', 'PATTY']
    .map(name => characters.findIndex(character => character.name === name))
    .filter(index => index >= 0);

  const makeCar = (name, assetKey, boost, cost = 0, challenge = '', color = '#bfc3c9', extra = {}) => ({
    name, label: name, shopAsset: `assets/car_${assetKey}_shop.png`, asset: `assets/car_${assetKey}_game.png`,
    boost, distance: Math.round(boost * 220), meters: Math.max(2, Math.round(boost * 2)), speed: Math.round(500 + boost * 25),
    color, cost, ...extra, ...(challenge ? { challenge } : {})
  });

  const carSpecs = {
    beetle: makeCar('VW BEETLE', 'beetle', 2),
    fiatGucci: makeCar('FIAT 500 "GUCCI"', 'fiat_gucci', 2, 0, 'score150'),
    subaruForester: makeCar('SUBARU FORESTER', 'subaru_forester', 1.5, 0, 'rimExact1'),
    tRoc: makeCar('VW T-ROC', 'troc', 2, 0, 'urchScore100'),
    mx5: makeCar('MAZDA MX5', 'mx5', 3, 6),
    bvgBus: makeCar('BVG BUS', 'bvg_bus', 3, 0, 'basoExact350'),
    pmrWhip: makeCar('PMR WHIP', 'pmr_whip', 4, 0, 'sgaHarald500'),
    bmw5erDoppelapfel: makeCar('BMW 5ER "DOPPELAPFEL"', 'bmw_5er_doppelapfel', 4, 0, 'patty450'),
    audiA3: makeCar('AUDI A3', 'audi_a3', 4, 10),
    eBike: makeCar('E-BIKE', 'ebike', 5, 0, 'bigmax250'),
    golfGti: makeCar('GOLF GTI', 'golf_gti', 5, 0, 'goldEbBike50'),
    mercedesGle: makeCar('MERCEDES GLE', 'mercedes_gle', 5, 0, 'dre300'),
    bydSeal: makeCar('BYD SEAL', 'byd_seal', 5.5, 10),
    polestar4: makeCar('POLESTAR 4', 'polestar4', 5.5, 0, 'samScore450'),
    mercedes300sl: makeCar('MERCEDES 300SL', 'mercedes_300sl', 6, 13),
    teslaCybertruck: makeCar('TESLA CYBERTRUCK', 'tesla_cybertruck', 6, 0, 'score1000', '#b9bdc1'),
    porsche911: makeCar('PORSCHE 911', 'porsche_911', 7, 17),
    wiesmannMf3: makeCar('WIESMANN MF3', 'wiesmann_mf3', 8, 0, 'pete300sl400'),
    maybachS: makeCar('MAYBACH S', 'maybach_s', 9, 0, 'yeChestnut1000'),
    rollsPhantom: makeCar('ROLLS ROYCE PHANTOM', 'rolls_phantom', 9, 20),
    bentleyCgtHermes: makeCar('BENTLEY CGT "HERMES"', 'bentley_cgt_hermes', 9, 0, 'bentleyHermesCollect'),
    lamboMiura: makeCar('LAMBORGHINI MIURA BRASIL', 'miura_brasil', 9.5, 0, 'neymarR9'),
    jaguarXj220: makeCar('JAGUAR XJ220', 'jaguar_xj220', 9.5, 0, 'chestnut500'),
    lamboUrus: makeCar('LAMBORGHINI URUS', 'lambo_urus', 10, 0, 'hennessyJa15'),
    mansoryGle: makeCar('MANSORY GLE', 'mansory_gle', 10, 0, 'mercedesGle750'),
    brabus6x6: makeCar('BRABUS 6X6', 'brabus_6x6', 10, 0, 'brabus6x6Collect'),
    porscheGt3: makeCar('PORSCHE GT3 "BIGSEXY"', 'porsche_gt3_bigsexy', 11, 0, 'sexyyred'),
    huracan: makeCar('LAMBORGHINI HURACAN', 'huracan', 11, 20),
    fordGt: makeCar('FORD GT', 'ford_gt', 11, 0, 'cars10Obama'),
    lamboCountach: makeCar('LAMBORGHINI COUNTACH', 'lambo_countach', 11, 0, 'benniLambo300'),
    maseratiMc20: makeCar('MASERATI MC20', 'maserati_mc20', 11.5, 0, 'maseratiMc20FordGt'),
    mclaren720s: makeCar('MCLAREN 720S', 'mclaren_720s', 12, 0, 'mclaren720sCollect'),
    slrMclaren: makeCar('MERCEDES SLR MCLAREN', 'slr_mclaren', 12, 23),
    carreraGT: makeCar('PORSCHE CARRERA GT', 'carrera_gt', 12, 26),
    ferrari288: makeCar('FERRARI 288 GTO', 'ferrari_288', 12, 0, 'fourFerraris'),
    f40: makeCar('FERRARI F40', 'f40', 13, 28),
    astonOne77: makeCar('ASTON MARTIN ONE-77', 'aston_one77', 14, 0, 'f40BigDilf500'),
    f50: makeCar('FERRARI F50', 'f50', 14.5, 30),
    porscheGt1: makeCar('PORSCHE GT1', 'porsche_gt1', 15, 0, 'porscheGt3Carrera'),
    mercedesClkGtr: makeCar('MERCEDES CLK GTR', 'mercedes_clk_gtr', 15, 0, 'everyMercedes'),
    jesko: makeCar('KOENIGSEGG JESKO', 'jesko', 15, 33),
    mclarenF1: makeCar('MCLAREN F1', 'mclaren_f1', 15.5, 0, 'greekMom1000'),
    bugattiEb1: makeCar('BUGATTI EB1', 'bugatti_eb1', 16, 0, 'bugattiEb1Jesko'),
    enzo: makeCar('FERRARI ENZO', 'enzo', 16, 35),
    mc12: makeCar('MASERATI MC12', 'mc12', 16, 38),
    slrStirling: makeCar('SLR STIRLING MOSS', 'slr_stirling', 17, 40),
    ferrariSp1: makeCar('FERRARI SP1', 'ferrari_sp1', 17, 0, 'bigASlrStirling1000'),
    paganiZonda: makeCar('PAGANI ZONDA', 'pagani_zonda', 17, 0, 'neymar750'),
    porsche918: makeCar('PORSCHE 918 "GOYARD"', 'porsche_918_goyard', 18, 0, 'allPorscheChestnut1250'),
    laferrari: makeCar('FERRARI LAFERRARI', 'laferrari', 19, 45),
    bugattiVeyron: makeCar('BUGATTI VEYRON', 'bugatti_veyron', 19, 0, 'blackRavStirling20'),
    ferrariMythos: makeCar('FERRARI MYTHOS', 'ferrari_mythos', 20, 0, 'everyFerrari'),
    amgOne: makeCar('MERCEDES AMG ONE', 'amg_one', 21, 45),
    astonValkyrie: makeCar('ASTON MARTIN VALKYRIE', 'aston_valkyrie', 22, 0, 'astonValkyrieBlack35'),
    yangwangU9: makeCar('BYD YANGWANG U9', 'yangwang_u9', 23, 45),
    chiron: makeCar('BUGATTI CHIRON', 'chiron', 24, 50),
    bugattiTourbillon: makeCar('BUGATTI TOURBILLON CR7', 'bugatti_tourbillon', 25, 0, 'cr7Chiron850'),
    f80: makeCar('FERRARI F80', 'f80', 25, 50),
    mercedesVisionOneConcept: makeCar('MERCEDES VISION ONE CONCEPT', 'mercedes_vision_one_concept', 29, 65),
    bugattiBrouillardConcept: makeCar('BUGATTI BROUILLARD CONCEPT', 'bugatti_brouillard_concept', 30, 70),
    lemansMalboro: makeCar('LEMANS MALBORO', 'lemans_malboro', 33, 120),
    megayacht: makeCar('MEGAYACHT', 'megayacht', 34, 130),
    pRacer: makeCar('P. RACER', 'p_racer', 35, 130),
    chromeUfo: makeCar('CHROME UFO', 'chrome_ufo', 42, 150),
    chromeheartsPj: makeCar('CHROMEHEARTS PJ', 'chromehearts_pj', 45, 170),
    fighterJet: makeCar('FIGHTER JET', 'fighter_jet', 60, 250),
    speedboatRockets: makeCar('SPEEDBOAT "ROCKETS"', 'speedboat_rockets', 61, 200, '', '#b3262d', { goldCost: 8000, premiumDualCost: true }),
    diamondPj: makeCar('DIAMOND PJ', 'diamond_pj', 63, 200, '', '#d9dde5', { goldCost: 12000, premiumDualCost: true }),
    xWing: makeCar('X-WING', 'x_wing', 65, 200, '', '#b8b2a4', { goldCost: 15000, premiumDualCost: true }),
    tumbler: makeCar('TUMBLER', 'tumbler', 67, 200, '', '#17191c', { goldCost: 15000, premiumDualCost: true }),
    theZep: makeCar('THE ZEP', 'the_zep', 72, 225, '', '#d9b46d', { goldCost: 20000, premiumDualCost: true }),
    chromerushYacht: makeCar('CHROMERUSH YACHT', 'chromerush_yacht', 74, 250, '', '#d8c88f', { goldCost: 20000, premiumDualCost: true }),
    vflHelicopter: makeCar('VFL HELICOPTER', 'vfl_helicopter', 75, 250, '', '#1b4d86', { goldCost: 10000, premiumDualCost: true }),
    paganiJetfighter: makeCar('PAGANI JETFIGHTER', 'pagani_jetfighter', 77, 260, '', '#1a2b40', { goldCost: 10000, premiumDualCost: true }),
    abtecFlieger: makeCar('ABTEC FLIEGER', 'abtec_flieger', 80, 280, '', '#d71f2a', { goldCost: 12000, premiumDualCost: true }),
    spaceRari: makeCar('SPACE RARI', 'space_rari', 83, 300, '', '#17191c', { goldCost: 14000, premiumDualCost: true }),
    pasitoTunTun: makeCar('PASITO TUN TUN', 'pasito_tun_tun', 83, 300, '', '#ebe5dc', { goldCost: 17000, premiumDualCost: true }),
    johnnyDangBus: makeCar('JOHNNY DANG BUS', 'johnny_dang_bus', 85, 300, '', '#e94399', { goldCost: 17000, premiumDualCost: true }),
    mansorySubmarine: makeCar('MANSORY SUBMARINE', 'mansory_submarine', 88, 300, '', '#1a1715', { goldCost: 17500, premiumDualCost: true }),
    flyingRimiboy: makeCar('FLYING RIMIBOY', 'flying_rimiboy', 90, 310, '', '#d7a739', { goldCost: 18500, premiumDualCost: true }),
    airShisha: makeCar('AIR SHISHA', 'air_shisha', 92, 315, '', '#c6c8c9', { goldCost: 20000, premiumDualCost: true }),
    bybRocketship: makeCar('BYB ROCKETSHIP', 'byb_rocketship', 92, 320, '', '#151515', { goldCost: 20000, premiumDualCost: true }),
    spaceXProbe: makeCar('SPACE-X PROBE', 'space_x_probe', 95, 325, '', '#f0f0ee', { goldCost: 20000, premiumDualCost: true }),
    frankMullerRide: makeCar('FRANK MULLER RIDE', 'frank_muller_ride', 99, 330, '', '#dcd4bd', { goldCost: 25000, premiumDualCost: true }),
    bigBird: makeCar('BIG BIRD', 'big_bird', 110, 350, '', '#5c4a30', { goldCost: 25000, premiumDualCost: true }),
    royalWagon: makeCar('ROYAL WAGON', 'royal_wagon', 150, 415, '', '#f1ede4', { goldCost: 30000, premiumDualCost: true, featured: true }),
    bugattiMistral: makeCar('BUGATTI MISTRAL 1/1', 'bugatti_mistral', 28, 0, 'everyBugatti'),
    f1Ferrari: makeCar('F1 FERRARI', 'f1_ferrari', 30, 0, 'mythos1500'),
    batmobil: makeCar('BATMOBIL', 'batmobil', 40, 0, 'f1_1750'),
    airDrake: makeCar('AIR DRAKE', 'air_drake', 50, 0, 'drake2000')
  };
  const carOrder = Object.keys(carSpecs);
  const purchasableCarOrder = carOrder.filter(type => !carSpecs[type].challenge);
  const unlockableCarOrder = carOrder.filter(type => carSpecs[type].challenge);
  const goatReward = { name: 'GOAT', image: 'assets/unlock_goat.png' };
  const unlockableDisplayOrder = [
    'BIGMAX', 'PETE', 'DONR', 'VIVI', 'TONE', 'A2W', 'URCH', 'HUSTLAUI', 'BIENMACHINE', 'KRISTALL', 'MBEEZY', 'THERI', 'MICHA', 'MICHA MOMO',
    'SAWA', 'BECCA', 'MARK', 'LARA', 'DRE', 'BASO', 'GREEK MOM', 'RAV', 'KVK', 'ELKE', 'BENNI', 'PAUL', 'LEHMANN', 'RIM', 'BASTI', 'BRIAN', 'ELLI',
    'MAG', 'MEB', 'ALI', 'BIG A', 'PUYAN', 'JERRY', 'CARSPOTTER', 'OBAMA', 'MUTTI', 'HARDEN', 'SGA', 'YE', 'BIANCA', 'R9', 'NEYMAR', 'YOUNG CRIS', 'CR7', 'DRAKE',
    'SEXYYRED', '6IX9INE', 'SPEED', 'HARALD', 'ELON', 'KIM', 'OPRAH', 'EINSTEIN', 'LEO', 'ESCOBAR', 'MARADONNA', 'JA', 'USAIN',
    ...unlockableCarOrder.map(type => `car:${type}`), 'goat'
  ];

  const screens = { menu: $('#menu'), characters: $('#characterScreen'), collection: $('#collectionScreen'), shop: $('#shopScreen'), opponents: $('#opponentScreen'), leaderboard: $('#leaderboardScreen'), game: $('#gameScreen') };
  const canvas = $('#gameCanvas');
  const ctx = canvas.getContext('2d');
  const scoreNode = $('#score');
  const starsNode = $('#stars');
  const blackCoinsNode = $('#blackCoins');
  const powerHud = $('#powerHud');
  const hennessyHud = $('#hennessyHud');
  const hennessyCountHud = $('#hennessyCountHud');
  const tunTunCountHud = $('#tunTunCountHud');
  const sfxToggle = $('#sfxToggle');
  const eventBanner = $('#eventBanner');
  const milestoneBanner = $('#milestoneBanner');
  const dragHint = $('#dragHint');
  const gameOverPanel = $('#gameOver');
  const touchDevice = matchMedia('(pointer: coarse)').matches || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const lowPowerMode = touchDevice || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const maxCanvasRatio = lowPowerMode ? 1.25 : 1.6;
  const effectScale = lowPowerMode ? .52 : 1;
  const maxParticles = lowPowerMode ? 76 : 150;
  let cachedBackgroundGradient = null;
  let cachedBackgroundGradientKey = '';
  let lastHudScore = -1;
  let lastHennessyText = '';
  let lastPowerHudMarkup = '';
  let lastPreviewFrame = 0;
  let menuPreviewKey = '';
  const characterOutlineCanvas = document.createElement('canvas');
  const characterOutlineContext = characterOutlineCanvas.getContext('2d');

  const idle = window.requestIdleCallback || (callback => setTimeout(() => callback({ timeRemaining: () => 8 }), 60));
  const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><rect width="24" height="24" rx="6" fill="#f4eee2"/><path d="M7 13h10M9 9h6M10 17h4" stroke="#9b88a5" stroke-width="2" stroke-linecap="round"/></svg>`;
  const FALLBACK_IMAGE_SRC = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(fallbackSvg)}`;
  const PLACEHOLDER_IMAGE_SRC = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
  const AssetManager = (() => {
    const images = new Map();
    const preferredFormats = ['webp', 'avif'];
    const listeners = new Map();
    const resolveSrc = src => src;
    const notify = src => (listeners.get(src) || []).forEach(callback => callback(images.get(src)?.image));
    const getRecord = src => images.get(resolveSrc(src));
    const getImage = src => {
      const finalSrc = resolveSrc(src);
      if (!images.has(finalSrc)) {
        const image = new Image();
        image.decoding = 'async';
        images.set(finalSrc, { image, promise: null, status: 'idle', requestedAt: 0, preferredFormats });
      }
      return images.get(finalSrc).image;
    };
    const loadImage = (src, priority = 'normal') => {
      const finalSrc = resolveSrc(src);
      const record = images.get(finalSrc) || { image: getImage(finalSrc), promise: null, status: 'idle', requestedAt: 0, preferredFormats };
      if (record.status === 'loaded') return Promise.resolve(record.image);
      if (record.promise) return record.promise;
      record.status = 'loading';
      record.requestedAt = Date.now();
      if (priority === 'high') record.image.fetchPriority = 'high';
      record.promise = new Promise(resolve => {
        const finishLoaded = () => {
          record.status = 'loaded';
          notify(finalSrc);
          resolve(record.image);
        };
        record.image.onload = () => {
          if (record.image.decode) record.image.decode().then(finishLoaded).catch(finishLoaded);
          else finishLoaded();
        };
        record.image.onerror = () => {
          record.status = 'error';
          record.image.src = FALLBACK_IMAGE_SRC;
          notify(finalSrc);
          resolve(record.image);
        };
        record.image.src = finalSrc;
      });
      images.set(finalSrc, record);
      return record.promise;
    };
    const loadMany = (sources, priority = 'normal') => Promise.all([...new Set(sources.filter(Boolean))].map(src => loadImage(src, priority)));
    const onReady = (src, callback) => {
      const finalSrc = resolveSrc(src);
      const record = images.get(finalSrc);
      if (record?.status === 'loaded' || record?.status === 'error') {
        callback(record.image);
        return;
      }
      listeners.set(finalSrc, [...(listeners.get(finalSrc) || []), callback]);
    };
    const hydrateImage = (element, src, priority = 'normal') => {
      if (!element || !src) return;
      const record = getRecord(src);
      if (record?.status === 'loaded' || record?.status === 'error') {
        element.src = record.image.src || src;
        element.classList.remove('is-loading');
        element.classList.add('managed-image', 'is-loaded');
        return;
      }
      element.classList.add('managed-image', 'is-loading');
      element.src = PLACEHOLDER_IMAGE_SRC;
      loadImage(src, priority).then(image => {
        element.src = image.src || src;
        element.classList.remove('is-loading');
        element.classList.add('is-loaded');
      });
    };
    const loadStaggered = (sources, visibleCount = 10, batchSize = 6) => {
      const unique = [...new Set(sources.filter(Boolean))];
      unique.slice(0, visibleCount).forEach(src => loadImage(src, 'high'));
      let index = visibleCount;
      const pump = () => {
        const stopAt = Math.min(index + batchSize, unique.length);
        for (; index < stopAt; index += 1) loadImage(unique[index], 'low');
        if (index < unique.length) idle(pump);
      };
      if (index < unique.length) idle(pump);
    };
    const warmCache = (sources, firstBatch = 18, batchSize = 8) => loadStaggered(sources, firstBatch, batchSize);
    const isLoaded = src => {
      const record = getRecord(src);
      return record?.status === 'loaded' || record?.status === 'error';
    };
    return { getImage, loadImage, loadMany, hydrateImage, loadStaggered, warmCache, onReady, isLoaded };
  })();

  const characterImages = new Proxy([], {
    get: (target, key) => Number.isInteger(Number(key)) && characters[Number(key)] ? AssetManager.getImage(characters[Number(key)].image) : target[key]
  });
  const opponentBackgroundImages = new Proxy([], {
    get: (target, key) => Number.isInteger(Number(key)) && opponents[Number(key)] ? AssetManager.getImage(opponents[Number(key)].background) : target[key]
  });
  const carImages = new Proxy({}, {
    get: (target, key) => carSpecs[key] ? AssetManager.getImage(carSpecs[key].asset) : target[key]
  });
  const blackCoinImage = AssetManager.getImage('assets/black_coin.png');
  const hennessyImage = AssetManager.getImage('assets/hennessy_bottle.png');
  const shoeImage = AssetManager.getImage('assets/thrown_shoe.png');
  const bigDilfImage = AssetManager.getImage('assets/opponent_big_dilf.png');
  const chestnutImage = AssetManager.getImage('assets/opponent_chestnut.png');
  const hotDogImage = AssetManager.getImage('assets/hot_dog.png');
  const fireHotDogsImage = AssetManager.getImage('assets/fire_hot_dogs.png');

  const previewCanvases = [];
  let selectedCharacter = 0;
  let selectedOpponent = 0;
  let activeChallengeIndex = -1;
  let activeChallengeCarType = '';
  let activeSpecialChallenge = '';
  let activeShopPreview = null;
  let collectionSort = 'date';
  let collectionType = 'skins';
  let collectionSearchTerm = '';
  let shopSearchTerm = '';
  let unlockableFilter = 'open';
  let activeLeaderboardLevel = 'big_dilf';
  let leaderboardRefreshTimer = 0;
  let leaderboardIsLoading = false;
  let width = 390;
  let height = 844;
  let ratio = 1;
  let animationId = 0;
  let lastTime = 0;
  let elapsed = 0;
  let playing = false;
  let paused = false;
  let climbed = 0;
  let score = 0;
  let runCoins = 0;
  let runBlackCoins = 0;
  let runCarType = 'beetle';
  let jumpStreak = 0;
  let platforms = [];
  let stars = [];
  let blackCoinPickups = [];
  let shoePickups = [];
  let thrownBottles = [];
  let fireHotDogs = [];
  let cars = [];
  let particles = [];
  let floatingTexts = [];
  let ride = null;
  let lastCarScore = -900;
  let lastBlackCoinMeter = -30;
  let lastShoeMeter = -20;
  let nextBossAt = 28;
  let nextFireHotDogsAt = 18;
  let hennessyUntil = 0;
  let hennessyCount = 0;
  let runTunTuns = 0;
  let superJumpUntil = 0;
  let boss = null;
  let screenShake = 0;
  let cameraImpact = 0;
  let cameraLift = 0;
  let landingAnimation = 0;
  let pickupFlash = 0;
  let nextMilestone = 100;
  let milestoneTimer = 0;
  let blackCoinRewardCarry = 0;
  let bannerTimer = 0;
  let opponentHighscoreAtRunStart = 0;
  let pointerActive = false;
  let sfxEnabled = (() => {
    try { return localStorage.getItem('chromeRush.sfxEnabled') !== '0'; }
    catch { return true; }
  })();

  const player = { x: 195, targetX: 195, y: 650, previousY: 650, w: 46, h: 72, vy: 0 };

  function scaledEffectAmount(amount) {
    return Math.max(1, Math.round(amount * effectScale));
  }

  function pushParticle(particle) {
    if (particles.length < maxParticles) particles.push(particle);
  }

  function updateRunHud() {
    if (lastHudScore !== score) {
      scoreNode.textContent = score;
      lastHudScore = score;
    }
  }

  function getHighscore(opponentIndex = selectedOpponent) {
    try { return Number(localStorage.getItem(`mand.highscore.${opponents[opponentIndex].id}`) || 0); }
    catch { return 0; }
  }

  function getBestHighscore() {
    return Math.max(...opponents.map((opponent, index) => getHighscore(index)));
  }

  function saveHighscore(value, opponentIndex = selectedOpponent) {
    if (value <= getHighscore(opponentIndex)) return;
    try { localStorage.setItem(`mand.highscore.${opponents[opponentIndex].id}`, String(value)); } catch { /* Private mode. */ }
  }

  const LEADERBOARD_CONFIG = {
    url: 'https://biwkhwiuctguancnivqk.supabase.co',
    key: 'sb_publishable_bUPHRfSs2TtqnRsvrSViYQ_pzZHkexp',
    table: 'leaderboard'
  };
  const leaderboardLevels = {
    big_dilf: { opponentIndex: 0, label: 'BIG DILF' },
    chestnut: { opponentIndex: 1, label: 'CHESTNUT' }
  };

  function getLeaderboardHeaders(extra = {}) {
    return {
      apikey: LEADERBOARD_CONFIG.key,
      Authorization: `Bearer ${LEADERBOARD_CONFIG.key}`,
      ...extra
    };
  }

  function makePlayerId() {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
    return `player-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function getLeaderboardPlayerId() {
    try {
      let id = localStorage.getItem('chromeRush.leaderboard.playerId');
      if (!id) {
        id = makePlayerId();
        localStorage.setItem('chromeRush.leaderboard.playerId', id);
      }
      return id;
    } catch { return makePlayerId(); }
  }

  function sanitizePlayerName(value) {
    return String(value || '').trim().replace(/\s+/g, ' ').slice(0, 18);
  }

  function getLeaderboardPlayerName() {
    try { return sanitizePlayerName(localStorage.getItem('chromeRush.leaderboard.playerName')) || ''; }
    catch { return ''; }
  }

  function saveLeaderboardPlayerName(name) {
    try { localStorage.setItem('chromeRush.leaderboard.playerName', sanitizePlayerName(name)); } catch { /* Private mode. */ }
  }

  function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.dataset.i18n;
      if (key) node.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
      const key = node.dataset.i18nPlaceholder;
      if (key) node.setAttribute('placeholder', t(key));
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.classList.toggle('selected', button.dataset.language === currentLanguage);
    });
    const musicStart = $('#musicStart');
    if (musicStart) {
      musicStart.setAttribute('aria-label', musicWasStarted ? (isGerman() ? 'Musikvorschau läuft' : 'Music preview is playing') : t('tapAgainMusic'));
      musicStart.title = isGerman() ? 'Für Musik tippen' : 'Tap to start music';
    }
    updateSfxToggle();
    const distanceLabel = document.querySelector('.distance small');
    if (distanceLabel) distanceLabel.textContent = t('distance');
    const pauseDistanceLabel = document.querySelector('.pause-distance span');
    if (pauseDistanceLabel) pauseDistanceLabel.textContent = t('distance');
    const milestoneSmall = document.querySelector('#milestoneBanner small');
    const milestoneSpan = document.querySelector('#milestoneBanner span');
    if (milestoneSmall) milestoneSmall.textContent = t('milestone');
    if (milestoneSpan) milestoneSpan.textContent = t('keepClimbing');
    const pauseTitle = $('#pauseTitle');
    if (pauseTitle) pauseTitle.textContent = isGerman() ? 'PAUSE' : 'PAUSED';
    const resumeButton = $('#resumeButton');
    if (resumeButton) resumeButton.textContent = 'PLAY';
    const pauseMenuButton = $('#pauseMenuButton');
    if (pauseMenuButton) pauseMenuButton.textContent = isGerman() ? 'MENÜ' : 'MENU';
    const restartButton = $('#restartButton');
    if (restartButton) restartButton.textContent = t('restart');
    const menuButton = $('#menuButton');
    if (menuButton) menuButton.textContent = t('backToMenu');
    const gameOverTitle = gameOverPanel?.querySelector('h2');
    if (gameOverTitle) gameOverTitle.textContent = t('gameOver');
    const finalScoreLabel = document.querySelector('.game-over-scores p:first-child span');
    if (finalScoreLabel) finalScoreLabel.textContent = t('score');
    const bigDilfWonLabel = $('#bigDilfWon span');
    if (bigDilfWonLabel) bigDilfWonLabel.textContent = t('bigDilfWon');
    const unlockToastSmall = document.querySelector('#unlockToast small');
    const unlockToastTitle = $('#unlockToastTitle');
    if (unlockToastSmall) unlockToastSmall.textContent = `${t('challengeComplete')} · ${t('readyToClaim')}`;
    if (unlockToastTitle && unlockToastTitle.textContent.includes('UNLOCKABLE')) unlockToastTitle.textContent = isGerman() ? 'NEU FREISCHALTBAR!' : 'NEW UNLOCKABLE!';
    const filterLabels = { open: isGerman() ? 'OFFEN' : 'OPEN', ready: isGerman() ? 'BEREIT' : 'READY', owned: isGerman() ? 'BESITZ' : 'OWNED' };
    document.querySelectorAll('[data-unlockable-filter]').forEach(button => {
      const label = filterLabels[button.dataset.unlockableFilter] || button.dataset.unlockableFilter;
      const count = button.querySelector('b')?.textContent || '0';
      button.innerHTML = `${label} <b>${count}</b>`;
    });
    if (!screens.collection?.classList.contains('hidden')) renderCollection();
    if (!screens.shop?.classList.contains('hidden')) updateShop();
    if (!screens.opponents?.classList.contains('hidden')) updateOpponentHighscores();
    if (!screens.leaderboard?.classList.contains('hidden')) {
      updateLeaderboardProfile();
      loadLeaderboard(activeLeaderboardLevel);
    }
    updateCharacterLocks();
  }

  function setLanguage(language) {
    currentLanguage = language === 'en' ? 'en' : 'de';
    try { localStorage.setItem('chromeRush.language', currentLanguage); } catch { /* Private mode. */ }
    applyLanguage();
  }

  function askForLeaderboardName(force = false) {
    const current = getLeaderboardPlayerName();
    if (current && !force) return current;
    const typed = prompt(t('enterName'), current || '');
    const name = sanitizePlayerName(typed) || current || `PLAYER ${String(getLeaderboardPlayerId()).slice(-4).toUpperCase()}`;
    saveLeaderboardPlayerName(name);
    updateLeaderboardProfile();
    return name;
  }

  function updateLeaderboardProfile() {
    const node = $('#leaderboardPlayerName');
    if (node) node.textContent = getLeaderboardPlayerName() || t('setName');
  }

  function getLeaderboardPayload(levelKey) {
    const level = leaderboardLevels[levelKey];
    if (!level) return null;
    const playerName = getLeaderboardPlayerName() || `PLAYER ${String(getLeaderboardPlayerId()).slice(-4).toUpperCase()}`;
    return {
      player_id: getLeaderboardPlayerId(),
      player_name: playerName,
      level: levelKey,
      highscore: getHighscore(level.opponentIndex),
      skins_owned: getOwnedProgressCharacters().length,
      cars_owned: getOwnedCars().length,
      updated_at: new Date().toISOString()
    };
  }

  function getLeaderboardLevelKeyForOpponent(opponentIndex = selectedOpponent) {
    return Object.entries(leaderboardLevels).find(([, level]) => level.opponentIndex === opponentIndex)?.[0] || 'big_dilf';
  }

  async function uploadLeaderboardScore(levelKey = getLeaderboardLevelKeyForOpponent()) {
    const payload = getLeaderboardPayload(levelKey);
    if (!payload || !payload.player_name) return;
    try {
      await fetch(`${LEADERBOARD_CONFIG.url}/rest/v1/${LEADERBOARD_CONFIG.table}?on_conflict=player_id,level`, {
        method: 'POST',
        headers: getLeaderboardHeaders({
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates,return=minimal'
        }),
        body: JSON.stringify(payload)
      });
    } catch { /* Leaderboard sync should never interrupt gameplay. */ }
  }

  function syncLeaderboardScores() {
    Object.keys(leaderboardLevels).forEach(levelKey => uploadLeaderboardScore(levelKey));
  }

  function formatLeaderboardDate(value) {
    const time = new Date(value).getTime();
    if (!time) return '';
    const minutes = Math.max(1, Math.round((Date.now() - time) / 60000));
    if (minutes < 60) return isGerman() ? `VOR ${minutes} MIN` : `${minutes}M AGO`;
    const hours = Math.round(minutes / 60);
    if (hours < 24) return isGerman() ? `VOR ${hours} STD` : `${hours}H AGO`;
    return isGerman() ? `VOR ${Math.round(hours / 24)} T` : `${Math.round(hours / 24)}D AGO`;
  }

  function getLeaderboardProgressPercent(skinsOwned = 0, carsOwned = 0) {
    const collected = Number(skinsOwned || 0) + Number(carsOwned || 0);
    const total = Math.max(1, getProgressCharacterTotal() + carOrder.length);
    return clamp(Math.round((collected / total) * 100), 0, 100);
  }

  function renderLeaderboardRows(rows = []) {
    const list = $('#leaderboardList');
    if (!list) return;
    if (!rows.length) {
      list.innerHTML = `<div class="leaderboard-empty"><strong>${t('noScoresYet')}</strong><span>${isGerman() ? 'Spiel einen Run und komm zurück.' : 'Play a run and come back.'}</span></div>`;
      return;
    }
    const ownId = getLeaderboardPlayerId();
    list.innerHTML = rows.map((row, index) => {
      const progress = getLeaderboardProgressPercent(row.skins_owned, row.cars_owned);
      return `
        <article class="leaderboard-row${row.player_id === ownId ? ' current-player' : ''}">
          <span class="leaderboard-rank">#${index + 1}</span>
          <div class="leaderboard-name"><strong>${escapeHtml(row.player_name || 'PLAYER')}</strong><small>${formatLeaderboardDate(row.updated_at)}</small></div>
          <div class="leaderboard-score"><strong>${Number(row.highscore || 0)}m</strong><small>${Number(row.skins_owned || 0)} SKINS · ${Number(row.cars_owned || 0)} CARS</small></div>
          <div class="leaderboard-progress-ring" style="--progress: ${progress}%"><span>${progress}%</span></div>
        </article>
      `;
    }).join('');
  }

  async function loadLeaderboard(levelKey = activeLeaderboardLevel) {
    if (leaderboardIsLoading) return;
    leaderboardIsLoading = true;
    const status = $('#leaderboardStatus');
    if (status) status.textContent = t('loading');
    try {
      const url = `${LEADERBOARD_CONFIG.url}/rest/v1/${LEADERBOARD_CONFIG.table}?level=eq.${encodeURIComponent(levelKey)}&select=player_id,player_name,highscore,skins_owned,cars_owned,updated_at&order=highscore.desc`;
      const response = await fetch(url, { headers: getLeaderboardHeaders() });
      if (!response.ok) throw new Error('Leaderboard unavailable');
      const rows = await response.json();
      renderLeaderboardRows(Array.isArray(rows) ? rows : []);
      if (status) status.textContent = `${leaderboardLevels[levelKey]?.label || 'LEVEL'} · ${isGerman() ? 'ALLE SPIELER' : 'ALL PLAYERS'}`;
    } catch {
      renderLeaderboardRows([]);
      if (status) status.textContent = t('offline');
    } finally {
      leaderboardIsLoading = false;
    }
  }

  function openLeaderboard() {
    showScreen('leaderboard');
    updateLeaderboardProfile();
    syncLeaderboardScores();
  }

  function getCharacterHighscore(opponentIndex, characterIndex) {
    try { return Number(localStorage.getItem(`mand.characterHighscore.${opponents[opponentIndex].id}.${characterIndex}`) || 0); }
    catch { return 0; }
  }

  function saveCharacterHighscore(value, opponentIndex = selectedOpponent, characterIndex = selectedCharacter) {
    if (value <= getCharacterHighscore(opponentIndex, characterIndex)) return;
    try { localStorage.setItem(`mand.characterHighscore.${opponents[opponentIndex].id}.${characterIndex}`, String(value)); } catch { /* Private mode. */ }
  }

  function getCharacterBestHighscore(characterIndex) {
    return Math.max(...opponents.map((opponent, opponentIndex) => getCharacterHighscore(opponentIndex, characterIndex)));
  }

  function getVehicleHighscore(opponentIndex, type) {
    try { return Number(localStorage.getItem(`mand.vehicleHighscore.${opponents[opponentIndex].id}.${type}`) || 0); }
    catch { return 0; }
  }

  function saveVehicleHighscore(value, opponentIndex = selectedOpponent, type = runCarType) {
    if (!carSpecs[type] || value <= getVehicleHighscore(opponentIndex, type)) return;
    try { localStorage.setItem(`mand.vehicleHighscore.${opponents[opponentIndex].id}.${type}`, String(value)); } catch { /* Private mode. */ }
  }

  function getVehicleBestHighscore(type) {
    return Math.max(...opponents.map((opponent, opponentIndex) => getVehicleHighscore(opponentIndex, type)));
  }

  function getLoadoutHighscore(opponentIndex, characterIndex, type) {
    try { return Number(localStorage.getItem(`mand.loadoutHighscore.${opponents[opponentIndex].id}.${characterIndex}.${type}`) || 0); }
    catch { return 0; }
  }

  function saveLoadoutHighscore(value, opponentIndex = selectedOpponent, characterIndex = selectedCharacter, type = runCarType) {
    if (!characters[characterIndex] || !carSpecs[type] || value <= getLoadoutHighscore(opponentIndex, characterIndex, type)) return;
    try { localStorage.setItem(`mand.loadoutHighscore.${opponents[opponentIndex].id}.${characterIndex}.${type}`, String(value)); } catch { /* Private mode. */ }
  }

  function getLoadoutBestHighscore(characterIndex, type) {
    return Math.max(...opponents.map((opponent, opponentIndex) => getLoadoutHighscore(opponentIndex, characterIndex, type)));
  }

  function getRoundBest(kind, opponentIndex) {
    try { return Number(localStorage.getItem(`mand.roundBest.${kind}.${opponents[opponentIndex].id}`) || 0); }
    catch { return 0; }
  }

  function updateRoundBest(kind, opponentIndex, value) {
    if (value <= getRoundBest(kind, opponentIndex)) return;
    try { localStorage.setItem(`mand.roundBest.${kind}.${opponents[opponentIndex].id}`, String(value)); } catch { /* Private mode. */ }
  }

  function getCharacterRoundBest(kind, characterIndex) {
    try { return Number(localStorage.getItem(`mand.characterRoundBest.${kind}.${characterIndex}`) || 0); }
    catch { return 0; }
  }

  function updateCharacterRoundBest(kind, characterIndex, value) {
    if (value <= getCharacterRoundBest(kind, characterIndex)) return;
    try { localStorage.setItem(`mand.characterRoundBest.${kind}.${characterIndex}`, String(value)); } catch { /* Private mode. */ }
  }

  function getLoadoutRoundBest(kind, characterIndex, type) {
    try { return Number(localStorage.getItem(`mand.loadoutRoundBest.${kind}.${characterIndex}.${type}`) || 0); }
    catch { return 0; }
  }

  function updateLoadoutRoundBest(kind, characterIndex, type, value) {
    if (value <= getLoadoutRoundBest(kind, characterIndex, type)) return;
    try { localStorage.setItem(`mand.loadoutRoundBest.${kind}.${characterIndex}.${type}`, String(value)); } catch { /* Private mode. */ }
  }

  function getBlackCoins() {
    try { return Number(localStorage.getItem('mand.blackCoins') || 0); }
    catch { return 0; }
  }

  function getLifetimeBlackCoins() {
    try { return Math.max(getBlackCoins(), Number(localStorage.getItem('mand.lifetimeBlackCoins') || 0)); }
    catch { return getBlackCoins(); }
  }

  function addBlackCoin(amount = 1) {
    const total = getBlackCoins() + amount;
    const lifetimeTotal = getLifetimeBlackCoins() + amount;
    try {
      localStorage.setItem('mand.blackCoins', String(total));
      localStorage.setItem('mand.lifetimeBlackCoins', String(lifetimeTotal));
    } catch { /* Private mode. */ }
    return total;
  }

  function getGoldCoins() {
    try {
      const saved = localStorage.getItem('mand.goldCoins');
      if (saved !== null) return Number(saved || 0);
      return Number(localStorage.getItem('cityDash.totalStars') || 0);
    } catch { return 0; }
  }

  function addGoldCoin() {
    const total = getGoldCoins() + 1;
    try { localStorage.setItem('mand.goldCoins', String(total)); } catch { /* Private mode. */ }
    return total;
  }

  function spendGoldCoins(amount) {
    const balance = getGoldCoins();
    if (balance < amount) return false;
    try { localStorage.setItem('mand.goldCoins', String(balance - amount)); } catch { return false; }
    return true;
  }

  function getOwnedCharacters() {
    try {
      const defaultIndex = getDefaultOwnedCharacter();
      const saved = JSON.parse(localStorage.getItem('mand.ownedCharacters') || `[${defaultIndex}]`);
      const valid = Array.isArray(saved) ? saved.filter(index => Number.isInteger(index) && characters[index]) : [];
      return [...new Set([defaultIndex, ...valid])];
    } catch { return [getDefaultOwnedCharacter()]; }
  }

  function isProgressCharacter(index) {
    return Boolean(characters[index] && !characters[index].hiddenUnlockable);
  }

  function getProgressCharacterTotal() {
    return characters.filter((_, index) => isProgressCharacter(index)).length;
  }

  function getOwnedProgressCharacters() {
    return getOwnedCharacters().filter(isProgressCharacter);
  }

  function saveOwnedCharacters(indices) {
    const defaultIndex = getDefaultOwnedCharacter();
    const normalized = [...new Set([defaultIndex, ...indices])].filter(index => characters[index]);
    try {
      const acquiredAt = JSON.parse(localStorage.getItem('mand.skinAcquiredAt') || '{}');
      const now = Date.now();
      normalized.forEach((index, position) => {
        if (acquiredAt[index] === undefined) acquiredAt[index] = index === defaultIndex ? 0 : now + position;
      });
      localStorage.setItem('mand.skinAcquiredAt', JSON.stringify(acquiredAt));
      localStorage.setItem('mand.ownedCharacters', JSON.stringify(normalized));
    } catch { /* Private mode. */ }
  }

  function hasStarterSkinChoice() {
    return false;
  }

  function getStoredStarterSkinIndex() {
    return 0;
  }

  function getDefaultOwnedCharacter() {
    return 0;
  }

  function getCharacterShopCost(index) {
    return characters[index]?.cost || 0;
  }

  function getCharacterShopOrder() {
    return starterSkinOrder.slice();
  }

  function shouldShowStarterSkinSelect() {
    return false;
  }

  function getCollectionOrder() {
    const owned = getOwnedCharacters();
    const defaultIndex = getDefaultOwnedCharacter();
    let acquiredAt = {};
    try { acquiredAt = JSON.parse(localStorage.getItem('mand.skinAcquiredAt') || '{}'); } catch { /* Use stored ownership order. */ }
    return owned.slice().sort((first, second) => {
      if (first === defaultIndex) return -1;
      if (second === defaultIndex) return 1;
      const firstTime = acquiredAt[first] ?? owned.indexOf(first) + 1;
      const secondTime = acquiredAt[second] ?? owned.indexOf(second) + 1;
      return firstTime - secondTime;
    });
  }

  function isCharacterUnlocked(index) {
    return getOwnedCharacters().includes(index);
  }

  const skinIndex = name => characters.findIndex(skin => skin.name === name);
  const ownsSkin = name => getOwnedCharacters().includes(skinIndex(name));
  const ownsCar = type => getOwnedCars().includes(type);
  function hasExactFinish(value, characterIndex = -1) {
    try {
      if (value === 69 && characterIndex < 0 && localStorage.getItem('mand.finishedExact69') === '1') return true;
      const scores = JSON.parse(localStorage.getItem('mand.exactFinishScores') || '{}');
      if (characterIndex < 0) return scores[value] === true;
      const skinScores = JSON.parse(localStorage.getItem('mand.exactFinishSkinScores') || '{}');
      return skinScores[`${characterIndex}:${value}`] === true;
    } catch { return false; }
  }
  function hasExactFinishOpponent(value, opponentIndex) {
    try {
      const opponentScores = JSON.parse(localStorage.getItem('mand.exactFinishOpponentScores') || '{}');
      return opponentScores[`${opponentIndex}:${value}`] === true;
    } catch { return false; }
  }
  function hasExactFinishSkinOpponent(value, characterIndex, opponentIndex) {
    try {
      const scores = JSON.parse(localStorage.getItem('mand.exactFinishSkinOpponentScores') || '{}');
      return scores[`${characterIndex}:${opponentIndex}:${value}`] === true;
    } catch { return false; }
  }
  function saveExactFinish(value) {
    try {
      const scores = JSON.parse(localStorage.getItem('mand.exactFinishScores') || '{}');
      scores[value] = true;
      localStorage.setItem('mand.exactFinishScores', JSON.stringify(scores));
      const skinScores = JSON.parse(localStorage.getItem('mand.exactFinishSkinScores') || '{}');
      skinScores[`${selectedCharacter}:${value}`] = true;
      localStorage.setItem('mand.exactFinishSkinScores', JSON.stringify(skinScores));
      const opponentScores = JSON.parse(localStorage.getItem('mand.exactFinishOpponentScores') || '{}');
      opponentScores[`${selectedOpponent}:${value}`] = true;
      localStorage.setItem('mand.exactFinishOpponentScores', JSON.stringify(opponentScores));
      const skinOpponentScores = JSON.parse(localStorage.getItem('mand.exactFinishSkinOpponentScores') || '{}');
      skinOpponentScores[`${selectedCharacter}:${selectedOpponent}:${value}`] = true;
      localStorage.setItem('mand.exactFinishSkinOpponentScores', JSON.stringify(skinOpponentScores));
      if (value === 69) localStorage.setItem('mand.finishedExact69', '1');
    } catch { /* Private mode. */ }
  }
  function hasShoesBottlesRun(target = 20) {
    try { return localStorage.getItem(`mand.shoesBottlesRun.${target}`) === '1'; }
    catch { return false; }
  }
  function saveSpecialRunCombos() {
    if (runTunTuns < 20 || hennessyCount < 20) return;
    try { localStorage.setItem('mand.shoesBottlesRun.20', '1'); } catch { /* Private mode. */ }
  }
  const distanceState = (value, target, text, suffix = '') => challengeState(value >= target, text, `${Math.min(value, target)} / ${target}m${suffix ? ` · ${suffix}` : ''}`);
  const collectionState = (skins, cars, text) => {
    const items = [...skins.map(name => [name, ownsSkin(name)]), ...cars.map(type => [carSpecs[type]?.name || type, ownsCar(type)])];
    return challengeState(items.every(([, owned]) => owned), text, items.map(([name, owned]) => `${name} ${owned ? '✓' : '○'}`).join(' · '));
  };

  function getChallengeState(index) {
    const character = characters[index];
    const key = character?.challenge;
    if (!key) return challengeState(true, '', '');
    const bestSkin = (name, opponent = -1) => opponent < 0 ? getCharacterBestHighscore(skinIndex(name)) : getCharacterHighscore(opponent, skinIndex(name));
    const bestLoadout = (name, type, opponent = -1) => opponent < 0 ? getLoadoutBestHighscore(skinIndex(name), type) : getLoadoutHighscore(opponent, skinIndex(name), type);
    switch (key) {
      case 'momPete250': return challengeState(bestSkin('MOM') >= 250 && bestSkin('PETE') >= 250 && bestSkin('ELKE') >= 500, 'Reach 250m with MOM, 250m with PETE and 500m with ELKE', `MOM ${Math.min(bestSkin('MOM'), 250)}/250m · PETE ${Math.min(bestSkin('PETE'), 250)}/250m · ELKE ${Math.min(bestSkin('ELKE'), 500)}/500m`);
      case 'blackBigDilf10': return distanceState(getRoundBest('black', 0), 10, 'Collect 10 Black Coins in one Run against Big Dilf', 'BLACK COINS');
      case 'a2wDonr': return collectionState(['A2W', 'DONR'], [], 'Collect A2W and DONR');
      case 'mbeezy1000': return distanceState(bestSkin('MBEEZY'), 1000, 'Reach 1000m with MBEEZY', 'MBEEZY');
      case 'viviFabel': return collectionState(['FABEL', 'VIVI'], [], 'Collect FABEL and VIVI');
      case 'kristall': {
        const collected = ['FABEL', 'VIVI', 'URCH', 'TONE'].filter(ownsSkin).length;
        const meters = bestSkin('BIENMACHINE');
        return challengeState(collected === 4 && meters >= 500, 'Collect FABEL, VIVI, URCH, TONE and reach 500m with BIENMACHINE', `${collected}/4 SKINS · BIENMACHINE ${Math.min(meters, 500)}/500m`);
      }
      case 'bigDilfUrch500': return distanceState(bestSkin('URCH', 0), 500, 'Reach 500m with URCH against Big Dilf', 'URCH');
      case 'michaChestnut750': return distanceState(bestSkin('MICHA', 1), 300, 'Reach 300m with MICHA against Chestnut', 'MICHA');
      case 'chestnutTone250': return distanceState(bestSkin('TONE', 1), 250, 'Reach 250m with TONE against Chestnut', 'TONE');
      case 'hustlauiUrch': return collectionState(['HUSTLAUI', 'URCH'], [], 'Collect HUSTLAUI and URCH');
      case 'sawaFabel800': return distanceState(bestSkin('FABEL'), 800, 'Reach 800m with FABEL', 'FABEL');
      case 'markYoungCrisCr7': return collectionState(['YOUNG CRIS', 'CR7'], [], 'Collect YOUNG CRIS and CR7');
      case 'lara250': return distanceState(getBestHighscore(), 250, 'Reach 250m');
      case 'benBugatti1000': {
        const meters = Math.max(...['chiron', 'bugattiVeyron', 'bugattiTourbillon', 'bugattiMistral'].map(type => bestLoadout('BEN', type)));
        return distanceState(meters, 1000, 'Reach 1000m with BEN using any Bugatti', 'BEN + BUGATTI');
      }
      case 'ben500': return distanceState(bestSkin('BEN'), 500, 'Reach 500m with BEN', 'BEN');
      case 'greekMomRav1000': return distanceState(bestSkin('RAV'), 1000, 'Reach 1000m with RAV', 'RAV');
      case 'peteMercedes300sl500': return distanceState(getVehicleBestHighscore('mercedes300sl'), 500, 'Reach 500m using the Mercedes 300SL', 'MERCEDES 300SL');
      case 'vivi650': return distanceState(getBestHighscore(), 650, 'Reach 650m');
      case 'tunTun15': return distanceState(Math.max(...opponents.map((_, i) => getRoundBest('tuntun', i))), 15, 'Collect 15 Shoes in one Run', 'SHOES');
      case 'tunTun25': return distanceState(Math.max(...opponents.map((_, i) => getRoundBest('tuntun', i))), 25, 'Collect 25 Shoes in one Run', 'SHOES');
      case 'hennessyVro20': return distanceState(getCharacterRoundBest('hennessy', skinIndex('VRO')), 20, 'Collect 20 Hennessy Bottles in one Run using VRO', 'HENNESSY');
      case 'georgeMx5_300': return distanceState(bestLoadout('GEORGE', 'mx5'), 300, 'Reach 300m with GEORGE using Mazda MX5', 'GEORGE + MX5');
      case 'score800': return distanceState(getBestHighscore(), 800, 'Reach 800m');
      case 'ebikeChestnut300': return distanceState(getVehicleHighscore(1, 'eBike'), 125, 'Reach 125m using the E-Bike against Chestnut', 'E-BIKE');
      case 'samFiat500': return distanceState(bestLoadout('SAM', 'fiatGucci'), 500, 'Reach 500m with SAM using Fiat 500 “Gucci”', 'SAM + FIAT 500');
      case 'elkeMom1000': return distanceState(bestSkin('MOM'), 1000, 'Reach 1000m with MOM', 'MOM');
      case 'urchExact200': return challengeState(hasExactFinish(200), 'Finish a Run with exactly 200m', hasExactFinish(200) ? '200m FINISH ✓' : '0 / 1 EXACT 200m FINISH');
      case 'lehmannExact200': return challengeState(hasExactFinish(200, skinIndex('PATTY')), 'Finish a Run with exactly 200m with Patty', hasExactFinish(200, skinIndex('PATTY')) ? 'PATTY 200m FINISH ✓' : '0 / 1 PATTY EXACT 200m FINISH');
      case 'rimLehmann850': return distanceState(bestSkin('LEHMANN'), 850, 'Reach 850m with LEHMANN', 'LEHMANN');
      case 'cars15Brian': return challengeState(ownsSkin('BRIAN') && getBestHighscore() >= 800, 'Collect BRIAN and reach 800m', `BRIAN ${ownsSkin('BRIAN') ? '✓' : '○'} · ${Math.min(getBestHighscore(), 800)}/800m`);
      case 'goldRun400': return distanceState(Math.max(...opponents.map((_, i) => getRoundBest('gold', i))), 400, 'Collect 400 Coins in one Run', 'COINS');
      case 'basti250Brian500': return challengeState(bestSkin('BASTI') >= 250 && bestSkin('BRIAN') >= 500, 'Reach 250m with BASTI and 500m with BRIAN', `BASTI ${Math.min(bestSkin('BASTI'), 250)}/250m · BRIAN ${Math.min(bestSkin('BRIAN'), 500)}/500m`);
      case 'magNessi500': return distanceState(bestSkin('NESSI'), 500, 'Reach 500m with NESSI', 'NESSI');
      case 'mebAli1000': return distanceState(bestSkin('ALI'), 1000, 'Reach 1000m with ALI', 'ALI');
      case 'aliBigAElli800': return challengeState(ownsSkin('BIG A') && bestSkin('ELLI') >= 800, 'Collect BIG A and reach 800m with ELLI', `BIG A ${ownsSkin('BIG A') ? '✓' : '○'} · ELLI ${Math.min(bestSkin('ELLI'), 800)}/800m`);
      case 'bigACollect': return challengeState(hasExactFinish(69), 'Finish a run with exactly 69m', hasExactFinish(69) ? '69m FINISH ✓' : '0 / 1 EXACT 69m FINISH');
      case 'jerryExact233': return challengeState(hasExactFinish(233), 'Finish a Run with exactly 233m', hasExactFinish(233) ? '233m FINISH ✓' : '0 / 1 EXACT 233m FINISH');
      case 'bubblepatGoldExact': return challengeState(hasExactFinish(2295) || hasExactFinish(1810), 'Finish a Run with exactly 2295m or 1810m', hasExactFinish(2295) ? '2295m FINISH ✓' : hasExactFinish(1810) ? '1810m FINISH ✓' : '0 / 1 EXACT 2295m OR 1810m FINISH');
      case 'rimiboyGoldExact': return challengeState(hasExactFinish(1715) || hasExactFinish(1810), 'Finish a Run with exactly 1715m or 1810m', hasExactFinish(1715) ? '1715m FINISH ✓' : hasExactFinish(1810) ? '1810m FINISH ✓' : '0 / 1 EXACT 1715m OR 1810m FINISH');
      case 'jgIlovevroExact': return challengeState(hasExactFinish(1384) || hasExactFinish(1810), 'Finish a Run with exactly 1384m or 1810m', hasExactFinish(1384) ? '1384m FINISH ✓' : hasExactFinish(1810) ? '1810m FINISH ✓' : '0 / 1 EXACT 1384m OR 1810m FINISH');
      case 'goldFabel500': return distanceState(getCharacterRoundBest('gold', skinIndex('FABEL')), 500, 'Collect 500 Coins in one Run with FABEL', 'COINS');
      case 'carspotterAllCars': return challengeState(getOwnedCars().length === carOrder.length, 'Collect every Car', `${getOwnedCars().length} / ${carOrder.length} CARS`);
      case 'phantom500': return distanceState(getVehicleBestHighscore('rollsPhantom'), 500, 'Reach 500m using Rolls Royce Phantom', 'PHANTOM');
      case 'obamaVeyron850': return distanceState(bestLoadout('OBAMA', 'bugattiVeyron'), 850, 'Reach 850m with OBAMA using Bugatti Veyron', 'OBAMA + VEYRON');
      case 'chestnut400': return distanceState(getHighscore(1), 300, 'Reach 300m against Chestnut');
      case 'phantomMansory': return collectionState([], ['rollsPhantom', 'mansoryGle'], 'Collect Rolls Royce Phantom and Mansory GLE');
      case 'black50': return distanceState(getLifetimeBlackCoins(), 50, 'Collect 50 Black Coins', 'BLACK COINS');
      case 'yeMaybach': return collectionState(['YE'], ['maybachS'], 'Collect YE and Maybach S');
      case 'f50_400': return distanceState(getVehicleBestHighscore('f50'), 400, 'Reach 400m using Ferrari F50', 'FERRARI F50');
      case 'r9_750': return distanceState(bestSkin('R9'), 750, 'Reach 750m using R9', 'R9');
      case 'bigDilf600': return distanceState(getHighscore(0), 600, 'Reach 600m against Big Dilf');
      case 'youngCris1000': return distanceState(bestSkin('YOUNG CRIS'), 1000, 'Reach 1000m with YOUNG CRIS', 'YOUNG CRIS');
      case 'chestnutUnlocked': return challengeState(isOpponentUnlocked(1), 'Unlock Chestnut Level', isOpponentUnlocked(1) ? 'CHESTNUT UNLOCKED' : 'CHESTNUT LOCKED');
      case 'drake500': return distanceState(bestSkin('DRAKE'), 500, 'Reach 500m using DRAKE', 'DRAKE');
      case 'cars20': return challengeState(getOwnedCars().length >= 20, 'Collect 20 Cars', `${Math.min(getOwnedCars().length, 20)} / 20 CARS`);
      case 'speedCr7_1250': return distanceState(bestSkin('CR7'), 1250, 'Reach 1250m with CR7', 'CR7');
      case 'haraldExact400Chestnut': return challengeState(hasExactFinishOpponent(67, 1), 'Finish a Run with exactly 67m against Chestnut', hasExactFinishOpponent(67, 1) ? 'CHESTNUT 67m FINISH ✓' : '0 / 1 CHESTNUT EXACT 67m FINISH');
      case 'elonPolestar500': return distanceState(getVehicleBestHighscore('polestar4'), 500, 'Reach 500m using the Polestar 4', 'POLESTAR 4');
      case 'yeBianca': return collectionState(['YE', 'BIANCA'], [], 'Collect YE and BIANCA');
      case 'oprahShoesBottles20': return challengeState(hasShoesBottlesRun(20), 'Collect 20 Shoes and 20 Bottles in one Run', hasShoesBottlesRun(20) ? '20 SHOES + 20 BOTTLES ✓' : `${Math.min(runTunTuns, 20)}/20 SHOES · ${Math.min(hennessyCount, 20)}/20 BOTTLES`);
      case 'einstein1300': return distanceState(getBestHighscore(), 1300, 'Reach 1300m');
      case 'leo1400': return distanceState(getBestHighscore(), 1400, 'Reach 1400m');
      case 'goldRun800': return distanceState(Math.max(...opponents.map((_, i) => getRoundBest('gold', i))), 800, 'Collect 800 Gold Coins in one Run', 'COINS');
      case 'brian1250': return distanceState(bestSkin('BRIAN'), 1250, 'Reach 1250m with BRIAN', 'BRIAN');
      case 'jaguar500': return distanceState(getVehicleBestHighscore('jaguarXj220'), 500, 'Reach 500m with Jaguar XJ220', 'JAGUAR XJ220');
      case 'usain2000': return distanceState(getBestHighscore(), 2000, 'Reach 2000m');
      default: return challengeState(false, 'Challenge unavailable', 'LOCKED');
    }
  }

  function getCarChallengeState(type) {
    const key = carSpecs[type]?.challenge;
    const bestSkin = name => getCharacterBestHighscore(skinIndex(name));
    const bestLoadout = (name, car, opponent = -1) => opponent < 0 ? getLoadoutBestHighscore(skinIndex(name), car) : getLoadoutHighscore(opponent, skinIndex(name), car);
    switch (key) {
      case 'score150': return distanceState(getBestHighscore(), 150, 'Reach 150m');
      case 'rimExact1': return challengeState(hasExactFinish(1, skinIndex('RIM')), 'Reach exactly 1m with RIM', hasExactFinish(1, skinIndex('RIM')) ? 'RIM 1m FINISH ✓' : '0 / 1 RIM EXACT 1m FINISH');
      case 'urchScore100': return challengeState(ownsSkin('URCH') && bestSkin('URCH') >= 100, 'Unlock URCH and reach 100m', `URCH ${ownsSkin('URCH') ? '✓' : '○'} · ${Math.min(bestSkin('URCH'), 100)}/100m`);
      case 'basoExact350': return challengeState(hasExactFinish(350, skinIndex('BASO')), 'Reach exactly 350m with BASO', hasExactFinish(350, skinIndex('BASO')) ? 'BASO 350m FINISH ✓' : '0 / 1 BASO EXACT 350m FINISH');
      case 'sgaHarald500': return challengeState(ownsSkin('SGA') && ownsSkin('HARALD') && getBestHighscore() >= 500, 'Collect SGA, HARALD and reach 500m with any Skin', `SGA ${ownsSkin('SGA') ? '✓' : '○'} · HARALD ${ownsSkin('HARALD') ? '✓' : '○'} · ${Math.min(getBestHighscore(), 500)}/500m`);
      case 'patty450': return distanceState(bestSkin('PATTY'), 450, 'Reach 450m with PATTY', 'PATTY');
      case 'bigmax250': return distanceState(bestSkin('BIGMAX'), 250, 'Reach 250m using BIGMAX', 'BIGMAX');
      case 'goldEbBike50': return distanceState(Math.max(...characters.map((_, i) => getLoadoutRoundBest('gold', i, 'eBike'))), 50, 'Collect 50 Gold Coins in one Run using E-Bike', 'COINS');
      case 'dre300': return distanceState(bestSkin('DRE'), 300, 'Reach 300m with DRE', 'DRE');
      case 'samScore450': return challengeState(ownsSkin('SAM') && getBestHighscore() >= 450, 'Collect SAM and reach 450m with any Skin', `SAM ${ownsSkin('SAM') ? '✓' : '○'} · ${Math.min(getBestHighscore(), 450)}/450m`);
      case 'score1000': return distanceState(getBestHighscore(), 1000, 'Reach 1000m');
      case 'pete300sl400': return distanceState(bestLoadout('PETE', 'mercedes300sl'), 400, 'Reach 400m with PETE using Mercedes 300SL', 'PETE + 300SL');
      case 'yeChestnut1000': return challengeState(
        hasExactFinishSkinOpponent(99, skinIndex('YE'), 1),
        'Reach exactly 99m with YE against Chestnut',
        hasExactFinishSkinOpponent(99, skinIndex('YE'), 1) ? 'YE CHESTNUT 99m FINISH ✓' : '0 / 1 YE CHESTNUT EXACT 99m FINISH'
      );
      case 'bentleyHermesCollect': return collectionState([], ['fiatGucci', 'rollsPhantom', 'maybachS'], 'Collect Fiat 500 “Gucci”, Rolls Royce Phantom and Maybach S');
      case 'neymarR9': return collectionState(['NEYMAR', 'R9'], [], 'Collect NEYMAR and R9');
      case 'chestnut500': return distanceState(getHighscore(1), 150, 'Reach 150m against Chestnut');
      case 'hennessyJa15': return distanceState(getLoadoutRoundBest('hennessy', skinIndex('JA'), 'lamboUrus'), 15, 'Catch 15 Hennessy Bottles with JA in one Run', 'HENNESSY');
      case 'mercedesGle750': return distanceState(getVehicleBestHighscore('mercedesGle'), 750, 'Reach 750m with Mercedes GLE', 'MERCEDES GLE');
      case 'brabus6x6Collect': return challengeState(ownsCar('mansoryGle') && ownsSkin('RIM'), 'Collect Mansory GLE and RIM', `MANSORY GLE ${ownsCar('mansoryGle') ? '✓' : '○'} · RIM ${ownsSkin('RIM') ? '✓' : '○'}`);
      case 'sexyyred': return collectionState(['SEXYYRED'], [], 'Collect SEXYYRED');
      case 'cars10Obama': return challengeState(getOwnedCars().length >= 10 && ownsSkin('OBAMA'), 'Collect 10 Cars and OBAMA', `${Math.min(getOwnedCars().length, 10)}/10 CARS · OBAMA ${ownsSkin('OBAMA') ? '✓' : '○'}`);
      case 'benniLambo300': return distanceState(Math.max(...['huracan', 'lamboMiura', 'lamboUrus'].map(car => bestLoadout('BENNI', car))), 300, 'Reach 300m with BENNI using any Lamborghini', 'BENNI + LAMBORGHINI');
      case 'maseratiMc20FordGt': return challengeState(getBestHighscore() >= 700 && ownsCar('fordGt'), 'Reach 700m and collect Ford GT', `${Math.min(getBestHighscore(), 700)}/700m · FORD GT ${ownsCar('fordGt') ? '✓' : '○'}`);
      case 'mclaren720sCollect': return challengeState(getOwnedProgressCharacters().length >= 25 && ownsCar('lamboCountach'), 'Collect 25 Skins and Lamborghini Countach', `${Math.min(getOwnedProgressCharacters().length, 25)}/25 SKINS · COUNTACH ${ownsCar('lamboCountach') ? '✓' : '○'}`);
      case 'fourFerraris': return collectionState([], ['f40', 'f50', 'enzo', 'laferrari'], 'Collect Ferrari F40, F50, Enzo and LaFerrari');
      case 'f40BigDilf500': return distanceState(getVehicleHighscore(0, 'f40'), 500, 'Reach 500m against Big Dilf using Ferrari F40', 'F40');
      case 'porscheGt3Carrera': return collectionState([], ['porscheGt3', 'carreraGT'], 'Collect Porsche GT3 “BigSexy” and Porsche Carrera GT');
      case 'everyMercedes': {
        const cars = ['mercedes300sl', 'mercedesGle', 'slrMclaren', 'slrStirling', 'amgOne', 'mercedesVisionOneConcept'];
        return challengeState(cars.every(ownsCar), 'Collect every single Mercedes', `${cars.filter(ownsCar).length} / ${cars.length} MERCEDES`);
      }
      case 'greekMom1000': return distanceState(bestSkin('GREEK MOM'), 1000, 'Reach 1000m with GREEK MOM', 'GREEK MOM');
      case 'bugattiEb1Jesko': return challengeState(getBestHighscore() >= 1300 && ownsCar('jesko'), 'Reach 1300m and collect Koenigsegg Jesko', `${Math.min(getBestHighscore(), 1300)}/1300m · JESKO ${ownsCar('jesko') ? '✓' : '○'}`);
      case 'bigASlrStirling1000': return distanceState(bestLoadout('BIG A', 'slrStirling'), 1000, 'Reach 1000m with SLR Stirling Moss using BIG A', 'BIG A + SLR');
      case 'neymar750': return distanceState(bestSkin('NEYMAR'), 750, 'Reach 750m with NEYMAR', 'NEYMAR');
      case 'allPorscheChestnut1250': {
        const cars = ['porsche911', 'carreraGT', 'porscheGt3', 'porscheGt1'];
        return challengeState(cars.every(ownsCar) && getHighscore(1) >= 700, 'Collect every Porsche Model and reach 700m against Chestnut', `${cars.filter(ownsCar).length}/${cars.length} PORSCHE · ${Math.min(getHighscore(1), 700)}/700m`);
      }
      case 'blackRavStirling20': return distanceState(getLoadoutRoundBest('black', skinIndex('RAV'), 'slrStirling'), 20, 'Collect 20 Black Coins in one Run with RAV using SLR Stirling Moss', 'BLACK COINS');
      case 'everyFerrari': {
        const cars = ['f40', 'f50', 'ferrari288', 'enzo', 'laferrari', 'f80', 'ferrariSp1'];
        return challengeState(cars.every(ownsCar), 'Collect every Ferrari', `${cars.filter(ownsCar).length} / ${cars.length} FERRARIS`);
      }
      case 'astonValkyrieBlack35': return challengeState(ownsCar('amgOne') && Math.max(...opponents.map((_, i) => getRoundBest('black', i))) >= 35, 'Unlock Mercedes AMG One and collect 35 Black Coins in one Run', `AMG ONE ${ownsCar('amgOne') ? '✓' : '○'} · ${Math.min(Math.max(...opponents.map((_, i) => getRoundBest('black', i))), 35)}/35 BLACK COINS`);
      case 'cr7Chiron850': return distanceState(bestLoadout('CR7', 'chiron'), 850, 'Reach 850m with Bugatti Chiron using CR7', 'CR7 + CHIRON');
      case 'everyBugatti': {
        const cars = ['chiron', 'bugattiVeyron', 'bugattiTourbillon', 'bugattiEb1', 'bugattiBrouillardConcept'];
        return challengeState(cars.every(ownsCar), 'Collect every Bugatti', `${cars.filter(ownsCar).length} / ${cars.length} BUGATTIS`);
      }
      case 'mythos1500': return distanceState(getVehicleBestHighscore('ferrariMythos'), 1500, 'Reach 1500m with Ferrari Mythos', 'FERRARI MYTHOS');
      case 'f1_1750': return distanceState(getVehicleBestHighscore('f1Ferrari'), 1750, 'Reach 1750m with F1 Ferrari', 'F1 FERRARI');
      case 'drake2000': return distanceState(bestSkin('DRAKE'), 2000, 'Reach 2000m with DRAKE', 'DRAKE');
      default: return challengeState(false, 'Challenge unavailable', 'LOCKED');
    }
  }

  function isGoatUnlocked() {
    try { return localStorage.getItem('mand.goatUnlocked') === '1'; } catch { return false; }
  }

  function getGoatState() {
    const skins = getOwnedProgressCharacters().length;
    const cars = getOwnedCars().length;
    const totalSkins = getProgressCharacterTotal();
    return {
      complete: skins === totalSkins && cars === carOrder.length,
      text: 'Collect every Car and every Skin',
      progress: `${skins} / ${totalSkins} SKINS · ${cars} / ${carOrder.length} CARS`
    };
  }

  function getReadyUnlockables() {
    const ownedCharacters = getOwnedCharacters();
    const ownedCars = getOwnedCars();
    const readySkins = characters
      .map((character, index) => ({ character, index }))
      .filter(({ character, index }) => character.challenge && !ownedCharacters.includes(index) && getChallengeState(index).complete)
      .map(({ character, index }) => ({ key: `skin:${index}`, name: character.name, image: character.image, kind: 'skin', index }));
    const readyCars = carOrder
      .filter(type => carSpecs[type].challenge && !ownedCars.includes(type) && getCarChallengeState(type).complete)
      .map(type => ({ key: `car:${type}`, name: carSpecs[type].name, image: carSpecs[type].shopAsset, kind: 'car', type }));
    const readyGoat = !isGoatUnlocked() && getGoatState().complete
      ? [{ key: 'special:goat', name: goatReward.name, image: goatReward.image, kind: 'special', type: 'goat' }]
      : [];
    return [...readySkins, ...readyCars, ...readyGoat];
  }

  function getNotifiedUnlockables() {
    try {
      const saved = JSON.parse(localStorage.getItem('mand.notifiedUnlockables') || '[]');
      return Array.isArray(saved) ? saved : [];
    } catch { return []; }
  }

  let unlockToastTimer = 0;
  function showUnlockToast(unlockable) {
    const toast = $('#unlockToast');
    clearTimeout(unlockToastTimer);
    $('#unlockToastImage').src = unlockable.image;
    $('#unlockToastImage').alt = unlockable.name;
    $('#unlockToastTitle').textContent = `${unlockable.name} ${t('unlocked')}!`;
    toast.classList.remove('hidden', 'show');
    void toast.offsetWidth;
    toast.classList.add('show');
    unlockToastTimer = setTimeout(() => toast.classList.add('hidden'), 3800);
  }

  function notifyUnlockableReady(unlockable) {
    const notified = getNotifiedUnlockables();
    if (notified.includes(unlockable.key)) return;
    notified.push(unlockable.key);
    try { localStorage.setItem('mand.notifiedUnlockables', JSON.stringify(notified)); } catch { /* Private mode. */ }
    showUnlockToast(unlockable);
  }

  function updateUnlockBadge() {
    const badge = $('#shopUnlockBadge');
    if (!badge) return;
    const count = getReadyUnlockables().length;
    badge.textContent = String(count);
    badge.classList.toggle('hidden', count === 0);
  }

  function refreshUnlockAlerts(showNotifications = false) {
    const ready = getReadyUnlockables();
    updateUnlockBadge();
    if (showNotifications && ready.length) {
      const notified = getNotifiedUnlockables();
      const newest = ready.find(unlockable => !notified.includes(unlockable.key));
      if (newest) notifyUnlockableReady(newest);
    }
  }

  function checkLiveUnlockables() {
    saveHighscore(score);
    saveCharacterHighscore(score);
    saveVehicleHighscore(score);
    saveLoadoutHighscore(score);
    const notified = getNotifiedUnlockables();
    getReadyUnlockables().filter(item => !notified.includes(item.key)).forEach(notifyUnlockableReady);
    updateUnlockBadge();
  }

  function getUnlockableEntryState(entry, ownedCars = getOwnedCars()) {
    if (entry.startsWith('car:')) {
      const type = entry.slice(4);
      const challenge = getCarChallengeState(type);
      const owned = ownedCars.includes(type);
      return { entry, owned, ready: challenge.complete && !owned, status: owned ? 'owned' : challenge.complete ? 'ready' : 'open' };
    }
    if (entry === 'goat') {
      const challenge = getGoatState();
      const owned = isGoatUnlocked();
      return { entry, owned, ready: challenge.complete && !owned, status: owned ? 'owned' : challenge.complete ? 'ready' : 'open' };
    }
    const index = characters.findIndex(character => character.name === entry);
    const challenge = getChallengeState(index);
    const owned = isCharacterUnlocked(index);
    return { entry, owned, ready: challenge.complete && !owned, status: owned ? 'owned' : challenge.complete ? 'ready' : 'open' };
  }

  function getHiddenUnlockableStates() {
    return characters
      .filter(character => character.hiddenUnlockable)
      .map(character => getUnlockableEntryState(character.name))
      .filter(item => item.status === 'ready');
  }

  const opponentUnlockRules = {
    1: { cars: 15, skins: 15, distance: 500, differentSkins: 3, cost: 2000 }
  };
  let viewedOpponentUnlock = 1;

  function hasPaidForOpponent(index) {
    if (index === 0) return true;
    try { return localStorage.getItem(`mand.opponentPaid.v2.${opponents[index].id}`) === '1'; }
    catch { return false; }
  }

  function getOpponentUnlockState(index) {
    if (index === 0) return { unlocked: true, paid: true, gameplayReady: true, completed: 4 };
    const rule = opponentUnlockRules[index];
    const cars = getOwnedCars().length;
    const skins = getOwnedProgressCharacters().length;
    const qualifyingSkins = characters.reduce((total, character, characterIndex) => (
      total + (isProgressCharacter(characterIndex) && getCharacterBestHighscore(characterIndex) >= rule.distance ? 1 : 0)
    ), 0);
    const carsReady = cars >= rule.cars;
    const skinsReady = skins >= rule.skins;
    const challengeReady = qualifyingSkins >= rule.differentSkins;
    const paid = hasPaidForOpponent(index);
    const gameplayReady = carsReady && skinsReady && challengeReady;
    return {
      cost: rule.cost,
      distance: rule.distance,
      differentSkins: rule.differentSkins,
      targetCars: rule.cars,
      targetSkins: rule.skins,
      cars,
      skins,
      qualifyingSkins,
      carsReady,
      skinsReady,
      challengeReady,
      gameplayReady,
      paid,
      unlocked: paid,
      completed: Number(carsReady) + Number(skinsReady) + Number(challengeReady) + Number(paid)
    };
  }

  function isOpponentUnlocked(index) {
    return getOpponentUnlockState(index).unlocked;
  }

  function closeLevelUnlockModal() {
    $('#levelUnlockModal')?.classList.add('hidden');
  }

  function requirementRow(label, value, ready) {
    return `<div class="level-requirement${ready ? ' complete' : ''}"><span class="level-requirement-mark">${ready ? '✓' : '○'}</span><span><small>${label}</small><strong>${value}</strong></span></div>`;
  }

  function renderLevelUnlockModal(index = viewedOpponentUnlock) {
    if (index === 0) return;
    viewedOpponentUnlock = index;
    const opponent = opponents[index];
    const state = getOpponentUnlockState(index);
    $('#levelUnlockTitle').textContent = opponent.name;
    $('#levelUnlockRequirements').innerHTML = [
      requirementRow(isGerman() ? 'SAMMLE CARS' : 'COLLECT CARS', `${Math.min(state.cars, state.targetCars)} / ${state.targetCars}`, state.carsReady),
      requirementRow(isGerman() ? 'SAMMLE SKINS' : 'COLLECT SKINS', `${Math.min(state.skins, state.targetSkins)} / ${state.targetSkins}`, state.skinsReady),
      requirementRow(isGerman() ? `ERREICHE ${state.distance}m MIT VERSCHIEDENEN SKINS` : `REACH ${state.distance}m WITH DIFFERENT SKINS`, isGerman() ? `${Math.min(state.qualifyingSkins, state.differentSkins)} / ${state.differentSkins} SKINS` : `${Math.min(state.qualifyingSkins, state.differentSkins)} / ${state.differentSkins} SKINS`, state.challengeReady),
      requirementRow(isGerman() ? 'KOSTEN' : 'COST', `${state.cost} COINS`, state.paid)
    ].join('');
    const paymentArea = $('#levelPaymentArea');
    $('#levelUnlockCost').textContent = state.cost;
    paymentArea.classList.toggle('hidden', !state.gameplayReady);
    $('#levelPaymentMessage').textContent = '';
    if (state.gameplayReady) {
      const button = $('#levelPaymentButton');
      button.disabled = state.paid;
      button.textContent = state.paid ? t('paidLevelOpen') : t('payment');
      paymentArea.classList.toggle('paid', state.paid);
    }
  }

  function openLevelUnlockModal(index) {
    if (index === 0) return;
    renderLevelUnlockModal(index);
    $('#levelUnlockModal').classList.remove('hidden');
  }

  function payForOpponent(index = viewedOpponentUnlock) {
    const state = getOpponentUnlockState(index);
    if (!state.gameplayReady || state.paid) return;
    if (!spendGoldCoins(state.cost)) {
      $('#levelPaymentMessage').textContent = isGerman() ? `DU BRAUCHST ${state.cost - getGoldCoins()} MEHR COINS` : `YOU NEED ${state.cost - getGoldCoins()} MORE COINS`;
      pop($('#levelPaymentArea'), 'shake');
      return;
    }
    try { localStorage.setItem(`mand.opponentPaid.v2.${opponents[index].id}`, '1'); } catch { return; }
    selectedOpponent = index;
    updateOpponentHighscores();
    updateMenuStats();
    renderLevelUnlockModal(index);
    pop($('#levelPaymentArea'));
  }

  function getOwnedCars() {
    try {
      const saved = JSON.parse(localStorage.getItem('mand.ownedCars') || '["beetle"]');
      const legacy = { white: 'beetle', black: 'mx5', red: 'f40', yellow: 'enzo' };
      const valid = Array.isArray(saved) ? saved.map(type => legacy[type] || type).filter(type => carOrder.includes(type)) : [];
      const highest = Math.max(0, ...valid.filter(type => purchasableCarOrder.includes(type)).map(type => purchasableCarOrder.indexOf(type)));
      const challengeCars = valid.filter(type => carSpecs[type].challenge);
      return [...new Set([...purchasableCarOrder.slice(0, highest + 1), ...challengeCars])];
    } catch { return ['beetle']; }
  }

  function getSelectedCar() {
    const owned = getOwnedCars();
    try {
      const selected = localStorage.getItem('mand.selectedCar');
      if (selected && owned.includes(selected)) return selected;
    } catch { /* Use strongest owned car. */ }
    return owned.slice().sort((first, second) => carSpecs[second].boost - carSpecs[first].boost)[0] || 'beetle';
  }

  function saveOwnedCars(cars) {
    const highest = Math.max(0, ...cars.filter(type => purchasableCarOrder.includes(type)).map(type => purchasableCarOrder.indexOf(type)));
    const challengeCars = cars.filter(type => carSpecs[type]?.challenge);
    const normalized = [...new Set([...purchasableCarOrder.slice(0, highest + 1), ...challengeCars])];
    try {
      const acquiredAt = JSON.parse(localStorage.getItem('mand.carAcquiredAt') || '{}');
      const now = Date.now();
      normalized.forEach((type, position) => {
        if (acquiredAt[type] === undefined) acquiredAt[type] = type === 'beetle' ? 0 : now + position;
      });
      localStorage.setItem('mand.carAcquiredAt', JSON.stringify(acquiredAt));
      localStorage.setItem('mand.ownedCars', JSON.stringify(normalized));
    } catch { /* Private mode. */ }
  }

  function getCarCollectionOrder() {
    const owned = getOwnedCars();
    let acquiredAt = {};
    try { acquiredAt = JSON.parse(localStorage.getItem('mand.carAcquiredAt') || '{}'); } catch { /* Use garage order. */ }
    return owned.slice().sort((first, second) => {
      if (first === 'beetle') return -1;
      if (second === 'beetle') return 1;
      return (acquiredAt[first] ?? carOrder.indexOf(first)) - (acquiredAt[second] ?? carOrder.indexOf(second));
    });
  }

  function selectCar(type) {
    if (!getOwnedCars().includes(type)) return;
    try { localStorage.setItem('mand.selectedCar', type); } catch { /* Private mode. */ }
    updateCurrentCarCard();
    updateMenuStats();
    if (!screens.collection.classList.contains('hidden')) renderCollection();
  }

  function spendBlackCoins(amount) {
    const balance = getBlackCoins();
    if (balance < amount) return false;
    try { localStorage.setItem('mand.blackCoins', String(balance - amount)); } catch { return false; }
    return true;
  }

  function getCarGoldCost(car) {
    return Math.max(0, Number(car?.goldCost || 0));
  }

  function canAffordCar(car) {
    return getBlackCoins() >= Number(car?.cost || 0) && getGoldCoins() >= getCarGoldCost(car);
  }

  function carPriceMarkup(car) {
    const blackCost = Number(car?.cost || 0);
    const goldCost = getCarGoldCost(car);
    if (blackCost === 0 && goldCost === 0) return isGerman() ? 'FREI' : 'UNLOCK';
    if (goldCost > 0) {
      return `<span class="dual-price"><b>${blackCost}</b><img class="mini-black-coin" src="assets/black_coin.png" alt="BLACK COINS"><em>+</em><b>${goldCost}</b><i class="mini-gold-coin" aria-label="gold coins">$</i></span>`;
    }
    return `<span>${blackCost}</span><img class="mini-black-coin" src="assets/black_coin.png" alt="BLACK COINS">`;
  }

  function carPriceText(car) {
    const blackCost = Number(car?.cost || 0);
    const goldCost = getCarGoldCost(car);
    if (blackCost === 0 && goldCost === 0) return t('free');
    if (goldCost > 0) return `${blackCost} ${t('blackCoins')} + ${goldCost} ${isGerman() ? 'GOLD' : 'GOLD'}`;
    return `${blackCost} ${t('blackCoins')}`;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, element]) => element.classList.toggle('hidden', key !== name));
    menuPreviewKey = '';
    clearInterval(leaderboardRefreshTimer);
    leaderboardRefreshTimer = 0;
    if (name !== 'shop' && $('#challengeModal')) closeChallengeModal();
    if (name !== 'shop' && $('#shopPreviewModal')) closeShopPreview();
    if (name !== 'opponents' && $('#levelUnlockModal')) closeLevelUnlockModal();
    if (name !== 'game') stopGame();
    if (name === 'menu') updateMenuStats();
    if (name === 'characters') updateCharacterLocks();
    if (name === 'collection') renderCollection();
    if (name === 'opponents') {
      updateOpponentHighscores();
      hydrateManagedImages($('#opponentCards'), 1);
    }
    if (name === 'leaderboard') {
      loadLeaderboard(activeLeaderboardLevel);
      leaderboardRefreshTimer = setInterval(() => loadLeaderboard(activeLeaderboardLevel), 15000);
    }
    if (name === 'shop') updateShop();
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      const screen = screens[name];
      if (screen) screen.scrollTop = 0;
      if (screen) screen.querySelectorAll('.shop-panel').forEach(panel => { panel.scrollTop = 0; });
    });
  }

  function updateMenuStats() {
    const highscore = getBestHighscore();
    const highscoreNode = $('#menuHighscore');
    if (highscoreNode) {
      highscoreNode.classList.toggle('hidden', highscore === 0);
      highscoreNode.querySelector('b').textContent = highscore;
    }
    if ($('#menuGoldCoins')) $('#menuGoldCoins').textContent = getGoldCoins();
    if ($('#menuBlackCoins')) $('#menuBlackCoins').textContent = getBlackCoins();
  }

  function pop(element, className = 'pop') {
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
    element.addEventListener('animationend', () => element.classList.remove(className), { once: true });
  }

  function buildSelections() {
    try { selectedCharacter = Number(localStorage.getItem('mand.selectedCharacter') || 0); } catch { selectedCharacter = 0; }
    if (!isCharacterUnlocked(selectedCharacter)) selectedCharacter = getDefaultOwnedCharacter();
    const characterCards = $('#characterCards');
    characters.forEach((character, index) => {
      const button = document.createElement('button');
      button.className = `character-card${index === 0 ? ' selected' : ''}`;
      button.dataset.characterIndex = index;
      button.setAttribute('aria-label', character.name);
      button.innerHTML = `<canvas class="avatar-preview" width="220" height="330"></canvas><span class="level-city">${t('player')} ${index + 1}</span><strong>${character.name}</strong><span class="unlock-text"></span>`;
      previewCanvases.push(button.querySelector('.avatar-preview'));
      button.addEventListener('click', () => {
        pop(button);
      });
      button.addEventListener('pointerdown', () => button.classList.add('preview-active'));
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(type => button.addEventListener(type, () => button.classList.remove('preview-active')));
      characterCards.appendChild(button);
    });
    const unlockMoreButton = document.createElement('button');
    unlockMoreButton.id = 'unlockMoreCard';
    unlockMoreButton.className = 'character-card locked unlock-more-card';
    unlockMoreButton.setAttribute('aria-label', 'Open your skin collection');
    unlockMoreButton.innerHTML = `<canvas class="menu-collection-outline" data-character-index="${selectedCharacter}" width="220" height="330" aria-hidden="true"></canvas>`;
    unlockMoreButton.addEventListener('click', () => { pop(unlockMoreButton); setTimeout(() => showScreen('collection'), 100); });
    characterCards.appendChild(unlockMoreButton);
    const currentCarButton = document.createElement('button');
    currentCarButton.id = 'currentCarCard';
    currentCarButton.className = 'current-car-card';
    currentCarButton.innerHTML = `<span>${t('currentCar')}</span><img id="currentCarImage" alt=""><strong id="currentCarName"></strong>`;
    currentCarButton.addEventListener('click', () => {
      pop(currentCarButton);
      collectionType = 'cars';
      setTimeout(() => showScreen('collection'), 100);
    });
    characterCards.appendChild(currentCarButton);
    if (!isCharacterUnlocked(selectedCharacter)) selectedCharacter = 0;

    const opponentCards = $('#opponentCards');
    opponents.forEach((opponent, index) => {
      const button = document.createElement('button');
      button.className = `opponent-card opponent-${index % 2 === 0 ? 'left' : 'right'} opponent-duo-card${index === 0 ? ' selected' : ''}`;
      button.dataset.opponentIndex = String(index);
      button.style.setProperty('--opponent-accent', opponent.accent);
      button.style.setProperty('--opponent-soft', opponent.soft);
      button.setAttribute('aria-label', opponent.name);
      button.innerHTML = `${managedImageMarkup(opponent.card, opponent.name)}<span class="opponent-difficulty">${index === 0 ? 'EASY' : 'HARD'}</span><span class="opponent-copy"><strong>${opponent.name}</strong><span class="opponent-highscore">HIGHSCORE <b>${getHighscore(index)}</b>m</span><span class="opponent-lock-status"></span></span><span class="check">✓</span>`;
      button.addEventListener('click', () => {
        if (!isOpponentUnlocked(index)) {
          pop(button);
          openLevelUnlockModal(index);
          return;
        }
        selectedOpponent = index;
        document.querySelectorAll('.opponent-card').forEach((card, cardIndex) => card.classList.toggle('selected', cardIndex === index));
        pop(button);
      });
      opponentCards.appendChild(button);
    });
    updateCharacterLocks();
  }

  function updateCharacterLocks() {
    if (!isCharacterUnlocked(selectedCharacter)) selectedCharacter = getDefaultOwnedCharacter();
    document.querySelectorAll('.character-card[data-character-index]').forEach(card => {
      const index = Number(card.dataset.characterIndex);
      card.classList.remove('locked');
      card.classList.toggle('future-hidden', index !== selectedCharacter);
      card.classList.toggle('selected', index === selectedCharacter);
      const preview = card.querySelector('.avatar-preview');
      const targetWidth = index === selectedCharacter ? 660 : 220;
      if (preview.width !== targetWidth) {
        preview.width = targetWidth;
        preview.height = targetWidth * 1.5;
      }
      card.style.order = 0;
      card.querySelector('strong').textContent = characters[index].name;
      card.querySelector('.level-city').textContent = isGerman() ? 'AKTIVER SPIELER' : 'ACTIVE PLAYER';
      card.querySelector('.unlock-text').textContent = t('selectedInShop');
    });
    const unlockMoreCard = $('#unlockMoreCard');
    if (unlockMoreCard) {
      unlockMoreCard.style.order = 1;
      const outline = unlockMoreCard.querySelector('.menu-collection-outline');
      if (outline) outline.dataset.characterIndex = selectedCharacter;
    }
    menuPreviewKey = '';
    updateCurrentCarCard();
    hydrateManagedImages($('#characterCards'), 2);
    const accountHighscore = $('#accountHighscore');
    const accountCars = $('#accountCars');
    const accountSkins = $('#accountSkins');
    if (accountHighscore) accountHighscore.textContent = `${getBestHighscore()}m`;
    if (accountCars) accountCars.textContent = `${getOwnedCars().length} / ${carOrder.length}`;
    if (accountSkins) accountSkins.textContent = `${getOwnedProgressCharacters().length} / ${getProgressCharacterTotal()}`;
    updateUnlockBadge();
  }

  function updateCurrentCarCard() {
    const type = getSelectedCar();
    const car = carSpecs[type];
    const image = $('#currentCarImage');
    const name = $('#currentCarName');
    const label = $('#currentCarCard > span');
    if (!car || !image || !name) return;
    if (label) label.textContent = t('currentCar');
    AssetManager.hydrateImage(image, car.shopAsset, 'high');
    image.alt = car.name;
    name.textContent = car.name;
  }

  function managedImageMarkup(src, alt = '', className = '') {
    return `<img class="${className} managed-image is-loading" src="${PLACEHOLDER_IMAGE_SRC}" data-managed-src="${src}" alt="${alt}">`;
  }

  function hydrateManagedImages(scope, visibleCount = 10) {
    const root = scope || document;
    const images = [...root.querySelectorAll('img[data-managed-src]')];
    images.forEach((image, index) => {
      const src = image.dataset.managedSrc;
      const warm = AssetManager.isLoaded(src);
      AssetManager.hydrateImage(image, src, warm || index < visibleCount ? 'high' : 'low');
    });
    AssetManager.loadStaggered(images.map(image => image.dataset.managedSrc), visibleCount, 8);
  }

  function scheduleCanvasAssetLoading(indices, visibleCount = 10) {
    const unique = [...new Set(indices.filter(index => characters[index]).map(index => characters[index].image))];
    AssetManager.loadStaggered(unique, visibleCount, 8);
    unique.forEach(src => AssetManager.onReady(src, () => renderPreviews(true)));
  }

  function preparePanelAssets(panel, visibleCount = 10) {
    if (!panel) return;
    hydrateManagedImages(panel, visibleCount);
    scheduleCanvasAssetLoading([...panel.querySelectorAll('[data-character-index]')].map(node => Number(node.dataset.characterIndex)), visibleCount);
  }

  function hydrateActiveShopPanel() {
    const unlockablesOpen = !$('#unlockableShop')?.classList.contains('hidden');
    const charactersOpen = !$('#characterShop')?.classList.contains('hidden');
    const panel = unlockablesOpen ? $('#unlockableShop') : charactersOpen ? $('#characterShop') : $('#carShop');
    preparePanelAssets(panel, unlockablesOpen ? 24 : 32);
  }

  function ensureAudioReady(audio) {
    if (!audio) return Promise.resolve();
    if (audio.readyState >= 2) return Promise.resolve();
    return new Promise(resolve => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        audio.removeEventListener('canplaythrough', finish);
        audio.removeEventListener('loadedmetadata', finish);
        audio.removeEventListener('error', finish);
        resolve();
      };
      audio.addEventListener('canplaythrough', finish, { once: true });
      audio.addEventListener('loadedmetadata', finish, { once: true });
      audio.addEventListener('error', finish, { once: true });
      try { audio.load(); } catch { finish(); }
      setTimeout(finish, 650);
    });
  }

  async function unlockAudioElement(audio) {
    if (!audio) return;
    const previousVolume = audio.volume;
    const previousTime = audio.currentTime;
    audio.volume = 0;
    try {
      await audio.play();
      audio.pause();
      audio.currentTime = previousTime || 0;
    } catch {
      /* iOS may still defer playback until this exact sound is needed. */
    } finally {
      audio.volume = previousVolume || 1;
    }
  }

  function unlockAudioFromGesture(audio) {
    if (!audio) return;
    const previousVolume = audio.volume;
    const previousTime = audio.currentTime;
    try { audio.load(); } catch { /* Ignore load errors until playback is requested. */ }
    audio.volume = 0;
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        audio.pause();
        audio.currentTime = previousTime || 0;
        audio.volume = previousVolume || 1;
      }).catch(() => {
        audio.volume = previousVolume || 1;
      });
    } else {
      audio.pause();
      audio.currentTime = previousTime || 0;
      audio.volume = previousVolume || 1;
    }
  }

  function primeGameplayAudioGesture() {
    ensureSoundContext();
  }

  function primeGameplayAudio() {
    ensureSoundContext();
    if (selectedOpponent === 0) {
      return Promise.all([
        ensureAudioReady(bigDilfVoice).then(() => unlockAudioElement(bigDilfVoice)),
        ensureAudioReady(tunTunSound).then(() => unlockAudioElement(tunTunSound)),
        ensureAudioReady(bigDilfLossSound).then(() => unlockAudioElement(bigDilfLossSound))
      ]);
    }
    if (selectedOpponent === 1) {
      return Promise.all([
        ensureAudioReady(chestnutStartSound).then(() => unlockAudioElement(chestnutStartSound)),
        ensureAudioReady(chestnutGameOverSound).then(() => unlockAudioElement(chestnutGameOverSound))
      ]);
    }
    return Promise.resolve();
  }

  function getGameplayAssetSources() {
    const selectedCar = getSelectedCar();
    return [
      characters[selectedCharacter]?.image,
      carSpecs[selectedCar]?.asset,
      opponents[selectedOpponent]?.background,
      selectedOpponent === 0 ? opponents[0]?.card : opponents[selectedOpponent]?.card,
      'assets/black_coin.png',
      'assets/hennessy_bottle.png',
      'assets/thrown_shoe.png',
      'assets/opponent_big_dilf.png',
      selectedOpponent === 1 ? 'assets/hot_dog.png' : '',
      selectedOpponent === 1 ? 'assets/fire_hot_dogs.png' : ''
    ].filter(Boolean);
  }

  function getShopPreviewAssetSources() {
    const starterSkins = getCharacterShopOrder().map(index => characters[index]?.image);
    const purchasableCars = purchasableCarOrder.map(type => carSpecs[type]?.shopAsset);
    return [
      'assets/shop_showcase.png',
      ...starterSkins,
      ...purchasableCars
    ].filter(Boolean);
  }

  function getDeepCollectionAssetSources() {
    return [
      ...characters.map(character => character.image),
      ...carOrder.flatMap(type => [carSpecs[type]?.shopAsset, carSpecs[type]?.asset]),
      ...opponents.flatMap(opponent => [opponent.card, opponent.background]),
      goatReward.image,
      'assets/black_coin.png',
      'assets/hennessy_bottle.png',
      'assets/thrown_shoe.png',
      'assets/hot_dog.png',
      'assets/fire_hot_dogs.png'
    ].filter(Boolean);
  }

  function warmVisualCaches() {
    AssetManager.warmCache(getShopPreviewAssetSources(), 22, 10);
    idle(() => AssetManager.warmCache(getDeepCollectionAssetSources(), 12, 7));
  }

  function preloadInitialAssets() {
    const selectedCar = getSelectedCar();
    AssetManager.loadMany([
      'assets/logo.png',
      'assets/black_coin.png',
      'assets/hennessy_bottle.png',
      'assets/thrown_shoe.png',
      characters[selectedCharacter]?.image,
      carSpecs[selectedCar]?.shopAsset,
      carSpecs[selectedCar]?.asset,
      opponents[selectedOpponent]?.card,
      opponents[selectedOpponent]?.background
    ].filter(Boolean), 'high');
    idle(warmVisualCaches);
  }

  function prepareGameplayAssets() {
    return Promise.all([
      AssetManager.loadMany(getGameplayAssetSources(), 'high'),
      primeGameplayAudio()
    ]);
  }

  function renderCollection() {
    const grid = $('#collectionGrid');
    const sort = $('.collection-sort');
    document.querySelectorAll('[data-collection-type]').forEach(button => button.classList.toggle('selected', button.dataset.collectionType === collectionType));
    grid.classList.toggle('car-collection-mode', collectionType === 'cars');
    sort.classList.remove('hidden');
    const dateButton = sort.querySelector('[data-collection-sort="date"]');
    const scoreButton = sort.querySelector('[data-collection-sort="score"]');
    dateButton.textContent = t('date');
    scoreButton.textContent = collectionType === 'cars' ? 'BOOST' : (isGerman() ? 'PUNKTE' : 'SCORE');
    document.querySelectorAll('[data-collection-sort]').forEach(button => button.classList.toggle('selected', button.dataset.collectionSort === collectionSort));
    const searchTerm = normalizeSearch(collectionSearchTerm);
    if (collectionType === 'cars') {
      const dateOrder = getCarCollectionOrder();
      const sortedCollection = collectionSort === 'score'
        ? dateOrder.slice().sort((first, second) => carSpecs[second].boost - carSpecs[first].boost || dateOrder.indexOf(first) - dateOrder.indexOf(second))
        : dateOrder;
      const collection = sortedCollection.filter(type => matchesSearch(carSpecs[type]?.name, searchTerm));
      const selectedCar = getSelectedCar();
      $('#collectionCount').textContent = `${dateOrder.length} / ${carOrder.length}`;
      $('#collectionSummaryLabel').textContent = 'CARS';
      grid.setAttribute('aria-label', t('collectionAriaCars'));
      grid.innerHTML = collection.length ? collection.map((type, position) => {
        const car = carSpecs[type];
        const active = selectedCar === type;
        const nameSize = car.name.length > 21 ? 9 : car.name.length > 17 ? 10 : 12;
        return `<article class="shop-item car-shop-item collection-car-item${active ? ' active-car' : ''}" style="--car-color:${car.color}">
          <span class="collection-number">${String(position + 1).padStart(2, '0')}</span>
          <div class="car-image-stage">${managedImageMarkup(car.shopAsset, car.name)}</div>
          <div class="shop-item-copy"><strong class="car-name" style="--car-name-size:${nameSize}px">${car.name}</strong><small>${car.boost}X BOOST</small>
          <button class="shop-action car-price-action${active ? ' active' : ''}" data-collection-car="${type}">${active ? t('active') : t('selectCar')}</button></div>
        </article>`;
      }).join('') : searchEmptyMarkup();
      preparePanelAssets(grid, 12);
      document.querySelectorAll('[data-collection-car]').forEach(button => button.addEventListener('click', () => selectCar(button.dataset.collectionCar)));
      return;
    }
    const dateOrder = getCollectionOrder();
    const sortedCollection = collectionSort === 'score'
      ? dateOrder.slice().sort((first, second) => getCharacterBestHighscore(second) - getCharacterBestHighscore(first) || dateOrder.indexOf(first) - dateOrder.indexOf(second))
      : dateOrder;
    const collection = sortedCollection.filter(index => matchesSearch(characters[index]?.name, searchTerm));
    $('#collectionCount').textContent = `${getOwnedProgressCharacters().length} / ${getProgressCharacterTotal()}`;
    $('#collectionSummaryLabel').textContent = 'SKINS';
    grid.setAttribute('aria-label', t('collectionAriaSkins'));
    grid.innerHTML = collection.length ? collection.map((index, position) => {
      const character = characters[index];
      const active = selectedCharacter === index;
      const bestScore = getCharacterBestHighscore(index);
      return `<article class="shop-item character-shop-item collection-skin-item${active ? ' active-character' : ''}">
        <span class="collection-number">${String(position + 1).padStart(2, '0')}</span>
        <span class="collection-best"><small>${isGerman() ? 'BESTE' : 'BEST'}</small><strong>${bestScore}m</strong></span>
        <span class="shop-character-aura" aria-hidden="true"></span>
        <canvas class="shop-character-canvas collection-skin-canvas" data-character-index="${index}" width="380" height="410" aria-label="${character.name}"></canvas>
        <div class="shop-item-copy skin-item-copy"><strong>${character.name}</strong>
        <button class="shop-action skin-action${active ? ' active' : ''}" data-collection-character="${index}">${active ? t('active') : t('selectSkin')}</button></div>
      </article>`;
    }).join('') : searchEmptyMarkup();
    preparePanelAssets(grid, 12);
    document.querySelectorAll('[data-collection-character]').forEach(button => button.addEventListener('click', () => {
      buyOrSelectCharacter(Number(button.dataset.collectionCharacter));
      renderCollection();
    }));
  }

  function updateShop() {
    const goldCoins = getGoldCoins();
    const blackCoins = getBlackCoins();
    const ownedCars = getOwnedCars();
    const selectedCar = getSelectedCar();
    const searchTerm = normalizeSearch(shopSearchTerm);
    $('#shopGoldCoins').textContent = goldCoins;
    $('#shopBlackCoins').textContent = blackCoins;

    const characterOrder = getCharacterShopOrder().filter(index => matchesSearch(characters[index]?.name, searchTerm));
    $('#characterShop').innerHTML = characterOrder.length ? characterOrder.map(index => {
      const character = characters[index];
      const unlocked = isCharacterUnlocked(index);
      const active = selectedCharacter === index;
      const cost = getCharacterShopCost(index);
      const affordable = !unlocked && goldCoins >= cost;
      const action = active
        ? t('active')
        : unlocked
          ? t('selectSkin')
          : `<span>${cost}</span><i class="mini-gold-coin" aria-label="gold coins">$</i>`;
      return `<article class="shop-item character-shop-item${unlocked ? '' : ' locked'}${active ? ' active-character' : ''}" data-shop-skin="${index}">
        <span class="shop-character-aura" aria-hidden="true"></span>
        <canvas class="shop-character-canvas" data-character-index="${index}" width="380" height="410" aria-label="${character.name}"></canvas>
        <div class="shop-item-copy skin-item-copy"><strong>${character.name}</strong>
        <button class="shop-action skin-action${active ? ' active' : affordable ? ' affordable' : ''}" data-character-action="${index}" ${!unlocked && !affordable ? 'disabled' : ''}>${action}</button></div>
      </article>`;
    }).join('') : searchEmptyMarkup();

    const unlockableStates = [
      ...unlockableDisplayOrder.map(entry => getUnlockableEntryState(entry, ownedCars)),
      ...getHiddenUnlockableStates()
    ];
    const unlockableCounts = {
      open: unlockableStates.filter(item => item.status === 'open').length,
      ready: unlockableStates.filter(item => item.status === 'ready').length,
      owned: unlockableStates.filter(item => item.status === 'owned').length
    };
    document.querySelectorAll('[data-unlockable-filter]').forEach(button => {
      const filter = button.dataset.unlockableFilter;
      button.classList.toggle('selected', filter === unlockableFilter);
      const countNode = button.querySelector('b');
      if (countNode) countNode.textContent = String(unlockableCounts[filter] ?? 0);
    });
    const visibleUnlockables = unlockableStates
      .filter(item => item.status === unlockableFilter)
      .filter(item => {
        if (item.entry === 'goat') return matchesSearch('GOAT', searchTerm);
        if (item.entry.startsWith('car:')) return matchesSearch(carSpecs[item.entry.slice(4)]?.name, searchTerm);
        return matchesSearch(item.entry, searchTerm);
      })
      .map(item => item.entry);
    $('#unlockableShop').innerHTML = visibleUnlockables.length ? visibleUnlockables.map(entry => {
      if (entry.startsWith('car:')) {
        const type = entry.slice(4);
        const car = carSpecs[type];
        const owned = ownedCars.includes(type);
        const active = selectedCar === type;
        const challenge = getCarChallengeState(type);
        const nameSize = car.name.length > 22 ? 9 : car.name.length > 17 ? 10 : 12;
        return `<article class="shop-item car-shop-item unlockable-shop-item unlockable-car-item${owned ? ' challenge-complete' : ' locked'}${challenge.complete && !owned ? ' challenge-ready' : ''}${active ? ' active-car' : ''}" data-unlockable-car="${type}">
          ${owned ? '<span class="claimed-check" aria-label="claimed">✓</span>' : ''}
          <span class="car-tier">${String(carOrder.indexOf(type) + 1).padStart(2, '0')}</span>
          <div class="car-image-stage">${managedImageMarkup(car.shopAsset, car.name)}</div>
          <div class="shop-item-copy skin-item-copy"><strong class="car-name" style="--car-name-size:${nameSize}px">${car.name}</strong>
          <button class="shop-action skin-action challenge-action${active ? ' active' : challenge.complete ? ' ready-to-claim' : ''}" ${owned ? 'disabled' : `data-challenge-car="${type}"`}>${active ? t('active') : owned ? t('unlocked') : challenge.complete ? '🔓' : '🔒'}</button></div>
        </article>`;
      }
      if (entry === 'goat') {
        const unlocked = isGoatUnlocked();
        const challenge = getGoatState();
        return `<article class="shop-item unlockable-shop-item goat-unlockable${unlocked ? ' challenge-complete' : ' locked'}${challenge.complete && !unlocked ? ' challenge-ready' : ''}" data-goat-card="goat">
          <span class="goat-glow" aria-hidden="true"></span>
          <div class="goat-image-stage">${managedImageMarkup(goatReward.image, 'GOAT')}</div>
          <div class="shop-item-copy skin-item-copy"><strong>GOAT</strong>
          <button class="shop-action skin-action challenge-action${challenge.complete && !unlocked ? ' ready-to-claim' : ''}" ${unlocked ? 'disabled' : 'data-goat-challenge="goat"'}>${unlocked ? t('completed') : challenge.complete ? '🔓' : '🔒'}</button></div>
        </article>`;
      }
      const index = characters.findIndex(character => character.name === entry);
      const character = characters[index];
      if (!character) return '';
      const unlocked = isCharacterUnlocked(index);
      const active = selectedCharacter === index;
      const challenge = getChallengeState(index);
      const action = active ? t('active') : unlocked ? t('selectSkin') : challenge.complete ? '🔓' : '🔒';
      return `<article class="shop-item character-shop-item unlockable-shop-item${character.celebrity ? ' celebrity-unlockable' : ''}${unlocked ? ' challenge-complete' : ' locked'}${challenge.complete && !unlocked ? ' challenge-ready' : ''}${active ? ' active-character' : ''}" data-unlockable-card="${index}">
        ${unlocked ? '<span class="claimed-check" aria-label="claimed">✓</span>' : ''}
        <span class="shop-character-aura" aria-hidden="true"></span>
        <canvas class="shop-character-canvas" data-character-index="${index}" width="380" height="410" aria-label="${character.name}"></canvas>
        <div class="shop-item-copy skin-item-copy"><strong>${character.name}</strong>
        <button class="shop-action skin-action challenge-action${active ? ' active' : challenge.complete ? ' ready-to-claim' : ''}" ${unlocked ? `data-character-action="${index}"` : `data-challenge-index="${index}"`}>${action}</button></div>
      </article>`;
    }).join('') : (searchTerm ? searchEmptyMarkup() : `<div class="unlockable-empty"><strong>${t('nothingHere')}</strong><span>${isGerman() ? 'Schalte zuerst einen neuen SKIN oder ein neues CAR frei' : 'Unlock a new Skin or Car first'}</span></div>`);

    const ownedPurchasableCars = purchasableCarOrder.filter(type => ownedCars.includes(type));
    const nextCarIndex = ownedPurchasableCars.length;
    const visiblePurchasableCars = purchasableCarOrder.filter(type => matchesSearch(carSpecs[type]?.name, searchTerm));
    const carShopItems = visiblePurchasableCars.map(type => {
      const car = carSpecs[type];
      const owned = ownedCars.includes(type);
      const active = selectedCar === type;
      const isNext = purchasableCarOrder.indexOf(type) === nextCarIndex;
      const affordable = !owned && goldCoins >= getCarGoldCost(car) && blackCoins >= car.cost;
      const label = active
        ? t('active')
        : owned
          ? (isGerman() ? 'BESITZ' : 'OWNED')
          : carPriceMarkup(car);
      const nameSize = car.name.length > 21 ? 9 : car.name.length > 17 ? 10 : 12;
      const imageMarkup = `<div class="car-image-stage">${managedImageMarkup(car.shopAsset, car.name)}</div>`;
      return `<article class="shop-item car-shop-item${owned ? '' : ' locked'}${active ? ' active-car' : ''}${!owned && !isNext ? ' sequence-locked' : ''}${car.premiumDualCost ? ' dual-cost-car' : ''}${car.featured ? ' featured-car' : ''}" data-car-card="${type}" style="--car-color:${car.color}">
        <span class="car-tier">${String(carOrder.indexOf(type) + 1).padStart(2, '0')}</span>${imageMarkup}
        <div class="shop-item-copy"><strong class="car-name" style="--car-name-size:${nameSize}px">${car.name}</strong><small>${car.boost}X BOOST</small>
        <button class="shop-action car-price-action${active ? ' active' : isNext && affordable ? ' affordable' : ''}" data-buy-car="${type}" ${owned ? 'disabled' : ''}>${label}</button></div>
      </article>`;
    });
    if (!carShopItems.length) {
      carShopItems.push(searchEmptyMarkup());
    }
    $('#carShop').innerHTML = carShopItems.join('');
    hydrateActiveShopPanel();

    document.querySelectorAll('[data-buy-car]').forEach(button => button.addEventListener('click', event => {
      event.stopPropagation();
      openShopPreview('car', button.dataset.buyCar);
    }));
    document.querySelectorAll('[data-car-card]').forEach(card => card.addEventListener('click', event => {
      if (event.target.closest('.shop-action')) return;
      openShopPreview('car', card.dataset.carCard);
    }));
    document.querySelectorAll('[data-open-unlockables]').forEach(card => card.addEventListener('click', openUnlockableShop));
    document.querySelectorAll('[data-shop-skin]').forEach(card => card.addEventListener('click', event => {
      if (event.target.closest('.shop-action')) return;
      openShopPreview('skin', card.dataset.shopSkin);
    }));
    document.querySelectorAll('[data-character-action]').forEach(button => button.addEventListener('click', event => {
      event.stopPropagation();
      const index = Number(button.dataset.characterAction);
      const kind = characters[index]?.challenge ? 'unlockable-skin' : 'skin';
      openShopPreview(kind, index);
    }));
    document.querySelectorAll('[data-challenge-index]').forEach(button => button.addEventListener('click', event => {
      event.stopPropagation();
      openShopPreview('unlockable-skin', Number(button.dataset.challengeIndex));
    }));
    document.querySelectorAll('[data-unlockable-card]').forEach(card => card.addEventListener('click', event => {
      const index = Number(card.dataset.unlockableCard);
      openShopPreview('unlockable-skin', index);
    }));
    document.querySelectorAll('[data-challenge-car]').forEach(button => button.addEventListener('click', event => {
      event.stopPropagation();
      openShopPreview('unlockable-car', button.dataset.challengeCar);
    }));
    document.querySelectorAll('[data-unlockable-car]').forEach(card => card.addEventListener('click', event => {
      const type = card.dataset.unlockableCar;
      openShopPreview('unlockable-car', type);
    }));
    document.querySelectorAll('[data-goat-challenge], [data-goat-card]').forEach(node => node.addEventListener('click', event => {
      event.stopPropagation();
      openShopPreview('goat', 'goat');
    }));
  }

  function closeShopPreview() {
    activeShopPreview = null;
    $('#shopPreviewModal')?.classList.add('hidden');
  }

  function openShopPreview(kind, id) {
    const modal = $('#shopPreviewModal');
    if (!modal) return;
    activeShopPreview = { kind, id };
    const media = $('#shopPreviewMedia');
    const progress = $('#shopPreviewProgress');
    const action = $('#shopPreviewAction');
    progress.classList.add('hidden');
    progress.textContent = '';
    action.disabled = false;
    action.classList.remove('ready', 'active');

    if (kind === 'skin' || kind === 'unlockable-skin') {
      const index = Number(id);
      const character = characters[index];
      if (!character) return;
      const unlocked = isCharacterUnlocked(index);
      const active = selectedCharacter === index;
      const challenge = character.challenge ? getChallengeState(index) : null;
      media.innerHTML = managedImageMarkup(character.image, character.name, 'shop-preview-skin');
      hydrateManagedImages(media, 1);
      $('#shopPreviewTitle').textContent = character.name;
      $('#shopPreviewBadge').textContent = character.challenge ? t('unlockableSkin') : 'SKIN';
      $('#shopPreviewMeta').innerHTML = character.challenge
        ? challenge.text
        : getCharacterShopCost(index) === 0
          ? (isGerman() ? 'Start-SKIN' : 'Starter Skin')
          : `<span>${getCharacterShopCost(index)}</span><i class="mini-gold-coin" aria-label="gold coins">$</i>`;
      if (challenge) {
        progress.textContent = challenge.progress;
        progress.classList.remove('hidden');
      }
      action.textContent = active ? t('active') : unlocked ? t('selectSkin') : character.challenge ? (challenge.complete ? t('unlockSkin') : t('locked')) : t('buySkin');
      action.disabled = active || (character.challenge && !unlocked && !challenge.complete);
      action.classList.toggle('ready', character.challenge && challenge?.complete && !unlocked);
      action.classList.toggle('active', active);
    } else if (kind === 'car' || kind === 'unlockable-car') {
      const type = String(id);
      const car = carSpecs[type];
      if (!car) return;
      const owned = getOwnedCars().includes(type);
      const active = getSelectedCar() === type;
      const challenge = car.challenge ? getCarChallengeState(type) : null;
      const targetIndex = purchasableCarOrder.indexOf(type);
      const nextIndex = purchasableCarOrder.filter(carType => getOwnedCars().includes(carType)).length;
      const isNext = targetIndex < 0 || targetIndex === nextIndex;
      media.innerHTML = managedImageMarkup(car.shopAsset, car.name, 'shop-preview-car');
      hydrateManagedImages(media, 1);
      $('#shopPreviewTitle').textContent = car.name;
      $('#shopPreviewBadge').textContent = car.challenge ? t('unlockableCar') : 'CAR';
      $('#shopPreviewMeta').innerHTML = car.challenge
        ? `${car.boost}X BOOST · ${challenge.text}`
        : `${car.boost}X BOOST · ${owned ? (isGerman() ? 'BESITZ' : 'OWNED') : carPriceText(car)}`;
      if (challenge) {
        progress.textContent = challenge.progress;
        progress.classList.remove('hidden');
      }
      action.textContent = active ? t('active') : owned ? t('selectCar') : car.challenge ? (challenge.complete ? t('unlockVehicle') : t('locked')) : isNext ? t('buyCar') : t('locked');
      action.disabled = active || (car.challenge && !owned && !challenge.complete) || (!car.challenge && !owned && !isNext);
      action.classList.toggle('ready', car.challenge && challenge?.complete && !owned);
      action.classList.toggle('active', active);
    } else if (kind === 'goat') {
      const challenge = getGoatState();
      const unlocked = isGoatUnlocked();
      media.innerHTML = managedImageMarkup(goatReward.image, 'GOAT', 'shop-preview-skin');
      hydrateManagedImages(media, 1);
      $('#shopPreviewTitle').textContent = 'GOAT';
      $('#shopPreviewBadge').textContent = t('finalReward');
      $('#shopPreviewMeta').textContent = challenge.text;
      progress.textContent = challenge.progress;
      progress.classList.remove('hidden');
      action.textContent = unlocked ? t('completed') : challenge.complete ? t('claimGoat') : t('locked');
      action.disabled = unlocked || !challenge.complete;
      action.classList.toggle('ready', challenge.complete && !unlocked);
    }
    modal.classList.remove('hidden');
  }

  function confirmShopPreview() {
    if (!activeShopPreview) return;
    const { kind, id } = activeShopPreview;
    closeShopPreview();
    if (kind === 'skin') {
      buyOrSelectCharacter(Number(id));
    } else if (kind === 'car') {
      buyCar(String(id));
    } else if (kind === 'unlockable-skin') {
      const index = Number(id);
      if (isCharacterUnlocked(index)) {
        buyOrSelectCharacter(index);
        return;
      }
      activeChallengeIndex = index;
      activeChallengeCarType = '';
      activeSpecialChallenge = '';
      unlockChallengeSkin();
    } else if (kind === 'unlockable-car') {
      if (getOwnedCars().includes(String(id))) {
        selectCar(String(id));
        return;
      }
      activeChallengeIndex = -1;
      activeChallengeCarType = String(id);
      activeSpecialChallenge = '';
      unlockChallengeSkin();
    } else if (kind === 'goat') {
      activeChallengeIndex = -1;
      activeChallengeCarType = '';
      activeSpecialChallenge = 'goat';
      unlockChallengeSkin();
    }
  }

  function buyCar(type) {
    const car = carSpecs[type];
    const owned = getOwnedCars();
    if (!car || car.challenge || owned.includes(type)) return;
    const targetIndex = purchasableCarOrder.indexOf(type);
    const nextIndex = purchasableCarOrder.filter(carType => owned.includes(carType)).length;
    if (targetIndex !== nextIndex) {
      const required = carSpecs[purchasableCarOrder[Math.max(0, targetIndex - 1)]];
      showShopMessage(isGerman() ? `DU KANNST ${car.name} NOCH NICHT KAUFEN. SCHALTE ZUERST ${required?.name || 'DAS VORHERIGE CAR'} FREI.` : `YOU CAN'T BUY ${car.name} YET. UNLOCK ${required?.name || 'THE PREVIOUS CAR'} FIRST.`, false);
      return;
    }
    const missingBlack = Math.max(0, Number(car.cost || 0) - getBlackCoins());
    const missingGold = Math.max(0, getCarGoldCost(car) - getGoldCoins());
    if (missingBlack || missingGold) {
      const parts = [];
      if (missingBlack) parts.push(isGerman() ? `${missingBlack} ${t('moreBlackCoins')}` : `${missingBlack} MORE BLACK COINS`);
      if (missingGold) parts.push(isGerman() ? `${missingGold} ${t('moreGoldCoins')}` : `${missingGold} MORE GOLD COINS`);
      showShopMessage(isGerman() ? `DU BRAUCHST ${parts.join(' UND ')} FÜR ${car.name}.` : `YOU NEED ${parts.join(' AND ')} FOR ${car.name}.`, false);
      return;
    }
    if (!spendBlackCoins(car.cost)) return;
    if (getCarGoldCost(car) > 0 && !spendGoldCoins(getCarGoldCost(car))) return;
    saveOwnedCars([...owned, type]);
    try { localStorage.setItem('mand.selectedCar', type); } catch { /* Private mode. */ }
    updateShop();
    updateMenuStats();
    updateCurrentCarCard();
    refreshUnlockAlerts(true);
    showShopMessage(isGerman() ? `${car.name} FREIGESCHALTET · ${car.boost}X BOOST AKTIV!` : `${car.name} UNLOCKED · ${car.boost}X BOOST ACTIVE!`, true);
  }

  let shopMessageTimer = 0;
  function showShopMessage(message, success) {
    const node = $('#shopMessage');
    if (!node) return;
    clearTimeout(shopMessageTimer);
    node.textContent = message;
    node.classList.toggle('success', success);
    node.classList.remove('hidden');
    pop(node);
    shopMessageTimer = setTimeout(() => node.classList.add('hidden'), 3300);
  }

  function buyOrSelectCharacter(index) {
    const character = characters[index];
    if (!character) return;
    const wasUnlocked = isCharacterUnlocked(index);
    if (!wasUnlocked) {
      const cost = getCharacterShopCost(index);
      if (!spendGoldCoins(cost)) {
        showShopMessage(isGerman() ? `DU BRAUCHST ${cost - getGoldCoins()} ${t('moreGoldCoins')} FÜR ${character.name}.` : `YOU NEED ${cost - getGoldCoins()} MORE GOLD COINS FOR ${character.name}.`, false);
        return;
      }
      saveOwnedCharacters([...getOwnedCharacters(), index]);
    }
    selectedCharacter = index;
    try { localStorage.setItem('mand.selectedCharacter', String(index)); } catch { /* Private mode. */ }
    updateShop();
    updateCharacterLocks();
    updateMenuStats();
    if (!wasUnlocked) refreshUnlockAlerts(true);
  }

  function openChallengeModal(index) {
    const character = characters[index];
    if (!character?.challenge) return;
    activeChallengeIndex = index;
    activeChallengeCarType = '';
    activeSpecialChallenge = '';
    const state = getChallengeState(index);
    $('#challengeTitle').textContent = character.name;
    $('#challengeText').textContent = state.text;
    $('#challengeProgress').textContent = state.progress;
    const unlockButton = $('#challengeUnlock');
    unlockButton.textContent = state.complete ? t('unlockSkin') : t('challengeLocked');
    unlockButton.disabled = !state.complete;
    unlockButton.classList.toggle('ready', state.complete);
    $('#challengeModal').classList.remove('hidden');
  }

  function openCarChallengeModal(type) {
    const car = carSpecs[type];
    if (!car?.challenge) return;
    activeChallengeIndex = -1;
    activeChallengeCarType = type;
    activeSpecialChallenge = '';
    const state = getCarChallengeState(type);
    $('#challengeTitle').textContent = car.name;
    $('#challengeText').textContent = state.text;
    $('#challengeProgress').textContent = state.progress;
    const unlockButton = $('#challengeUnlock');
    unlockButton.textContent = state.complete ? t('unlockVehicle') : t('challengeLocked');
    unlockButton.disabled = !state.complete;
    unlockButton.classList.toggle('ready', state.complete);
    $('#challengeModal').classList.remove('hidden');
  }

  function openGoatChallengeModal() {
    activeChallengeIndex = -1;
    activeChallengeCarType = '';
    activeSpecialChallenge = 'goat';
    const state = getGoatState();
    $('#challengeTitle').textContent = 'GOAT';
    $('#challengeText').textContent = state.text;
    $('#challengeProgress').textContent = state.progress;
    const unlockButton = $('#challengeUnlock');
    unlockButton.textContent = state.complete ? t('claimGoat') : t('challengeLocked');
    unlockButton.disabled = !state.complete;
    unlockButton.classList.toggle('ready', state.complete);
    $('#challengeModal').classList.remove('hidden');
  }

  function closeChallengeModal() {
    activeChallengeIndex = -1;
    activeChallengeCarType = '';
    activeSpecialChallenge = '';
    $('#challengeModal').classList.add('hidden');
  }

  function unlockChallengeSkin() {
    if (activeSpecialChallenge === 'goat') {
      const state = getGoatState();
      if (!state.complete || isGoatUnlocked()) return;
      try { localStorage.setItem('mand.goatUnlocked', '1'); } catch { /* Private mode. */ }
      closeChallengeModal();
      updateShop();
      refreshUnlockAlerts(true);
      showShopMessage(t('unlockGoatMessage'), true);
      return;
    }
    if (activeChallengeCarType) {
      const type = activeChallengeCarType;
      const state = getCarChallengeState(type);
      if (!state.complete || getOwnedCars().includes(type)) return;
      saveOwnedCars([...getOwnedCars(), type]);
      try { localStorage.setItem('mand.selectedCar', type); } catch { /* Private mode. */ }
      closeChallengeModal();
      updateShop();
      updateCharacterLocks();
      updateCurrentCarCard();
      updateMenuStats();
      refreshUnlockAlerts(true);
      showShopMessage(isGerman() ? `${carSpecs[type].name} CHALLENGE GESCHAFFT · FAHRZEUG FREIGESCHALTET!` : `${carSpecs[type].name} CHALLENGE COMPLETE · VEHICLE UNLOCKED!`, true);
      return;
    }
    if (activeChallengeIndex < 0 || isCharacterUnlocked(activeChallengeIndex)) return;
    const state = getChallengeState(activeChallengeIndex);
    if (!state.complete) return;
    const unlockedIndex = activeChallengeIndex;
    saveOwnedCharacters([...getOwnedCharacters(), unlockedIndex]);
    selectedCharacter = unlockedIndex;
    try { localStorage.setItem('mand.selectedCharacter', String(unlockedIndex)); } catch { /* Private mode. */ }
    closeChallengeModal();
    updateShop();
    updateCharacterLocks();
    refreshUnlockAlerts(true);
    showShopMessage(isGerman() ? `${characters[unlockedIndex].name} CHALLENGE GESCHAFFT · SKIN FREIGESCHALTET!` : `${characters[unlockedIndex].name} CHALLENGE COMPLETE · SKIN UNLOCKED!`, true);
  }

  function openCharacterShop() {
    document.querySelectorAll('[data-shop-tab]').forEach(tab => tab.classList.toggle('selected', tab.dataset.shopTab === 'characters'));
    $('#characterShop').classList.remove('hidden');
    $('#carShop').classList.add('hidden');
    $('#unlockableShop').classList.add('hidden');
    $('#unlockableFilters')?.classList.add('hidden');
    showScreen('shop');
    hydrateActiveShopPanel();
  }

  function openCarShop() {
    document.querySelectorAll('[data-shop-tab]').forEach(tab => tab.classList.toggle('selected', tab.dataset.shopTab === 'cars'));
    $('#carShop').classList.remove('hidden');
    $('#characterShop').classList.add('hidden');
    $('#unlockableShop').classList.add('hidden');
    $('#unlockableFilters')?.classList.add('hidden');
    showScreen('shop');
    hydrateActiveShopPanel();
  }

  function openUnlockableShop() {
    document.querySelectorAll('[data-shop-tab]').forEach(tab => tab.classList.toggle('selected', tab.dataset.shopTab === 'unlockables'));
    $('#unlockableShop').classList.remove('hidden');
    $('#carShop').classList.add('hidden');
    $('#characterShop').classList.add('hidden');
    $('#unlockableFilters')?.classList.remove('hidden');
    showScreen('shop');
    hydrateActiveShopPanel();
  }

  function updateOpponentHighscores() {
    $('#opponentGoldCoins').textContent = getGoldCoins();
    document.querySelectorAll('.opponent-card').forEach((card, index) => {
      card.querySelector('.opponent-highscore b').textContent = getHighscore(index);
      const state = getOpponentUnlockState(index);
      const locked = !state.unlocked;
      card.classList.toggle('locked', locked);
      card.querySelector('.opponent-lock-status').textContent = locked ? `🔒 ${state.completed} / 4 · ${t('openProgress')}` : t('levelOpen');
    });
    if (!isOpponentUnlocked(selectedOpponent)) selectedOpponent = 0;
    document.querySelectorAll('.opponent-card').forEach((card, index) => card.classList.toggle('selected', index === selectedOpponent));
  }

  function drawSegmentedCharacter(context, image, character, centerX, centerY, displaySize, swing) {
    if (!image?.complete || !image.naturalWidth) return;
    const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
    const cut = character.legCutRatio
      ? sourceSize * character.legCutRatio
      : character.legCut
        ? sourceSize * (character.legCut / 1100)
        : sourceSize * .69;
    const scale = displaySize / sourceSize;
    const left = centerX - displaySize / 2;
    const top = centerY - displaySize / 2;
    const legHeight = (sourceSize - cut) * scale;
    context.save();
    context.translate(left + displaySize * .25, top + cut * scale);
    context.rotate(swing);
    context.drawImage(image, 0, cut, sourceSize / 2, sourceSize - cut, -displaySize * .25, 0, displaySize / 2, legHeight);
    context.restore();
    context.save();
    context.translate(left + displaySize * .75, top + cut * scale);
    context.rotate(-swing);
    context.drawImage(image, sourceSize / 2, cut, sourceSize / 2, sourceSize - cut, -displaySize * .25, 0, displaySize / 2, legHeight);
    context.restore();
    context.drawImage(image, 0, 0, sourceSize, cut, left, top, displaySize, cut * scale);
  }

  function drawWholeCharacter(context, image, centerX, centerY, displaySize) {
    if (!image?.complete || !image.naturalWidth) {
      context.save();
      context.globalAlpha = .72;
      context.fillStyle = '#efe5d7';
      context.beginPath();
      context.ellipse(centerX, centerY + displaySize * .18, displaySize * .2, displaySize * .055, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = '#d9c9d8';
      context.beginPath();
      context.arc(centerX, centerY - displaySize * .1, displaySize * .18, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = '#c8b6ca';
      context.fillRect(centerX - displaySize * .12, centerY + displaySize * .04, displaySize * .24, displaySize * .34);
      context.restore();
      return;
    }
    context.drawImage(image, centerX - displaySize / 2, centerY - displaySize / 2, displaySize, displaySize);
  }

  function drawCharacterSilhouette(context, image, centerX, centerY, displaySize) {
    if (!image?.complete || !image.naturalWidth) {
      context.save();
      context.fillStyle = 'rgba(0, 0, 0, .9)';
      context.beginPath();
      context.ellipse(centerX, centerY + displaySize * .18, displaySize * .2, displaySize * .055, 0, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.arc(centerX, centerY - displaySize * .1, displaySize * .18, 0, Math.PI * 2);
      context.fill();
      context.fillRect(centerX - displaySize * .12, centerY + displaySize * .04, displaySize * .24, displaySize * .34);
      context.restore();
      return;
    }
    const size = Math.ceil(displaySize);
    if (characterOutlineCanvas.width !== size || characterOutlineCanvas.height !== size) {
      characterOutlineCanvas.width = size;
      characterOutlineCanvas.height = size;
    }
    characterOutlineContext.clearRect(0, 0, size, size);
    characterOutlineContext.drawImage(image, 0, 0, size, size);
    characterOutlineContext.globalCompositeOperation = 'source-in';
    characterOutlineContext.fillStyle = 'rgba(0, 0, 0, .92)';
    characterOutlineContext.fillRect(0, 0, size, size);
    characterOutlineContext.globalCompositeOperation = 'source-over';

    context.save();
    context.shadowColor = 'rgba(0, 0, 0, .22)';
    context.shadowBlur = 7;
    context.shadowOffsetY = 5;
    context.drawImage(characterOutlineCanvas, centerX - displaySize / 2, centerY - displaySize / 2);
    context.restore();
  }

  function renderPreviews(now) {
    const characterVisible = !screens.characters.classList.contains('hidden');
    const shopVisible = !screens.shop.classList.contains('hidden');
    const collectionVisible = !screens.collection.classList.contains('hidden');
    if (lowPowerMode && now - lastPreviewFrame < (characterVisible ? 180 : 90)) {
      requestAnimationFrame(renderPreviews);
      return;
    }
    lastPreviewFrame = now;
    if (characterVisible) {
      const selectedImage = characterImages[selectedCharacter];
      const menuKey = `${selectedCharacter}:${selectedImage?.complete ? selectedImage.naturalWidth : 0}:${innerWidth}:${innerHeight}`;
      if (menuKey !== menuPreviewKey) {
        menuPreviewKey = menuKey;
        previewCanvases.forEach((preview, index) => {
          const card = preview.closest('.character-card');
          if (card?.classList.contains('future-hidden')) return;
          const previewContext = preview.getContext('2d');
          previewContext.clearRect(0, 0, preview.width, preview.height);
          drawWholeCharacter(previewContext, characterImages[index], preview.width / 2, preview.height / 2 + preview.height * .006, preview.width * 1.3);
        });
        document.querySelectorAll('.menu-collection-outline').forEach(preview => {
          const index = Number(preview.dataset.characterIndex || selectedCharacter);
          const previewContext = preview.getContext('2d');
          previewContext.clearRect(0, 0, preview.width, preview.height);
          drawCharacterSilhouette(previewContext, characterImages[index], preview.width / 2, preview.height / 2 + preview.height * .01, preview.height * 1.06);
        });
      }
    }
    if (shopVisible || collectionVisible) document.querySelectorAll('.shop-panel:not(.hidden) .shop-character-canvas').forEach(preview => {
      const index = Number(preview.dataset.characterIndex);
      const image = characterImages[index];
      const renderKey = `${index}:${preview.width}:${preview.height}:${image?.complete ? image.naturalWidth : 0}`;
      if (preview.dataset.renderKey === renderKey) return;
      preview.dataset.renderKey = renderKey;
      const previewContext = preview.getContext('2d');
      previewContext.clearRect(0, 0, preview.width, preview.height);
      drawWholeCharacter(previewContext, image, preview.width / 2, preview.height / 2 + 4, 398);
    });
    requestAnimationFrame(renderPreviews);
  }

  function resize() {
    ratio = Math.min(devicePixelRatio || 1, maxCanvasRatio);
    width = innerWidth;
    height = innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    cachedBackgroundGradient = null;
    cachedBackgroundGradientKey = '';
    player.x = clamp(player.x, 28, width - 28);
    player.targetX = player.x;
  }

  function startGame() {
    ensureSoundContext();
    stopGame();
    resize();
    elapsed = 0;
    paused = false;
    climbed = 0;
    score = 0;
    runCoins = 0;
    runBlackCoins = 0;
    runCarType = getSelectedCar();
    jumpStreak = 0;
    ride = null;
    particles = [];
    floatingTexts = [];
    cars = [];
    stars = [];
    blackCoinPickups = [];
    shoePickups = [];
    thrownBottles = [];
    fireHotDogs = [];
    boss = null;
    hennessyUntil = 0;
    hennessyCount = 0;
    superJumpUntil = 0;
    screenShake = 0;
    cameraImpact = 0;
    cameraLift = 0;
    landingAnimation = 0;
    pickupFlash = 0;
    nextMilestone = 100;
    milestoneTimer = 0;
    blackCoinRewardCarry = 0;
    lastCarScore = -20;
    lastBlackCoinMeter = -30;
    lastShoeMeter = -20;
    nextBossAt = selectedOpponent === 1 ? random(16, 21) : random(23, 29);
    nextFireHotDogsAt = selectedOpponent === 1 ? random(12, 18) : 9999;
    runTunTuns = 0;
    opponentHighscoreAtRunStart = getHighscore();
    player.x = width / 2;
    player.targetX = player.x;
    player.y = height - 150;
    player.previousY = player.y;
    player.vy = -760 * getPaceMultiplier();
    platforms = [{ x: width / 2 - 72, originX: width / 2 - 72, moveRange: 0, moveSpeed: 0, y: height - 105, w: 144, h: 18, type: 'normal', direction: 1, dead: false, counted: true, hazard: null, age: 0 }];
    ensurePlatforms();
    scoreNode.textContent = '0';
    lastHudScore = 0;
    lastHennessyText = '';
    lastPowerHudMarkup = '';
    starsNode.textContent = getGoldCoins();
    blackCoinsNode.textContent = getBlackCoins();
    powerHud.classList.add('hidden');
    hennessyHud.classList.add('hidden');
    hennessyCountHud.querySelector('b').textContent = '0';
    hennessyCountHud.classList.toggle('hidden', selectedOpponent !== 0);
    tunTunCountHud.querySelector('b').textContent = '0';
    tunTunCountHud.classList.toggle('hidden', selectedOpponent !== 0);
    $('#pauseScreen').classList.add('hidden');
    milestoneBanner.classList.add('hidden');
    gameOverPanel.classList.add('hidden');
    dragHint.classList.remove('hidden');
    showScreenOnly('game');
    playing = true;
    lastTime = performance.now();
    animationId = requestAnimationFrame(loop);
    setTimeout(() => dragHint.classList.add('hidden'), 2600);
  }

  function showScreenOnly(name) {
    Object.entries(screens).forEach(([key, element]) => element.classList.toggle('hidden', key !== name));
  }

  function stopGame() {
    playing = false;
    paused = false;
    cancelAnimationFrame(animationId);
    $('#pauseScreen')?.classList.add('hidden');
    if (musicWasStarted && !musicIsFading) setBackgroundMusicVolume(.58);
  }

  function returnToMainMenu() {
    gameOverPanel.classList.add('hidden');
    showScreen('characters');
  }

  function getPaceMultiplier() {
    const opponentPace = selectedOpponent === 1 ? 1.22 : 1.07;
    const altitudePace = 1 + Math.min(7, Math.floor(score / 300)) * .10;
    return opponentPace * altitudePace;
  }

  function ensurePlatforms() {
    let top = platforms.filter(platform => !platform.dead).reduce((best, platform) => platform.y < best.y ? platform : best, platforms[0]);
    while (top && top.y > -170) top = generatePlatformAbove(top);
  }

  function generatePlatformAbove(base) {
    const difficulty = clamp(score / 900, 0, 1);
    const gap = random(78 + difficulty * 7, 102 + difficulty * 13);
    const platformWidth = random(74 - difficulty * 7, 140 - difficulty * 23);
    const baseCenter = base.x + base.w / 2;
    const maxSideMove = 118 + difficulty * 34;
    const center = clamp(baseCenter + random(-maxSideMove, maxSideMove), 28 + platformWidth / 2, width - 28 - platformWidth / 2);
    let type = 'normal';
    const roll = Math.random();
    const movingChance = .34 + difficulty * .12 + (selectedOpponent === 1 ? .16 : .035);
    const trapdoorChance = selectedOpponent === 1 && score > 8 ? .17 + difficulty * .07 : score > 45 ? .035 + difficulty * .018 : 0;
    const fireChance = .04 + difficulty * .025 + (selectedOpponent === 1 ? .055 : .012);
    if (score > 3 && roll < movingChance) type = 'moving';
    else if (roll < movingChance + trapdoorChance) type = 'trapdoor';
    else if (score > 10 && roll < movingChance + trapdoorChance + fireChance) type = 'fire';
    else if (score > 16 && roll < movingChance + trapdoorChance + fireChance + .075) type = 'spring';
    const platformX = center - platformWidth / 2;
    const platform = { x: platformX, originX: platformX, moveRange: width, moveSpeed: random(132, 184) + difficulty * 42 + (selectedOpponent === 1 ? 34 : 10), y: base.y - gap, w: platformWidth, h: random(12, 18), type, direction: Math.random() < .5 ? -1 : 1, dead: false, cracked: false, exploding: false, opening: 0, counted: false, hazard: null, age: 0 };
    const hazardChance = selectedOpponent === 1 ? .16 + difficulty * .055 : .04 + difficulty * .018;
    if (score > 7 && type === 'normal' && platformWidth >= 102 && Math.random() < hazardChance) {
      platform.hazard = {
        side: Math.random() < .5 ? 'left' : 'right',
        w: selectedOpponent === 1 ? Math.min(50, platformWidth * .40) : Math.min(38, Math.max(30, platformWidth * .32)),
        h: selectedOpponent === 1 ? 58 : 42,
        kind: selectedOpponent === 1 ? 'flame' : 'cone',
        pulse: random(0, Math.PI * 2)
      };
    }
    platforms.push(platform);

    if (Math.random() < .48) {
      const amount = Math.random() < .24 ? 3 : 1;
      for (let index = 0; index < amount; index++) {
        stars.push({ x: center + (index - (amount - 1) / 2) * 31, y: platform.y - 42 - Math.abs(index - 1) * 5, radius: 15, pulse: random(0, Math.PI * 2), dead: false });
      }
    }

    if (score > 3 && score - lastCarScore > 8 && Math.random() < .12) {
      const carType = chooseCarType();
      cars.push({ x: center, y: platform.y - 55, type: carType, w: 50, h: 68, bob: random(0, Math.PI * 2), dead: false });
      lastCarScore = score;
    }
    const blackCoinSpacing = selectedOpponent === 1 ? 6 : 12;
    const blackCoinChance = selectedOpponent === 1 ? .09 : .045;
    if (score > 2 && score - lastBlackCoinMeter > blackCoinSpacing && Math.random() < blackCoinChance) {
      blackCoinPickups.push({ x: center, y: platform.y - 61, radius: 29, pulse: random(0, Math.PI * 2), dead: false });
      lastBlackCoinMeter = score;
    }
    if (selectedOpponent === 0 && score > 4 && score - lastShoeMeter > 9 && Math.random() < .10) {
      shoePickups.push({ x: center, y: platform.y - 57, w: 80, h: 80, pulse: random(0, Math.PI * 2), dead: false });
      lastShoeMeter = score;
    }
    return platform;
  }

  function chooseCarType() {
    return runCarType;
  }

  function update(dt) {
    if (!playing || paused) return;
    elapsed += dt;
    const pace = getPaceMultiplier();
    player.previousY = player.y;
    const horizontalSpeed = ride ? 430 : 470 - clamp(score / 35, 0, 105);
    player.x += clamp(player.targetX - player.x, -horizontalSpeed * dt, horizontalSpeed * dt);
    player.x = clamp(player.x, player.w / 2 + 5, width - player.w / 2 - 5);

    platforms.forEach(platform => {
      if (platform.dead) return;
      platform.age = (platform.age || 0) + dt;
      if (platform.opening > 0) {
        platform.opening -= dt;
        if (platform.opening <= 0) {
          platform.dead = true;
          emitPlatformFragments(platform);
        }
      }
      if (platform.type !== 'moving') return;
      const minX = 16;
      const maxX = width - 16 - platform.w;
      platform.x += platform.direction * platform.moveSpeed * pace * dt;
      if (platform.x < minX || platform.x > maxX) {
        platform.direction *= -1;
        platform.x = clamp(platform.x, minX, maxX);
      }
    });
    updateBossAttack(dt);
    if (!playing) return;

    if (ride) updateRide(dt);
    else {
      player.vy += 1900 * pace * pace * dt;
      player.y += player.vy * dt;
      handlePlatformLanding();
      checkDynamicHazards();
    }

    if (!playing) return;

    collectPickups();
    scrollWorldIfNeeded(dt);
    updateEffects(dt);
    cleanWorld();
    updateRunHud();
    updateHennessyTimer();
    updatePowerHud();

    if (!ride && player.y - player.h / 2 > height + 8) endGame();
  }

  function handlePlatformLanding() {
    if (player.vy <= 0) return;
    const oldBottom = player.previousY + player.h / 2;
    const newBottom = player.y + player.h / 2;
    for (const platform of platforms) {
      if (platform.dead || platform.opening > 0 || platform.y > height - 10 || oldBottom > platform.y + 4 || newBottom < platform.y) continue;
      if (player.x + player.w * .38 < platform.x || player.x - player.w * .38 > platform.x + platform.w) continue;
      if (platform.hazard) {
        const hazardX = platform.hazard.side === 'left' ? platform.x + 3 : platform.x + platform.w - platform.hazard.w - 3;
        const playerLeft = player.x - player.w * .32;
        const playerRight = player.x + player.w * .32;
        if (playerRight > hazardX && playerLeft < hazardX + platform.hazard.w) {
          player.y = platform.y - player.h / 2;
          burst(player.x, platform.y - 8, '#ff465d', 20);
          screenShake = 10;
          pickupFlash = .7;
          endGame(t('youHitObstacle'));
          return;
        }
      }
      const impactSpeed = player.vy;
      player.y = platform.y - player.h / 2;
      const landingOffset = Math.abs(player.x - (platform.x + platform.w / 2));
      jumpStreak = landingOffset < platform.w * .27 ? jumpStreak + 1 : Math.max(1, jumpStreak);
      if (!platform.counted) {
        platform.counted = true;
        addMeters(1);
        addFloatingText(player.x, player.y - 58, '+1m', '#ffffff');
      }
      const baseJumpVelocity = platform.type === 'spring' ? 930 : 760;
      player.vy = -baseJumpVelocity * getPaceMultiplier() * (superJumpUntil > elapsed ? Math.SQRT2 : 1);
      landingAnimation = .22;
      cameraImpact = Math.max(cameraImpact, clamp((impactSpeed - 520) / 90, 2, platform.type === 'spring' ? 7 : 5));
      cameraLift = Math.max(cameraLift, platform.type === 'spring' ? 8 : 4);
      screenShake = Math.max(screenShake, clamp((impactSpeed - 620) / 125, 1.3, platform.type === 'spring' ? 5 : 3.4));
      emitLandingParticles(player.x, platform.y, platform.type);
      playLandingSound(impactSpeed, platform.type);
      playJumpSound(platform.type === 'spring');
      if (platform.type === 'fire' && !platform.exploding) {
        platform.exploding = true;
        burst(player.x, platform.y, '#ff6a22', 28);
        burst(platform.x + platform.w / 2, platform.y, '#ffd343', 18);
        addFloatingText(player.x, player.y - 46, 'BOOM!', '#ffbf35');
        screenShake = Math.max(screenShake, 5);
        platform.opening = .15;
      }
      if (platform.type === 'trapdoor' && !platform.cracked) {
        platform.cracked = true;
        platform.opening = .28;
        addFloatingText(player.x, player.y - 48, isGerman() ? 'FALLE!' : 'TRAPDOOR!', '#ffe0a8');
        burst(platform.x + platform.w / 2, platform.y, '#ca782f', 18);
        screenShake = Math.max(screenShake, 4);
      }
      if (platform.type === 'spring') {
        addFloatingText(player.x, player.y - 50, isGerman() ? 'SUPERSPRUNG!' : 'SUPER JUMP!', '#f45cff');
        screenShake = Math.max(screenShake, 3);
      }
      burst(player.x, platform.y, opponents[selectedOpponent].accent, 7);
      if (navigator.vibrate && jumpStreak % 5 === 0) navigator.vibrate(12);
      break;
    }
  }

  function checkDynamicHazards() {
    if (!playing || ride) return;
    for (const platform of platforms) {
      const hazard = platform.hazard;
      if (platform.dead || !hazard || hazard.kind !== 'flame') continue;
      const hazardX = hazard.side === 'left' ? platform.x + 3 : platform.x + platform.w - hazard.w - 3;
      const playerLeft = player.x - player.w * .27;
      const playerRight = player.x + player.w * .27;
      const playerTop = player.y - player.h * .38;
      const playerBottom = player.y + player.h * .38;
      if (playerRight < hazardX + 3 || playerLeft > hazardX + hazard.w - 3 || playerBottom < platform.y - hazard.h || playerTop > platform.y) continue;
      burst(player.x, player.y, '#ff5a24', 30);
      screenShake = 11;
      pickupFlash = .8;
      endGame(t('youHitFlames'));
      return;
    }
  }

  function addMeters(amount) {
    const previousScore = score;
    score += amount;
    updateRunHud();
    while (score >= nextMilestone) {
      triggerMilestone(nextMilestone);
      nextMilestone += 100;
    }
    if (Math.floor(previousScore / 300) < Math.floor(score / 300)) {
      showBanner(isGerman() ? 'SCHNELLER!' : 'SPEED UP!', `${t('altitudeTier')} ${Math.floor(score / 300) + 1}`, '#dce8ff');
      playSpeedUpSound();
    }
    checkLiveUnlockables();
  }

  function collectPickups() {
    stars.forEach(star => {
      if (star.dead) return;
      const range = ride ? 78 : 35;
      if (Math.hypot(player.x - star.x, player.y - star.y) > range) return;
      star.dead = true;
      runCoins += 1;
      updateRoundBest('gold', selectedOpponent, runCoins);
      updateCharacterRoundBest('gold', selectedCharacter, runCoins);
      updateLoadoutRoundBest('gold', selectedCharacter, runCarType, runCoins);
      const totalGold = addGoldCoin();
      starsNode.textContent = totalGold;
      playCoinSound();
      addFloatingText(star.x, star.y, '+1 COIN', '#ffd83d');
      burst(star.x, star.y, '#ffd83d', 11);
      pickupFlash = Math.max(pickupFlash, .20);
      emitPickupRing(star.x, star.y, '#ffd83d');
      if (selectedOpponent === 1 && runCoins >= 400) refreshUnlockAlerts(true);
    });

    blackCoinPickups.forEach(coin => {
      if (coin.dead || Math.hypot(player.x - coin.x, player.y - coin.y) > (ride ? 88 : 44)) return;
      coin.dead = true;
      const rewardMultiplier = selectedOpponent === 1 ? 2 : 1;
      blackCoinRewardCarry += rewardMultiplier;
      const reward = Math.max(1, Math.floor(blackCoinRewardCarry));
      blackCoinRewardCarry -= reward;
      runBlackCoins += reward;
      updateRoundBest('black', selectedOpponent, runBlackCoins);
      updateCharacterRoundBest('black', selectedCharacter, runBlackCoins);
      updateLoadoutRoundBest('black', selectedCharacter, runCarType, runBlackCoins);
      const total = addBlackCoin(reward);
      blackCoinsNode.textContent = total;
      playBlackCoinSound();
      addFloatingText(coin.x, coin.y, `${t('blackCoins')} +${reward}`, '#d7d7df');
      burst(coin.x, coin.y, '#4c4c58', 18);
      emitPickupRing(coin.x, coin.y, '#d7d7df');
      pickupFlash = Math.max(pickupFlash, .35);
      showBanner(t('blackCoins'), `${t('shopCurrency')} +${reward}`, '#d7d7df');
      if ((selectedOpponent === 0 && runBlackCoins >= 10) || getLifetimeBlackCoins() >= 30) refreshUnlockAlerts(true);
    });

    shoePickups.forEach(shoe => {
      if (shoe.dead) return;
      const hitX = Math.abs(player.x - shoe.x) < player.w / 2 + shoe.w * .38;
      const hitY = Math.abs(player.y - shoe.y) < player.h / 2 + shoe.h * .26;
      if (!hitX || !hitY) return;
      shoe.dead = true;
      runTunTuns += 1;
      updateRoundBest('tuntun', selectedOpponent, runTunTuns);
      updateCharacterRoundBest('tuntun', selectedCharacter, runTunTuns);
      updateLoadoutRoundBest('tuntun', selectedCharacter, runCarType, runTunTuns);
      tunTunCountHud.querySelector('b').textContent = String(runTunTuns);
      superJumpUntil = elapsed + 5;
      playShoeSound();
      if (runTunTuns % 10 === 0) playTunTunSound();
      addFloatingText(shoe.x, shoe.y, `${t('doubleJump')} 5s!`, '#f4eee2');
      burst(shoe.x, shoe.y, '#f4eee2', 20);
      emitPickupRing(shoe.x, shoe.y, '#ffffff', 18);
      pickupFlash = Math.max(pickupFlash, .42);
      showBanner(`${t('doubleJump')}!`, t('doubleJumpHeight'), '#f4eee2');
      updatePowerHud();
      if (navigator.vibrate) navigator.vibrate([30, 20, 45]);
    });

    if (ride) return;
    cars.forEach(car => {
      if (car.dead) return;
      const hitX = Math.abs(player.x - car.x) < player.w / 2 + car.w / 2;
      const hitY = Math.abs(player.y - car.y) < player.h / 2 + car.h / 2;
      if (hitX && hitY) activateCarRide(car);
    });
  }

  function activateCarRide(car) {
    car.dead = true;
    const spec = carSpecs[car.type];
    ride = { type: car.type, remaining: spec.distance, speed: spec.speed, total: spec.distance, metersTotal: spec.meters, metersAwarded: 0 };
    player.y = car.y;
    player.vy = 0;
    jumpStreak += 2;
    updatePowerHud();
    showBanner(spec.label, `+${spec.meters}m`, spec.color);
    playBoostSound(car.type);
    addFloatingText(player.x, player.y - 60, `${spec.label}!`, spec.color);
    burst(player.x, player.y, spec.color, 22);
    emitPickupRing(player.x, player.y, spec.color, 24);
    pickupFlash = Math.max(pickupFlash, .48);
    screenShake = 5;
    if (navigator.vibrate) navigator.vibrate([35, 20, 55]);
  }

  function updateRide(dt) {
    const distance = Math.min(ride.remaining, ride.speed * getPaceMultiplier() * dt);
    ride.remaining -= distance;
    player.y -= distance;
    const metersReached = Math.min(ride.metersTotal, Math.floor(((ride.total - ride.remaining) / ride.total) * ride.metersTotal + .0001));
    if (metersReached > ride.metersAwarded) {
      const gained = metersReached - ride.metersAwarded;
      ride.metersAwarded = metersReached;
      addMeters(gained);
      addFloatingText(player.x, player.y - 48, `+${gained}m`, carSpecs[ride.type].color);
    }
    if (Math.random() < (lowPowerMode ? .25 : .55)) pushParticle({ x: player.x + random(-15, 15), y: player.y + 45, vx: random(-25, 25), vy: random(40, 90), life: .55, size: random(3, 7), color: carSpecs[ride.type].color });
    if (ride.remaining <= 0) {
      const color = carSpecs[ride.type].color;
      ride = null;
      player.vy = -790 * getPaceMultiplier() * (superJumpUntil > elapsed ? Math.SQRT2 : 1);
      updatePowerHud();
      addFloatingText(player.x, player.y - 45, isGerman() ? 'FLIEG!' : 'FLY!', color);
      burst(player.x, player.y, color, 15);
    }
  }

  function scrollWorldIfNeeded(dt) {
    const cameraLine = height * .41;
    if (player.y >= cameraLine) return;
    const desiredShift = cameraLine - player.y;
    let shift = desiredShift * (1 - Math.exp(-18 * dt));
    if (player.y < height * .17) shift = desiredShift;
    player.y += shift;
    player.previousY += shift;
    climbed += shift;
    platforms.forEach(platform => { platform.y += shift; });
    stars.forEach(star => { star.y += shift; });
    blackCoinPickups.forEach(coin => { coin.y += shift; });
    shoePickups.forEach(shoe => { shoe.y += shift; });
    cars.forEach(car => { car.y += shift; });
    fireHotDogs.forEach(hazard => { hazard.y += shift; });
    particles.forEach(particle => { particle.y += shift; });
    floatingTexts.forEach(text => { text.y += shift; });
    ensurePlatforms();
  }

  function cleanWorld() {
    platforms = platforms.filter(platform => !platform.dead && platform.y < height + 8);
    stars = stars.filter(star => !star.dead && star.y < height + 70);
    blackCoinPickups = blackCoinPickups.filter(coin => !coin.dead && coin.y < height + 80);
    shoePickups = shoePickups.filter(shoe => !shoe.dead && shoe.y < height + 90);
    cars = cars.filter(car => !car.dead && car.y < height + 100);
    thrownBottles = thrownBottles.filter(bottle => !bottle.dead && bottle.x > -100 && bottle.x < width + 100 && bottle.y < height + 130);
    fireHotDogs = fireHotDogs.filter(hazard => !hazard.dead && hazard.x > -180 && hazard.x < width + 180 && hazard.y > -170 && hazard.y < height + 170);
  }

  function updateEffects(dt) {
    particles.forEach(particle => {
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= Math.pow(particle.drag ?? .985, dt * 60);
      particle.vy += (particle.gravity ?? 120) * dt;
      particle.life -= dt;
      particle.rotation = (particle.rotation || 0) + (particle.spin || 0) * dt;
      if (particle.grow) particle.size += particle.grow * dt;
    });
    particles = particles.filter(particle => particle.life > 0);
    floatingTexts.forEach(text => { text.y -= 32 * dt; text.life -= dt; });
    floatingTexts = floatingTexts.filter(text => text.life > 0);
    screenShake = Math.max(0, screenShake - 20 * dt);
    cameraImpact += (0 - cameraImpact) * Math.min(1, dt * 9);
    cameraLift += (0 - cameraLift) * Math.min(1, dt * 5.5);
    landingAnimation = Math.max(0, landingAnimation - dt);
    pickupFlash = Math.max(0, pickupFlash - dt * 1.8);
    const previousMilestoneTimer = milestoneTimer;
    milestoneTimer = Math.max(0, milestoneTimer - dt);
    if (previousMilestoneTimer > 0 && milestoneTimer === 0) milestoneBanner.classList.add('hidden');
  }

  function updateHennessyTimer() {
    const remaining = Math.max(0, hennessyUntil - elapsed);
    if (remaining <= 0) {
      hennessyHud.classList.add('hidden');
      lastHennessyText = '';
      return;
    }
    hennessyHud.classList.remove('hidden');
    const text = remaining.toFixed(1);
    if (text !== lastHennessyText) {
      hennessyHud.querySelector('b').textContent = text;
      lastHennessyText = text;
    }
  }

  function updatePowerHud() {
    const chips = [];
    if (ride) chips.push(`🚘 ${carSpecs[ride.type].label}`);
    const shoeTime = Math.max(0, superJumpUntil - elapsed);
    if (shoeTime > 0) chips.push(`👟 ${t('doubleJump')} ${shoeTime.toFixed(1)}s`);
    const markup = chips.map(text => `<span class="power-chip">${text}</span>`).join('');
    if (markup !== lastPowerHudMarkup) {
      powerHud.innerHTML = markup;
      lastPowerHudMarkup = markup;
    }
    powerHud.classList.toggle('hidden', chips.length === 0);
  }

  function updateBossAttack(dt) {
    if (selectedOpponent !== 0 && selectedOpponent !== 1) return;
    if (!boss && elapsed >= nextBossAt) {
      const side = Math.random() < .5 ? -1 : 1;
      boss = { side, x: side < 0 ? -85 : width + 85, targetX: side < 0 ? 58 : width - 58, y: height * .22, age: 0, throws: 0 };
      showBanner(selectedOpponent === 1 ? 'CHESTNUT!' : 'BIG DILF!', selectedOpponent === 1 ? t('hotDogAttack') : (isGerman() ? `DOPPELTER ${t('hennessyAttack')}` : 'DOUBLE HENNESSY ATTACK'), selectedOpponent === 1 ? '#ff6532' : '#ffbf4e');
    }
    if (boss) {
      boss.age += dt;
      if (boss.age < .65) boss.x += (boss.targetX - boss.x) * Math.min(1, dt * 8);
      else if (boss.age < 2.8) boss.x = boss.targetX + Math.sin(boss.age * 4) * 5;
      else boss.x += boss.side < 0 ? -240 * dt : 240 * dt;
      const throwTimes = selectedOpponent === 1 ? [.75, 1.28, 1.82] : [.9, 1.52];
      while (boss.throws < throwTimes.length && boss.age >= throwTimes[boss.throws]) {
        selectedOpponent === 1 ? throwHotDog() : throwHennessyBottle();
        boss.throws += 1;
      }
      if (boss.age > 3.5) {
        boss = null;
        nextBossAt = elapsed + (selectedOpponent === 1 ? random(16, 22) : random(24, 30));
      }
    }

    updateFireHotDogs(dt);

    thrownBottles.forEach(bottle => {
      if (bottle.dead) return;
      bottle.x += bottle.vx * dt;
      bottle.y += bottle.vy * dt;
      bottle.vy += 145 * dt;
      bottle.rotation += bottle.spin * dt;
      const hitX = Math.abs(player.x - bottle.x) < player.w * .3 + bottle.w * .32;
      const hitY = Math.abs(player.y - bottle.y) < player.h * .36 + bottle.h * .38;
      if (hitX && hitY && !ride) {
        bottle.dead = true;
        selectedOpponent === 1 ? activateHotDogHit() : activateHennessyAttack();
      }
    });
  }

  function throwHennessyBottle() {
    if (!boss) return;
    const travelTime = .76;
    const gravity = 145;
    const targetX = clamp(player.targetX + random(-15, 15), 30, width - 30);
    const targetY = player.y;
    thrownBottles.push({
      x: boss.x, y: boss.y + 18, w: 36, h: 68,
      vx: (targetX - boss.x) / travelTime,
      vy: (targetY - boss.y - 18 - .5 * gravity * travelTime * travelTime) / travelTime,
      rotation: 0, spin: random(-5, 5), dead: false
    });
    playHennessySound();
  }

  function throwHotDog() {
    if (!boss) return;
    const travelTime = .68;
    const gravity = 125;
    const targetX = clamp(player.targetX + random(-22, 22), 30, width - 30);
    const targetY = player.y + random(-28, 20);
    thrownBottles.push({
      kind: 'hotdog',
      x: boss.x,
      y: boss.y + 18,
      w: 70,
      h: 46,
      vx: (targetX - boss.x) / travelTime,
      vy: (targetY - boss.y - 18 - .5 * gravity * travelTime * travelTime) / travelTime,
      rotation: 0,
      spin: random(-8, 8),
      dead: false
    });
    playShoeSound();
  }

  function activateHotDogHit() {
    player.vy = Math.max(player.vy, 860);
    player.targetX = clamp(player.x + random(-110, 110), 28, width - 28);
    screenShake = Math.max(screenShake, 11);
    pickupFlash = Math.max(pickupFlash, .65);
    addFloatingText(player.x, player.y - 55, t('hotDogHit'), '#ffb343');
    burst(player.x, player.y, '#ff7a2f', 26);
    showBanner(t('hotDogHit'), t('stayOnPlatforms'), '#ff7a2f');
    if (navigator.vibrate) navigator.vibrate([45, 25, 70]);
  }

  function updateFireHotDogs(dt) {
    if (selectedOpponent !== 1) return;
    if (elapsed >= nextFireHotDogsAt) {
      spawnFireHotDogs();
      nextFireHotDogsAt = elapsed + random(15, 22);
    }
    fireHotDogs.forEach(hazard => {
      if (hazard.dead) return;
      hazard.x += hazard.vx * dt;
      hazard.rotation += hazard.spin * dt;
      const hitX = Math.abs(player.x - hazard.x) < player.w * .28 + hazard.w * .34;
      const hitY = Math.abs(player.y - hazard.y) < player.h * .34 + hazard.h * .28;
      if (hitX && hitY) {
        hazard.dead = true;
        burst(player.x, player.y, '#ff4b1f', 36);
        screenShake = 14;
        pickupFlash = .9;
        endGame(isGerman() ? 'Die Feuer-Hotdogs haben dich erwischt!' : 'Fire Hot Dogs got you!');
      }
    });
  }

  function spawnFireHotDogs() {
    const side = Math.random() < .5 ? -1 : 1;
    const size = lowPowerMode ? 118 : 134;
    fireHotDogs.push({
      x: side < 0 ? -size : width + size,
      y: random(height * .24, height * .76),
      w: size,
      h: size,
      vx: side < 0 ? random(150, 185) : -random(150, 185),
      rotation: 0,
      spin: side * random(.35, .65),
      dead: false
    });
    showBanner(t('fireHotDogs'), t('dodgeOrLose'), '#ff4b1f');
  }

  function activateHennessyAttack() {
    hennessyCount += 1;
    updateRoundBest('hennessy', selectedOpponent, hennessyCount);
    updateCharacterRoundBest('hennessy', selectedCharacter, hennessyCount);
    updateLoadoutRoundBest('hennessy', selectedCharacter, runCarType, hennessyCount);
    hennessyUntil = elapsed + 10;
    hennessyHud.classList.remove('hidden');
    hennessyCountHud.querySelector('b').textContent = String(hennessyCount);
    const intensity = Math.min(3, 1 + (hennessyCount - 1) * .34);
    screenShake = Math.max(screenShake, 4 + intensity * 2.2);
    pickupFlash = Math.max(pickupFlash, .55);
    playHennessySound();
    playBigDilfVoice();
    addFloatingText(player.x, player.y - 55, `${t('hennessyAttack')} 10s!`, '#ffc44d');
    burst(player.x, player.y, '#d87d28', 26);
    showBanner(t('hennessyHit'), `${t('effectLevel')} ${hennessyCount} · 10 ${isGerman() ? 'SEKUNDEN' : 'SECONDS'}`, '#ffc44d');
    if (navigator.vibrate) navigator.vibrate([50, 25, 50, 25, 80]);
  }

  function endGame(reason = t('youFell')) {
    if (!playing) return;
    playing = false;
    paused = false;
    $('#pauseScreen').classList.add('hidden');
    if (musicWasStarted && !musicIsFading) setBackgroundMusicVolume(.58);
    saveHighscore(score);
    saveCharacterHighscore(score);
    saveVehicleHighscore(score);
    saveLoadoutHighscore(score);
    saveExactFinish(score);
    saveSpecialRunCombos();
    uploadLeaderboardScore(getLeaderboardLevelKeyForOpponent(selectedOpponent));
    updateRoundBest('gold', selectedOpponent, runCoins);
    updateRoundBest('black', selectedOpponent, runBlackCoins);
    updateCharacterRoundBest('gold', selectedCharacter, runCoins);
    updateCharacterRoundBest('black', selectedCharacter, runBlackCoins);
    updateLoadoutRoundBest('gold', selectedCharacter, runCarType, runCoins);
    updateLoadoutRoundBest('black', selectedCharacter, runCarType, runBlackCoins);
    refreshUnlockAlerts(true);
    const newHighscore = getHighscore();
    $('#finalScore').textContent = score;
    $('#finalStars').textContent = runCoins;
    $('#finalBlackCoins').textContent = runBlackCoins;
    $('#finalHighscore').textContent = newHighscore;
    $('#bigDilfWon').classList.toggle('hidden', selectedOpponent !== 0);
    let message = reason;
    if (score > opponentHighscoreAtRunStart) message = `${t('newHighscore')} ${opponents[selectedOpponent].name} HIGHSCORE!`;
    else {
      const nextOpponent = opponents.find((opponent, index) => !isOpponentUnlocked(index));
      if (nextOpponent) message = isGerman() ? `Prüfe deinen Level-Fortschritt, um ${nextOpponent.name} freizuschalten.` : `Check your level progress to unlock ${nextOpponent.name}.`;
    }
    $('#resultMessage').textContent = message;
    gameOverPanel.querySelector('h2').textContent = t('gameOver');
    gameOverPanel.classList.remove('hidden', 'auto');
    powerHud.classList.add('hidden');
    hennessyHud.classList.add('hidden');
    screenShake = 9;
    stopGameplaySamples();
    if (selectedOpponent === 0) playBigDilfLossSound();
    else if (selectedOpponent === 1) playChestnutGameOverSound();
    else playCrashSound();
    draw();
    if (navigator.vibrate) navigator.vibrate([80, 35, 100]);
  }

  function showBanner(title, subtitle, color) {
    clearTimeout(bannerTimer);
    eventBanner.querySelector('strong').textContent = title;
    eventBanner.querySelector('strong').style.color = color;
    eventBanner.querySelector('span').textContent = subtitle;
    eventBanner.classList.remove('hidden');
    bannerTimer = setTimeout(() => eventBanner.classList.add('hidden'), 1500);
  }

  function addFloatingText(x, y, text, color) {
    floatingTexts.push({ x, y, text, color, life: .9 });
  }

  function triggerMilestone(meters) {
    milestoneTimer = 1.15;
    milestoneBanner.querySelector('strong').textContent = `${meters}m`;
    milestoneBanner.classList.remove('hidden');
    milestoneBanner.style.animation = 'none';
    void milestoneBanner.offsetWidth;
    milestoneBanner.style.animation = '';
    playMilestoneSound(meters);
    if (navigator.vibrate) navigator.vibrate(18);
  }

  function emitLandingParticles(x, y, type) {
    const color = type === 'spring' ? '#e678ff' : type === 'fire' ? '#ff9738' : type === 'trapdoor' ? '#e5ad69' : '#eef0f4';
    const amount = scaledEffectAmount(16);
    for (let index = 0; index < amount; index++) {
      const side = index % 2 ? -1 : 1;
      pushParticle({
        x: x + random(-12, 12), y: y - random(1, 5),
        vx: side * random(35, 145), vy: random(-90, -20),
        life: random(.32, .62), size: random(2, 5), color,
        gravity: 210, drag: .965, shape: index % 4 === 0 ? 'streak' : 'dot'
      });
    }
    emitPickupRing(x, y - 2, color, 11);
  }

  function emitPickupRing(x, y, color, size = 9) {
    if (!lowPowerMode || particles.length < maxParticles * .6) pushParticle({ x, y, vx: 0, vy: 0, life: .42, size, color, gravity: 0, drag: 1, grow: lowPowerMode ? 46 : 70, shape: 'ring' });
  }

  function emitPlatformFragments(platform) {
    const amount = scaledEffectAmount(14);
    for (let index = 0; index < amount; index++) {
      pushParticle({
        x: platform.x + random(0, platform.w), y: platform.y + random(0, platform.h),
        vx: random(-90, 90), vy: random(-45, 65), life: random(.45, .85),
        size: random(3, 8), color: platform.type === 'fire' ? '#ff8f32' : '#a85d32',
        gravity: 270, drag: .98, shape: 'shard', rotation: random(0, Math.PI), spin: random(-8, 8)
      });
    }
  }

  function burst(x, y, color, amount) {
    const scaledAmount = scaledEffectAmount(amount);
    for (let index = 0; index < scaledAmount; index++) {
      const angle = random(0, Math.PI * 2);
      const speed = random(35, 150);
      pushParticle({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: random(.35, .75), size: random(2, 6), color, gravity: 120, drag: .982, shape: index % 5 === 0 ? 'streak' : 'dot' });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.fillStyle = opponents[selectedOpponent]?.skyBottom || '#f5eee2';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
    ctx.save();
    if (screenShake > 0) ctx.translate(random(-screenShake, screenShake), random(-screenShake, screenShake));
    ctx.translate(0, cameraImpact * .55 - cameraLift);
    if (hennessyUntil > elapsed) {
      const hennessyStrength = Math.min(3, 1 + (hennessyCount - 1) * .34);
      ctx.translate(width / 2, height / 2);
      ctx.rotate(Math.sin(elapsed * (15 + hennessyStrength)) * .013 * hennessyStrength);
      ctx.translate(-width / 2 + Math.sin(elapsed * 23) * 7 * hennessyStrength, -height / 2 + Math.cos(elapsed * 19) * 6 * hennessyStrength);
    }
    drawBackground();
    drawPlatforms();
    drawStars();
    drawBlackCoins();
    drawShoePickups();
    drawCars();
    drawPlayer();
    drawBossAttack();
    drawEffects();
    if (pickupFlash > 0) {
      ctx.fillStyle = `rgba(255,255,255,${Math.min(.18, pickupFlash * .25)})`;
      ctx.fillRect(-20, -20, width + 40, height + 40);
    }
    ctx.restore();
  }

  function drawBackground() {
    const theme = opponents[selectedOpponent];
    const gradientKey = `${selectedOpponent}:${width}:${height}`;
    if (!cachedBackgroundGradient || cachedBackgroundGradientKey !== gradientKey) {
      cachedBackgroundGradient = ctx.createLinearGradient(0, 0, 0, height);
      cachedBackgroundGradient.addColorStop(0, theme.skyTop);
      cachedBackgroundGradient.addColorStop(1, theme.skyBottom);
      cachedBackgroundGradientKey = gradientKey;
    }
    ctx.fillStyle = cachedBackgroundGradient;
    ctx.fillRect(0, 0, width, height);

    if (!lowPowerMode) {
      ctx.globalAlpha = .25;
      ctx.fillStyle = theme.soft;
      for (let index = 0; index < 8; index++) {
        const x = ((index * 113 + climbed * .035) % (width + 140)) - 70;
        const y = ((index * 177 + climbed * .08) % (height + 160)) - 80;
        ctx.beginPath();
        ctx.arc(x, y, 30 + (index % 3) * 12, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    drawOpponentBackdrop();
    drawLevelAtmosphere();
  }

  function drawLevelAtmosphere() {
    ctx.save();
    if (selectedOpponent === 1 && !lowPowerMode) {
      ctx.globalCompositeOperation = 'screen';
      for (let index = 0; index < 18; index++) {
        const x = (index * 79 + Math.sin(index * 2.1) * 34) % width;
        const y = height - ((elapsed * (34 + index % 5 * 8) + index * 97 + climbed * .12) % (height + 80));
        const radius = 1.5 + index % 3;
        ctx.globalAlpha = .25 + (index % 4) * .08;
        ctx.fillStyle = index % 3 ? '#ff8b28' : '#fff0a0';
        ctx.shadowColor = '#ff5a20';
        ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
      }
    }
    const vignette = ctx.createRadialGradient(width / 2, height * .44, height * .12, width / 2, height * .48, height * .72);
    vignette.addColorStop(.55, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, selectedOpponent === 1 ? 'rgba(65,10,2,.22)' : 'rgba(4,5,12,.18)');
    ctx.globalAlpha = 1;
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }

  function drawOpponentBackdrop() {
    const image = opponentBackgroundImages[selectedOpponent];
    if (!image?.complete || !image.naturalWidth) return;
    const breathe = lowPowerMode ? 1.035 : 1.025 + Math.sin(elapsed * .55) * .018;
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight) * breathe;
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const x = (width - drawWidth) / 2 + (lowPowerMode ? 0 : Math.sin(elapsed * .32) * 7);
    const y = (height - drawHeight) / 2 + (lowPowerMode ? 0 : climbed * .025 % 24) - 12;
    ctx.save();
    ctx.globalAlpha = .96;
    ctx.drawImage(image, x, y, drawWidth, drawHeight);
    ctx.restore();
  }

  function roundRect(x, y, w, h, radius) {
    const r = Math.min(radius, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawPlatforms() {
    const theme = opponents[selectedOpponent];
    platforms.forEach(platform => {
      if (platform.dead) return;
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,.25)';
      ctx.shadowBlur = lowPowerMode ? 0 : 8;
      ctx.shadowOffsetY = lowPowerMode ? 2 : 5;
      const colors = platform.type === 'spring' ? ['#cf61ef', '#672078'] : platform.type === 'fire' ? ['#ffb72f', '#9f1722'] : platform.type === 'trapdoor' ? ['#d79545', '#6b321c'] : platform.type === 'moving' ? [theme.accent, theme.edge] : [theme.platform, theme.edge];
      const gradient = ctx.createLinearGradient(0, platform.y, 0, platform.y + platform.h);
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(1, colors[1]);
      ctx.fillStyle = gradient;
      roundRect(platform.x, platform.y, platform.w, platform.h, 7);
      ctx.fill();
      ctx.shadowColor = 'transparent';
      ctx.strokeStyle = 'rgba(255,255,255,.55)';
      ctx.lineWidth = 2;
      roundRect(platform.x + 1, platform.y + 1, platform.w - 2, platform.h - 2, 6);
      ctx.stroke();
      if (platform.type === 'moving') {
        ctx.fillStyle = theme.edge;
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('↔', platform.x + platform.w / 2, platform.y + 12);
      }
      if (platform.type === 'trapdoor') {
        const opening = platform.opening > 0 ? 1 - platform.opening / .28 : 0;
        ctx.strokeStyle = '#4d2417';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(platform.x + platform.w / 2, platform.y + 1);
        ctx.lineTo(platform.x + platform.w / 2, platform.y + platform.h - 1 + opening * 15);
        ctx.stroke();
        ctx.fillStyle = 'rgba(255,229,172,.72)';
        ctx.font = '900 9px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('TRAP', platform.x + platform.w / 2, platform.y + 11);
      }
      if (platform.type === 'fire') drawFirePlatform(platform);
      if (platform.hazard) drawPlatformHazard(platform);
      ctx.restore();
    });
  }

  function drawFirePlatform(platform) {
    const flameCount = Math.max(4, Math.floor(platform.w / 18));
    ctx.save();
    ctx.shadowColor = '#ff4d18';
    ctx.shadowBlur = lowPowerMode ? 0 : 15 + Math.sin(elapsed * 12) * 4;
    for (let index = 0; index < flameCount; index++) {
      const x = platform.x + (index + .5) * platform.w / flameCount;
      const flameHeight = 8 + (Math.sin(elapsed * 10 + index * 1.7) + 1) * 4;
      ctx.fillStyle = index % 2 ? '#ffcf35' : '#ff5a1f';
      ctx.beginPath();
      ctx.moveTo(x - 6, platform.y + 2);
      ctx.quadraticCurveTo(x - 2, platform.y - flameHeight * .45, x, platform.y - flameHeight);
      ctx.quadraticCurveTo(x + 5, platform.y - flameHeight * .35, x + 6, platform.y + 2);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  function drawPlatformHazard(platform) {
    const hazard = platform.hazard;
    const x = hazard.side === 'left' ? platform.x + 3 : platform.x + platform.w - hazard.w - 3;
    const top = platform.y - hazard.h;
    const blink = .52 + (Math.sin(elapsed * 11 + hazard.pulse) + 1) * .24;
    ctx.save();
    ctx.globalAlpha = blink;
    ctx.shadowColor = '#ff344f';
    ctx.shadowBlur = lowPowerMode ? 0 : 12 + blink * 14;
    if (hazard.kind === 'flame') {
      const flameCount = 4;
      for (let index = 0; index < flameCount; index++) {
        const flameX = x + (index + .5) * hazard.w / flameCount;
        const flameHeight = hazard.h * (.68 + (Math.sin(elapsed * 13 + index * 1.8) + 1) * .14);
        const flameGradient = ctx.createLinearGradient(0, platform.y, 0, platform.y - flameHeight);
        flameGradient.addColorStop(0, '#ff2727');
        flameGradient.addColorStop(.52, '#ff8a18');
        flameGradient.addColorStop(1, '#fff06b');
        ctx.fillStyle = flameGradient;
        ctx.beginPath();
        ctx.moveTo(flameX - hazard.w / 8, platform.y);
        ctx.quadraticCurveTo(flameX - 5, platform.y - flameHeight * .48, flameX, platform.y - flameHeight);
        ctx.quadraticCurveTo(flameX + 7, platform.y - flameHeight * .42, flameX + hazard.w / 8, platform.y);
        ctx.closePath();
        ctx.fill();
      }
    } else if (hazard.kind === 'spikes') {
      ctx.fillStyle = '#df2947';
      const spikeWidth = hazard.w / 3;
      for (let index = 0; index < 3; index++) {
        ctx.beginPath();
        ctx.moveTo(x + index * spikeWidth, platform.y);
        ctx.lineTo(x + (index + .5) * spikeWidth, top);
        ctx.lineTo(x + (index + 1) * spikeWidth, platform.y);
        ctx.closePath();
        ctx.fill();
      }
    } else {
      ctx.fillStyle = '#ff7a26';
      ctx.beginPath();
      ctx.moveTo(x, platform.y);
      ctx.lineTo(x + hazard.w / 2, top);
      ctx.lineTo(x + hazard.w, platform.y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#fff4dc';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x + hazard.w * .28, platform.y - hazard.h * .38);
      ctx.lineTo(x + hazard.w * .72, platform.y - hazard.h * .38);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawStars() {
    stars.forEach(star => {
      if (star.dead) return;
      const pulse = 1 + Math.sin(elapsed * 6 + star.pulse) * .12;
      ctx.save();
      ctx.translate(star.x, star.y);
      ctx.scale(pulse, pulse);
      ctx.shadowColor = '#ffd62c';
      ctx.shadowBlur = lowPowerMode ? 0 : 14;
      if (lowPowerMode) ctx.fillStyle = '#ffd83d';
      else {
        const gradient = ctx.createRadialGradient(-3, -4, 2, 0, 0, star.radius);
        gradient.addColorStop(0, '#fff2a0');
        gradient.addColorStop(.42, '#ffd83d');
        gradient.addColorStop(1, '#b97a06');
        ctx.fillStyle = gradient;
      }
      ctx.beginPath(); ctx.arc(0, 0, star.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#8d5b00'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#8d5b00'; ctx.font = `900 ${star.radius}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('$', 0, 1);
      ctx.restore();
    });
  }

  function drawBlackCoins() {
    blackCoinPickups.forEach(coin => {
      if (coin.dead) return;
      const pulse = 1 + Math.sin(elapsed * 4.5 + coin.pulse) * .12;
      const size = coin.radius * 2 * pulse;
      ctx.save();
      ctx.shadowColor = '#b9a8d0';
      ctx.shadowBlur = lowPowerMode ? 0 : 18;
      if (blackCoinImage.complete && blackCoinImage.naturalWidth) ctx.drawImage(blackCoinImage, coin.x - size / 2, coin.y - size / 2, size, size);
      ctx.restore();
    });
  }

  function drawShoePickups() {
    shoePickups.forEach(shoe => {
      if (shoe.dead) return;
      const pulse = 1 + Math.sin(elapsed * 5 + shoe.pulse) * .08;
      ctx.save();
      ctx.translate(shoe.x, shoe.y);
      ctx.rotate(Math.sin(elapsed * 3 + shoe.pulse) * .08);
      ctx.scale(pulse, pulse);
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = lowPowerMode ? 0 : 18;
      if (shoeImage.complete && shoeImage.naturalWidth) ctx.drawImage(shoeImage, -shoe.w / 2, -shoe.h / 2, shoe.w, shoe.h);
      ctx.restore();
    });
  }

  function drawStarShape(x, y, outer, inner) {
    ctx.beginPath();
    for (let point = 0; point < 10; point++) {
      const radius = point % 2 ? inner : outer;
      const angle = -Math.PI / 2 + point * Math.PI / 5;
      const px = x + Math.cos(angle) * radius;
      const py = y + Math.sin(angle) * radius;
      if (point === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function drawCars() {
    cars.forEach(car => {
      if (car.dead) return;
      const image = carImages[car.type];
      const bob = Math.sin(elapsed * 3 + car.bob) * 4;
      ctx.save();
      ctx.shadowColor = carSpecs[car.type].color;
      ctx.shadowBlur = lowPowerMode ? 0 : 14;
      if (image?.complete && image.naturalWidth) ctx.drawImage(image, car.x - car.w / 2, car.y - car.h / 2 + bob, car.w, car.h);
      else drawFallbackCar(car.x, car.y + bob, car.w, car.h, carSpecs[car.type].color);
      ctx.restore();
    });
  }

  function drawFallbackCar(centerX, centerY, carWidth, carHeight, color) {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.fillStyle = color;
    ctx.strokeStyle = 'rgba(255,255,255,.75)';
    ctx.lineWidth = 2;
    roundRect(-carWidth / 2, -carHeight / 2, carWidth, carHeight, Math.min(12, carWidth * .22));
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#171920';
    roundRect(-carWidth * .34, -carHeight * .2, carWidth * .68, carHeight * .36, 7);
    ctx.fill();
    ctx.fillStyle = '#d8e6f2';
    ctx.fillRect(-carWidth * .31, -carHeight * .34, carWidth * .18, 6);
    ctx.fillRect(carWidth * .13, -carHeight * .34, carWidth * .18, 6);
    ctx.fillStyle = '#df3c3c';
    ctx.fillRect(-carWidth * .31, carHeight * .31, carWidth * .18, 5);
    ctx.fillRect(carWidth * .13, carHeight * .31, carWidth * .18, 5);
    ctx.fillStyle = '#fff';
    ctx.font = `900 ${Math.max(7, carWidth * .16)}px system-ui`;
    ctx.textAlign = 'center';
    ctx.fillText('RR', 0, 3);
    ctx.restore();
  }

  function drawBossAttack() {
    fireHotDogs.forEach(hazard => {
      if (hazard.dead) return;
      ctx.save();
      ctx.translate(hazard.x, hazard.y);
      ctx.rotate(hazard.rotation);
      ctx.shadowColor = '#ff4b1f';
      ctx.shadowBlur = lowPowerMode ? 0 : 24;
      if (fireHotDogsImage.complete && fireHotDogsImage.naturalWidth) ctx.drawImage(fireHotDogsImage, -hazard.w / 2, -hazard.h / 2, hazard.w, hazard.h);
      else {
        ctx.fillStyle = '#ff4b1f';
        ctx.beginPath();
        ctx.arc(0, 0, hazard.w * .36, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    const bossImage = selectedOpponent === 1 ? chestnutImage : bigDilfImage;
    if (boss && bossImage.complete && bossImage.naturalWidth) {
      const size = 126;
      ctx.save();
      ctx.shadowColor = selectedOpponent === 1 ? '#ff6532' : '#ffbd4a';
      ctx.shadowBlur = lowPowerMode ? 0 : 18;
      ctx.drawImage(bossImage, boss.x - size / 2, boss.y - size / 2, size, size);
      ctx.restore();
    }
    thrownBottles.forEach(bottle => {
      if (bottle.dead) return;
      ctx.save();
      ctx.translate(bottle.x, bottle.y);
      ctx.rotate(bottle.rotation);
      ctx.shadowColor = bottle.kind === 'hotdog' ? '#ff6532' : '#ffad2f';
      ctx.shadowBlur = lowPowerMode ? 0 : 12;
      const image = bottle.kind === 'hotdog' ? hotDogImage : hennessyImage;
      if (image.complete && image.naturalWidth) ctx.drawImage(image, -bottle.w / 2, -bottle.h / 2, bottle.w, bottle.h);
      ctx.restore();
    });
  }

  function drawPlayer() {
    if (ride) {
      const image = carImages[ride.type];
      const carWidth = 72;
      const carHeight = 92;
      ctx.save();
      ctx.shadowColor = carSpecs[ride.type].color;
      ctx.shadowBlur = lowPowerMode ? 0 : 22;
      if (image?.complete && image.naturalWidth) ctx.drawImage(image, player.x - carWidth / 2, player.y - carHeight / 2, carWidth, carHeight);
      else drawFallbackCar(player.x, player.y, carWidth, carHeight, carSpecs[ride.type].color);
      ctx.restore();
      return;
    }
    const pace = getPaceMultiplier();
    const swing = Math.sin(elapsed * 18 * pace) * .22 + clamp(player.vy / (900 * pace), -1, 1) * .08;
    const landingProgress = landingAnimation / .22;
    const squash = clamp((landingProgress - .58) / .42, 0, 1);
    const stretchPhase = clamp((.58 - landingProgress) / .58, 0, 1);
    const takeoffStretch = Math.sin(stretchPhase * Math.PI) * (landingAnimation > 0 ? 1 : 0);
    const airStretch = clamp(Math.abs(player.vy) / (1500 * pace), 0, .075);
    const scaleX = 1 + squash * .17 - takeoffStretch * .075 - airStretch * .025;
    const scaleY = 1 - squash * .15 + takeoffStretch * .12 + airStretch;
    const tilt = clamp((player.targetX - player.x) / 260, -.075, .075);
    ctx.save();
    ctx.translate(player.x, player.y + player.h * .45);
    ctx.rotate(tilt);
    ctx.scale(scaleX, scaleY);
    ctx.shadowColor = 'rgba(0,0,0,.35)';
    ctx.shadowBlur = lowPowerMode ? 2 : 9 + Math.abs(player.vy) / 240;
    drawSegmentedCharacter(ctx, characterImages[selectedCharacter], characters[selectedCharacter], 0, -player.h * .45 - 12, 116, swing);
    ctx.restore();
  }

  function drawEffects() {
    particles.forEach(particle => {
      ctx.globalAlpha = clamp(particle.life / .7, 0, 1);
      ctx.fillStyle = particle.color;
      ctx.strokeStyle = particle.color;
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation || 0);
      if (particle.shape === 'ring') {
        ctx.lineWidth = Math.max(1, 4 * clamp(particle.life / .42, 0, 1));
        ctx.beginPath(); ctx.arc(0, 0, particle.size, 0, Math.PI * 2); ctx.stroke();
      } else if (particle.shape === 'shard') {
        ctx.fillRect(-particle.size, -particle.size * .35, particle.size * 2, particle.size * .7);
      } else if (particle.shape === 'streak') {
        ctx.lineWidth = Math.max(1, particle.size * .55);
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-particle.vx * .045, -particle.vy * .045); ctx.stroke();
      } else {
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = lowPowerMode ? 0 : particle.size * 1.8;
        ctx.beginPath(); ctx.arc(0, 0, particle.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    });
    floatingTexts.forEach(text => {
      ctx.globalAlpha = clamp(text.life / .3, 0, 1);
      ctx.font = '900 16px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(18,12,25,.75)';
      ctx.strokeText(text.text, text.x, text.y);
      ctx.fillStyle = text.color;
      ctx.fillText(text.text, text.x, text.y);
    });
    ctx.globalAlpha = 1;
  }

  function loop(now) {
    const dt = Math.min((now - lastTime) / 1000, .032);
    lastTime = now;
    update(dt);
    draw();
    if (playing) animationId = requestAnimationFrame(loop);
  }

  function setTarget(clientX) {
    const bounds = canvas.getBoundingClientRect();
    player.targetX = clamp(clientX - bounds.left, 26, width - 26);
  }

  function pauseGame() {
    if (!playing || paused || !gameOverPanel.classList.contains('hidden')) return;
    paused = true;
    pointerActive = false;
    $('#pauseMeters').textContent = String(score);
    $('#pauseScreen').classList.remove('hidden');
    if (musicWasStarted && !musicIsFading) setBackgroundMusicVolume(.22);
    playSynthTone({ frequency: 310, endFrequency: 210, duration: .12, volume: .028, type: 'triangle' });
  }

  function resumeGame() {
    if (!playing || !paused) return;
    paused = false;
    $('#pauseScreen').classList.add('hidden');
    lastTime = performance.now();
    if (musicWasStarted && !musicIsFading) setBackgroundMusicVolume(.58);
    playSynthTone({ frequency: 260, endFrequency: 520, duration: .14, volume: .032, type: 'triangle' });
  }

  canvas.addEventListener('pointerdown', event => {
    pointerActive = true;
    canvas.setPointerCapture?.(event.pointerId);
    setTarget(event.clientX);
  });
  canvas.addEventListener('pointermove', event => { if (pointerActive) setTarget(event.clientX); });
  canvas.addEventListener('pointerup', () => { pointerActive = false; });
  canvas.addEventListener('pointercancel', () => { pointerActive = false; });
  addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'a') player.targetX -= 55;
    if (event.key === 'ArrowRight' || event.key === 'd') player.targetX += 55;
    if (event.key === 'Escape' || event.key === 'p') paused ? resumeGame() : pauseGame();
  });
  addEventListener('resize', resize);
  document.addEventListener('contextmenu', event => event.preventDefault());

  $('#playButton').addEventListener('click', event => { pop(event.currentTarget); setTimeout(() => showScreen('characters'), 120); });
  $('#characterNext').addEventListener('click', () => showScreen('opponents'));
  $('#opponentStart').addEventListener('click', startSelectedLevel);
  $('#restartButton').addEventListener('click', restartCurrentRun);
  $('#pauseButton').addEventListener('click', pauseGame);
  sfxToggle?.addEventListener('click', () => setSfxEnabled(!sfxEnabled));
  $('#resumeButton').addEventListener('click', resumeGame);
  $('#pauseMenuButton').addEventListener('click', () => showScreen('menu'));
  $('#menuButton').addEventListener('click', returnToMainMenu);
  document.querySelector('[data-back="menu"]').addEventListener('click', () => showScreen('menu'));
  document.querySelectorAll('[data-back="characters"]').forEach(button => button.addEventListener('click', () => showScreen('characters')));
  document.querySelectorAll('.menu-icon').forEach(icon => icon.addEventListener('click', () => pop(icon)));
  $('#shopButton').addEventListener('click', event => {
    pop(event.currentTarget);
    setTimeout(openCarShop, 100);
  });
  $('#leaderboardButton')?.addEventListener('click', event => {
    pop(event.currentTarget);
    setTimeout(openLeaderboard, 100);
  });
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', event => {
    setLanguage(button.dataset.language);
    pop(event.currentTarget);
  }));
  $('#leaderboardRename')?.addEventListener('click', event => {
    askForLeaderboardName(true);
    syncLeaderboardScores();
    loadLeaderboard(activeLeaderboardLevel);
    pop(event.currentTarget);
  });
  document.querySelectorAll('[data-leaderboard-level]').forEach(button => button.addEventListener('click', () => {
    activeLeaderboardLevel = leaderboardLevels[button.dataset.leaderboardLevel] ? button.dataset.leaderboardLevel : 'big_dilf';
    document.querySelectorAll('[data-leaderboard-level]').forEach(tab => tab.classList.toggle('selected', tab === button));
    loadLeaderboard(activeLeaderboardLevel);
    pop(button);
  }));
  document.querySelectorAll('[data-shop-tab]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-shop-tab]').forEach(tab => tab.classList.toggle('selected', tab === button));
    $('#characterShop').classList.toggle('hidden', button.dataset.shopTab !== 'characters');
    $('#carShop').classList.toggle('hidden', button.dataset.shopTab !== 'cars');
    $('#unlockableShop').classList.toggle('hidden', button.dataset.shopTab !== 'unlockables');
    $('#unlockableFilters')?.classList.toggle('hidden', button.dataset.shopTab !== 'unlockables');
    [$('#characterShop'), $('#carShop'), $('#unlockableShop')].forEach(panel => { if (panel) panel.scrollTop = 0; });
    hydrateActiveShopPanel();
    pop(button);
  }));
  document.querySelectorAll('[data-unlockable-filter]').forEach(button => button.addEventListener('click', () => {
    unlockableFilter = ['open', 'ready', 'owned'].includes(button.dataset.unlockableFilter) ? button.dataset.unlockableFilter : 'open';
    updateShop();
    $('#unlockableShop').scrollTop = 0;
    pop(button);
  }));
  $('#shopSearch')?.addEventListener('input', event => {
    shopSearchTerm = event.target.value;
    updateShop();
    [$('#characterShop'), $('#carShop'), $('#unlockableShop')].forEach(panel => { if (panel) panel.scrollTop = 0; });
  });
  document.querySelectorAll('[data-collection-sort]').forEach(button => button.addEventListener('click', () => {
    collectionSort = button.dataset.collectionSort === 'score' ? 'score' : 'date';
    renderCollection();
    pop(button);
  }));
  document.querySelectorAll('[data-collection-type]').forEach(button => button.addEventListener('click', () => {
    collectionType = button.dataset.collectionType === 'cars' ? 'cars' : 'skins';
    renderCollection();
    $('#collectionGrid').scrollTop = 0;
    pop(button);
  }));
  $('#collectionSearch')?.addEventListener('input', event => {
    collectionSearchTerm = event.target.value;
    renderCollection();
    $('#collectionGrid').scrollTop = 0;
  });
  $('#challengeClose').addEventListener('click', closeChallengeModal);
  $('#challengeUnlock').addEventListener('click', unlockChallengeSkin);
  $('#challengeModal').addEventListener('click', event => {
    if (event.target === $('#challengeModal')) closeChallengeModal();
  });
  $('#shopPreviewClose').addEventListener('click', closeShopPreview);
  $('#shopPreviewAction').addEventListener('click', confirmShopPreview);
  $('#shopPreviewModal').addEventListener('click', event => {
    if (event.target === $('#shopPreviewModal')) closeShopPreview();
  });
  $('#levelUnlockClose').addEventListener('click', closeLevelUnlockModal);
  $('#levelUnlockModal').addEventListener('click', event => {
    if (event.target === $('#levelUnlockModal')) closeLevelUnlockModal();
  });
  $('#levelPaymentButton').addEventListener('click', () => payForOpponent());

  const backgroundMusic = $('#backgroundMusic');
  const bigDilfVoice = $('#bigDilfVoice');
  const tunTunSound = $('#tunTunSound');
  const bigDilfLossSound = $('#bigDilfLossSound');
  const chestnutStartSound = $('#chestnutStartSound');
  const chestnutGameOverSound = $('#chestnutGameOverSound');
  const musicStart = $('#musicStart');
  let musicWasStarted = false;
  let musicIsFading = false;
  let soundContext = null;
  let backgroundMusicSource = null;
  let backgroundMusicGain = null;
  let logoBurstTimer = 0;
  let musicPreviewTimer = 0;
  let musicFadeFrame = 0;
  let musicFadeTimer = 0;
  const gameplaySamples = [bigDilfVoice, tunTunSound, bigDilfLossSound, chestnutStartSound, chestnutGameOverSound].filter(Boolean);
  const mediaSampleCooldowns = new WeakMap();
  const fxCooldowns = new Map();

  function updateSfxToggle() {
    if (!sfxToggle) return;
    sfxToggle.textContent = sfxEnabled ? '♪' : '♪̸';
    sfxToggle.classList.toggle('off', !sfxEnabled);
    sfxToggle.setAttribute('aria-label', sfxEnabled ? (isGerman() ? 'Soundeffekte ausschalten' : 'Turn sound effects off') : (isGerman() ? 'Soundeffekte einschalten' : 'Turn sound effects on'));
  }

  function setSfxEnabled(enabled) {
    sfxEnabled = !!enabled;
    try { localStorage.setItem('chromeRush.sfxEnabled', sfxEnabled ? '1' : '0'); } catch { /* Private mode. */ }
    if (!sfxEnabled) stopGameplaySamples();
    updateSfxToggle();
    if (sfxEnabled) playSynthTone({ frequency: 360, endFrequency: 540, duration: .1, volume: .025, type: 'triangle' });
  }

  function stopAudioSample(audio) {
    if (!audio) return;
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch {
      /* Ignore unsupported audio state changes on older mobile browsers. */
    }
  }

  function stopGameplaySamples(except = null) {
    gameplaySamples.forEach(audio => {
      if (audio !== except) stopAudioSample(audio);
    });
  }

  function playAudioSample(audio, volume = 1, options = {}) {
    if (!audio || !sfxEnabled) return;
    const { exclusive = true, cooldown = 0 } = options;
    const now = performance.now();
    const lastPlayed = mediaSampleCooldowns.get(audio) || 0;
    if (cooldown && now - lastPlayed < cooldown) return;
    mediaSampleCooldowns.set(audio, now);
    try {
      if (exclusive) stopGameplaySamples(audio);
      audio.pause();
      audio.currentTime = 0;
      try { audio.volume = volume; } catch { /* iOS may ignore direct media volume. */ }
      audio.play().catch(() => {});
    } catch {
      /* Ignore unsupported audio state changes on older mobile browsers. */
    }
  }

  function playBigDilfVoice() {
    playAudioSample(bigDilfVoice, 1, { cooldown: 4200 });
  }

  function playTunTunSound() {
    playAudioSample(tunTunSound, 1);
  }

  function playBigDilfLossSound() {
    playAudioSample(bigDilfLossSound, 1);
  }

  function playChestnutStartSound() {
    playAudioSample(chestnutStartSound, 1);
  }

  function playChestnutGameOverSound() {
    playAudioSample(chestnutGameOverSound, 1);
  }

  async function startSelectedLevel() {
    if (!isOpponentUnlocked(selectedOpponent)) return;
    stopGameplaySamples();
    ensureSoundContext();
    if (selectedOpponent === 0) playBigDilfVoice();
    if (selectedOpponent === 1) playChestnutStartSound();
    await prepareGameplayAssets();
    startGame();
  }

  async function restartCurrentRun() {
    stopGameplaySamples();
    ensureSoundContext();
    if (selectedOpponent === 1) playChestnutStartSound();
    await prepareGameplayAssets();
    startGame();
  }

  function ensureSoundContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!soundContext) soundContext = new AudioContextClass();
    if (soundContext.state === 'suspended') soundContext.resume().catch(() => {});
    return soundContext;
  }

  function setupBackgroundMusicNode() {
    const audioContext = ensureSoundContext();
    if (!audioContext || backgroundMusicGain || !backgroundMusic) return backgroundMusicGain;
    try {
      backgroundMusicSource = audioContext.createMediaElementSource(backgroundMusic);
      backgroundMusicGain = audioContext.createGain();
      backgroundMusicSource.connect(backgroundMusicGain);
      backgroundMusicGain.connect(audioContext.destination);
    } catch {
      backgroundMusicGain = null;
    }
    return backgroundMusicGain;
  }

  function setBackgroundMusicVolume(volume) {
    const gain = backgroundMusicGain || setupBackgroundMusicNode();
    if (gain) {
      gain.gain.cancelScheduledValues(0);
      gain.gain.setValueAtTime(volume, soundContext.currentTime);
      return;
    }
    try { backgroundMusic.volume = volume; } catch { /* iOS may ignore direct media volume. */ }
  }

  function canPlayFx(key, cooldownMs) {
    if (!sfxEnabled) return false;
    const now = performance.now();
    const lastPlayed = fxCooldowns.get(key) || 0;
    if (now - lastPlayed < cooldownMs) return false;
    fxCooldowns.set(key, now);
    return true;
  }

  function playSynthTone({ frequency = 220, endFrequency = frequency, duration = .12, volume = .04, type = 'sine', delay = 0 }) {
    if (!sfxEnabled) return;
    const audioContext = ensureSoundContext();
    if (!audioContext || audioContext.state !== 'running') return;
    const start = audioContext.currentTime + delay;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), start + duration);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + Math.min(.018, duration * .2));
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .02);
  }

  function playLandingSound(impactSpeed, type) {
    const force = clamp(impactSpeed / 1050, .45, 1);
    playSynthTone({ frequency: type === 'spring' ? 150 : 95, endFrequency: 48, duration: .09, volume: .032 * force, type: 'triangle' });
    if (force > .72) playSynthTone({ frequency: 62, endFrequency: 38, duration: .13, volume: .022 * force, type: 'sine', delay: .012 });
  }

  function playJumpSound(spring = false) {
    playSynthTone({ frequency: spring ? 330 : 205, endFrequency: spring ? 820 : 390, duration: spring ? .18 : .11, volume: spring ? .045 : .025, type: 'sine', delay: .025 });
  }

  function playMilestoneSound(meters) {
    if (!canPlayFx('milestone', 850)) return;
    const lift = Math.min(260, Math.floor(meters / 100) * 14);
    [0, .085, .17].forEach((delay, index) => playSynthTone({ frequency: 420 + lift + index * 150, endFrequency: 560 + lift + index * 170, duration: .16, volume: .045, type: 'triangle', delay }));
  }

  function playSpeedUpSound() {
    if (!canPlayFx('speedUp', 900)) return;
    [0, .07].forEach((delay, index) => playSynthTone({ frequency: 260 + index * 180, endFrequency: 520 + index * 220, duration: .16, volume: .035, type: 'sawtooth', delay }));
  }

  function playCrashSound() {
    if (!canPlayFx('crash', 600)) return;
    playSynthTone({ frequency: 145, endFrequency: 38, duration: .32, volume: .065, type: 'sawtooth' });
    playSynthTone({ frequency: 82, endFrequency: 30, duration: .42, volume: .055, type: 'triangle', delay: .018 });
  }

  function playCoinSound() {
    if (!canPlayFx('coin', 55)) return;
    const audioContext = ensureSoundContext();
    if (!audioContext || audioContext.state !== 'running') return;
    const start = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(880, start);
    oscillator.frequency.setValueAtTime(1320, start + .055);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(.11, start + .008);
    gain.gain.exponentialRampToValueAtTime(.0001, start + .13);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + .14);
  }

  function playBlackCoinSound() {
    if (!canPlayFx('blackCoin', 115)) return;
    const audioContext = ensureSoundContext();
    if (!audioContext || audioContext.state !== 'running') return;
    const start = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(330, start);
    oscillator.frequency.exponentialRampToValueAtTime(990, start + .22);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(.13, start + .015);
    gain.gain.exponentialRampToValueAtTime(.0001, start + .32);
    oscillator.connect(gain); gain.connect(audioContext.destination);
    oscillator.start(start); oscillator.stop(start + .34);
  }

  function playHennessySound() {
    if (!canPlayFx('hennessy', 360)) return;
    const audioContext = ensureSoundContext();
    if (!audioContext || audioContext.state !== 'running') return;
    const start = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(420, start);
    oscillator.frequency.exponentialRampToValueAtTime(115, start + .48);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(.09, start + .025);
    gain.gain.exponentialRampToValueAtTime(.0001, start + .55);
    oscillator.connect(gain); gain.connect(audioContext.destination);
    oscillator.start(start); oscillator.stop(start + .58);
  }

  function playShoeSound() {
    if (!canPlayFx('shoe', 120)) return;
    const audioContext = ensureSoundContext();
    if (!audioContext || audioContext.state !== 'running') return;
    const start = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(240, start);
    oscillator.frequency.exponentialRampToValueAtTime(70, start + .2);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(.045, start + .01);
    gain.gain.exponentialRampToValueAtTime(.0001, start + .23);
    oscillator.connect(gain); gain.connect(audioContext.destination);
    oscillator.start(start); oscillator.stop(start + .24);
  }

  function playBoostSound(type) {
    if (!canPlayFx('boost', 400)) return;
    const audioContext = ensureSoundContext();
    if (!audioContext || audioContext.state !== 'running') return;
    const tier = Math.max(0, carOrder.indexOf(type));
    const start = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(95 + tier * 18, start);
    oscillator.frequency.exponentialRampToValueAtTime(430 + tier * 120, start + .38);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(.075, start + .025);
    gain.gain.exponentialRampToValueAtTime(.0001, start + .46);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + .48);
  }

  async function startBackgroundMusic() {
    clearTimeout(logoBurstTimer);
    clearTimeout(musicPreviewTimer);
    clearTimeout(musicFadeTimer);
    cancelAnimationFrame(musicFadeFrame);
    musicIsFading = false;
    musicStart.classList.remove('sparkle-burst');
    void musicStart.offsetWidth;
    musicStart.classList.add('sparkle-burst');
    logoBurstTimer = setTimeout(() => musicStart.classList.remove('sparkle-burst'), 1050);
    setupBackgroundMusicNode();
    setBackgroundMusicVolume(.58);
    backgroundMusic.currentTime = 0;
    try {
      await backgroundMusic.play();
      musicWasStarted = true;
      musicStart.classList.add('music-playing');
      musicStart.setAttribute('aria-label', isGerman() ? 'Musikvorschau läuft' : 'Music preview is playing');
      musicPreviewTimer = setTimeout(fadeOutBackgroundMusic, 5000);
    } catch {
      musicWasStarted = false;
      musicStart.classList.remove('music-playing');
      musicStart.setAttribute('aria-label', t('tapAgainMusic'));
    }
  }

  function fadeOutBackgroundMusic() {
    clearTimeout(musicFadeTimer);
    cancelAnimationFrame(musicFadeFrame);
    musicIsFading = true;
    const duration = 3200;
    const startedAt = performance.now();
    const gain = backgroundMusicGain || setupBackgroundMusicNode();
    if (gain && soundContext) {
      const now = soundContext.currentTime;
      const currentVolume = Math.max(.001, gain.gain.value || .58);
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(currentVolume, now);
      gain.gain.linearRampToValueAtTime(.0001, now + duration / 1000);
      musicFadeTimer = setTimeout(finishBackgroundMusicFade, duration + 80);
      return;
    }
    const fade = () => {
      const progress = clamp((performance.now() - startedAt) / duration, 0, 1);
      const nextVolume = .58 * (1 - progress);
      try { backgroundMusic.volume = nextVolume; } catch { /* iOS may ignore direct media volume. */ }
      if (progress < 1) {
        musicFadeTimer = setTimeout(fade, 50);
        return;
      }
      finishBackgroundMusicFade();
    };
    fade();
  }

  function finishBackgroundMusicFade() {
    clearTimeout(musicFadeTimer);
    cancelAnimationFrame(musicFadeFrame);
    try {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    } catch {
      /* Ignore unsupported audio state changes on older mobile browsers. */
    }
    setBackgroundMusicVolume(.58);
    musicWasStarted = false;
    musicIsFading = false;
    musicStart.classList.remove('music-playing');
    musicStart.setAttribute('aria-label', t('tapAgainMusic'));
  }

  musicStart.addEventListener('click', startBackgroundMusic);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && playing && !paused) pauseGame();
    if (document.visibilityState === 'hidden') {
      clearTimeout(musicPreviewTimer);
      clearTimeout(musicFadeTimer);
      cancelAnimationFrame(musicFadeFrame);
      backgroundMusic.pause();
      setBackgroundMusicVolume(.58);
      musicWasStarted = false;
      musicIsFading = false;
      musicStart.classList.remove('music-playing');
    }
  });

  buildSelections();
  applyLanguage();
  preloadInitialAssets();
  resize();
  updateMenuStats();
  requestAnimationFrame(renderPreviews);
})();
