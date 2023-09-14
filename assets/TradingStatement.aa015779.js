import{r as C,R as t}from"./index.da6908f5.js";import{m as o,o as V,c as I,u as b,h as l,P,B as a,r as m,q as v,A as k,d as g,i as M}from"./App.11263b70.js";import{C as Y}from"./CommonButton.0b792d77.js";const F=[{fieldName:"Rowno",dataType:o.exports.ValueType.NUMBER},{fieldName:"Inoutdate",dataType:o.exports.ValueType.TEXT},{fieldName:"Invoiceno",dataType:o.exports.ValueType.TEXT},{fieldName:"Recordcnt",dataType:o.exports.ValueType.NUMBER},{fieldName:"Amount",dataType:o.exports.ValueType.NUMBER},{fieldName:"Tax",dataType:o.exports.ValueType.NUMBER},{fieldName:"Total",dataType:o.exports.ValueType.NUMBER}],L=[{name:"Rowno",fieldName:"Rowno",type:"data",width:30,header:{text:"\uC21C\uBC88"},numberFormat:"0",footer:{text:"\uD569\uACC4",styleName:"center-column"},renderer:{type:"text",showTooltip:!0}},{name:"Inoutdate",fieldName:"Inoutdate",type:"data",width:80,header:{text:"\uBC1C\uD589\uC77C\uC790"},renderer:{type:"text",showTooltip:!0}},{name:"Invoiceno",fieldName:"Invoiceno",type:"data",width:80,header:{text:"\uAC70\uB798\uBA85\uC138\uC11C \uBC88\uD638"},renderer:{type:"text",showTooltip:!0}},{name:"Recordcnt",fieldName:"Recordcnt",type:"data",width:80,styleName:"right-column",header:{text:"\uD488\uBAA9\uAC74\uC218"},numberFormat:"#,##0",renderer:{type:"text",showTooltip:!0}},{name:"Amount",fieldName:"Amount",type:"data",width:100,styleName:"right-column",header:{text:"\uACF5\uAE09\uAC00\uC561"},footer:{numberFormat:"#,##0",expression:"sum"},numberFormat:"#,##0",renderer:{type:"text",showTooltip:!0}},{name:"Tax",fieldName:"Tax",type:"data",width:100,styleName:"right-column",header:{text:"\uBD80\uAC00\uC138"},footer:{numberFormat:"#,##0",expression:"sum"},numberFormat:"#,##0",renderer:{type:"text",showTooltip:!0}},{name:"Total",fieldName:"Total",type:"data",width:100,styleName:"right-column",header:{text:"\uAC70\uB798\uAE08\uC561(VAT\uD3EC\uD568)"},footer:{numberFormat:"#,##0",expression:"sum"},numberFormat:"#,##0",renderer:{type:"text",showTooltip:!0}},{name:"Print",fieldName:"Print",type:"data",width:50,header:{text:"\uCD9C\uB825"},editable:!1,styleName:"center-column center_custom_renderer",renderer:"Renderer_PrintBtn"}],H=V(()=>{const{$CommonStore:c,$UserStore:d}=b(),i=U(),h="ORDERTRADINGSTATEMENT",y=C.exports.useRef(null),[s,f]=C.exports.useState({frDate:new Date,toDate:new Date,custCd:d.user.custcd,custNm:d.user.custnm}),[A,x]=C.exports.useState(!1),[E,n]=C.exports.useState({visible:!1,desc:"",type:"N"}),_=()=>{p=new o.exports.LocalDataProvider(!1),u=new o.exports.GridView(y.current),u.setDataSource(p),p.setFields(F),u.setColumns(L),u.setCheckBar({visible:!1}),u.setStateBar({visible:!1}),u.setRowIndicator({visible:!1}),u.setDisplayOptions({fitStyle:"evenFill"}),u.setOptions({summaryMode:"aggregate"}),u.setEditOptions({editable:!1}),u.displayOptions.rowHeight=35,u.registerCustomRenderer("Renderer_PrintBtn",{initContent:function(e){e.appendChild(this._button1=document.createElement("span"))},canClick:function(){return!0},clearContent:function(e){e.innerHTML=""},render:function(e,r){this._value=e.getValue(r.index._itemIndex,"Invoiceno"),this._button1.className="grid_print_button"},click:function(e){e.preventDefault,e.target===this._button1&&w(this._value)}})},D=e=>h+"_"+e,R=e=>{f(r=>({...r,frDate:e}))},T=e=>{f(r=>({...r,toDate:e}))},B=async()=>{if(!s.custCd){n({visible:!0,desc:"\uC678\uC8FC\uCC98\uAC00 \uC81C\uB300\uB85C \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."});return}if(!l(s.frDate,"YYYY-MM-DD").isValid()||!l(s.toDate,"YYYY-MM-DD").isValid()){n({visible:!0,desc:"\uAC80\uC0C9\uAE30\uAC04\uC744 \uBC14\uB974\uAC8C \uC785\uB825\uD574 \uC8FC\uC138\uC694."});return}if(l(s.frDate).format("YYYYMMDD")>l(s.toDate).format("YYYYMMDD")){n({visible:!0,desc:"\uAC80\uC0C9\uAE30\uAC04\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."});return}let e={...s};e.frDate=l(e.frDate).format("YYYYMMDD"),e.toDate=l(e.toDate).format("YYYYMMDD");try{let r=await g.get("/@api/order/tradingstatement/selectByList",{params:e});S(),p.setRows(r.data)}catch(r){r.response.status===404?n({visible:!0,desc:"\uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}):n({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},w=async e=>{try{let r=await g.get("/@api/order/tradingstatement/selectByPrint",{params:{invoiceno:e,custCd:s.custCd}});x(!0),N(r.data)}catch(r){r.response.status===404?n({visible:!0,desc:"\uCD9C\uB825\uC790\uB8CC \uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}):n({visible:!0,desc:"\uCD9C\uB825\uC790\uB8CC \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},N=e=>{let r=new window.m2soft.crownix.Viewer("http://report.ehansun.co.kr/ReportingServer/service","crownix-viewer");r.setRData('{"data":'+JSON.stringify(e)+"}"),r.openFile("http://hseerp.ehansun.co.kr/report/\uC678\uC8FC_\uAC70\uB798\uBA85\uC138\uC11C.mrd","")},S=()=>{u.orderBy([],[])};return C.exports.useEffect(()=>{c.HotKey&&c.HotKey.pgmid===h&&c.HotKey.key==="SEARCH"&&B()},[c.HotKey]),C.exports.useEffect(()=>{const e=l().startOf("month");f(r=>({...r,frDate:e.toDate(),custCd:d.user.custcd,custNm:d.user.custnm})),_()},[]),t.createElement(t.Fragment,null,t.createElement(Y,{pgmid:h,visible:"01000",onSearch:B}),t.createElement(P,{className:"mainCon"},t.createElement(a,{style:{width:"100%",height:50,backgroundColor:"#f9f9f9",borderRadius:"5px",display:"flex",flexDirection:"row",padding:5}},t.createElement(a,{style:{display:"flex",alignItems:"center"}},t.createElement(a,{className:i.S1},t.createElement(a,{className:i.S2},"\uC678\uC8FC\uCC98")),t.createElement(m.exports.TextBox,{placeholder:"\uC678\uC8FC\uC5C5\uCCB4 \uC0AC\uC6A9\uC790\uAC00 \uC544\uB2D9\uB2C8\uB2E4",editable:!1,className:i.S4,value:s.custNm}),t.createElement(a,{className:i.S1},t.createElement(a,{className:i.S2},"\uAC70\uB798\uBA85\uC138\uC77C\uC790")),t.createElement(a,{style:{display:"flex",alignItems:"center"}},t.createElement(m.exports.DateBox,{style:{width:110,height:25},className:i.S3,inputId:D("sDate"),lo:"ko",format:"yyyy-MM-dd",panelStyle:{width:250,height:250},value:s.frDate,onChange:e=>R(e),currentText:"\uC624\uB298",closeText:"\uB2EB\uAE30",okText:"\uD655\uC778"}),t.createElement(a,{style:{margin:"0 10px",width:"10px"}},"~"),t.createElement(m.exports.DateBox,{style:{width:110,height:25},className:i.S3,inputId:D("eDate"),format:"yyyy-MM-dd",panelStyle:{width:250,height:250},value:s.toDate,onChange:e=>T(e),currentText:"\uC624\uB298",closeText:"\uB2EB\uAE30",okText:"\uD655\uC778"})))),t.createElement(a,{ref:y,style:{width:"100%",height:720,marginTop:5}})),A&&t.createElement(m.exports.Dialog,{title:t.createElement(a,{style:{display:"flex",alignItems:"center"}},t.createElement("img",{src:v,alt:"logo",style:{width:49,height:14}})," ",t.createElement(a,{style:{marginLeft:15}},"\uAC70\uB798\uBA85\uC138\uC11C \uCD9C\uB825")),style:{width:"1870px",height:"900px"},bodyCls:"f-column",closable:!0,modal:!0,onClose:()=>x(!1)},t.createElement(a,{className:"f-full"},t.createElement("div",{id:"crownix-viewer",style:{position:"absolute",width:"100%",height:"100%"}}))),t.createElement(k,{visible:E.visible,description:E.desc,type:E.type,onConfirm:()=>n({visible:!1})}))});let p,u;const U=I({S1:{margin:"3px 10px",backgroundColor:"#e0ecff",color:"#163971",padding:5,height:25,fontSize:"12px",display:"flex",alignItems:"center",width:110,fontWeight:600},S2:{width:100},S3:{"& .textbox-text":{fontSize:"12px"},"& .textbox":{fontSize:"12px"},"& .combo-arrow":{backgroundImage:`url(${M})`,backgroundRepeat:"no-repeat",backgroundColor:"#ffffff!important",height:12}},S4:{width:185,height:25,"& input":{fontSize:"12px !important"}}});export{H as default};
