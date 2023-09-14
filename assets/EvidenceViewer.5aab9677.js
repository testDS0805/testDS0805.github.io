import{r as c,R as e}from"./index.da6908f5.js";import{c as T,u as j,r as s,B as t,y as F,z as L,J as z,P as U,K as M,A as W,C as $,d,q as Q}from"./App.11263b70.js";const X=({visible:C,docVO:r,onCancel:k,onUpdate:I})=>{const m=_(),y=c.exports.useRef(null),g=c.exports.useRef(null),p=c.exports.useRef(!1),{$CommonStore:S}=j(),[o,u]=c.exports.useState({}),[h,f]=c.exports.useState(0),[B,i]=c.exports.useState({visible:!1,desc:"",type:"N"}),[E,x]=c.exports.useState({visible:!1,desc:"",id:""}),N=async()=>{try{const a=(await d.get("/@api/common/evidenceviewer/selectByPhoto",{params:{DocNo:r.DocNo,DocSource:r.DocSource,Factory:r.Factory,Seq:r.Seq}})).data;u(a||{})}catch{i({visible:!0,desc:"\uC774\uBBF8\uC9C0 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},D=async l=>{if(!!o.Seq)if(l)try{const n=(await d.get("/@api/common/evidenceviewer/selectByPhotoTag",{params:{DocNo:r.DocNo,DocSource:r.DocSource,Factory:r.Factory,Seq:o.Seq,Tag:l}})).data;n.errmess!==""?i({visible:!0,desc:n.errmess}):n.iInfo===void 0?u({}):u(n.iInfo)}catch{i({visible:!0,desc:"\uC774\uBBF8\uC9C0 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}else try{const n=(await d.get("/@api/common/evidenceviewer/selectByPhoto",{params:{DocNo:r.DocNo,DocSource:r.DocSource,Factory:r.Factory,Seq:y.current}})).data;u(n||{})}catch{i({visible:!0,desc:"\uC774\uBBF8\uC9C0 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},b=l=>{if(l==="M"){const a=h-90;a<0?f(270):f(a)}else if(l==="P"){const a=h+90;a>360?f(90):f(a)}},w=l=>{!o.Seq||(g.current=l,x({visible:!0,desc:"\uD574\uB2F9 \uC774\uBBF8\uC9C0\uC758 \uC99D\uBE59\uBC88\uD638\uB97C \uBCC0\uACBD \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"UPDATE_SEQ"}))},A=async()=>{try{const l={DocNo:r.DocNo,DocSource:r.DocSource,Factory:r.Factory,Seq:o.Seq,Tag:g.current},n=(await d.post("/@api/common/evidenceviewer/updateByPhotoSeq",{data:l})).data;n.errmess===""?(i({visible:!0,desc:"\uBCC0\uACBD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),p.current=!0,y.current=n.rtnSeq,setTimeout(()=>{D()},1500)):i({visible:!0,desc:n.errmess,type:"W"})}catch{i({visible:!0,desc:"\uC774\uBBF8\uC9C0 \uB4F1\uB85D\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},P=async()=>{x({visible:!1,desc:"",id:""}),E.id==="UPDATE_SEQ"&&A()},R=()=>{x({visible:!1,desc:"",id:""})},v=()=>{p.current?I():k()};c.exports.useEffect(()=>{C&&(y.current=null,g.current=null,p.current=!1,u({}),f(0),i({visible:!1}),N()),S.fSetImagePopup(C)},[C]);const q=()=>e.createElement(t,{key:"title",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},e.createElement(t,{style:{display:"flex",alignItems:"center"}},e.createElement("img",{src:Q,alt:"logo",style:{marginLeft:5,width:27}}),e.createElement(t,{disabled:!0,style:{margin:"3px 10px",fontWeight:"bold",color:"#898989"}},"\uC99D\uBE59\uC790\uB8CC")),e.createElement(t,{style:{display:"flex",alignItems:"center",marginRight:5}},e.createElement(s.exports.LinkButton,{className:"c5",style:{width:"15px",height:"16px"},onClick:v},"x")));return C?e.createElement(e.Fragment,null,e.createElement(s.exports.Dialog,{header:q,style:{width:650,height:800},bodyCls:"f-column",closable:!1,draggable:!0,resizable:!0,modal:!0},e.createElement(t,{className:"f-full",style:{display:"flex",alignItems:"center"}},e.createElement(t,{style:{display:"flex",flexDirection:"column",paddingLeft:3}},e.createElement(t,{style:{width:"100%",height:60,display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"#f1efea"}},e.createElement(s.exports.TextBox,{value:r.DocSource,disabled:!0,className:m.S1,style:{marginLeft:5}}),e.createElement(s.exports.TextBox,{value:r.DocNo,disabled:!0,className:m.S1,style:{width:100}}),e.createElement(s.exports.TextBox,{value:r.Factory,disabled:!0,className:m.S1,style:{width:50}}),e.createElement(s.exports.TextBox,{value:o.No,disabled:!0,className:m.S1,style:{width:40,marginLeft:15}}),e.createElement(t,{style:{marginLeft:5,marginRight:5}},"/"),e.createElement(s.exports.TextBox,{value:o.TotCnt,disabled:!0,className:m.S1,style:{width:40}}),e.createElement(s.exports.LinkButton,{style:{width:40,height:25,color:"#424242",borderRadius:3,marginLeft:7},onClick:()=>D("B")},e.createElement(t,{style:{width:40,height:25,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(F,{size:15}))),e.createElement(s.exports.LinkButton,{style:{width:40,height:25,color:"#424242",borderRadius:3,marginLeft:3},onClick:()=>D("N")},e.createElement(t,{style:{width:40,height:25,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(L,{size:15}))),e.createElement(s.exports.LinkButton,{style:{width:40,height:25,color:"#424242",borderRadius:3,marginLeft:7},onClick:()=>b("M")},e.createElement(t,{style:{width:40,height:25,display:"flex",alignItems:"center",justifyContent:"center"}},"-90")),e.createElement(s.exports.LinkButton,{style:{width:40,height:25,color:"#424242",borderRadius:3,marginLeft:3},onClick:()=>b("P")},e.createElement(t,{style:{width:40,height:25,display:"flex",alignItems:"center",justifyContent:"center"}},"+90")),e.createElement(t,{style:{display:"flex",flexDirection:"column",marginLeft:25}},e.createElement(t,{style:{width:100,fontSize:12,textAlign:"center"}},"\uC99D\uBE59\uBC88\uD638\uBCC0\uACBD"),e.createElement(t,{style:{marginLeft:7,marginTop:2}},e.createElement(s.exports.LinkButton,{style:{width:35,height:20,color:"#424242",borderRadius:3,marginLeft:7},onClick:()=>w("Y")},e.createElement(t,{style:{width:35,height:20,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(F,{size:14}))),e.createElement(s.exports.LinkButton,{style:{width:35,height:20,color:"#424242",borderRadius:3,marginLeft:3},onClick:()=>w("X")},e.createElement(t,{style:{width:35,height:20,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(L,{size:14})))))),e.createElement(t,{style:{display:"flex",width:630,height:640,border:"1px solid #95b8e7",overflow:"hidden",margin:"0 auto"}},o.Photo&&e.createElement(z,{initalScale:1,minScale:.5,maxScale:10},e.createElement(U,null,e.createElement(M,{style:{display:"block"}},e.createElement("img",{src:`${r.FilePath}/${o.Photo}`,alt:"\uCCA8\uBD80\uC774\uBBF8\uC9C0",className:m.S2,style:{transform:"rotate("+h+"deg)"}}))))))),e.createElement(t,{className:"dialog-button",style:{display:"flex",flexDirection:"row",justifyContent:"center"}},e.createElement(s.exports.LinkButton,{style:{width:"80px"},onClick:v},"\uB2EB\uAE30"))),e.createElement(W,{visible:B.visible,description:B.desc,type:B.type,onConfirm:()=>i({visible:!1})}),e.createElement($,{visible:E.visible,description:E.desc,onCancel:R,onConfirm:P})):null},_=T({S1:{width:60,height:25,"& input":{fontSize:"12px !important",textAlign:"center",backgroundColor:"#fff !important"}},S2:{width:"100%",height:"100%",objectFit:"contain"}});export{X as E};