const withImages = require("next-images");
const withPWA = require("next-pwa");

module.exports = withPWA(
  withImages({
    env: {
      apiURL: "https://sendmefiles.xyz",
      frontendUrl: "https://sendmefiles.cloud",
    },
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
  })
);
