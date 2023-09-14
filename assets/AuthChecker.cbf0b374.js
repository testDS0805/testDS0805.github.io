import{r as n,R as t}from"./index.da6908f5.js";import{o as w,c as k,P as A,B as r,r as C,A as R,d as f}from"./App.11263b70.js";import{C as I}from"./CommonButton.0b792d77.js";const L="/assets/img_super.d926c709.png",U=w(()=>{const p="AUTHCHECKER",a=P(),o=n.exports.useRef(),l=n.exports.useRef(),[m,g]=n.exports.useState(""),[h,y]=n.exports.useState([]),[x,u]=n.exports.useState([]),[b,c]=n.exports.useState([]),[d,i]=n.exports.useState({visible:!1,desc:"",type:"N"}),E=e=>{g(e)},S=async()=>{u([]),c([]),o.current="",l.current="";try{let e=await f.get("/@api/admin/authchecker/selectByUser",{params:{schTxt:m}});y(e.data)}catch(e){e.response.status===404?i({visible:!0,desc:"\uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}):i({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},B=async e=>{o.current=e,l.current="",u([]),c([]);try{let s=await f.get("/@api/admin/authchecker/selectByMenuAuth",{params:{schTxt:e}});u(s.data)}catch{i({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},D=async e=>{l.current=e,c([]);try{let s=await f.get("/@api/admin/authchecker/selectByRoleAuth",{params:{schTxt:e,Pno:o.current}});c(s.data)}catch{i({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}};return t.createElement(t.Fragment,null,t.createElement(I,{pgmid:p,visible:"00000"}),t.createElement(A,{className:"mainCon"},t.createElement(r,{style:{width:510,height:53,backgroundColor:"#f9f9f9",borderRadius:"5px",display:"flex",flexDirection:"column",padding:5}},t.createElement(r,{style:{marginTop:5,display:"flex",alignItems:"center"}},t.createElement(r,{className:a.S1},t.createElement(r,{style:{width:100}},"\uC0AC\uC6A9\uC790")),t.createElement(C.exports.TextBox,{className:a.S2,value:m,style:{width:250},onChange:e=>E(e)}),t.createElement(C.exports.LinkButton,{className:"c9",style:{marginLeft:25,width:80},onClick:S},t.createElement(r,{style:{fontSize:15,fontWeight:400}},"\uC870\uD68C")))),t.createElement(r,{style:{display:"flex",flexDirection:"row",marginTop:10}},t.createElement(r,{style:{width:350,minHeight:900,backgroundColor:"#fffccc",borderRadius:"5px",display:"flex",flexDirection:"column",padding:5}},t.createElement(r,{style:{width:340,marginBottom:5,display:"flex",alignItems:"center",justifyContent:"center",background:"#fff"}},"\uC0AC\uC6A9\uC790"),h.map((e,s)=>t.createElement(r,{key:`${e.Pno}-${s}`,style:{height:30,width:340,border:"1px solid #b2b2b2",marginTop:5,borderRadius:5,paddingLeft:5,cursor:"pointer"},className:o.current===e.Pno?a.S4:a.S3,onClick:()=>{B(e.Pno)}},t.createElement(r,{style:{height:30,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},t.createElement(r,null,(()=>e.SuperUser==="S"?t.createElement("img",{src:L,alt:"super",style:{width:"20px",marginRight:10}}):"")()),t.createElement(r,{style:{fontSize:13,fontWeight:400}},e.Pno," (",e.UserName,")"))))),t.createElement(r,{style:{width:775,minHeight:900,marginLeft:10,backgroundColor:"#aaffaa",borderRadius:"5px",display:"flex",flexDirection:"column",padding:5}},t.createElement(r,{style:{width:765,marginBottom:5,display:"flex",alignItems:"center",justifyContent:"center",background:"#fff"}},"\uBA54\uB274\uAD8C\uD55C"),x.map((e,s)=>t.createElement(r,{key:`${e.PgmId}-${s}`,style:{height:30,width:765,border:"1px solid #b2b2b2",marginTop:5,borderRadius:5,paddingLeft:5,cursor:"pointer"},className:l.current===e.PgmId?a.S4:a.S3,onClick:()=>{D(e.PgmId)}},t.createElement(r,{style:{height:30,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},t.createElement(r,{style:{fontSize:13,fontWeight:400}},e.PgmGb," ---- ",e.PgmNm," (",e.PgmId,")"))))),t.createElement(r,{style:{width:475,minHeight:900,marginLeft:10,backgroundColor:"#aaeeff",borderRadius:"5px",display:"flex",flexDirection:"column",padding:5}},t.createElement(r,{style:{width:465,display:"flex",alignItems:"center",justifyContent:"center",background:"#fff"}},"\uC0C1\uC138\uAD8C\uD55C"),b.map((e,s)=>t.createElement(r,{key:`${e.RoleId}-${s}`,style:{height:30,width:465,border:"1px solid #b2b2b2",marginTop:5,borderRadius:5,paddingLeft:5,cursor:"pointer"},className:l.current===e.PgmId?a.S4:a.S3},t.createElement(r,{style:{height:30,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},t.createElement(r,{style:{fontSize:13,fontWeight:400}},e.RoleNm," (",e.RoleId,")"))))))),t.createElement(R,{visible:d.visible,description:d.desc,type:d.type,onConfirm:()=>i({visible:!1,desc:""})}))}),P=k({S1:{margin:"3px 10px",backgroundColor:"#e0ecff",color:"#163971",padding:5,height:25,fontSize:"12px",display:"flex",alignItems:"center",width:110,fontWeight:600},S2:{width:100,height:25,"& input":{fontSize:"12px !important"}},S3:{backgroundColor:"#ffdd16"},S4:{backgroundColor:"#ffbc1b"}});export{U as default};
