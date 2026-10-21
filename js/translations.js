const translations = {
  tr: {
    appName: "Yakın-İş",
    providerPortal: "Usta Portalı",
    customerPortal: "Müşteri Portalı",
    login: "Giriş Yap",
    register: "Kaydol",
    emailPlaceholder: "E-Posta Adresi",
    phonePlaceholder: "Cep Numarası",
    loginWithCode: "6 Haneli Kod ile Giriş Yap",
    findService: "Hizmet Bul",
    becomeProvider: "Hizmet Veren Ol"
  },
  en: {
    appName: "Yakın-İş Global",
    providerPortal: "Provider Portal",
    customerPortal: "Customer Portal",
    login: "Log In",
    register: "Sign Up",
    emailPlaceholder: "Email Address",
    phonePlaceholder: "Phone Number",
    loginWithCode: "Log In with 6-Digit Code",
    findService: "Find Services",
    becomeProvider: "Become a Provider"
  },
  de: {
    appName: "Yakın-İş Global",
    providerPortal: "Anbieterportal",
    customerPortal: "Kundenportal",
    login: "Anmelden",
    register: "Registrieren",
    emailPlaceholder: "E-Mail-Adresse",
    phonePlaceholder: "Handynummer",
    loginWithCode: "Mit 6-stelligen Code anmelden",
    findService: "Dienste finden",
    becomeProvider: "Anbieter werden"
  }
};

let currentLang = localStorage.getItem('yakinis_lang') || 'tr';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('yakinis_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.innerText = translations[lang][key];
      }
    }
  });

  const langSelect = document.getElementById('languageSelect');
  if (langSelect) langSelect.value = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});