const config = {
  locales: ["en", "hi", "es"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
  },

  // loadLocaleFrom: (lang, ns) => {
  //   console.log(lang, "lang");
  //   console.log(ns, "ns");

  //   import(`/locales/${lang}/${ns}.json`).then((m) => m.default);
  // },
};

module.exports = config;
