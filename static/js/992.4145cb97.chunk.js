"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[992],{8992:function(e,r,t){t.r(r);var n=t(9439),a=t(427),u=t(2791),s=t(7689),c=t(184);r.default=function(){var e=(0,u.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],p=(0,s.UO)().movieId;return(0,u.useEffect)((function(){(0,a.DF)(p).then((function(e){return i(e.results)}))}),[p,i]),(0,c.jsx)(c.Fragment,{children:0!==t.length?t.map((function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h2",{children:["Author: ",e.author]}),(0,c.jsx)("p",{children:e.content})]})})):(0,c.jsx)("p",{children:"There are no reviews"})})}},427:function(e,r,t){t.d(r,{DF:function(){return h},J0:function(){return d},KS:function(){return i},VQ:function(){return o},WK:function(){return v}});var n=t(5861),a=t(4687),u=t.n(a),s=t(1243),c="f2d00b13296250bbaa36e82e90ab2e9e";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("trending/all/day",{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("search/movie",{params:{api_key:c,query:r,language:"en-US",page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=992.4145cb97.chunk.js.map