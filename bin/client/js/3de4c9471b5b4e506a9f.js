(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{62:function(t,n,e){"use strict";var r=e(9).format,o=e(4).escape;n.name="ConstantNode",n.path="expression.node",n.factory=function(t,n,a,s){var u=a(e(17)),i=a(e(26));function p(t){if(!(this instanceof p))throw new SyntaxError("Constructor must be called with the new operator");if(2===arguments.length)throw new SyntaxError("new ConstantNode(valueStr, valueType) is not supported anymore since math v4.0.0. Use new ConstantNode(value) instead, where value is a non-stringified value.");this.value=t}return p.prototype=new u,p.prototype.type="ConstantNode",p.prototype.isConstantNode=!0,p.prototype._compile=function(t,n){var e=this.value;return function(){return e}},p.prototype.forEach=function(t){},p.prototype.map=function(t){return this.clone()},p.prototype.clone=function(){return new p(this.value)},p.prototype._toString=function(t){return r(this.value,t)},p.prototype.toHTML=function(t){var n=this._toString(t);switch(i(this.value)){case"number":case"BigNumber":case"Fraction":return'<span class="math-number">'+n+"</span>";case"string":return'<span class="math-string">'+n+"</span>";case"boolean":return'<span class="math-boolean">'+n+"</span>";case"null":return'<span class="math-null-symbol">'+n+"</span>";case"undefined":return'<span class="math-undefined">'+n+"</span>";default:return'<span class="math-symbol">'+n+"</span>"}},p.prototype.toJSON=function(){return{mathjs:"ConstantNode",value:this.value}},p.fromJSON=function(t){return new p(t.value)},p.prototype._toTex=function(t){var n=this._toString(t);switch(i(this.value)){case"string":return"\\mathtt{"+o(n)+"}";case"number":case"BigNumber":var e=n.toLowerCase().indexOf("e");return-1!==e?n.substring(0,e)+"\\cdot10^{"+n.substring(e+1)+"}":n;case"Fraction":return this.value.toLatex();default:return n}},p}}}]);