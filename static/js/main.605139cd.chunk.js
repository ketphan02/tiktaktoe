(this["webpackJsonptik-tak-too"]=this["webpackJsonptik-tak-too"]||[]).push([[0],{32:function(r,n,t){"use strict";t.r(n);var e=t(1),o=t(15),a=t.n(o),c=t(12),i=t(43),u=t(5),l=t(45),s=t(3),d=Object(i.a)((function(r){return{square:{backgroundColor:r.palette.background.default,borderRadius:r.shape.borderRadius,borderColor:"black",borderStyle:"solid",borderWidth:"0.2px",margin:function(r){var n=r.length;return window.innerHeight/(20*n)},width:function(r){var n=r.length;return window.innerHeight/(1.3*n)},height:function(r){var n=r.length;return window.innerHeight/(1.3*n)}},blue:{backgroundColor:r.palette.primary.main},red:{backgroundColor:r.palette.secondary.main},no:{"&:hover":{backgroundColor:r.palette.warning.main}}}})),f=function(r){var n=r.length,t=r.x,e=r.y,o=r.grids,a=r.setGrids,c=r.turn,i=d({length:n}),f=o[t][e],g=function(r){alert("Player ".concat(r," won!")),a(Array.from({length:n},(function(){return Array.from({length:n},(function(){return 0}))}))),c.current=!0};return Object(s.jsx)(l.a,{elevation:0,className:"".concat(i.square," ").concat(1===f?i.blue:2===f?i.red:i.no),onClick:function(){if(0===o[t][e]){if(c.current){var r=Object(u.a)(o);r[t][e]=1,a(r),c.current=!1}else{var i=Object(u.a)(o);i[t][e]=2,a(i),c.current=!0}!function(r){for(var a=1,c=t+1;c<n&&o[c][e]===r;c++)++a;for(var i=t-1;i>=0&&o[i][e]===r;i--)++a;for(var u=1,l=e+1;l<n&&o[t][l]===r;l++)++u;for(var s=e-1;s>=0&&o[t][s]===r;s--)++u;for(var d=1,f=1;t+f<n&&e+f<n&&o[t+f][e+f]===r;f++)++d;for(var b=1;t-b>=0&&e-b>=0&&o[t-b][e-b]===r;b++)++d;for(var h=1,p=1;t+p<n&&e-p>=0&&o[t+p][e-p]===r;p++)++h;for(var j=1;t-j>=0&&e+j<n&&o[t-j][e+j]===r;j++)++h;Math.max(a,u,d,h)>=5&&g(r)}(c.current?2:1)}}})},g=Object(i.a)((function(r){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:r.palette.background.paper,padding:r.spacing(5)},row:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}})),b=function(r){var n=r.length,t=g(),o=e.useRef(!0),a=e.useState(Array.from({length:n},(function(){return Array.from({length:n},(function(){return 0}))}))),i=Object(c.a)(a,2),u=i[0],l=i[1];return Object(s.jsx)("div",{className:t.root,children:u.map((function(r,e){return Object(s.jsx)("div",{className:t.row,children:r.map((function(r,t){return Object(s.jsx)(f,{length:n,x:e,y:t,grids:u,setGrids:l,turn:o})}))})}))})},h=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(b,{length:20})})},p=function(r){r&&r instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,e=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(r),e(r),o(r),a(r),c(r)}))};a.a.render(Object(s.jsx)(e.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),p()}},[[32,1,2]]]);
//# sourceMappingURL=main.605139cd.chunk.js.map