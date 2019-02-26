(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(r,e,n){"use strict";r.exports=function r(e,n){var t;return n<e?1:n===e?n:r(e,t=n+e>>1)*r(t+1,n)}},146:function(r,e,n){"use strict";var t=n(0),i=n(3).isInteger;var o=4.7421875,u=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];e.name="gamma",e.factory=function(r,e,a,m){var s=a(n(10)),c=a(n(44)),f=n(101),v=m("gamma",{number:function(r){var e,n;if(i(r))return r<=0?isFinite(r)?1/0:NaN:r>171?1/0:f(1,r-1);if(r<.5)return Math.PI/(Math.sin(Math.PI*r)*v(1-r));if(r>=171.35)return 1/0;if(r>85){var t=r*r,a=t*r,m=a*r,s=m*r;return Math.sqrt(2*Math.PI/r)*Math.pow(r/Math.E,r)*(1+1/(12*r)+1/(288*t)-139/(51840*a)-571/(2488320*m)+163879/(209018880*s)+5246819/(75246796800*s*r))}--r,n=u[0];for(var c=1;c<u.length;++c)n+=u[c]/(r+c);return e=r+o+.5,Math.sqrt(2*Math.PI)*Math.pow(e,r+.5)*Math.exp(-e)*n},Complex:function(e){var n,t;if(0===e.im)return v(e.re);e=new r.Complex(e.re-1,e.im),t=new r.Complex(u[0],0);for(var i=1;i<u.length;++i){var a=e.re+i,m=a*a+e.im*e.im;0!==m?(t.re+=u[i]*a/m,t.im+=-u[i]*e.im/m):t.re=u[i]<0?-1/0:1/0}n=new r.Complex(e.re+o+.5,e.im);var f=Math.sqrt(2*Math.PI);e.re+=.5;var g=c(n,e);0===g.im?g.re*=f:0===g.re?g.im*=f:(g.re*=f,g.im*=f);var w=Math.exp(-n.re);return n.re=w*Math.cos(-n.im),n.im=w*Math.sin(-n.im),s(s(g,n),t)},BigNumber:function(n){if(n.isInteger())return n.isNegative()||n.isZero()?new r.BigNumber(1/0):function(n){if(n.isZero())return new r.BigNumber(1);for(var t=e.precision+(0|Math.log(n.toNumber())),i=new(r.BigNumber.clone({precision:t}))(n),o=n.toNumber()-1;o>1;)i=i.times(o),o--;return new r.BigNumber(i.toPrecision(r.BigNumber.precision))}(n.minus(1));if(!n.isFinite())return new r.BigNumber(n.isNegative()?NaN:1/0);throw new Error("Integer BigNumber expected")},"Array | Matrix":function(r){return t(r,v)}});return v.toTex={1:"\\Gamma\\left(${args[0]}\\right)"},v}},312:function(r,e,n){"use strict";r.exports=[n(82),n(81),n(146),n(313),n(314),n(315),n(316),n(319),n(320)]},313:function(r,e,n){"use strict";e.name="kldivergence",e.factory=function(r,e,t,i){var o=t(n(1)),u=t(n(47)),a=t(n(104)),m=t(n(10)),s=t(n(143)),c=t(n(97)),f=t(n(55));function v(r,e){var n=e.size().length,t=r.size().length;if(n>1)throw new Error("first object must be one dimensional");if(t>1)throw new Error("second object must be one dimensional");if(n!==t)throw new Error("Length of two vectors must be equal");if(0===a(r))throw new Error("Sum of elements in first object must be non zero");if(0===a(e))throw new Error("Sum of elements in second object must be non zero");var i=u(r,a(r)),o=u(e,a(e)),v=a(m(i,c(s(i,o))));return f(v)?v:Number.NaN}return i("kldivergence",{"Array, Array":function(r,e){return v(o(r),o(e))},"Matrix, Array":function(r,e){return v(r,o(e))},"Array, Matrix":function(r,e){return v(o(r),e)},"Matrix, Matrix":function(r,e){return v(r,e)}})}},314:function(r,e,n){"use strict";var t=n(49);e.name="multinomial",e.factory=function(r,e,i,o){var u=i(n(15)),a=i(n(10)),m=i(n(47)),s=i(n(81)),c=i(n(39)),f=i(n(79));return o("multinomial",{"Array | Matrix":function(r){var e=0,n=1;return t(r,function(r){if(!c(r)||!f(r))throw new TypeError("Positive integer value expected in function multinomial");e=u(e,r),n=a(n,s(r))}),m(s(e),n)}})}},315:function(r,e,n){"use strict";var t=n(3).isInteger;function i(r){return r.isInteger()&&r.gte(0)}e.name="permutations",e.factory=function(r,e,o,u){var a=o(n(81)),m=n(101),s=u("permutations",{"number | BigNumber":a,"number, number":function(r,e){if(!t(r)||r<0)throw new TypeError("Positive integer value expected in function permutations");if(!t(e)||e<0)throw new TypeError("Positive integer value expected in function permutations");if(e>r)throw new TypeError("second argument k must be less than or equal to first argument n");return m(r-e+1,r)},"BigNumber, BigNumber":function(e,n){var t,o;if(!i(e)||!i(n))throw new TypeError("Positive integer value expected in function permutations");if(n.gt(e))throw new TypeError("second argument k must be less than or equal to first argument n");for(t=new r.BigNumber(1),o=e.minus(n).plus(1);o.lte(e);o=o.plus(1))t=t.times(o);return t}});return s.toTex=void 0,s}},316:function(r,e,n){"use strict";e.name="pickRandom",e.factory=function(r,e,t,i){var o=t(n(105))("uniform").pickRandom;return o.toTex=void 0,o}},317:function(r,e,n){"use strict";var t=n(318),i=t();e.factory=function(r,e,n,o,u){var a;function m(r){a=null===r?i:t(String(r))}return m(e.randomSeed),u.on("config",function(r,e,n){void 0!==n.randomSeed&&m(r.randomSeed)}),function(){return a()}},e.math=!0},319:function(r,e,n){"use strict";e.name="random",e.factory=function(r,e,t,i){var o=t(n(105))("uniform").random;return o.toTex=void 0,o}},320:function(r,e,n){"use strict";e.name="randomInt",e.factory=function(r,e,t,i){var o=t(n(105))("uniform").randomInt;return o.toTex=void 0,o}}}]);