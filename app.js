const state={lang:localStorage.getItem("coptic-lang")||"de",route:location.hash.replace("#","")||"home"};
const D={
de:{
welcome:"Herzlich willkommen",sub:"Schön, dass Sie da sind!",next:"Nächste Liturgie",sun:"Sonntag, 10:00",
church:"Kirche",spiritual:"Spiritualität",community:"Community",sunday:"Sonntagsschule",discover:"Entdecken",
notice:"Aktuelle Hinweise",noticeText:"Platzhalter für wichtige Nachrichten der Kirche.",
churchSub:"Gottesdienste, Termine und unsere Kirche",spiritualSub:"Dein täglicher geistlicher Weg",communitySub:"Verbinden, helfen und ankommen",
classTitle:"Sonntagsschule",classSub:"Separate App",open:"Sonntagsschule App öffnen",profile:"Profil & Einstellungen",
classes:[["Malayka / Angels","Gruppe 1","6–8 Jahre","assets/malayka.jpeg"],["Ava Kerelos","Gruppe 2","9–14 Jahre","assets/ava-kerelos.jpeg"],["Abouna Faltaous","Gruppe 3","15–20 Jahre","assets/abouna-faltaous.jpeg"]],
churchCards:[["▦","Liturgien","Termine & Gottesdienste"],["▣","Veranstaltungen","Gemeinschaft & Termine"],["ⓘ","Die Kirche","Informationen & Kontakt"],["♜","Unsere Priester","Geistliche Begleitung"],["⌖","Kontakt & Anfahrt","Adresse & Wegbeschreibung"],["✣","Coptic Calendar","Synaxar & Feiertage"]],
spiritualCards:[["▤","Bibel","Lesen & entdecken"],["✓","Ein-Jahres-Leseplan","Dein täglicher Bibelweg"],["♢","Agpeya","Deutsch & Arabisch"],["✚","Koptischer Kalender","Synaxar & Heilige"],["▶","Videos","Lernen & Meditation"],["♡","Meine Favoriten","Gespeicherte Inhalte"]],
communityCards:[["⌂","Wohnen","Hilfe & Angebote"],["▣","Jobs","Hilfe & Angebote"],["🎓","Bildung","Hilfe & Angebote"],["♧","Allgemeine Hilfe","Gemeinschaft"],["♥","Neu in Hamburg?","Ankommen & verbinden"],["☼","Veranstaltungen","Menschen treffen"]],
profileSub:"Sprache, Benachrichtigungen & Konto"
},
ar:{
welcome:"أهلاً وسهلاً بك",sub:"سعداء بوجودك معنا!",next:"القداس القادم",sun:"الأحد، 10:00",
church:"الكنيسة",spiritual:"الحياة الروحية",community:"المجتمع",sunday:"مدرسة الأحد",discover:"اكتشف",
notice:"أهم الإعلانات",noticeText:"مكان مخصص لأهم أخبار وإعلانات الكنيسة.",
churchSub:"القداسات والفعاليات والكنيسة",spiritualSub:"حياتك الروحية اليومية",communitySub:"نتواصل ونساعد بعضنا البعض",
classTitle:"مدرسة الأحد",classSub:"تطبيق مستقل",open:"فتح تطبيق مدرسة الأحد",profile:"الحساب والإعدادات",
classes:[["ملايكة / Angels","المجموعة ١","٦–٨ سنوات","assets/malayka.jpeg"],["أفا كيرلس","المجموعة ٢","٩–١٤ سنة","assets/ava-kerelos.jpeg"],["أبونا فلتاؤس","المجموعة ٣","١٥–٢٠ سنة","assets/abouna-faltaous.jpeg"]],
churchCards:[["▦","القداسات","المواعيد والصلوات"],["▣","الفعاليات","الأنشطة والمناسبات"],["ⓘ","الكنيسة","معلومات وتواصل"],["♜","الآباء الكهنة","الإرشاد الروحي"],["⌖","التواصل والوصول","العنوان والطريق"],["✣","السنكسار","القديسون والأعياد"]],
spiritualCards:[["▤","الكتاب المقدس","قراءة واكتشاف"],["✓","خطة قراءة سنة","رحلتك اليومية مع الكتاب"],["♢","الأجبية","بالعربية والألمانية"],["✚","السنكسار","القديسون والشهداء"],["▶","الفيديوهات","تعليم وتأمل"],["♡","المفضلة","المحتوى المحفوظ"]],
communityCards:[["⌂","السكن","مساعدة وعروض"],["▣","الوظائف","مساعدة وفرص"],["🎓","التعليم","مساعدة وفرص"],["♧","مساعدة عامة","معاً نخدم بعضنا"],["♥","جديد في هامبورج؟","تعرف على المجتمع"],["☼","الفعاليات","نتعرف على بعضنا"]],
profileSub:"اللغة والإشعارات والحساب"
}};
function t(k){return D[state.lang][k]??k}
function setLang(x){state.lang=x;localStorage.setItem("coptic-lang",x);render()}
function go(x){state.route=x;location.hash=x;render();window.scrollTo({top:0,behavior:"smooth"})}
function quick(icon,title,sub,route,cls){return `<button class="quick ${cls}" onclick="go('${route}')"><div class="quick-icon">${icon}</div><strong>${title}</strong></button>`}
function featureCards(items){return `<div class="card-grid">${items.map((x,i)=>`<button class="feature-card" onclick="placeholder('${x[1]}')"><div class="ficon">${x[0]}</div><strong>${x[1]}</strong><span>${x[2]}</span></button>`).join("")}</div>`}
function home(){
  const c=t("classes");
  return `<section class="hero"><div class="hero-content"><div class="eyebrow">St. Petrus • Hamburg</div><h1>${t("welcome")}</h1><p>${t("sub")}</p><div class="hero-row"><span class="pill">✣ &nbsp; Koptisch-Orthodox</span><div class="lang-toggle"><button class="${state.lang==="de"?"active":""}" onclick="setLang('de')">DE</button><button class="${state.lang==="ar"?"active":""}" onclick="setLang('ar')">عربي</button></div></div></div></section>
  <div class="section-head"><h2>${t("next")}</h2><span>${t("sun")}</span></div>
  <div class="liturgy"><div class="liturgy-icon">♜</div><div class="liturgy-copy"><div class="label">${t("next")}</div><strong>${t("sun")}</strong><span>St. Petrus • Hamburg</span></div><div class="chev">›</div></div>
  <div class="section-head"><h2>${t("discover")}</h2></div>
  <div class="quick-grid">
    ${quick("⛪",t("church"),"", "church","q-blue")}
    ${quick("📖",t("spiritual"),"","spiritual","q-blue")}
    ${quick("👥",t("community"),"","community","q-green")}
    ${quick("🎓",t("sunday"),"","sunday","q-rose")}
  </div>
  <div class="notice"><div class="notice-icon">📢</div><p><b>${t("notice")}:</b> ${t("noticeText")}</p></div>
  <div class="ss-strip"><div class="ss-head"><div><h2>${t("classTitle")}</h2><span>${t("classSub")}</span></div><span>›</span></div><div class="class-scroll">${c.map((x,i)=>`<button class="class-card" onclick="go('class${i}')"><img class="class-img" src="${x[3]}" alt="${x[0]}"><h3>${x[0]}</h3><p>${x[1]}</p><span class="age">${x[2]}</span></button>`).join("")}</div></div>`;
}
function page(route){
 if(route==="church")return `<section class="page-hero"><button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1>${t("church")}</h1><p>${t("churchSub")}</p></section>${featureCards(t("churchCards"))}`;
 if(route==="spiritual")return `<section class="page-hero"><button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1>${t("spiritual")}</h1><p>${t("spiritualSub")}</p></section>${featureCards(t("spiritualCards"))}`;
 if(route==="community")return `<section class="community-hero"><div class="eyebrow">St. Petrus • Hamburg</div><h1>${t("community")}</h1><p>${t("communitySub")}</p></section><div class="community-grid">${t("communityCards").map(x=>`<button class="community-item" onclick="placeholder('${x[1]}')"><div class="ci">${x[0]}</div><strong>${x[1]}</strong><span>${x[2]}</span></button>`).join("")}</div>`;
 if(route==="profile")return `<section class="page-hero"><button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1>${t("profile")}</h1><p>${t("profileSub")}</p></section><div class="profile-card" style="margin-top:13px"><div class="avatar">✣</div><div><h3>St. Petrus Hamburg</h3><p>${state.lang==="ar"?"نسخة تصميم تجريبية":"V1 Design Prototype"}</p></div></div><div class="section-head"><h2>${state.lang==="ar"?"اللغة":"Sprache"}</h2></div><div class="lang-toggle" style="background:#fff;border:1px solid var(--line)"><button style="color:var(--navy)" class="${state.lang==="de"?"active":""}" onclick="setLang('de')">Deutsch</button><button style="color:var(--navy)" class="${state.lang==="ar"?"active":""}" onclick="setLang('ar')">العربية</button></div>`;
 if(route.startsWith("class"))return classPage(parseInt(route.replace("class",""),10)||0);
 if(route==="sunday")return `<section class="ss-page"><div class="ss-banner"><button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1>${t("classTitle")}</h1><p>${t("classSub")} — ${t("open")}</p></div><div class="section-head"><h2>${state.lang==="ar"?"اختر المجموعة":"Gruppe auswählen"}</h2></div><div class="card-grid">${t("classes").map((x,i)=>`<button class="feature-card" onclick="go('class${i}')"><img class="class-img" src="${x[3]}" alt="${x[0]}"><h3 style="font-family:Georgia,serif;color:var(--navy);margin:9px 0 2px">${x[0]}</h3><span>${x[2]}</span></button>`).join("")}</div></section>`;
 return home();
}
function classPage(i){
 const x=t("classes")[i];
 return `<section class="ss-page"><div class="ss-banner"><button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1>${x[0]}</h1><p>${x[1]} • ${x[2]}</p></div><div class="ss-detail"><img src="${x[3]}" alt="${x[0]}"><div class="ss-detail-body"><h2>${x[0]}</h2><p>${state.lang==="ar"?"معاينة لتطبيق مدرسة الأحد المستقل لهذه المجموعة.":"Vorschau für die separate Sonntagsschule-App dieser Gruppe."}</p><div class="tag-row"><span class="tag">📚 ${state.lang==="ar"?"الدروس":"Lessons"}</span><span class="tag">📖 ${state.lang==="ar"?"القراءة":"Reading"}</span><span class="tag">🎥 ${state.lang==="ar"?"فيديو":"Videos"}</span><span class="tag">🔔 ${state.lang==="ar"?"الإشعارات":"Notifications"}</span></div><button class="launch" onclick="placeholder('${x[0]}')">${t("open")}</button></div></div></section>`;
}
function placeholder(name){alert((state.lang==="ar"?"هذه معاينة تصميمية فقط: ":"Design-Prototyp: ") + name)}
function render(){document.body.classList.toggle("arabic",state.lang==="ar");document.documentElement.lang=state.lang;document.getElementById("screen").innerHTML=page(state.route);document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.route===state.route))}
window.addEventListener("hashchange",()=>{state.route=location.hash.replace("#","")||"home";render()});render();
