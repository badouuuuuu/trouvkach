(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{126:function(t,e,n){"use strict";var o=n(2).map,r=n(9).escape;e.name="IndexNode",e.path="expression.node",e.factory=function(t,e,i,s){var a=i(n(17)),p=i(n(112)),c=Array.isArray;function u(e,n){if(!(this instanceof u))throw new SyntaxError("Constructor must be called with the new operator");if(this.dimensions=e,this.dotNotation=n||!1,!c(e)||!e.every(t.isNode))throw new TypeError('Array containing Nodes expected for parameter "dimensions"');if(this.dotNotation&&!this.isObjectProperty())throw new Error("dotNotation only applicable for object properties");var o=function(){throw new Error("Property `IndexNode.object` is deprecated, use `IndexNode.fn` instead")};Object.defineProperty(this,"object",{get:o,set:o})}function d(e,n,o){return new p(t.isBigNumber(e)?e.toNumber():e,t.isBigNumber(n)?n.toNumber():n,t.isBigNumber(o)?o.toNumber():o)}return u.prototype=new a,u.prototype.type="IndexNode",u.prototype.isIndexNode=!0,u.prototype._compile=function(e,n){var r=o(this.dimensions,function(o,r){if(t.isRangeNode(o)){if(o.needsEnd()){var i=Object.create(n);i.end=!0;var s=o.start._compile(e,i),a=o.end._compile(e,i),p=o.step?o.step._compile(e,i):function(){return 1};return function(t,n,o){var i=e.size(o).valueOf(),c=Object.create(n);return c.end=i[r],d(s(t,c,o),a(t,c,o),p(t,c,o))}}var c=o.start._compile(e,n),u=o.end._compile(e,n),h=o.step?o.step._compile(e,n):function(){return 1};return function(t,e,n){return d(c(t,e,n),u(t,e,n),h(t,e,n))}}if(t.isSymbolNode(o)&&"end"===o.name){var m=Object.create(n);m.end=!0;var f=o._compile(e,m);return function(t,n,o){var i=e.size(o).valueOf(),s=Object.create(n);return s.end=i[r],f(t,s,o)}}var y=o._compile(e,n);return function(t,e,n){return y(t,e,n)}});return function(t,n,i){var s=o(r,function(e){return e(t,n,i)});return e.index.apply(e,s)}},u.prototype.forEach=function(t){for(var e=0;e<this.dimensions.length;e++)t(this.dimensions[e],"dimensions["+e+"]",this)},u.prototype.map=function(t){for(var e=[],n=0;n<this.dimensions.length;n++)e[n]=this._ifNode(t(this.dimensions[n],"dimensions["+n+"]",this));return new u(e)},u.prototype.clone=function(){return new u(this.dimensions.slice(0))},u.prototype.isObjectProperty=function(){return 1===this.dimensions.length&&t.isConstantNode(this.dimensions[0])&&"string"==typeof this.dimensions[0].value},u.prototype.getObjectProperty=function(){return this.isObjectProperty()?this.dimensions[0].value:null},u.prototype._toString=function(t){return this.dotNotation?"."+this.getObjectProperty():"["+this.dimensions.join(", ")+"]"},u.prototype.toJSON=function(){return{mathjs:"IndexNode",dimensions:this.dimensions,dotNotation:this.dotNotation}},u.fromJSON=function(t){return new u(t.dimensions,t.dotNotation)},u.prototype.toHTML=function(t){for(var e=[],n=0;n<this.dimensions.length;n++)e[n]=this.dimensions[n].toHTML();return this.dotNotation?'<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">'+r(this.getObjectProperty())+"</span>":'<span class="math-parenthesis math-square-parenthesis">[</span>'+e.join('<span class="math-separator">,</span>')+'<span class="math-parenthesis math-square-parenthesis">]</span>'},u.prototype._toTex=function(t){var e=this.dimensions.map(function(e){return e.toTex(t)});return this.dotNotation?"."+this.getObjectProperty():"_{"+e.join(",")+"}"},u}}}]);