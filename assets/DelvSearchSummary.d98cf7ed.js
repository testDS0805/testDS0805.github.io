import{r as l,R as a}from"./index.da6908f5.js";import{h as c,o as F,B as i,m as s,c as V,u as k,b,U,P as G,r as H,A as P}from"./App.11263b70.js";import{C as R}from"./CommonButton.0b792d77.js";import{C as B}from"./CommonDatePicker.d7bc57f8.js";import{C as K}from"./CodeHelperPopup.3932fdb9.js";import{S as L}from"./InventoryBookStyle.d8b17442.js";import"./index.6f186c21.js";function _(){const[e,r]=l.exports.useState({});return{initialSearchVO:{Accunit:"",Factory:"",FrDate:c().clone().startOf("month").toDate(),ToDate:new Date,CustCd:"",CustNm:""},alert:e,setAlert:r}}const O=F(e=>{const r=l.exports.useRef(null),m=async()=>{e.Util.Grid.fContainerInit(e.Util.Common.fMakeId(e.id)),E=new s.exports.LocalDataProvider(!1),p=new s.exports.GridView(r.current),e.Util.Grid.fInitGridHeader(p,E,e.GridFields,e.GridColumns,25,u,o,D,""),p.setDisplayOptions({fitStyle:"none"}),p.setFooters({visible:!0}),e.DataProviderBind(E),e.GridViewBind(p)},u=()=>{},o=()=>{},D=(y,C)=>{switch(C.key){case"Tab":C.preventDefault(),document.getElementById(e.Util.Common.fMakeId("FrDate")).focus();break}};return l.exports.useEffect(()=>{m()},[]),a.createElement(i,{ref:r,key:e.Util.Common.fMakeId(e.id),id:e.Util.Common.fMakeId(e.id),style:{width:"100%",height:e.Height}})});let E,p;const X=async(e,r,m,u)=>{if(e.Util.Common.fValidate(!c(r.FrDate,"YYYY-MM-DD").isValid()||!c(r.FrDate,"YYYY-MM-DD").isValid(),"\uC870\uD68C\uAE30\uAC04\uC744 \uBC14\uB974\uAC8C \uC785\uB825\uD574 \uC8FC\uC138\uC694.")||e.Util.Common.fValidate(c(r.FrDate).format("YYYYMMDD")>c(r.FrDate).format("YYYYMMDD"),"\uC870\uD68C\uAE30\uAC04\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."))return;const o={...r};o.FrDate=c(o.FrDate).format("YYYYMMDD"),o.ToDate=c(o.ToDate).format("YYYYMMDD"),o.Accunit=e.User.user.accunit,o.Factory=e.User.user.factory,await e.Util.Command.fSearch(m,"/@api/purchase/delvSearchSummary/selectByList",o,u)},$=[{fieldName:"CustNm",dataType:s.exports.ValueType.TEXT},{fieldName:"GoodNo",dataType:s.exports.ValueType.TEXT},{fieldName:"goodnm",dataType:s.exports.ValueType.TEXT},{fieldName:"VatNm",dataType:s.exports.ValueType.TEXT},{fieldName:"qty",dataType:s.exports.ValueType.NUMBER},{fieldName:"price",dataType:s.exports.ValueType.NUMBER},{fieldName:"amount",dataType:s.exports.ValueType.NUMBER}],q=[{fieldName:"CustNm",type:"data",width:180,styleName:"left-column",header:{text:"\uAC70\uB798\uCC98\uBA85"},mergeRule:{criteria:"value"}},{fieldName:"GoodNo",type:"data",width:180,header:{text:"\uD488\uBC88"},styleName:"left-column"},{fieldName:"goodnm",type:"data",width:220,header:{text:"\uD488\uBA85"},styleName:"left-column"},{fieldName:"VatNm",type:"data",width:150,header:{text:"\uC138\uAE08\uACC4\uC0B0\uC11C\uC885\uB958"},styleName:"left-column"},{fieldName:"qty",type:"data",width:80,numberFormat:"#,##0.##",styleName:"right-column",header:{text:"\uC218\uB7C9"},footer:{numberFormat:"#,##0.##",expression:"sum"}},{fieldName:"price",type:"data",width:80,numberFormat:"#,##0.##",header:{text:"\uB2E8\uAC00"},styleName:"right-column"},{fieldName:"amount",type:"data",width:100,numberFormat:"#,##0",header:{text:"\uACF5\uAE09\uAC00\uC561"},footer:{numberFormat:"#,##0.##",expression:"sum"},styleName:"right-column"}],ae=F(()=>{const e="DELVSEARCHDETAIL",{$CommonStore:r,$UserStore:m}=k(),u=z(),o=b(),{initialSearchVO:D,alert:y,setAlert:C}=_(),n=new U(e,C,!0,!0,!0,!0,!0),[f,h]=l.exports.useReducer(v,D),T=l.exports.useRef(0),w=t=>{S=t},I=t=>{N=t},g=()=>{setTimeout(()=>{n.Common.fSetTabIndex(),document.getElementById(n.Common.fMakeId("FrDate")).focus()},10)},[A]=l.exports.useState({Util:n,User:m,fInit:g,setAlert:C}),x=async()=>{N.commit(),await X(A,f,S,"\uAC70\uB798\uCC98\uBCC4 \uB9E4\uC785\uD604\uD669"),N.setFocus()},M=(t,d,Y)=>{switch(t){case"CustCdNm":h({type:"update_custcd",CustCd:d,CustNm:Y});return}};function v(t,d){switch(d.type){case"update_frdate":return{...t,FrDate:d.FrDate};case"update_todate":return{...t,ToDate:d.ToDate};case"update_custcd":return{...t,CustCd:d.CustCd,CustNm:d.CustNm}}}return window.onkeydown=function(t){o.pathname==="/delvsearchsummary"&&t.key==="F9"&&(t.preventDefault(),x())},l.exports.useEffect(()=>{n.Common.fHotKey(r,r.isPopup,x)},[r.fHotKey]),l.exports.useEffect(()=>(g(),()=>{r.fSetHotKey()}),[]),a.createElement(a.Fragment,null,a.createElement(R,{pgmid:e,visible:"010000",onSearch:x}),a.createElement(G,{className:"mainCon"},a.createElement(i,{display:"flex",flexDirection:"column",alignItems:"flex-start",style:{padding:1,border:"1px solid #e2e2e2",borderRadius:5,marginBottom:5}},a.createElement(i,{style:{display:"flex",alignItems:"center"}},a.createElement(i,{className:u.SC4},a.createElement(i,{className:u.SC1},"\uAE30\uAC04"),a.createElement(i,{onKeyDown:t=>{t.shiftKey&&t.keyCode===9&&(t.preventDefault(),document.getElementById(n.Common.fMakeId("CustCdNm")).focus())}},a.createElement(B,{inputCls:"inputCls",selected:f.FrDate,inputId:n.Common.fMakeId("FrDate"),onHandleDateChange:t=>{h({type:"update_frdate",FrDate:t})},style:{width:110}})),a.createElement(i,{style:{margin:"0 5px",fontWeight:500,fontSize:20}},"~"),a.createElement(B,{inputCls:"inputCls",selected:f.ToDate,inputId:n.Common.fMakeId("ToDate"),onHandleDateChange:t=>{h({type:"update_todate",ToDate:t})},style:{width:110}}))),a.createElement(i,{style:{display:"flex",alignItems:"center"}},a.createElement(i,{className:u.SC4},a.createElement(i,{className:u.SC1},"\uACF5\uC7A5\uBA85"),a.createElement(H.exports.TextBox,{inputId:n.Common.fMakeId("Factorynm"),inputCls:"inputCls",name:"Factorynm",value:m.user.factorynm,editable:!1,className:u.SC3})),a.createElement(i,{onKeyDown:t=>{t.shiftKey&&t.keyCode===9?(t.preventDefault(),document.getElementById(n.Common.fMakeId("Factorynm")).focus()):t.keyCode===9&&(t.preventDefault(),document.getElementById(n.Common.fMakeId("FrDate")).focus())}},a.createElement(K,{title:"\uAC70\uB798\uCC98\uBA85",inputCls:"inputCls",pgmid:e,inputType:"Cust",id:"CustCdNm",helper:n.CodeHelper.helperCust,ComponentCode:f.CustCd,ComponentValue:f.CustCdNm,SetValue:M,labelStyles:{width:60,height:25,margin:"1px 10px 4px 20px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:185,margin:"1px 0px 4px 0px"}})))),a.createElement(O,{Util:n,id:"Grid1",Height:700,currentIndex:T,GridFields:$,GridColumns:q,DataProviderBind:w,GridViewBind:I})),a.createElement(P,{visible:y.visible,description:y.desc,type:y.type,onConfirm:()=>C({visible:!1})}))});let S,N;const z=V(L);export{ae as default};