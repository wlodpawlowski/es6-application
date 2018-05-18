function simpleOutput(name) {
  return `Yoope! All greeting for ${name}`;
}

define(function (require, exports, module) {
  module.exports = {
    simpleOutput: simpleOutput
  };
});