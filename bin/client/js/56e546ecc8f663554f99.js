(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{227:function(r,f,a){"use strict";f.name="csAmd",f.path="algebra.sparse",f.factory=function(r,f,n){var o=n(a(95)),t=n(a(228)),i=n(a(137)),e=n(a(15)),v=n(a(10)),u=n(a(78));function c(r,f,a,n,o){if(r<2||r+f<0){for(var t=0;t<o;t++)0!==a[n+t]&&(a[n+t]=1);r=2}return r}function s(r,f){return r!==f}return function(r,f){if(!f||r<=0||r>3)return null;var a=f._size,n=a[0],h=a[1],p=0,l=Math.max(16,10*Math.sqrt(h)),m=function(r,f,a,n,o){var t=u(f);if(1===r&&n===a)return e(f,t);if(2===r){for(var i=t._index,c=t._ptr,s=0,h=0;h<a;h++){var p=c[h];if(c[h]=s,!(c[h+1]-p>o))for(var l=c[h+1];p<l;p++)i[s++]=i[p]}return c[a]=s,f=u(t),v(t,f)}return v(t,f)}(r,f,n,h,l=Math.min(h-2,l));t(m,s,null);for(var M,w,d,_,x,b,g,k,J,q,y,z,A,j,B,C,D=m._index,E=m._ptr,F=E[h],G=[],H=[],I=h+1,K=2*(h+1),L=3*(h+1),N=4*(h+1),O=5*(h+1),P=6*(h+1),Q=7*(h+1),R=G,S=function(r,f,a,n,o,t,i,e,v,u,s,h){for(var p=0;p<r;p++)a[n+p]=f[p+1]-f[p];a[n+r]=0;for(var l=0;l<=r;l++)a[o+l]=-1,t[l]=-1,a[i+l]=-1,a[e+l]=-1,a[v+l]=1,a[u+l]=1,a[s+l]=0,a[h+l]=a[n+l];var m=c(0,0,a,u,r);return a[s+r]=-2,f[r]=-1,a[u+r]=0,m}(h,E,H,0,L,R,K,Q,I,P,N,O),T=function(r,f,a,n,t,i,e,v,u,c,s){for(var h=0,p=0;p<r;p++){var l=a[n+p];if(0===l)a[t+p]=-2,h++,f[p]=-1,a[i+p]=0;else if(l>e)a[v+p]=0,a[t+p]=-1,h++,f[p]=o(r),a[v+r]++;else{var m=a[u+l];-1!==m&&(c[m]=p),a[s+p]=a[u+l],a[u+l]=p}}return h}(h,E,H,O,N,P,l,I,L,R,K),U=0;T<h;){for(d=-1;U<h&&-1===(d=H[L+U]);U++);-1!==H[K+d]&&(R[H[K+d]]=-1),H[L+U]=H[K+d];var V=H[N+d],W=H[I+d];T+=W;var X=0;H[I+d]=-W;var Y=E[d],Z=0===V?Y:F,$=Z;for(_=1;_<=V+1;_++){for(_>V?(b=d,g=Y,k=H[0+d]-V):(g=E[b=D[Y++]],k=H[0+b]),x=1;x<=k;x++)(J=H[I+(M=D[g++])])<=0||(X+=J,H[I+M]=-J,D[$++]=M,-1!==H[K+M]&&(R[H[K+M]]=R[M]),-1!==R[M]?H[K+R[M]]=H[K+M]:H[L+H[O+M]]=H[K+M]);b!==d&&(E[b]=o(d),H[P+b]=0)}for(0!==V&&(F=$),H[O+d]=X,E[d]=Z,H[0+d]=$-Z,H[N+d]=-2,S=c(S,p,H,P,h),q=Z;q<$;q++)if(!((y=H[N+(M=D[q])])<=0)){var rr=S-(J=-H[I+M]);for(Y=E[M],z=E[M]+y-1;Y<=z;Y++)H[P+(b=D[Y])]>=S?H[P+b]-=J:0!==H[P+b]&&(H[P+b]=H[O+b]+rr)}for(q=Z;q<$;q++){for(A=(z=E[M=D[q]])+H[N+M]-1,j=z,B=0,C=0,Y=z;Y<=A;Y++)if(0!==H[P+(b=D[Y])]){var fr=H[P+b]-S;fr>0?(C+=fr,D[j++]=b,B+=b):(E[b]=o(d),H[P+b]=0)}H[N+M]=j-z+1;var ar=j,nr=z+H[0+M];for(Y=A+1;Y<nr;Y++){var or=H[I+(w=D[Y])];or<=0||(C+=or,D[j++]=w,B+=w)}0===C?(E[M]=o(d),X-=J=-H[I+M],W+=J,T+=J,H[I+M]=0,H[N+M]=-1):(H[O+M]=Math.min(H[O+M],C),D[j]=D[ar],D[ar]=D[z],D[z]=d,H[0+M]=j-z+1,B=(B<0?-B:B)%h,H[K+M]=H[Q+B],H[Q+B]=M,R[M]=B)}for(H[O+d]=X,S=c(S+(p=Math.max(p,X)),p,H,P,h),q=Z;q<$;q++)if(!(H[I+(M=D[q])]>=0))for(M=H[Q+(B=R[M])],H[Q+B]=-1;-1!==M&&-1!==H[K+M];M=H[K+M],S++){for(k=H[0+M],y=H[N+M],Y=E[M]+1;Y<=E[M]+k-1;Y++)H[P+D[Y]]=S;var tr=M;for(w=H[K+M];-1!==w;){var ir=H[0+w]===k&&H[N+w]===y;for(Y=E[w]+1;ir&&Y<=E[w]+k-1;Y++)H[P+D[Y]]!==S&&(ir=0);ir?(E[w]=o(M),H[I+M]+=H[I+w],H[I+w]=0,H[N+w]=-1,w=H[K+w],H[K+tr]=w):(tr=w,w=H[K+w])}}for(Y=Z,q=Z;q<$;q++)(J=-H[I+(M=D[q])])<=0||(H[I+M]=J,C=H[O+M]+X-J,-1!==H[L+(C=Math.min(C,h-T-J))]&&(R[H[L+C]]=M),H[K+M]=H[L+C],R[M]=-1,H[L+C]=M,U=Math.min(U,C),H[O+M]=C,D[Y++]=M);H[I+d]=W,0==(H[0+d]=Y-Z)&&(E[d]=-1,H[P+d]=0),0!==V&&(F=Y)}for(M=0;M<h;M++)E[M]=o(E[M]);for(w=0;w<=h;w++)H[L+w]=-1;for(w=h;w>=0;w--)H[I+w]>0||(H[K+w]=H[L+E[w]],H[L+E[w]]=w);for(b=h;b>=0;b--)H[I+b]<=0||-1!==E[b]&&(H[K+b]=H[L+E[b]],H[L+E[b]]=b);for(d=0,M=0;M<=h;M++)-1===E[M]&&(d=i(M,d,H,L,K,G,P));return G.splice(G.length-1,1),G}}}}]);