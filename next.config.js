const fs = require("fs");
const path = require("path");

const warnOrError =
  process.env.NODE_ENV !== "production"
    ? console.warn
    : (msg) => {
        throw new Error(msg);
      };


module.exports = {
  output: "standalone",
};
