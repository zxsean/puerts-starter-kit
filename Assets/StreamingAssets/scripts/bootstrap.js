const csharp = require("csharp");
Object.defineProperty(globalThis, 'csharp', { value: csharp });
const puerts = require("puerts");
Object.defineProperty(globalThis, 'puerts', { value: puerts });
require("webapi.js");
module.exports = require("bundle.js").default;
