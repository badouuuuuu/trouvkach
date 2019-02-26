(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{10:function(t,r,a){"use strict";var e=a(5).extend,n=a(2);r.name="multiply",r.factory=function(t,r,i,o){var s=a(4),f=i(a(1)),u=i(a(18)),l=i(a(22)),d=i(a(11)),p=i(a(21)),y=i(a(7)),v=t.DenseMatrix,c=t.SparseMatrix,h=o("multiply",e({"Array, Array":function(r,a){_(n.size(r),n.size(a));var e=h(f(r),f(a));return t.isMatrix(e)?e.valueOf():e},"Matrix, Matrix":function(t,r){var a=t.size(),e=r.size();return _(a,e),1===a.length?1===e.length?function(t,r,a){if(0===a)throw new Error("Cannot multiply two empty vectors");var e,n=t._data,i=t._datatype,s=r._data,f=r._datatype,d=u,p=l;i&&f&&i===f&&"string"==typeof i&&(e=i,d=o.find(u,[e,e]),p=o.find(l,[e,e]));for(var y=p(n[0],s[0]),v=1;v<a;v++)y=d(y,p(n[v],s[v]));return y}(t,r,a[0]):function(t,r){if("dense"!==r.storage())throw new Error("Support for SparseMatrix not implemented");return function(t,r){var a,e=t._data,n=t._size,i=t._datatype,s=r._data,f=r._size,d=r._datatype,p=n[0],y=f[1],c=u,h=l;i&&d&&i===d&&"string"==typeof i&&(a=i,c=o.find(u,[a,a]),h=o.find(l,[a,a]));for(var _=[],m=0;m<y;m++){for(var x=h(e[0],s[0][m]),w=1;w<p;w++)x=c(x,h(e[w],s[w][m]));_[m]=x}return new v({data:_,size:[y],datatype:a})}(t,r)}(t,r):1===e.length?m(t,r):x(t,r)},"Matrix, Array":function(t,r){return h(t,f(r))},"Array, Matrix":function(t,r){return h(f(t,r.storage()),r)},"SparseMatrix, any":function(t,r){return p(t,r,l,!1)},"DenseMatrix, any":function(t,r){return y(t,r,l,!1)},"any, SparseMatrix":function(t,r){return p(r,t,l,!0)},"any, DenseMatrix":function(t,r){return y(r,t,l,!0)},"Array, any":function(t,r){return y(f(t),r,l,!1).valueOf()},"any, Array":function(t,r){return y(f(r),t,l,!0).valueOf()},"any, any":l,"any, any, ...any":function(t,r,a){for(var e=h(t,r),n=0;n<a.length;n++)e=h(e,a[n]);return e}},l.signatures));function _(t,r){switch(t.length){case 1:switch(r.length){case 1:if(t[0]!==r[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(t[0]!==r[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+t[0]+") must match Matrix rows ("+r[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+r.length+" dimensions)")}break;case 2:switch(r.length){case 1:if(t[1]!==r[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+t[1]+") must match Vector length ("+r[0]+")");break;case 2:if(t[1]!==r[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+t[1]+") must match Matrix B rows ("+r[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+r.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+t.length+" dimensions)")}}var m=o("_multiplyMatrixVector",{"DenseMatrix, any":function(t,r){var a,e=t._data,n=t._size,i=t._datatype,s=r._data,f=r._datatype,d=n[0],p=n[1],y=u,c=l;i&&f&&i===f&&"string"==typeof i&&(a=i,y=o.find(u,[a,a]),c=o.find(l,[a,a]));for(var h=[],_=0;_<d;_++){for(var m=e[_],x=c(m[0],s[0]),w=1;w<p;w++)x=y(x,c(m[w],s[w]));h[_]=x}return new v({data:h,size:[d],datatype:a})},"SparseMatrix, any":function(t,r){var a=t._values,e=t._index,n=t._ptr,i=t._datatype;if(!a)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var s,f=r._data,p=r._datatype,y=t._size[0],v=r._size[0],h=[],_=[],m=[],x=u,w=l,g=d,M=0;i&&p&&i===p&&"string"==typeof i&&(s=i,x=o.find(u,[s,s]),w=o.find(l,[s,s]),g=o.find(d,[s,s]),M=o.convert(0,s));var z=[],D=[];m[0]=0;for(var E=0;E<v;E++){var S=f[E];if(!g(S,M))for(var b=n[E],k=n[E+1],A=b;A<k;A++){var C=e[A];D[C]?z[C]=x(z[C],w(S,a[A])):(D[C]=!0,_.push(C),z[C]=w(S,a[A]))}}for(var R=_.length,V=0;V<R;V++){var B=_[V];h[V]=z[B]}return m[1]=_.length,new c({values:h,index:_,ptr:m,size:[y,1],datatype:s})}}),x=o("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":function(t,r){var a,e=t._data,n=t._size,i=t._datatype,s=r._data,f=r._size,d=r._datatype,p=n[0],y=n[1],c=f[1],h=u,_=l;i&&d&&i===d&&"string"==typeof i&&(a=i,h=o.find(u,[a,a]),_=o.find(l,[a,a]));for(var m=[],x=0;x<p;x++){var w=e[x];m[x]=[];for(var g=0;g<c;g++){for(var M=_(w[0],s[0][g]),z=1;z<y;z++)M=h(M,_(w[z],s[z][g]));m[x][g]=M}}return new v({data:m,size:[p,c],datatype:a})},"DenseMatrix, SparseMatrix":function(t,r){var a=t._data,e=t._size,n=t._datatype,i=r._values,s=r._index,f=r._ptr,p=r._size,y=r._datatype;if(!i)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var v,h=e[0],_=p[1],m=u,x=l,w=d,g=0;n&&y&&n===y&&"string"==typeof n&&(v=n,m=o.find(u,[v,v]),x=o.find(l,[v,v]),w=o.find(d,[v,v]),g=o.convert(0,v));for(var M=[],z=[],D=[],E=new c({values:M,index:z,ptr:D,size:[h,_],datatype:v}),S=0;S<_;S++){D[S]=z.length;var b=f[S],k=f[S+1];if(k>b)for(var A=0,C=0;C<h;C++){for(var R=C+1,V=void 0,B=b;B<k;B++){var O=s[B];A!==R?(V=x(a[C][O],i[B]),A=R):V=m(V,x(a[C][O],i[B]))}A!==R||w(V,g)||(z.push(C),M.push(V))}}return D[_]=z.length,E},"SparseMatrix, DenseMatrix":function(t,r){var a=t._values,e=t._index,n=t._ptr,i=t._datatype;if(!a)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var s,f=r._data,p=r._datatype,y=t._size[0],v=r._size[0],h=r._size[1],_=u,m=l,x=d,w=0;i&&p&&i===p&&"string"==typeof i&&(s=i,_=o.find(u,[s,s]),m=o.find(l,[s,s]),x=o.find(d,[s,s]),w=o.convert(0,s));for(var g=[],M=[],z=[],D=new c({values:g,index:M,ptr:z,size:[y,h],datatype:s}),E=[],S=[],b=0;b<h;b++){z[b]=M.length;for(var k=b+1,A=0;A<v;A++){var C=f[A][b];if(!x(C,w))for(var R=n[A],V=n[A+1],B=R;B<V;B++){var O=e[B];S[O]!==k?(S[O]=k,M.push(O),E[O]=m(C,a[B])):E[O]=_(E[O],m(C,a[B]))}}for(var P=z[b],J=M.length,$=P;$<J;$++){var T=M[$];g[$]=E[T]}}return z[h]=M.length,D},"SparseMatrix, SparseMatrix":function(t,r){var a,e=t._values,n=t._index,i=t._ptr,s=t._datatype,f=r._values,d=r._index,p=r._ptr,y=r._datatype,v=t._size[0],h=r._size[1],_=e&&f,m=u,x=l;s&&y&&s===y&&"string"==typeof s&&(a=s,m=o.find(u,[a,a]),x=o.find(l,[a,a]));for(var w,g,M,z,D,E,S,b,k=_?[]:void 0,A=[],C=[],R=new c({values:k,index:A,ptr:C,size:[v,h],datatype:a}),V=_?[]:void 0,B=[],O=0;O<h;O++){C[O]=A.length;var P=O+1;for(D=p[O],E=p[O+1],z=D;z<E;z++)if(b=d[z],_)for(g=i[b],M=i[b+1],w=g;w<M;w++)S=n[w],B[S]!==P?(B[S]=P,A.push(S),V[S]=x(f[z],e[w])):V[S]=m(V[S],x(f[z],e[w]));else for(g=i[b],M=i[b+1],w=g;w<M;w++)S=n[w],B[S]!==P&&(B[S]=P,A.push(S));if(_)for(var J=C[O],$=A.length,T=J;T<$;T++){var j=A[T];k[T]=V[j]}}return C[h]=A.length,R}});return h.toTex={2:"\\left(${args[0]}".concat(s.operators.multiply,"${args[1]}\\right)")},h}}}]);