const baseConfig = require("@teambit/react/prettier/prettier.config");
module.exports = {
  ...baseConfig,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 120
};
