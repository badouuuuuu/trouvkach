(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{111:function(n,e,r){"use strict";var t=r(0);e.name="bignumber",e.factory=function(n,e,r,i){var u=i("bignumber",{"":function(){return new n.BigNumber(0)},number:function(e){return new n.BigNumber(e+"")},string:function(e){return new n.BigNumber(e)},BigNumber:function(n){return n},Fraction:function(e){return new n.BigNumber(e.n).div(e.d).times(e.s)},null:function(e){return new n.BigNumber(0)},"Array | Matrix":function(n){return t(n,u)}});return u.toTex={0:"0",1:"\\left(${args[0]}\\right)"},u}},189:function(n,e,r){"use strict";n.exports=[r(190),r(111)]},190:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.factory=function(n,e,r,t,u){var o=i.default.clone({precision:e.precision});return o.prototype.type="BigNumber",o.prototype.isBigNumber=!0,o.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},o.fromJSON=function(n){return new o(n.value)},u.on("config",function(n,e){n.precision!==e.precision&&o.config({precision:n.precision})}),o},e.math=e.path=e.name=void 0;var t,i=(t=r(191))&&t.__esModule?t:{default:t};e.name="BigNumber";e.path="type";e.math=!0}}]);