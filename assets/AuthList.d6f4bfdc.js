import{r as p,R as a}from"./index.da6908f5.js";import{m as l,o as U,c as L,u as X,h as c,P,B as o,r as y,A as G,C as H,d as Y,i as z}from"./App.11263b70.js";import{C as K}from"./CommonButton.0b792d77.js";const $=[{fieldName:"Rowno",dataType:l.exports.ValueType.NUMBER},{fieldName:"AuthIdx",dataType:l.exports.ValueType.NUMBER},{fieldName:"AuthProvider",dataType:l.exports.ValueType.TEXT},{fieldName:"AuthUserEmail",dataType:l.exports.ValueType.TEXT},{fieldName:"AuthUserNm",dataType:l.exports.ValueType.TEXT},{fieldName:"AuthUserPosition",dataType:l.exports.ValueType.TEXT},{fieldName:"AuthCustNm",dataType:l.exports.ValueType.TEXT},{fieldName:"AuthCustTaxNo",dataType:l.exports.ValueType.TEXT},{fieldName:"AuthYn",dataType:l.exports.ValueType.TEXT},{fieldName:"OrderYn",dataType:l.exports.ValueType.TEXT},{fieldName:"OutsourcingYn",dataType:l.exports.ValueType.TEXT},{fieldName:"AgencyYn",dataType:l.exports.ValueType.TEXT},{fieldName:"AbroadYn",dataType:l.exports.ValueType.TEXT},{fieldName:"DateTime",dataType:l.exports.ValueType.TEXT}],J=[{name:"AuthProvider",fieldName:"AuthProvider",type:"data",width:100,header:{text:"\uAC00\uC785 \uACBD\uB85C"},editable:!1,styleName:"left-column"},{name:"AuthUserEmail",fieldName:"AuthUserEmail",type:"data",width:250,header:{text:"Email"},renderer:{type:"text",showTooltip:!1},editable:!1,styleName:"left-column"},{name:"AuthUserNm",fieldName:"AuthUserNm",type:"data",width:120,header:{text:"\uC774\uB984"},editable:!0,styleName:"left-column rg-text-red-color"},{name:"AuthUserPosition",fieldName:"AuthUserPosition",type:"data",width:120,header:{text:"\uC9C1\uAE09/\uC9C1\uCC45"},editable:!0,styleName:"left-column rg-text-red-color"},{name:"AuthCustNm",fieldName:"AuthCustNm",type:"data",width:300,header:{text:"\uAC70\uB798\uCC98\uBA85"},editable:!1,styleName:"left-column"},{name:"AuthCustTaxNo",fieldName:"AuthCustTaxNo",type:"data",width:150,header:{text:"\uAC70\uB798\uCC98 \uC0AC\uC5C5\uC790\uBC88\uD638"},editable:!1,styleName:"left-column",textFormat:"([0-9]{3})([0-9]{2})([0-9]{5});$1-$2-$3"},{name:"DateTime",fieldName:"DateTime",type:"data",width:100,header:{text:"\uAC70\uB798\uCC98 \uAC00\uC785\uC77C\uC790"},editable:!1,styleName:"center-column"},{name:"AuthYn",fieldName:"AuthYn",type:"data",width:80,header:{text:"\uC2B9\uC778\uC720\uBB34"},renderer:{type:"check",trueValues:"Y",falseValues:"N"},styleName:"checkBox",editable:!1},{name:"OrderYn",fieldName:"OrderYn",type:"data",width:80,header:{text:"\uAD6C\uB9E4\uC5C5\uCCB4"},renderer:{type:"check",trueValues:"Y",falseValues:"N"},styleName:"checkBox",editable:!1},{name:"OutsourcingYn",fieldName:"OutsourcingYn",type:"data",width:80,header:{text:"\uC678\uC8FC\uC5C5\uCCB4"},renderer:{type:"check",trueValues:"Y",falseValues:"N"},styleName:"checkBox",editable:!1},{name:"AgencyYn",fieldName:"AgencyYn",type:"data",width:80,header:{text:"\uB300\uB9AC\uC810"},renderer:{type:"check",trueValues:"Y",falseValues:"N"},styleName:"checkBox",editable:!1},{name:"AbroadYn",fieldName:"AbroadYn",type:"data",width:80,header:{text:"ABROAD"},renderer:{type:"check",trueValues:"Y",falseValues:"N"},styleName:"checkBox",editable:!1}],Q=U(()=>{const{$CommonStore:f,$UserStore:T}=X(),n=W(),x="AUTHLIST",w=p.exports.useRef(null),[d,m]=p.exports.useState({frDate:new Date("2020-01-01"),toDate:new Date,custCd:"",custNm:"",userId:"",userNm:"",modId:T.user.userId,modDate:c(new Date).format("YYYY-MM-DD"),AuthYn:""}),[A,B]=p.exports.useState(!1),[N,i]=p.exports.useState({visible:!1,desc:"",type:"N"}),[E,g]=p.exports.useState({visible:!1,desc:"",id:""}),v=()=>{document.getElementById(h("Grid1")).innerHTML="",s=new l.exports.LocalDataProvider(!1),u=new l.exports.GridView(w.current),u.setDataSource(s),s.setFields($),u.setColumns(J),u.setCheckBar({visible:!0}),u.setCheckableExpression("values['AuthYn'] = 'N'",!0),u.setOptions({summaryMode:"statistical"}),u.setCopyOptions({singleMode:!0,enabled:!0}),u.sortingOptions.enabled=!1,u.footers.visible=!1,u.displayOptions.fitStyle="none",u.displayOptions.columnMovable=!1,u.displayOptions.rowHeight=30,u.displayOptions.emptyMessage="\uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",u.editOptions.insertable=!0,u.editOptions.appendable=!1,u.onCellEdited=async t=>{t.commit();const e=t.getCurrent(),r=t.getValue(e.itemIndex,e.column);e.column==="OrderYn"?r==="Y"&&(s.setValue(e.dataRow,"OutsourcingYn","N"),s.setValue(e.dataRow,"AgencyYn","N"),s.setValue(e.dataRow,"AbroadYn","N")):e.column==="OutsourcingYn"?r==="Y"&&(s.setValue(e.dataRow,"OrderYn","N"),s.setValue(e.dataRow,"AgencyYn","N"),s.setValue(e.dataRow,"AbroadYn","N")):e.column==="AgencyYn"?r==="Y"&&(s.setValue(e.dataRow,"OrderYn","N"),s.setValue(e.dataRow,"OutsourcingYn","N"),s.setValue(e.dataRow,"AbroadYn","N")):e.column==="AbroadYn"&&r==="Y"&&(s.setValue(e.dataRow,"OrderYn","N"),s.setValue(e.dataRow,"OutsourcingYn","N"),s.setValue(e.dataRow,"AgencyYn","N"))}},h=t=>x+"_"+t,k=t=>{m(e=>({...e,frDate:t}))},M=t=>{m(e=>({...e,toDate:t}))},b=(t,e)=>{m(r=>({...r,[e]:t}))},V=async()=>{m({frDate:new Date("2020-01-01"),toDate:new Date,custCd:"",custNm:"",userId:"",userNm:"",modId:T.user.userId,modDate:c(new Date).format("YYYY-MM-DD"),AuthYn:""}),B(!1);const t=c().add(1,"d");m(e=>({...e,toDate:t.toDate()}))},D=async()=>{if(u.commit(),!c(d.frDate,"YYYY-MM-DD").isValid()||!c(d.toDate,"YYYY-MM-DD").isValid()){i({visible:!0,desc:"\uAC80\uC0C9\uAE30\uAC04\uC744 \uBC14\uB974\uAC8C \uC785\uB825\uD574 \uC8FC\uC138\uC694."});return}if(c(d.frDate).format("YYYYMMDD")>c(d.toDate).format("YYYYMMDD")){i({visible:!0,desc:"\uAC80\uC0C9\uAE30\uAC04\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."});return}let t={...d};t.frDate=c(t.frDate).format("YYYYMMDD"),t.toDate=c(t.toDate).format("YYYYMMDD");try{let e=await Y.get("/@api/admin/authlist/selectByList",{params:t});I(),s.setRows(e.data)}catch(e){e.response.status===404?i({visible:!0,desc:"\uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}):i({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},S=async()=>{u.commit();const t=s.getStateRows("updated");let e=[];if(t.length<1){i({visible:!0,desc:"\uC800\uC7A5 \uD560 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."});return}t.forEach(r=>{const C=s.getJsonRow(r);e.push(C)});try{const C=(await Y.post("/@api/admin/authlist/updateByList",{data:e})).data;if(C.errormess){i({visible:!0,desc:C.errmess,type:"E"});return}else i({visible:!0,desc:"\uD68C\uC6D0 \uC815\uBCF4\uB97C \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4."});D()}catch{i({visible:!0,desc:"\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. "});return}},R=async()=>{const t=u.getCheckedItems(!0);let e=[];if(t.forEach(r=>{const C=s.getJsonRow(r);e.push(C)}),e.length)g({visible:!0,desc:"\uC120\uD0DD\uD558\uC2E0 \uD68C\uC6D0\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"DELETE"});else{i({visible:!0,desc:"\uC0AD\uC81C \uD560 \uD68C\uC6D0\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694. "});return}},O=async()=>{if(g({visible:!1,desc:"",id:""}),E.id==="DELETE"){const t=u.getCheckedItems(!0);let e=[];t.forEach(r=>{const C=s.getJsonRow(r);e.push(C)});try{const C=(await Y.post("/@api/admin/authlist/deleteByList",{data:e})).data;if(C.errormess){i({visible:!0,desc:C.errmess,type:"E"});return}else i({visible:!0,desc:"\uC120\uD0DD\uD55C \uD68C\uC6D0\uC744 \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4."});D()}catch{i({visible:!0,desc:"\uD68C\uC6D0 \uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4. "});return}}},I=()=>{u.orderBy([],[])},F=()=>{A?(B(!1),m({...d,AuthYn:""})):(B(!0),m({...d,AuthYn:"N"}))};return p.exports.useEffect(()=>{f.HotKey&&f.HotKey.pgmid===x&&(f.HotKey.key==="NEW"&&V(),f.HotKey.key==="SEARCH"&&D(),f.HotKey.key==="SAVE"&&S())},[f.HotKey]),p.exports.useEffect(()=>{const t=c().add(1,"d");m(e=>({...e,toDate:t.toDate()})),v()},[]),a.createElement(a.Fragment,null,a.createElement(K,{pgmid:x,visible:"11110",onSearch:D,onSave:S,onNew:V,onDelete:R}),a.createElement(P,{className:"mainCon"},a.createElement(o,{style:{width:"100%",height:50,backgroundColor:"#f9f9f9",borderRadius:"5px",display:"flex",flexDirection:"row",padding:5}},a.createElement(o,{style:{display:"flex",alignItems:"center"}},a.createElement(o,{className:n.S1},a.createElement(o,{className:n.S2},"\uAC70\uB798\uCC98\uBA85")),a.createElement(y.exports.TextBox,{placeholder:"\uAC70\uB798\uCC98\uBA85",className:n.S4,value:d.custNm,onChange:t=>b(t,"custNm")}),a.createElement(o,{className:n.S5},a.createElement(o,{className:n.S2},"\uC0AC\uC6A9\uC790\uBA85")),a.createElement(y.exports.TextBox,{placeholder:"\uC0AC\uC6A9\uC790\uBA85",className:n.S4,value:d.userNm,onChange:t=>b(t,"userNm")}),a.createElement(o,{className:n.S5},a.createElement(o,{className:n.S2},"\uD68C\uC6D0\uAC00\uC785\uC77C\uC790")),a.createElement(o,{style:{display:"flex",alignItems:"center"}},a.createElement(y.exports.DateBox,{style:{width:110,height:25},className:n.S3,inputId:h("frDate"),lo:"ko",format:"yyyy-MM-dd",panelStyle:{width:250,height:250},value:d.frDate,onChange:t=>k(t),currentText:"\uC624\uB298",closeText:"\uB2EB\uAE30",okText:"\uD655\uC778"}),a.createElement(o,{style:{margin:"0 10px",width:"10px"}},"~"),a.createElement(y.exports.DateBox,{style:{width:110,height:25},className:n.S3,inputId:h("toDate"),format:"yyyy-MM-dd",panelStyle:{width:250,height:250},value:d.toDate,onChange:t=>M(t),currentText:"\uC624\uB298",closeText:"\uB2EB\uAE30",okText:"\uD655\uC778"})),a.createElement(o,{className:n.S5},a.createElement(o,{className:n.S2},"\uD68C\uC6D0\uC2B9\uC778\uC720\uBB34")),a.createElement(o,{className:n.BoxAlignStyle,onClick:()=>F()},a.createElement(o,{style:{display:"flex",alignItems:"center",margin:"2px 0px 4px 0px",width:"200px",height:"25px"}},a.createElement(y.exports.CheckBox,{inputId:h("chkValue"),checked:A,value:A}),a.createElement(y.exports.Label,{style:{margin:"0 5px",width:200,fontSize:"12px"}},"\uC2B9\uC778 \uC548\uB41C \uD68C\uC6D0 \uC870\uD68C"))))),a.createElement(o,{ref:w,key:h("Grid1"),id:h("Grid1"),style:{width:"100%",height:720,marginTop:5}})),a.createElement(G,{visible:N.visible,description:N.desc,type:N.type,onConfirm:()=>i({visible:!1})}),a.createElement(H,{visible:E.visible,description:E.desc,onCancel:()=>g({visible:!1}),onConfirm:O}))});let s,u;const W=L({S1:{margin:"3px 10px",backgroundColor:"#e0ecff",color:"#163971",padding:5,height:25,fontSize:"12px",display:"flex",alignItems:"center",width:110,fontWeight:600},S2:{width:100},S3:{"& .textbox-text":{fontSize:"12px"},"& .textbox":{fontSize:"12px"},"& .combo-arrow":{backgroundImage:`url(${z})`,backgroundRepeat:"no-repeat",backgroundColor:"#ffffff!important",height:12}},S4:{width:185,height:25,"& input":{fontSize:"12px !important"}},S5:{margin:"3px 10px 3px 20px",backgroundColor:"#e0ecff",color:"#163971",padding:5,height:25,fontSize:"12px",display:"flex",alignItems:"center",width:110,fontWeight:600}});export{Q as default};
