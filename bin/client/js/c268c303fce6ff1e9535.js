(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{333:function(r,n,t){"use strict";r.exports=[t(334)]},334:function(r,n,t){"use strict";var e=t(0),a=t(3).sign;var u=.46875,o=.5641895835477563,i=[[3.1611237438705655,113.86415415105016,377.485237685302,3209.3775891384694,.18577770618460315],[.5641884969886701,8.883149794388377,66.11919063714163,298.6351381974001,881.952221241769,1712.0476126340707,2051.0783778260716,1230.3393547979972,2.1531153547440383e-8],[.30532663496123236,.36034489994980445,.12578172611122926,.016083785148742275,.0006587491615298378,.016315387137302097]],f=[[23.601290952344122,244.02463793444417,1282.6165260773723,2844.236833439171],[15.744926110709835,117.6939508913125,537.1811018620099,1621.3895745666903,3290.7992357334597,4362.619090143247,3439.3676741437216,1230.3393548037495],[2.568520192289822,1.8729528499234604,.5279051029514285,.06051834131244132,.0023352049762686918]],c=Math.pow(2,53);n.name="erf",n.factory=function(r,n,t,p){var s=p("erf",{number:function(r){var n=Math.abs(r);return n>=c?a(r):n<=u?a(r)*function(r){var n,t=r*r,e=i[0][4]*t,a=t;for(n=0;n<3;n+=1)e=(e+i[0][n])*t,a=(a+f[0][n])*t;return r*(e+i[0][3])/(a+f[0][3])}(n):n<=4?a(r)*(1-function(r){var n,t=i[1][8]*r,e=r;for(n=0;n<7;n+=1)t=(t+i[1][n])*r,e=(e+f[1][n])*r;var a=(t+i[1][7])/(e+f[1][7]),u=parseInt(16*r)/16,o=(r-u)*(r+u);return Math.exp(-u*u)*Math.exp(-o)*a}(n)):a(r)*(1-function(r){var n,t=1/(r*r),e=i[2][5]*t,a=t;for(n=0;n<4;n+=1)e=(e+i[2][n])*t,a=(a+f[2][n])*t;var u=t*(e+i[2][4])/(a+f[2][4]);u=(o-u)/r,t=parseInt(16*r)/16;var c=(r-t)*(r+t);return Math.exp(-t*t)*Math.exp(-c)*u}(n))},BigNumber:function(n){return new r.BigNumber(s(n.toNumber()))},"Array | Matrix":function(r){return e(r,s)}});return s.toTex={1:"erf\\left(${args[0]}\\right)"},s}}}]);