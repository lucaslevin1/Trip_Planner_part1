module.exports = {
  mode:"development",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public", //this might mess the whole thing up bro
    filename:"bundle.js"
  }
};
