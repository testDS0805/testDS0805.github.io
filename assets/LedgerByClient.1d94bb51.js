import{r as n,R as e}from"./index.da6908f5.js";import{m as o,o as V,c as G,u as L,h as i,P as O,B as r,r as h,A as H,C as P,d as A,i as U}from"./App.11263b70.js";import{C as z,B as K}from"./CommonButton.0b792d77.js";const $=[{fieldName:"Custcd",dataType:o.exports.ValueType.TEXT},{fieldName:"Custnm",dataType:o.exports.ValueType.TEXT},{fieldName:"CustInvoiceMail",dataType:o.exports.ValueType.TEXT},{fieldName:"Amount",dataType:o.exports.ValueType.NUMBER},{fieldName:"Tax",dataType:o.exports.ValueType.NUMBER},{fieldName:"TotalAmount",dataType:o.exports.ValueType.NUMBER}],X=[{name:"Custnm",fieldName:"Custnm",type:"data",width:120,styleName:"left-column",header:{text:"\uC5C5\uCCB4\uBA85"},renderer:{type:"text",showTooltip:!0}},{name:"CustInvoiceMail",fieldName:"CustInvoiceMail",type:"data",width:120,styleName:"left-column",header:{text:"\uB2F4\uB2F9\uC790 E-Mail"},renderer:{type:"text",showTooltip:!0}},{name:"Amount",fieldName:"Amount",type:"data",width:120,styleName:"right-column",header:{text:"\uACF5\uAE09\uAC00\uC561"},numberFormat:"#,##0",renderer:{type:"text",showTooltip:!0}},{name:"Tax",fieldName:"Tax",type:"data",width:120,styleName:"right-column",header:{text:"\uBD80\uAC00\uC138"},numberFormat:"#,##0",renderer:{type:"text",showTooltip:!0}},{name:"TotalAmount",fieldName:"TotalAmount",type:"data",width:120,styleName:"right-column",header:{text:"\uAC70\uB798\uAE08\uC561(VAT\uD3EC\uD568)"},numberFormat:"#,##0",renderer:{type:"text",showTooltip:!0}}],q=V(()=>{const{$CommonStore:d,$UserStore:b}=L(),c=W(),m="LEDGERBYCLIENT",[T]=n.exports.useState(b.fCheckAuth(`${m}|MAIL`)),x=n.exports.useRef(null),[u,f]=n.exports.useState({frDate:new Date,toDate:new Date}),[p,l]=n.exports.useState({visible:!1,desc:"",type:"N"}),[D,y]=n.exports.useState({visible:!1,desc:"",id:""}),w=()=>{C=new o.exports.LocalDataProvider(!1),a=new o.exports.GridView(x.current),a.setDataSource(C),C.setFields($),a.setColumns(X),a.setStateBar({visible:!0}),a.setCheckBar({visible:!0,width:35}),a.setRowIndicator({visible:!0}),a.setFooters({visible:!1}),a.setDisplayOptions({fitStyle:"evenFill"}),a.setOptions({summaryMode:"aggregate"}),a.setEditOptions({insertable:!1,appendable:!1,editable:!1}),a.displayOptions.rowHeight=30},B=t=>m+"_"+t,M=t=>{f(s=>({...s,frDate:t}))},S=t=>{f(s=>({...s,toDate:t}))},E=async()=>{if(!i(u.frDate,"YYYY-MM-DD").isValid()||!i(u.toDate,"YYYY-MM-DD").isValid()){l({visible:!0,desc:"\uAC80\uC0C9\uAE30\uAC04\uC744 \uBC14\uB974\uAC8C \uC785\uB825\uD574 \uC8FC\uC138\uC694."});return}if(i(u.frDate).format("YYYYMMDD")>i(u.toDate).format("YYYYMMDD")){l({visible:!0,desc:"\uAC80\uC0C9\uAE30\uAC04\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."});return}let t={...u};t.frDate=i(t.frDate).format("YYYYMMDD"),t.toDate=i(t.toDate).format("YYYYMMDD");try{let s=await A.get("/@api/business/ledgerbyclient/selectByList",{params:t});N(),C.setRows(s.data)}catch(s){s.response.status===404?l({visible:!0,desc:"\uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}):l({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},Y=async()=>{if(a.getCheckedItems().length<1){l({visible:!0,desc:"\uC120\uD0DD\uD558\uC2E0 \uC5C5\uCCB4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."});return}y({visible:!0,desc:"\uC120\uD0DD\uD558\uC2E0 \uC5C5\uCCB4\uC5D0 \uB9E4\uCD9C\uC6D0\uC7A5\uC744 \uBC1C\uC1A1 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"SEND"})},v=async()=>{a.getCheckedItems().map(async s=>{const k=a.getDataRow(s),g=C.getJsonRow(k),F=g.Custcd.trim(),R=g.CustInvoiceMail;await A.get("http://13.125.122.232:6081/@/mail/sendHseSaleRecordMail",{params:{iCustUser:R,iCustcd:F,iFrDate:i(u.frDate).format("YYYYMMDD"),iToDate:i(u.toDate).format("YYYYMMDD")}})}),l({visible:!0,desc:"\uC120\uD0DD\uD558\uC2E0 \uC5C5\uCCB4\uC5D0 \uB9E4\uCD9C\uC6D0\uC7A5\uC744 \uBC1C\uC1A1\uD588\uC2B5\uB2C8\uB2E4."})},N=()=>{a.orderBy([],[])},I=async()=>{D.id==="SEND"&&v(),y({visible:!1,desc:"",id:""})};return n.exports.useEffect(()=>{d.HotKey&&d.HotKey.pgmid===m&&d.HotKey.key==="SEARCH"&&E()},[d.HotKey]),n.exports.useEffect(()=>{const t=i().startOf("month");f(s=>({...s,frDate:t.toDate()})),w()},[]),e.createElement(e.Fragment,null,e.createElement(z,{pgmid:m,visible:"01000",onSearch:E}),e.createElement(O,{className:"mainCon"},e.createElement(r,{style:{width:"100%",height:50,backgroundColor:"#f9f9f9",borderRadius:"5px",display:"flex",flexDirection:"row",padding:5}},e.createElement(r,{style:{width:1550,display:"flex",alignItems:"center"}},e.createElement(r,{className:c.S1},e.createElement(r,{className:c.S2},"\uAC80\uC0C9\uAE30\uAC04")),e.createElement(r,{style:{display:"flex",alignItems:"center"}},e.createElement(h.exports.DateBox,{style:{width:110,height:25},className:c.S3,inputId:B("sDate"),lo:"ko",format:"yyyy-MM-dd",panelStyle:{width:250,height:250},value:u.frDate,onChange:t=>M(t),currentText:"\uC624\uB298",closeText:"\uB2EB\uAE30",okText:"\uD655\uC778"}),e.createElement(r,{style:{margin:"0 10px",width:"10px"}},"~"),e.createElement(h.exports.DateBox,{style:{width:110,height:25},className:c.S3,inputId:B("eDate"),format:"yyyy-MM-dd",panelStyle:{width:250,height:250},value:u.toDate,onChange:t=>S(t),currentText:"\uC624\uB298",closeText:"\uB2EB\uAE30",okText:"\uD655\uC778"}))),e.createElement(r,{style:{display:"flex",alignItems:"center"}},e.createElement(h.exports.LinkButton,{className:"c12",style:{width:100,height:30,color:"#424242",borderRadius:3},onClick:Y,disabled:!T},e.createElement(r,{style:{width:115,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(K,{size:24}),e.createElement(r,{style:{marginLeft:5,fontSize:14,paddingBottom:2,fontWeight:500}},"\uBA54\uC77C \uBC1C\uC1A1"))))),e.createElement(r,{ref:x,style:{width:"100%",height:720,marginTop:5}})),e.createElement(H,{visible:p.visible,description:p.desc,type:p.type,onConfirm:()=>l({visible:!1})}),e.createElement(P,{visible:D.visible,description:D.desc,onCancel:()=>y({visible:!1}),onConfirm:I}))});let C,a;const W=G({S1:{margin:"3px 10px",backgroundColor:"#e0ecff",color:"#163971",padding:5,height:25,fontSize:"12px",display:"flex",alignItems:"center",width:110,fontWeight:600},S2:{width:100},S3:{"& .textbox-text":{fontSize:"12px"},"& .textbox":{fontSize:"12px"},"& .combo-arrow":{backgroundImage:`url(${U})`,backgroundRepeat:"no-repeat",backgroundColor:"#ffffff!important",height:12}}});export{q as default};