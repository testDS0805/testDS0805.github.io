import{r as a,R as t}from"./index.da6908f5.js";import{c as y,r as g,B as f}from"./App.11263b70.js";const E=({visible:o,description:u,type:s="N",onConfirm:m,duration:d=3500})=>{const c=b(),r=a.exports.useRef(null),[l,n]=a.exports.useState(0),p=()=>{let e={};return s==="W"?(e.background="linear-gradient(to bottom,#fccf76 0,#fec85b 20%)",e.borderColor="#faad12",e.opacity=l):s==="E"&&(e.background="linear-gradient(to bottom,#f5b6b6 0,#f29c9c 20%)",e.borderColor="#f86868",e.opacity=l),e},i=()=>{n(0),clearTimeout(r.current),setTimeout(()=>{m()},500)};return a.exports.useEffect(()=>{o?(n(1),r.current=setTimeout(()=>{i()},d)):clearTimeout(r.current)},[o]),o?t.createElement(g.exports.Dialog,{style:p(),bodyCls:"f-column",closable:!1,modal:!1,className:c.default},t.createElement(f,{className:c.default,onClick:i,style:{width:300,margin:"auto"}},t.createElement(f,{style:{width:"100%",height:"100%",fontSize:"16px",fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement("pre",null,u)))):null},b=y({default:{width:450,height:100,zIndex:"99999 !important",transition:"opacity 0.5s ease"}});export{E as T};
