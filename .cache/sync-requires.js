const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Pessoal\\smartframe\\.cache\\dev-404-page.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("C:\\Pessoal\\smartframe\\src\\pages\\app.js"))),
  "component---src-pages-create-account-js": hot(preferDefault(require("C:\\Pessoal\\smartframe\\src\\pages\\create-account.js"))),
  "component---src-pages-d-js": hot(preferDefault(require("C:\\Pessoal\\smartframe\\src\\pages\\d.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Pessoal\\smartframe\\src\\pages\\index.js"))),
  "component---src-pages-sign-in-js": hot(preferDefault(require("C:\\Pessoal\\smartframe\\src\\pages\\sign-in.js")))
}

