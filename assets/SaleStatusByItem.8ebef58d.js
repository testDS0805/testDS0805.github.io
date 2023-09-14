import{r as p,R as t}from"./index.da6908f5.js";import{m as o,h as T,o as G,B as C,c as U,u as v,U as R,P,r as B,A as W,C as Y}from"./App.11263b70.js";import{C as L}from"./CommonButton.0b792d77.js";import{C as I}from"./CommonDatePicker.d7bc57f8.js";import{C as g}from"./CodeHelperPopup.3932fdb9.js";import"./index.6f186c21.js";const X=[{fieldName:"exptype",dataType:o.exports.ValueType.TEXT},{fieldName:"Goodtypenm",dataType:o.exports.ValueType.TEXT},{fieldName:"class2nm",dataType:o.exports.ValueType.TEXT},{fieldName:"class3nm",dataType:o.exports.ValueType.TEXT},{fieldName:"class4nm",dataType:o.exports.ValueType.TEXT},{fieldName:"class5nm",dataType:o.exports.ValueType.TEXT},{fieldName:"goodno",dataType:o.exports.ValueType.TEXT},{fieldName:"_Goodno",dataType:o.exports.ValueType.TEXT},{fieldName:"goodnm",dataType:o.exports.ValueType.TEXT},{fieldName:"spec",dataType:o.exports.ValueType.TEXT},{fieldName:"qty",dataType:o.exports.ValueType.NUMBER},{fieldName:"koramt",dataType:o.exports.ValueType.NUMBER},{fieldName:"tax",dataType:o.exports.ValueType.NUMBER},{fieldName:"totalamt",dataType:o.exports.ValueType.NUMBER}],O=[{name:"exptype",fieldName:"exptype",type:"data",width:"75",header:{text:"\uB0B4\uC218/\uC218\uCD9C",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"center-column"},{name:"Goodtypenm",fieldName:"Goodtypenm",type:"data",width:"90",header:{text:"\uC790\uC0B0\uAD6C\uBD84",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"center-column"},{name:"class2nm",fieldName:"class2nm",type:"data",width:"130",header:{text:"\uB300\uBD84\uB958",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"class3nm",fieldName:"class3nm",type:"data",width:"130",header:{text:"\uC911\uBD84\uB958",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"class4nm",fieldName:"class4nm",type:"data",width:"130",header:{text:"\uC18C\uBD84\uB958",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"class5nm",fieldName:"class5nm",type:"data",width:"130",header:{text:"\uC7AC\uC9C8",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"_Goodno",fieldName:"_Goodno",type:"data",width:"150",header:{text:"\uD488\uBC88",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"goodnm",fieldName:"goodnm",type:"data",width:"150",header:{text:"\uD488\uBA85",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"spec",fieldName:"spec",type:"data",width:"120",header:{text:"\uADDC\uACA9",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"qty",fieldName:"qty",type:"data",width:"90",header:{text:"\uC218\uB7C9",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"right-column",numberFormat:"#,###"},{name:"koramt",fieldName:"koramt",type:"data",width:"90",header:{text:"\uACF5\uAE09\uAC00\uC561",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"right-column",numberFormat:"#,###"},{name:"tax",fieldName:"tax",type:"data",width:"90",header:{text:"\uBD80\uAC00\uC138",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"right-column",numberFormat:"#,###"},{name:"totalamt",fieldName:"totalamt",type:"data",width:"90",header:{text:"\uD569\uACC4\uAE08\uC561",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"right-column",numberFormat:"#,###"}],$={DateTitleBox:{margin:"5px 10px 0px 15px",backgroundColor:"#e0ecff",padding:5,color:"#163971",height:25,fontSize:"12px",display:"flex",width:85,alignItems:"center",fontWeight:600},TitleBox4:{backgroundColor:"#fccf76",color:"#163971",padding:5,height:20,fontSize:"12px",display:"flex",alignItems:"center",width:"100%",fontWeight:600},TitleText3:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},InputBox3:{width:120,height:25,"& input":{fontSize:"12px !important"}},Scroll:{"& .mainCon":{height:"700px",padding:"10px"}},SA1:{width:80,height:25,margin:"3px 3px",backgroundColor:"#e0ecff",color:"#163971",paddingTop:3,fontSize:"12px",alignItems:"center",fontWeight:600,display:"flex"},SA2:{marginTop:-2,marginLeft:5,alignItems:"center",textAlign:"center"},SA3:{width:"15px!important",height:"15px!important",border:"1px solid #3c96ff",marginTop:"1px","& .checkbox-checked":{border:0,background:"#3c96ff"}},SA4:{width:90,height:25,"& input":{fontSize:"12px !important"}},SA5:{marginLeft:5,width:140,height:25,"& input":{fontSize:"12px !important"}},SA6:{width:70,height:25,margin:"3px 3px",backgroundColor:"#fccf76",color:"#163971",padding:5,fontSize:"12px",alignItems:"center",fontWeight:600},SB1:{width:253,height:32,"& input":{fontSize:"16px !important",textAlign:"center",color:"#0070c0"}},SB2:{fontSize:12,paddingBottom:2,fontWeight:500},SC1:{width:90,height:25,margin:"3px 10px",backgroundColor:"#e0ecff",color:"#163971",padding:5,fontSize:"12px",alignItems:"center",fontWeight:600,display:"flex"},SC2:{width:80},SC3:{width:200,height:25,"& input":{fontSize:"12px !important"}},SC4:{width:200,height:25,"& input":{fontSize:"12px !important",textAlign:"right"}},SC5:{fontSize:12,paddingBottom:2,fontWeight:500,marginLeft:5},SC6:{width:150,height:25,"& input":{fontSize:"12px !important",textAlign:"center"}},SC7:{width:80,height:29,margin:"3px 1px",backgroundColor:"#e0ecff",color:"#163971",padding:5,fontSize:"12px",alignItems:"center",fontWeight:600,display:"flex"},SC8:{"& textarea":{fontSize:"12px !important"}}};function K(){const[e,n]=p.exports.useState({SchFrDate:new Date,SchToDate:new Date,GoodType:"",GoodTypeNm:"",Class2:"",Class2Nm:"",Class3:"",Class3Nm:"",Class4:"",Class4Nm:"",Class5:"",Class5Nm:""}),[r,l]=p.exports.useState(""),[a,s]=p.exports.useState({visible:!1,desc:"",type:"N"}),[h,d]=p.exports.useState({visible:!1,desc:"",id:""});return String.prototype.DateValidation=function(c){return new Date(this)instanceof Date&&!isNaN(new Date(this))?T(this).format(c):null},{searchVO:e,setSearchVO:n,gridFocus:r,setGridFocus:l,alert:a,setAlert:s,confirm:h,setConfirm:d}}const _=async(e,n)=>{e({SchFrDate:T().startOf("month"),SchToDate:new Date,GoodType:"",GoodTypeNm:"",Class2:"",Class2Nm:"",Class3:"",Class3Nm:"",Class4:"",Class4Nm:"",Class5:"",Class5Nm:""},50)},q=async(e,n,r)=>{const l={...e};l.Accunit=r.User.user.accunit,l.Factory=r.User.user.factory,l.SchFrDate=T(l.SchFrDate).format("YYYYMMDD"),l.SchToDate=T(l.SchToDate).format("YYYYMMDD");try{const a=await r.Util.Command.fSearchByReturn("/@api/business/saleStatusByItem/selectByList",l);a===void 0||a.length<1?(r.setAlert({visible:!0,desc:"\uC870\uD68C\uAC12\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}),n.clearRows()):n.setRows(a)}catch(a){r.setAlert({visible:!0,desc:`\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.
${a}`,type:"E"})}},j=G(e=>{const n=p.exports.useRef(null),r=async()=>{e.Util.Grid.fContainerInit(e.Util.Common.fMakeId(e.Id)),w=new o.exports.LocalDataProvider(!1),u=new o.exports.GridView(n.current),e.Util.Grid.fInitGridHeader(u,w,e.GridFields,e.GridColumns,25,a,l,s),u.setRowIndicator({visible:!1}),u.setFooters({visible:!0}),u.onItemChecked=()=>{e.setGridFocus("R")},u.onContextMenuItemClicked=async(h,d)=>{d.label==="\uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC"&&w.getRowCount()&&u.exportGrid({compatibility:!0,type:"excel",target:"local",applyDynamicStyles:!0,fileName:`HSE \uD488\uBAA9\uBCC4\uB9E4\uCD9C\uD604\uD669(\uC0C1\uC138)_${T(new Date).format("YYYYMMDD")}.xlsx`})},e.DataProviderBind(w),e.GridViewBind(u)},l=async(h,d)=>{},a=async(h,d,c)=>{},s=async(h,d)=>{switch(e.setGridFocus("R"),d.key){case"Enter":break;case"Escape":break;case"Insert":break;case"ArrowDown":break;case"ArrowUp":break;case(d.ctrlKey&&" "):break}};return p.exports.useEffect(()=>{r()},[e.GridColumns]),t.createElement(t.Fragment,null,t.createElement(C,{ref:n,key:e.Util.Common.fMakeId(e.Id),id:e.Util.Common.fMakeId(e.Id),style:{width:"100%",height:708}}))});let w,u;const oe=G(()=>{const e="SALESTATUSBYITEM",{$CommonStore:n,$UserStore:r}=v(),l=J(),{searchVO:a,setSearchVO:s,gridFocus:h,setGridFocus:d,alert:c,setAlert:S,confirm:N,setConfirm:D}=K(),i=new R(e,S,!0,!0,!0,!0,!0),V=p.exports.useRef(0),E=async()=>{n.fSetBinding(!0),await _(s),n.fSetBinding(!1),i.Common.fSetTabIndex()},[k]=p.exports.useState({Util:i,User:r,fInit:E,setAlert:S}),F=m=>{A=m},M=m=>{},z=async()=>{D({visible:!1,desc:"",id:""}),N.id},H=()=>{D({visible:!1,desc:"",id:""})},f=(m,x,y)=>{if(!n.fGetBinding())switch(m){case"GoodType":i.Common.fMultiFieldChange(s,{GoodType:x,GoodTypeNm:y});break;case"Class2":i.Common.fMultiFieldChange(s,{Class2:x,Class2Nm:y});break;case"Class3":i.Common.fMultiFieldChange(s,{Class3:x,Class3Nm:y});break;case"Class4":i.Common.fMultiFieldChange(s,{Class4:x,Class4Nm:y});break;case"Class5":i.Common.fMultiFieldChange(s,{Class5:x,Class5Nm:y});break}},b=async()=>{await q(a,A,k)};return p.exports.useEffect(()=>{i.Common.fHotKey(n,n.isPopup,null,b)},[n.HotKey]),p.exports.useEffect(()=>{E()},[]),t.createElement(t.Fragment,null,t.createElement(L,{pgmid:e,visible:"010000",onSearch:b}),t.createElement(P,{className:"mainCon"},t.createElement(B.exports.Layout,{style:{width:"100%",height:775}},t.createElement(B.exports.LayoutPanel,{region:"north",style:{height:"8.5%"}},t.createElement(C,{style:{display:"flex",alignItems:"center"}},t.createElement(C,{className:l.SA1,style:{marginLeft:15}},t.createElement(C,{className:l.SA2},"\uAE30\uAC04")),t.createElement(I,{inputeCls:"inputCls",selected:a.SchFrDate,inputId:i.Common.fMakeId("SchFrDate"),onHandleDateChange:m=>i.Common.fFieldChange(s,"SchFrDate",m)}),t.createElement(C,{style:{margin:"0 3px",width:"10px"}},"~"),t.createElement(I,{inputeCls:"inputCls",selected:a.SchToDate,inputId:i.Common.fMakeId("SchToDate"),onHandleDateChange:m=>i.Common.fFieldChange(s,"SchToDate",m)})),t.createElement(C,{style:{display:"flex",alignItems:"center"}},t.createElement(g,{inputCls:"inputCls",pgmid:e,inputType:"",id:"GoodType",title:"\uC790\uC0B0\uAD6C\uBD84",helper:i.CodeHelper.helperGoodType,ComponentCode:a.GoodType,ComponentValue:a.GoodTypeNm,SetValue:f,labelStyles:{width:80,height:25,margin:"1px 3px 4px 15px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:127.5,height:25,margin:"1px 0px 4px 0px"}}),t.createElement(g,{inputCls:"inputCls",pgmid:e,inputType:"",id:"Class2",title:"\uB300\uBD84\uB958",helper:i.CodeHelper.helperClass2,ComponentCode:a.Class2,ComponentValue:a.Class2Nm,SetValue:f,labelStyles:{width:80,height:25,margin:"1px 3px 4px 15px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:127.5,height:25,margin:"1px 0px 4px 0px"}}),t.createElement(g,{inputCls:"inputCls",pgmid:e,inputType:"",id:"Class3",title:"\uC911\uBD84\uB958",helper:i.CodeHelper.helperClass3,ComponentCode:a.Class3,ComponentValue:a.Class3Nm,SetValue:f,labelStyles:{width:80,height:25,margin:"1px 3px 4px 15px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:127.5,height:25,margin:"1px 0px 4px 0px"}}),t.createElement(g,{inputCls:"inputCls",pgmid:e,inputType:"",id:"Class4",title:"\uC18C\uBD84\uB958",helper:i.CodeHelper.helperClass4,ComponentCode:a.Class4,ComponentValue:a.Class4Nm,SetValue:f,labelStyles:{width:80,height:25,margin:"1px 3px 4px 15px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:127.5,height:25,margin:"1px 0px 4px 0px"}}),t.createElement(g,{inputCls:"inputCls",pgmid:e,inputType:"",id:"Class5",title:"\uC7AC\uC9C8",helper:i.CodeHelper.helperClass5,ComponentCode:a.Class5,ComponentValue:a.Class5Nm,SetValue:f,labelStyles:{width:80,height:25,margin:"1px 3px 4px 15px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:127.5,height:25,margin:"1px 0px 4px 0px"}}))),t.createElement(B.exports.LayoutPanel,{region:"center",split:!0,style:{width:"100%",height:"100%"}},t.createElement(C,{style:{width:"100%"}},t.createElement(j,{Util:i,Id:"HeaderGrid",GridTitle:"Main",GridFields:X,GridColumns:O,currentIndex:V,setGridFocus:d,setAlert:S,DataProviderBind:F,GridViewBind:M}))))),t.createElement(W,{visible:c.visible,description:c.desc,type:c.type,onConfirm:()=>S({visible:!1})}),t.createElement(Y,{visible:N.visible,description:N.desc,onCancel:H,onConfirm:z}))});let A;const J=U($);export{oe as default};