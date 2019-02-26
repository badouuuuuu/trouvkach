(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{206:function(t,e,r){"use strict";var i=r(33),n=r(12),s=i.array,a=i.object,o=i.string,h=i.number,p=Array.isArray,_=h.isNumber,u=h.isInteger,l=o.isString,f=s.validateIndex;e.name="SparseMatrix",e.path="type",e.factory=function(t,e,v,d){var c=v(r(92)),w=v(r(11)),y=v(r(70));function g(e,r){if(!(this instanceof g))throw new SyntaxError("Constructor must be called with the new operator");if(r&&!l(r))throw new Error("Invalid datatype: "+r);if(t.isMatrix(e))!function(t,e,r){"SparseMatrix"===e.type?(t._values=e._values?a.clone(e._values):void 0,t._index=a.clone(e._index),t._ptr=a.clone(e._ptr),t._size=a.clone(e._size),t._datatype=r||e._datatype):x(t,e.valueOf(),r||e._datatype)}(this,e,r);else if(e&&p(e.index)&&p(e.ptr)&&p(e.size))this._values=e.values,this._index=e.index,this._ptr=e.ptr,this._size=e.size,this._datatype=r||e.datatype;else if(p(e))x(this,e,r);else{if(e)throw new TypeError("Unsupported type of data ("+i.types.type(e)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=r}}function x(t,e,r){t._values=[],t._index=[],t._ptr=[],t._datatype=r;var i=e.length,n=0,s=w,a=0;if(l(r)&&(s=d.find(w,[r,r])||w,a=d.convert(0,r)),i>0){var o=0;do{t._ptr.push(t._index.length);for(var h=0;h<i;h++){var _=e[h];if(p(_)){if(0===o&&n<_.length&&(n=_.length),o<_.length){var u=_[o];s(u,a)||(t._values.push(u),t._index.push(h))}}else 0===o&&n<1&&(n=1),s(_,a)||(t._values.push(_),t._index.push(h))}o++}while(o<n)}t._ptr.push(t._index.length),t._size=[i,n]}function z(t,e,r,i){if(r-e==0)return r;for(var n=e;n<r;n++)if(i[n]===t)return n;return e}function m(t,e,r,i,n,s,a){n.splice(t,0,i),s.splice(t,0,e);for(var o=r+1;o<a.length;o++)a[o]++}function E(t,e,r,i){var n=i||0,s=w,a=0;l(t._datatype)&&(s=d.find(w,[t._datatype,t._datatype])||w,a=d.convert(0,t._datatype),n=d.convert(n,t._datatype));var o,h,p,_=!s(n,a),u=t._size[0],f=t._size[1];if(r>f){for(h=f;h<r;h++)if(t._ptr[h]=t._values.length,_)for(o=0;o<u;o++)t._values.push(n),t._index.push(o);t._ptr[r]=t._values.length}else r<f&&(t._ptr.splice(r+1,f-r),t._values.splice(t._ptr[r],t._values.length),t._index.splice(t._ptr[r],t._index.length));if(f=r,e>u){if(_){var v=0;for(h=0;h<f;h++){t._ptr[h]=t._ptr[h]+v,p=t._ptr[h+1]+v;var c=0;for(o=u;o<e;o++,c++)t._values.splice(p+c,0,n),t._index.splice(p+c,0,o),v++}t._ptr[f]=t._values.length}}else if(e<u){var y=0;for(h=0;h<f;h++){t._ptr[h]=t._ptr[h]-y;var g=t._ptr[h],x=t._ptr[h+1]-y;for(p=g;p<x;p++)(o=t._index[p])>e-1&&(t._values.splice(p,1),t._index.splice(p,1),y++)}t._ptr[h]=t._values.length}return t._size[0]=e,t._size[1]=r,t}function b(t,e,r,i,n){var s,o,h=i[0],p=i[1],_=[];for(s=0;s<h;s++)for(_[s]=[],o=0;o<p;o++)_[s][o]=0;for(o=0;o<p;o++)for(var u=r[o],l=r[o+1],f=u;f<l;f++)_[s=e[f]][o]=t?n?a.clone(t[f]):t[f]:1;return _}return g.prototype=new c,g.prototype.type="SparseMatrix",g.prototype.isSparseMatrix=!0,g.prototype.getDataType=function(){return y(this._values)},g.prototype.storage=function(){return"sparse"},g.prototype.datatype=function(){return this._datatype},g.prototype.create=function(t,e){return new g(t,e)},g.prototype.density=function(){var t=this._size[0],e=this._size[1];return 0!==t&&0!==e?this._index.length/(t*e):0},g.prototype.subset=function(e,r,i){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return function(e,r){if(!t.isIndex(r))throw new TypeError("Invalid index");if(r.isScalar())return e.get(r.min());var i,s,a,o,h=r.size();if(h.length!==e._size.length)throw new n(h.length,e._size.length);var p=r.min(),_=r.max();for(i=0,s=e._size.length;i<s;i++)f(p[i],e._size[i]),f(_[i],e._size[i]);var u=e._values,l=e._index,v=e._ptr,d=r.dimension(0),c=r.dimension(1),w=[],y=[];d.forEach(function(t,e){y[t]=e[0],w[t]=!0});var x=u?[]:void 0,z=[],m=[];return c.forEach(function(t){for(m.push(z.length),a=v[t],o=v[t+1];a<o;a++)i=l[a],!0===w[i]&&(z.push(y[i]),x&&x.push(u[a]))}),m.push(z.length),new g({values:x,index:z,ptr:m,size:h,datatype:e._datatype})}(this,e);case 2:case 3:return function(e,r,i,o){if(!r||!0!==r.isIndex)throw new TypeError("Invalid index");var h,p=r.size(),_=r.isScalar();if(t.isMatrix(i)?(h=i.size(),i=i.toArray()):h=s.size(i),_){if(0!==h.length)throw new TypeError("Scalar expected");e.set(r.min(),i,o)}else{if(1!==p.length&&2!==p.length)throw new n(p.length,e._size.length,"<");if(h.length<p.length){for(var u=0,l=0;1===p[u]&&1===h[u];)u++;for(;1===p[u];)l++,u++;i=s.unsqueeze(i,p.length,l,h)}if(!a.deepEqual(p,h))throw new n(p,h,">");for(var f=r.min()[0],v=r.min()[1],d=h[0],c=h[1],w=0;w<d;w++)for(var y=0;y<c;y++){var g=i[w][y];e.set([w+f,y+v],g,o)}}return e}(this,e,r,i);default:throw new SyntaxError("Wrong number of arguments")}},g.prototype.get=function(t){if(!p(t))throw new TypeError("Array expected");if(t.length!==this._size.length)throw new n(t.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var e=t[0],r=t[1];f(e,this._size[0]),f(r,this._size[1]);var i=z(e,this._ptr[r],this._ptr[r+1],this._index);return i<this._ptr[r+1]&&this._index[i]===e?this._values[i]:0},g.prototype.set=function(t,e,r){if(!p(t))throw new TypeError("Array expected");if(t.length!==this._size.length)throw new n(t.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var i=t[0],s=t[1],a=this._size[0],o=this._size[1],h=w,_=0;l(this._datatype)&&(h=d.find(w,[this._datatype,this._datatype])||w,_=d.convert(0,this._datatype)),(i>a-1||s>o-1)&&(E(this,Math.max(i+1,a),Math.max(s+1,o),r),a=this._size[0],o=this._size[1]),f(i,a),f(s,o);var u=z(i,this._ptr[s],this._ptr[s+1],this._index);return u<this._ptr[s+1]&&this._index[u]===i?h(e,_)?function(t,e,r,i,n){r.splice(t,1),i.splice(t,1);for(var s=e+1;s<n.length;s++)n[s]--}(u,s,this._values,this._index,this._ptr):this._values[u]=e:m(u,i,s,e,this._values,this._index,this._ptr),this},g.prototype.resize=function(t,e,r){if(!p(t))throw new TypeError("Array expected");if(2!==t.length)throw new Error("Only two dimensions matrix are supported");return t.forEach(function(e){if(!h.isNumber(e)||!h.isInteger(e)||e<0)throw new TypeError("Invalid size, must contain positive integers (size: "+o.format(t)+")")}),E(r?this.clone():this,t[0],t[1],e)},g.prototype.reshape=function(t,e){if(!p(t))throw new TypeError("Array expected");if(2!==t.length)throw new Error("Sparse matrices can only be reshaped in two dimensions");if(t.forEach(function(e){if(!h.isNumber(e)||!h.isInteger(e)||e<0)throw new TypeError("Invalid size, must contain positive integers (size: "+o.format(t)+")")}),this._size[0]*this._size[1]!=t[0]*t[1])throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var r=e?this.clone():this;if(this._size[0]===t[0]&&this._size[1]===t[1])return r;for(var i=[],n=0;n<r._ptr.length;n++)for(var s=0;s<r._ptr[n+1]-r._ptr[n];s++)i.push(n);for(var a=r._values.slice(),_=r._index.slice(),u=0;u<r._index.length;u++){var l=_[u],f=i[u],v=l*r._size[1]+f;i[u]=v%t[1],_[u]=Math.floor(v/t[1])}r._values.length=0,r._index.length=0,r._ptr.length=t[1]+1,r._size=t.slice();for(var d=0;d<r._ptr.length;d++)r._ptr[d]=0;for(var c=0;c<a.length;c++){var w=_[c],y=i[c],g=a[c];m(z(w,r._ptr[y],r._ptr[y+1],r._index),w,y,g,r._values,r._index,r._ptr)}return r},g.prototype.clone=function(){return new g({values:this._values?a.clone(this._values):void 0,index:a.clone(this._index),ptr:a.clone(this._ptr),size:a.clone(this._size),datatype:this._datatype})},g.prototype.size=function(){return this._size.slice(0)},g.prototype.map=function(t,e){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var r=this;return function(t,e,r,i,n,s,a){var o=[],h=[],p=[],_=w,u=0;l(t._datatype)&&(_=d.find(w,[t._datatype,t._datatype])||w,u=d.convert(0,t._datatype));for(var f=function(t,e,r){t=s(t,e,r),_(t,u)||(o.push(t),h.push(e))},v=i;v<=n;v++){p.push(o.length);var c=t._ptr[v],y=t._ptr[v+1];if(a)for(var x=c;x<y;x++){var z=t._index[x];z>=e&&z<=r&&f(t._values[x],z-e,v-i)}else{for(var m={},E=c;E<y;E++){var b=t._index[E];m[b]=t._values[E]}for(var S=e;S<=r;S++){var T=S in m?m[S]:0;f(T,S-e,v-i)}}}return p.push(o.length),new g({values:o,index:h,ptr:p,size:[r-e+1,n-i+1]})}(this,0,this._size[0]-1,0,this._size[1]-1,function(e,i,n){return t(e,[i,n],r)},e)},g.prototype.forEach=function(t,e){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var r=this._size[0],i=this._size[1],n=0;n<i;n++){var s=this._ptr[n],a=this._ptr[n+1];if(e)for(var o=s;o<a;o++){var h=this._index[o];t(this._values[o],[h,n],this)}else{for(var p={},_=s;_<a;_++)p[this._index[_]]=this._values[_];for(var u=0;u<r;u++)t(u in p?p[u]:0,[u,n],this)}}},g.prototype.toArray=function(){return b(this._values,this._index,this._ptr,this._size,!0)},g.prototype.valueOf=function(){return b(this._values,this._index,this._ptr,this._size,!1)},g.prototype.format=function(t){for(var e=this._size[0],r=this._size[1],i=this.density(),n="Sparse Matrix ["+o.format(e,t)+" x "+o.format(r,t)+"] density: "+o.format(i,t)+"\n",s=0;s<r;s++)for(var a=this._ptr[s],h=this._ptr[s+1],p=a;p<h;p++){var _=this._index[p];n+="\n    ("+o.format(_,t)+", "+o.format(s,t)+") ==> "+(this._values?o.format(this._values[p],t):"X")}return n},g.prototype.toString=function(){return o.format(this.toArray())},g.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},g.prototype.diagonal=function(e){if(e){if(t.isBigNumber(e)&&(e=e.toNumber()),!_(e)||!u(e))throw new TypeError("The parameter k must be an integer number")}else e=0;var r=e>0?e:0,i=e<0?-e:0,n=this._size[0],s=this._size[1],a=Math.min(n-i,s-r),o=[],h=[],p=[];p[0]=0;for(var l=r;l<s&&o.length<a;l++)for(var f=this._ptr[l],v=this._ptr[l+1],d=f;d<v;d++){var c=this._index[d];if(c===l-r+i){o.push(this._values[d]),h[o.length-1]=c-i;break}}return p.push(o.length),new g({values:o,index:h,ptr:p,size:[a,1]})},g.fromJSON=function(t){return new g(t)},g.diagonal=function(e,r,i,n,s){if(!p(e))throw new TypeError("Array expected, size parameter");if(2!==e.length)throw new Error("Only two dimensions matrix are supported");if(e=e.map(function(e){if(t.isBigNumber(e)&&(e=e.toNumber()),!_(e)||!u(e)||e<1)throw new Error("Size values must be positive integers");return e}),i){if(t.isBigNumber(i)&&(i=i.toNumber()),!_(i)||!u(i))throw new TypeError("The parameter k must be an integer number")}else i=0;var a=w,o=0;l(s)&&(a=d.find(w,[s,s])||w,o=d.convert(0,s));var h,f=i>0?i:0,v=i<0?-i:0,c=e[0],y=e[1],x=Math.min(c-v,y-f);if(p(r)){if(r.length!==x)throw new Error("Invalid value array length");h=function(t){return r[t]}}else if(t.isMatrix(r)){var z=r.size();if(1!==z.length||z[0]!==x)throw new Error("Invalid matrix length");h=function(t){return r.get([t])}}else h=function(){return r};for(var m=[],E=[],b=[],S=0;S<y;S++){b.push(m.length);var T=S-f;if(T>=0&&T<x){var M=h(T);a(M,o)||(E.push(T+v),m.push(M))}}return b.push(m.length),new g({values:m,index:E,ptr:b,size:[c,y]})},g.prototype.swapRows=function(t,e){if(!(_(t)&&u(t)&&_(e)&&u(e)))throw new Error("Row index must be positive integers");if(2!==this._size.length)throw new Error("Only two dimensional matrix is supported");return f(t,this._size[0]),f(e,this._size[0]),g._swapRows(t,e,this._size[1],this._values,this._index,this._ptr),this},g._forEachRow=function(t,e,r,i,n){for(var s=i[t],a=i[t+1],o=s;o<a;o++)n(r[o],e[o])},g._swapRows=function(t,e,r,i,n,s){for(var a=0;a<r;a++){var o=s[a],h=s[a+1],p=z(t,o,h,n),_=z(e,o,h,n);if(p<h&&_<h&&n[p]===t&&n[_]===e){if(i){var u=i[p];i[p]=i[_],i[_]=u}}else if(p<h&&n[p]===t&&(_>=h||n[_]!==e)){var l=i?i[p]:void 0;n.splice(_,0,e),i&&i.splice(_,0,l),n.splice(_<=p?p+1:p,1),i&&i.splice(_<=p?p+1:p,1)}else if(_<h&&n[_]===e&&(p>=h||n[p]!==t)){var f=i?i[_]:void 0;n.splice(p,0,t),i&&i.splice(p,0,f),n.splice(p<=_?_+1:_,1),i&&i.splice(p<=_?_+1:_,1)}}},t.Matrix._storage.sparse=g,g},e.lazy=!1}}]);