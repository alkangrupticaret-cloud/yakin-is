// js/translations.js - Yakın-İş Küresel Dil Sözlüğü

const translations = {
  tr: {
    appName: "Yakın-İş",
    findService: "Hizmet Bul",
    becomeProvider: "Hizmet Veren Ol",
    searchPlaceholder: "Hizmet veya usta ara (ör. Tesisatçı, Elektrikçi)...",
    categories: "Kategoriler",
    login: "Giriş Yap",
    register: "Kayıt Ol",
    profile: "Profilim",
    logout: "Çıkış Yap",
    nearbyServices: "Yakındaki Hizmetler",
    selectLanguage: "Dil",
    currency: "₺ (TRY)"
  },
  en: {
    appName: "Yakın-İş Global",
    findService: "Find Services",
    becomeProvider: "Become a Provider",
    searchPlaceholder: "Search for services or pros (e.g. Plumber, Electrician)...",
    categories: "Categories",
    login: "Log In",
    register: "Sign Up",
    profile: "My Profile",
    logout: "Log Out",
    nearbyServices: "Nearby Services",
    selectLanguage: "Language",
    currency: "$ (USD)"
  },
  de: {
    appName: "Yakın-İş Global",
    findService: "Dienste finden",
    becomeProvider: "Anbieter werden",
    searchPlaceholder: "Dienstleistungen suchen (z.B. Klempner, Elektriker)...",
    categories: "Kategorien",
    login: "Anmelden",
    register: "Registrieren",
    profile: "Mein Profil",
    logout: "Abmelden",
    nearbyServices: "Dienste in der Nähe",
    selectLanguage: "Sprache",
    currency: "€ (EUR)"
  }
};

// Tarayıcı hafızasındaki dili al veya varsayılan Türkçe yap
let currentLang = localStorage.getItem('yakinis_lang') || 'tr';

// Dili değiştiren ve sayfadaki metinleri güncelleyen fonksiyon
function setLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLang = lang;
  localStorage.setItem('yakinis_lang', lang);

  // HTML üzerindeki data-i18n etiketine sahip tüm elemanları güncelle
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.placeholder) {
          element.placeholder = translations[lang][key];
        }
      } else {
        element.innerText = translations[lang][key];
      }
    }
  });

  // Seçici (Select) elemanı varsa durumunu güncelle
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.value = lang;
  }
}

// Sayfa yüklendiğinde seçili dili otomatik uygula
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});