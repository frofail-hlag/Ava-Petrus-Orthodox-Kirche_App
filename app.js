const state = { lang: localStorage.getItem("coptic-lang") || "de", route: location.hash.replace("#","") || "home" };

const data = {
  de: {
    welcome:"Herzlich willkommen", sub:"Schön, dass Sie da sind!",
    next:"Nächste Liturgie", sun:"Sonntag, 08:00",
    church:"Kirche", spiritual:"Spiritualität", community:"Community", sunday:"Sonntagsschule",
    notice:"Aktuelle Hinweise", noticeText:"Platzhalter für wichtige Nachrichten der Kirche.",
    churchSub:"Alles rund um unsere Kirche", spiritualSub:"Dein täglicher geistlicher Weg",
    communitySub:"Verbinden, helfen und ankommen", profile:"Profil & Einstellungen",
    churchItems:[["▦","Liturgien","Termine & Gottesdienste"],["▣","Veranstaltungen","Gemeinschaft & Termine"],["ⓘ","Die Kirche","Informationen & Kontakt"],["♜","Unsere Priester","Geistliche Begleitung"],["⌖","Kontakt & Anfahrt","Adresse & Wegbeschreibung"]],
    spiritualItems:[["▤","Bibel","Lesen & entdecken"],["✓","Ein-Jahres-Leseplan","Dein täglicher Bibelweg"],["♢","Agpeya","Gebete in Deutsch & Arabisch"],["✚","Koptischer Kalender","Synaxar & Heilige"],["▶","Videos","Lernen & Meditation"]],
    communityItems:[["⌂","Wohnen","Hilfe & Angebote"],["▣","Jobs","Hilfe & Angebote"],["🎓","Bildung","Hilfe & Angebote"],["♧","Allgemeine Hilfe","Gemeinschaft"],["♥","Neu in Hamburg?","Ankommen & verbinden"]],
    sundayDesc:"Eigene App für Kinder, Jugendliche, Eltern und Servants.",
    classesTitle:"Sonntagsschule — Design Preview",
    class1:"Malayka / Angels", class2:"Ava Kerelos", class3:"Abouna Faltaous",
    ages:["6–8 Jahre","9–14 Jahre","15–20 Jahre"],
    profileSub:"Sprache, Benachrichtigungen & Konto",
    lang:"Sprache", notifications:"Benachrichtigungen", design:"V1 Design Prototype"
  },
  ar: {
    welcome:"أهلاً وسهلاً بك", sub:"سعداء بوجودك معنا!",
    next:"القداس القادم", sun:"الأحد، 08:00",
    church:"الكنيسة", spiritual:"الحياة الروحية", community:"المجتمع", sunday:"مدرسة الأحد",
    notice:"أهم الإعلانات", noticeText:"مكان مخصص لأهم أخبار وإعلانات الكنيسة.",
    churchSub:"كل ما يخص كنيستنا", spiritualSub:"حياتك الروحية اليومية",
    communitySub:"نتواصل ونساعد بعضنا البعض", profile:"الحساب والإعدادات",
    churchItems:[["▦","القداسات","المواعيد والصلوات"],["▣","الفعاليات","الأنشطة والمناسبات"],["ⓘ","الكنيسة","معلومات وتواصل"],["♜","الآباء الكهنة","الإرشاد الروحي"],["⌖","التواصل والوصول","العنوان والطريق"]],
    spiritualItems:[["▤","الكتاب المقدس","قراءة واكتشاف"],["✓","خطة قراءة سنة","رحلتك اليومية مع الكتاب"],["♢","الأجبية","صلوات بالعربية والألمانية"],["✚","السنكسار","القديسون والشهداء"],["▶","الفيديوهات","تعليم وتأمل"]],
    communityItems:[["⌂","السكن","مساعدة وعروض"],["▣","الوظائف","مساعدة وفرص"],["🎓","التعليم","مساعدة وفرص"],["♧","مساعدة عامة","معاً نخدم بعضنا"],["♥","جديد في هامبورج؟","تعرف على المجتمع"]],
    sundayDesc:"تطبيق مستقل للأطفال والشباب والأهالي والخدام.",
    classesTitle:"مدرسة الأحد — معاينة التصميم",
    class1:"ملايكة / Angels", class2:"البابا كيرلس", class3:"أبونا فلتاؤس",
    ages:["٦–٨ سنوات","٩–١٤ سنة","١٥–٢٠ سنة"],
    profileSub:"اللغة والإشعارات والحساب",
    lang:"اللغة", notifications:"الإشعارات", design:"معاينة التصميم V1"
  }
};

function t(k){return data[state.lang][k] ?? k}
function setLang(lang){
  state.lang=lang; localStorage.setItem("coptic-lang",lang);
  document.documentElement.lang=lang;
  document.body.classList.toggle("arabic",lang==="ar");
  render();
}
function go(route){state.route=route; location.hash=route; render(); window.scrollTo({top:0,behavior:"smooth"})}

function headerBack(){
  return `<button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button>`;
}
function list(items){
  return `<div class="list">${items.map(x=>`<div class="list-card"><div class="list-icon">${x[0]}</div><div class="list-copy"><strong>${x[1]}</strong><span>${x[2]}</span></div><div class="chev">›</div></div>`).join("")}</div>`;
}
function home(){
  return `
  <div class="hero">
    <div class="eyebrow">St. Petrus • Hamburg</div>
    <h1>${t("welcome")}</h1><p>${t("sub")}</p>
    <div class="hero-row">
      <span class="pill">✣ &nbsp; Koptisch-Orthodox</span>
      <div class="lang-toggle"><button class="${state.lang==="de"?"active":""}" onclick="setLang('de')">DE</button><button class="${state.lang==="ar"?"active":""}" onclick="setLang('ar')">عربي</button></div>
    </div>
  </div>
  <div class="section-title"><h2>${t("next")}</h2><span>${t("sun")}</span></div>
  <div class="next-card"><div class="next-icon">♜</div><div class="next-info"><div class="next-label">${t("next")}</div><div class="next-title">${t("sun")}</div><div class="next-time">St. Petrus • Hamburg</div></div><div class="chev">›</div></div>

  <div class="section-title"><h2>${state.lang==="ar"?"اكتشف":"Entdecken"}</h2></div>
  <div class="grid">
    <button class="tile blue" onclick="go('church')"><div class="tile-icon">⛪</div><strong>${t("church")}</strong><small>${t("churchSub")}</small></button>
    <button class="tile blue" onclick="go('spiritual')"><div class="tile-icon">📖</div><strong>${t("spiritual")}</strong><small>${t("spiritualSub")}</small></button>
    <button class="tile green" onclick="go('community')"><div class="tile-icon">👥</div><strong>${t("community")}</strong><small>${t("communitySub")}</small></button>
    <button class="tile rose" onclick="openSundaySchool()"><div class="tile-icon">🎓</div><strong>${t("sunday")}</strong><small>${t("sundayDesc")}</small></button>
  </div>
  <div class="notice"><div class="notice-icon">📢</div><p><b>${t("notice")}:</b> ${t("noticeText")}</p></div>
  <div class="ss-panel">
    <div class="section-title"><h2>${t("classesTitle")}</h2></div>
    <div class="class-grid">
      <div class="class-card"><img class="class-img" src="assets/malayka.jpeg"><div><h3>${t("class1")}</h3><p>Gruppe 1</p><span class="age">${t("ages")[0]}</span></div></div>
      <div class="class-card"><img class="class-img" src="assets/ava-kerelos.jpeg"><div><h3>${t("class2")}</h3><p>Gruppe 2</p><span class="age">${t("ages")[1]}</span></div></div>
      <div class="class-card"><img class="class-img" src="assets/abouna-faltaous.jpeg"><div><h3>${t("class3")}</h3><p>Gruppe 3</p><span class="age">${t("ages")[2]}</span></div></div>
    </div>
  </div>`;
}
function page(route){
  if(route==="church") return `<button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1 class="page-title">${t("church")}</h1><p class="page-sub">${t("churchSub")}</p>${list(data[state.lang].churchItems)}`;
  if(route==="spiritual") return `<button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><div class="feature"><h2>${t("spiritual")}</h2><p>${t("spiritualSub")}</p><div class="feature-row"><span>📖 Bible</span><span>📿 Agpeya</span><span>✝ Synaxar</span></div></div>${list(data[state.lang].spiritualItems)}`;
  if(route==="community") return `<button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1 class="page-title">${t("community")}</h1><p class="page-sub">${t("communitySub")}</p>${list(data[state.lang].communityItems)}`;
  if(route==="profile") return `<button class="back" onclick="go('home')">‹ ${state.lang==="ar"?"الرئيسية":"Home"}</button><h1 class="page-title">${t("profile")}</h1><div class="profile-card"><div class="avatar">✣</div><div><h3>St. Petrus Hamburg</h3><p>${t("design")}</p></div></div><div class="section-title"><h2>${t("lang")}</h2></div><div class="lang-toggle"><button class="${state.lang==="de"?"active":""}" onclick="setLang('de')">Deutsch</button><button class="${state.lang==="ar"?"active":""}" onclick="setLang('ar')">العربية</button></div><div class="section-title"><h2>${t("notifications")}</h2></div><div class="list"><div class="list-card"><div class="list-icon">🔔</div><div class="list-copy"><strong>${t("notifications")}</strong><span>Design placeholder</span></div><div class="chev">›</div></div></div>`;
  return home();
}
function render(){
  document.body.classList.toggle("arabic",state.lang==="ar");
  document.documentElement.lang=state.lang;
  document.getElementById("screen").innerHTML=page(state.route);
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.route===state.route));
}
function openSundaySchool(){
  alert(state.lang==="ar" ? "مدرسة الأحد ستكون تطبيقاً مستقلاً — هذه نقطة الدخول في تطبيق الكنيسة." : "Sonntagsschule wird eine eigene App — dies ist der Einstieg aus der Kirchen-App.");
}
window.addEventListener("hashchange",()=>{state.route=location.hash.replace("#","")||"home";render()});
render();
