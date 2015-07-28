// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  // cube = require('bespoke-theme-cube'),
  voltaire = require('bespoke-theme-voltaire');
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  pdf = require('bespoke-pdf'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms'),
  run = require('bespoke-run/lib/bespoke-run.js');

// Bespoke.js
bespoke.from('article', [
  // cube(),
  voltaire(),
  keys(),
  touch(),
  pdf(),
  bullets('.bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms(),
  run()
  // bespoke.plugins.run()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
require('prism/plugins/line-numbers/prism-line-numbers.min.js');
