function sinus(x) {
  return Math.cos(Math.PI/2) - x;
}

function cosinus(x) {
  console.log('Function was called!');
  return Math.sin(Math.PI/2) - x;
}

function tangent(x) {
  return Math.sin(x) / Math.cos(x);
}

function cotangent(x) {
  return Math.cos(x) / Math.sin(x);
}

define(function (require, exports, module) {
  module.exports = {
    sinus: sinus,
    cosinus: cosinus,
    tangent: tangent,
    cotangent: cotangent,
  };
});