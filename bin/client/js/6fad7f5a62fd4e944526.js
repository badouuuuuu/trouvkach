(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{626:function(e,t,r){var n,o,a;o=[t,r(6),r(59),r(67)],void 0===(a="function"==typeof(n=function(e,t,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Marker=void 0;var o=i(t),a=i(r);function i(e){return e&&e.__esModule?e:{default:e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=["click","dblclick","dragend","mousedown","mouseout","mouseover","mouseup","recenter"],c=e.Marker=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),p(t,[{key:"componentDidMount",value:function(){this.markerPromise=function(){var e={},t=new Promise(function(t,r){e.resolve=t,e.reject=r});return e.then=t.then.bind(t),e.catch=t.catch.bind(t),e.promise=t,e}(),this.renderMarker()}},{key:"componentDidUpdate",value:function(e){this.props.map===e.map&&this.props.position===e.position&&this.props.icon===e.icon||(this.marker&&this.marker.setMap(null),this.renderMarker())}},{key:"componentWillUnmount",value:function(){this.marker&&this.marker.setMap(null)}},{key:"renderMarker",value:function(){var e=this,t=this.props,r=t.map,n=t.google,o=t.position,a=t.mapCenter,i=t.icon,p=t.label,c=t.draggable,l=t.title,f=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["map","google","position","mapCenter","icon","label","draggable","title"]);if(!n)return null;var m=o||a;m instanceof n.maps.LatLng||(m=new n.maps.LatLng(m.lat,m.lng));var h=u({map:r,position:m,icon:i,label:p,title:l,draggable:c},f);this.marker=new n.maps.Marker(h),s.forEach(function(t){e.marker.addListener(t,e.handleEvent(t))}),this.markerPromise.resolve(this.marker)}},{key:"getMarker",value:function(){return this.markerPromise}},{key:"handleEvent",value:function(e){var t=this;return function(r){var o="on"+(0,n.camelize)(e);t.props[o]&&t.props[o](t.props,t.marker,r)}}},{key:"render",value:function(){return null}}]),t}(o.default.Component);c.propTypes={position:a.default.object,map:a.default.object},s.forEach(function(e){return c.propTypes[e]=a.default.func}),c.defaultProps={name:"Marker"},e.default=c})?n.apply(t,o):n)||(e.exports=a)}}]);