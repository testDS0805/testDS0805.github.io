import{r,R as e}from"./index.da6908f5.js";import{o as y,c as E,P as w,B as t,h as S,r as B,V as b,A as g,d as m}from"./App.11263b70.js";import{C as D}from"./CommonButton.0b792d77.js";const v=y(()=>{const s=N(),h="DOCUMENTMPSLEDGERLIST10",[d,n]=r.exports.useState([]),[c,i]=r.exports.useState({visible:!1,desc:"",type:"N"}),C=async()=>{n([]);try{const a=(await m.get("/@api/quality/documentmpsledger/selectByDocList",{params:{DocumentType:"566010"}})).data;n(a)}catch(l){l.response.status===404?n([]):i({visible:!0,desc:"\uBB38\uC11C \uBAA9\uB85D \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},p=l=>{m({url:`${u}/${l}`,method:"GET",responseType:"blob",headers:{"Content-Type":"application/json; application/octet-stream"}}).then(a=>{const f=window.URL.createObjectURL(new Blob([a.data])),o=document.createElement("a");o.href=f,o.setAttribute("download",l.slice(17)),document.body.appendChild(o),o.click()}).catch(function(){i({visible:!0,desc:"\uD30C\uC77C\uC744 \uCC3E\uC744\uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",type:"E"})})};return r.exports.useEffect(()=>{C()},[]),e.createElement(e.Fragment,null,e.createElement(D,{pgmid:h,visible:"01000",onSearch:C}),e.createElement(w,{className:"mainCon"},e.createElement(t,{className:s.S1},"ASME \uC808\uCC28\uC11C \uB9AC\uC2A4\uD2B8"),e.createElement(t,{style:{marginTop:10,display:"flex"}},e.createElement(t,{style:{width:50},className:s.S2},"NO"),e.createElement(t,{style:{width:350},className:s.S2},"\uC81C\uBAA9"),e.createElement(t,{style:{width:200},className:s.S2},"\uBB38\uC11C\uBC88\uD638"),e.createElement(t,{style:{width:150},className:s.S2},"\uC81C/\uAC1C\uC815\uC77C\uC790"),e.createElement(t,{style:{width:100},className:s.S2},"\uAC1C\uC815\uBC88\uD638"),e.createElement(t,{style:{width:350},className:s.S2},"\uBB38\uC11C\uD30C\uC77C"),e.createElement(t,{style:{width:150,borderRightWidth:1},className:s.S2},"\uBE44\uACE0")),d.map((l,a)=>e.createElement(t,{style:{display:"flex"},key:a},e.createElement(t,{style:{width:50},className:s.S3},l.DocumentSeq),e.createElement(t,{style:{width:350,justifyContent:"flex-start"},className:s.S3},l.DocumentTitle),e.createElement(t,{style:{width:200},className:s.S3},l.DocumentNo),e.createElement(t,{style:{width:150},className:s.S3},S(l.EnactReviseDate).format("YYYY-MM-DD")),e.createElement(t,{style:{width:100},className:s.S3},l.RevisionNo),e.createElement(t,{style:{width:350},className:s.S3},e.createElement(B.exports.LinkButton,{className:"c16",style:{width:335,height:26},onClick:()=>{p(l.DocumentFile)}},e.createElement(t,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(t,{className:s.S4},l.DocumentFile.slice(17)),e.createElement(b,{size:13,style:{verticalAlign:"baseline"},color:"#000"})))),e.createElement(t,{style:{width:150,borderRightWidth:1,justifyContent:"flex-start"},className:s.S3},l.Remark))),d.length===0&&e.createElement(t,{style:{width:1350,borderRightWidth:1},className:s.S3},"\uB4F1\uB85D\uB41C \uBB38\uC11C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")),e.createElement(g,{visible:c.visible,description:c.desc,type:c.type,onConfirm:()=>i({visible:!1,desc:""})}))});let u="";window.location.port?u=window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/@files/documentmpsledger":u=window.location.protocol+"//"+window.location.hostname+"/@files/documentmpsledger";const N=E({S1:{width:1350,height:37,fontSize:16,backgroundColor:"#fffccc",border:"1px solid #c2c2c2",borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center"},S2:{height:35,fontSize:13,fontWeight:500,backgroundColor:"#afe0ff",border:"1px solid #5ea1e8",borderRightWidth:0,display:"flex",alignItems:"center",justifyContent:"center"},S3:{height:33,fontSize:12,padding:5,fontWeight:500,backgroundColor:"#fff",border:"1px solid #5ea1e8",borderRightWidth:0,borderTopWidth:0,display:"flex",alignItems:"center",justifyContent:"center"},S4:{width:300,fontSize:12,display:"inline-block",color:"#000",textAlign:"left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}});export{v as default};
