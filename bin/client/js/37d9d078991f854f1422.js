(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{178:function(n,e,t){"use strict";t(179);var r=t(5).isFactory,i=t(108),u=t(109),o=t(182),a=t(183);e.create=function(n){if("function"!=typeof Object.create)throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");var e=[],t=[],c=u.mixin({});c.type={},c.expression={transform:{},mathWithTransform:{}},c.typed=i.create(c.type);var f={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function m(n){if(!r(n))throw new Error("Factory object with properties `type`, `name`, and `factory` expected");var i,u=e.indexOf(n);return-1===u?(i=!0===n.math?n.factory(c.type,f,m,c.typed,c):n.factory(c.type,f,m,c.typed),e.push(n),t.push(i)):i=t[u],i}return c.import=m(o),c.config=m(a),c.expression.mathWithTransform.config=c.config,n&&c.config(n),c}},217:function(n,e,t){"use strict";var r=t(5),i=t(113);function u(n,e,t){n[e]=t,n.expression.mathWithTransform[e]=t}function o(n,e,t){r.lazy(n,e,t),r.lazy(n.expression.mathWithTransform,e,t)}e.factory=function n(e,r,a,c,f){f.on("config",function(t,i){t.number!==i.number&&n(e,r,a,c,f)}),u(f,"true",!0),u(f,"false",!1),u(f,"null",null),u(f,"uninitialized","Error: Constant uninitialized is removed since v4.0.0. Use null instead"),"BigNumber"===r.number?(u(f,"Infinity",new e.BigNumber(1/0)),u(f,"NaN",new e.BigNumber(NaN)),o(f,"pi",function(){return i.pi(e.BigNumber)}),o(f,"tau",function(){return i.tau(e.BigNumber)}),o(f,"e",function(){return i.e(e.BigNumber)}),o(f,"phi",function(){return i.phi(e.BigNumber)}),o(f,"E",function(){return f.e}),o(f,"LN2",function(){return new e.BigNumber(2).ln()}),o(f,"LN10",function(){return new e.BigNumber(10).ln()}),o(f,"LOG2E",function(){return new e.BigNumber(1).div(new e.BigNumber(2).ln())}),o(f,"LOG10E",function(){return new e.BigNumber(1).div(new e.BigNumber(10).ln())}),o(f,"PI",function(){return f.pi}),o(f,"SQRT1_2",function(){return new e.BigNumber("0.5").sqrt()}),o(f,"SQRT2",function(){return new e.BigNumber(2).sqrt()})):(u(f,"Infinity",1/0),u(f,"NaN",NaN),u(f,"pi",Math.PI),u(f,"tau",2*Math.PI),u(f,"e",Math.E),u(f,"phi",1.618033988749895),u(f,"E",f.e),u(f,"LN2",Math.LN2),u(f,"LN10",Math.LN10),u(f,"LOG2E",Math.LOG2E),u(f,"LOG10E",Math.LOG10E),u(f,"PI",f.pi),u(f,"SQRT1_2",Math.SQRT1_2),u(f,"SQRT2",Math.SQRT2)),e.Complex&&u(f,"i",e.Complex.I),u(f,"version",t(218))},e.lazy=!1,e.math=!0}}]);