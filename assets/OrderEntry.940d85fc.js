import{r as C,R as e}from"./index.da6908f5.js";import{m as g,i as We,o as Oe,c as ze,u as je,h as V,s as qe,U as He,P as Ke,B as s,r as o,aa as oe,a5 as Je,a3 as $e,a6 as Ze,a7 as Xe,a8 as et,ab as tt,ac as ce,A as de,C as st,t as ut,d as x}from"./App.11263b70.js";import{C as at}from"./CommonDatePicker.d7bc57f8.js";import{C as $}from"./CodeHelperTextBox.44393744.js";import{C as it}from"./CommonButton.0b792d77.js";import{T as lt}from"./Toast.7cbbb43f.js";import"./index.6f186c21.js";const nt=[{fieldName:"GoodNo"},{fieldName:"Goodcd"},{fieldName:"StkQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"AssemQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"AcceptQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"PossQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"MinQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"AddQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"MaxQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"GoodTypeNm"},{fieldName:"Class2Nm"},{fieldName:"Class3Nm"},{fieldName:"Class4Nm"},{fieldName:"Class5Nm"},{fieldName:"GoodNm"},{fieldName:"Spec"},{fieldName:"Weight",dataType:g.exports.ValueType.NUMBER},{fieldName:"Box2_Weight",dataType:g.exports.ValueType.NUMBER},{fieldName:"Box_Kind_LNL"},{fieldName:"SUS316_Price",dataType:g.exports.ValueType.NUMBER},{fieldName:"SUS316_Price_2"},{fieldName:"DiscountRate"}],Ct=[{name:"GoodTypeNm",fieldName:"GoodTypeNm",header:{text:"\uAD6C\uBD84"},width:60,editable:!1},{name:"GoodNo",fieldName:"GoodNo",header:{text:"\uD488\uBC88"},width:180,editable:!1,styleName:"left-column"},{name:"Spec",fieldName:"Spec",header:{text:"\uADDC\uACA9"},width:220,editable:!1,styleName:"left-column"},{name:"GoodNm",fieldName:"GoodNm",header:{text:"\uD488\uBA85"},renderer:{type:"text",showTooltip:!0},width:220,editable:!1,styleName:"left-column"},{name:"Class5Nm",fieldName:"Class5Nm",header:{text:"\uC7AC\uC9C8"},editable:!1,styleName:"left-column"},{name:"SUS316_Price",fieldName:"SUS316_Price",header:{text:"\uD611\uAC00"},editable:!1,numberFormat:"#,##0",styleName:"right-column  rg-semired-color"},{name:"StkQty",fieldName:"StkQty",header:{text:"\uC7AC\uACE0\uC218\uB7C9"},numberFormat:"#,##0",styleName:"right-column",editable:!1},{name:"AssemQty",fieldName:"AssemQty",header:{text:"\uC870\uB9BD\uAC00\uB2A5\uC218\uB7C9"},numberFormat:"#,##0",styleName:"right-column",editable:!1},{name:"AcceptQty",fieldName:"AcceptQty",header:{text:"\uAE30\uBC1C\uC8FC\uB7C9"},numberFormat:"#,##0",styleName:"right-column",editable:!1},{name:"PossQty",fieldName:"PossQty",header:{text:"\uC8FC\uBB38\uAC00\uB2A5\uC218\uB7C9"},numberFormat:"#,##0",styleName:"right-column rg-semired-color",editable:!1},{name:"Box2_Weight",fieldName:"Box2_Weight",header:{text:"\uBC15\uC2A4\uD3EC\uC7A5\uC218\uB7C9"},numberFormat:"#,##0",styleName:"right-column",editable:!1},{name:"Weight",fieldName:"Weight",header:{text:"\uB2E8\uC911(g)"},numberFormat:"#,##0.00",styleName:"right-column",editable:!1}],rt=[{fieldName:"GoodNo"},{fieldName:"Goodcd"},{fieldName:"StkQty"},{fieldName:"AssemQty"},{fieldName:"AcceptQty"},{fieldName:"PossQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"MinQty"},{fieldName:"AddQty"},{fieldName:"MaxQty"},{fieldName:"GoodTypeNm"},{fieldName:"Class2Nm"},{fieldName:"Class3Nm"},{fieldName:"Class4Nm"},{fieldName:"Class5Nm"},{fieldName:"GoodNm"},{fieldName:"Spec"},{fieldName:"Box2_Weight"},{fieldName:"Box_Kind_LNL"},{fieldName:"SUS316_Price",dataType:g.exports.ValueType.NUMBER},{fieldName:"SUS316_Price_2"},{fieldName:"PmsQty",dataType:g.exports.ValueType.NUMBER},{fieldName:"AcceptWebSeq"},{fieldName:"FixYn"},{fieldName:"DiscountRate"},{fieldName:"UnitPrice",dataType:g.exports.ValueType.NUMBER,valueCallback:function(E,B,i,c,A){if(A[c.indexOf("GoodNm")]==="TUBE")return 0;{const L=A[c.indexOf("DiscountRate")],N=A[c.indexOf("SUS316_Price")];return Math.round(Math.round(N*(L/100))/10)*10}}},{fieldName:"TotalPrice",dataType:g.exports.ValueType.NUMBER,valueCallback:function(E,B,i,c,A){const v=A[c.indexOf("UnitPrice")],L=A[c.indexOf("SUS316_Price")],N=A[c.indexOf("PmsQty")];return v>0?v*N:L*N}}],ot=[{name:"GoodNo",fieldName:"GoodNo",header:{text:"\uD488\uBC88"},width:110,editable:!1,styleName:"left-column"},{name:"GoodNm",fieldName:"GoodNm",header:{text:"\uD488\uBA85"},width:110,editable:!1,styleName:"left-column"},{name:"Spec",fieldName:"Spec",header:{text:"\uADDC\uACA9"},width:110,editable:!1,styleName:"left-column"},{name:"Class5Nm",fieldName:"Class5Nm",header:{text:"\uC7AC\uC9C8"},width:80,editable:!1,styleName:"left-column"},{name:"PossQty",fieldName:"PossQty",header:{text:"\uC8FC\uBB38\uAC00\uB2A5\uC218\uB7C9"},width:60,editable:!1,numberFormat:"#,##0",styleName:"right-column rg-semired-color",styleCallback:function(E,B){let i={};const c=E.getValue(B.index.itemIndex,"FixYn");return c==="\uD655\uC815"?"right-column rg-gray-color":c==="\uCDE8\uC18C"?"right-column rg-pink-color":c==="\uBCF4\uB958"?"right-column rg-green-color":i},footer:{numberFormat:"#,##0",expression:"sum"}},{name:"PmsQty",fieldName:"PmsQty",header:{text:"\uC8FC\uBB38\uB7C9"},width:60,editable:!0,numberFormat:"#,##0",styleName:"right-column rg-text-red-color",editor:{type:"number"},footer:{numberFormat:"#,##0",expression:"sum"}},{name:"SUS316_Price",fieldName:"SUS316_Price",header:{text:"\uD611\uAC00"},width:60,editable:!1,numberFormat:"#,##0",styleName:"right-column rg-semired-color",styleCallback:function(E,B){let i={};const c=E.getValue(B.index.itemIndex,"FixYn");return c==="\uD655\uC815"?"right-column rg-gray-color":c==="\uCDE8\uC18C"?"right-column rg-pink-color":c==="\uBCF4\uB958"?"right-column rg-green-color":i}},{name:"UnitPrice",fieldName:"UnitPrice",header:{text:"\uB2E8\uAC00"},width:60,editable:!1,styleName:"right-column",editor:{type:"number"},numberFormat:"#,##0"},{name:"TotalPrice",fieldName:"TotalPrice",header:{text:"\uC608\uC0C1\uD569\uACC4"},width:80,editable:!1,styleName:"right-column",editor:{type:"number"},footer:{numberFormat:"#,##0",expression:"sum"},numberFormat:"#,##0"},{name:"DiscountRate",fieldName:"DiscountRate",header:{text:"\uC694\uC728"},editor:{type:"number"},styleName:"right-column",width:60,editable:!0,displayCallback:function(E,B,i){return i?i+"%":"0%"}}],ct={S1:{margin:"3px 10px",backgroundColor:"#e0ecff",color:"#163971",padding:5,height:25,fontSize:"12px",display:"flex",alignItems:"center",width:90,fontWeight:600},S2:{width:80},S3:{"& .textbox-text":{fontSize:"12px"},"& .textbox":{fontSize:"12px"},"& .combo-arrow":{backgroundImage:`url(${We})`,backgroundRepeat:"no-repeat",backgroundColor:"#ffffff!important",height:12}},S4:{width:185,height:25,"& input":{fontSize:"12px !important"}},S5:{width:100,height:25,"& input":{fontSize:"12px !important"}},S7:{"& .tabs-header, .tabs-tool":{background:"#fff"},"& .tabs-panels":{borderBottomWidth:"0px"}}},St=Oe(()=>{const{$CommonStore:E,$UserStore:B}=je(),i=dt(),c="AGENCYORDERENTRY",A=C.exports.useRef(null),v=C.exports.useRef(null),L=C.exports.useRef(0),N=C.exports.useRef(null),[ue]=C.exports.useState(B.fCheckAuth(`${c}|SEARCH`)),[p,P]=C.exports.useState({SchAccunit:"001",SchFactory:"00A",SchGoodno:"",SchYmd:V(new Date).format("YYYYMMDD"),SchGoodtype:"055004",SchClass2:"",SchClass2Nm:"",SchClass3:"",SchClass3Nm:"",SchClass4:"",SchClass4Nm:"",SchClass5:"",SchClass5Nm:"",SchCustCd:B.user.custcd,SchUserID:B.user.userid}),[y,U]=C.exports.useState({info1:"",info2:"",info3:"",info4:"",info5:"",info6:"",info7:""}),[k,Y]=C.exports.useState({mtr:"N",testreport:"N",millsheet:"N",coc:"N",dimension:"N"}),[Z]=C.exports.useState([{value:"N",text:"N"},{value:"Y",text:"Y"}]),[_,ae]=C.exports.useState(new Date),[G,j]=C.exports.useState(""),[D,I]=C.exports.useState(""),[W,ie]=C.exports.useState([]),[me,fe]=C.exports.useState([]),[Be,pe]=C.exports.useState([]),[he,ye]=C.exports.useState([]),[X,O]=C.exports.useState({visible:!1,desc:"",type:"N"}),[ee,r]=C.exports.useState({visible:!1,desc:"",type:"N"}),[te,le]=C.exports.useState({visible:!1,desc:"",type:"N"}),[M,T]=C.exports.useState({visible:!1,desc:"",id:""}),l=new ut(c,r),S=new qe,[ge,ne]=C.exports.useState(S.helperClass3),[Se,q]=C.exports.useState(S.helperClass4),Ne=new He(c,r,!0,!0,!0,!0,!0),De=()=>{w=new g.exports.LocalDataProvider(!1),h=new g.exports.GridView(A.current),h.setDataSource(w),w.setFields(nt),h.setColumns(Ct),h.setCheckBar({visible:!0,width:35}),h.setStateBar({visible:!1}),h.setFooters({visible:!1}),h.setRowIndicator({visible:!0}),h.setCopyOptions({singleMode:!0,enabled:!0}),h.displayOptions.selectionStyle="singleRow",h.setDisplayOptions({fitStyle:"evenFill",rowHeight:25}),h.setOptions({summaryMode:"aggregate"}),h.setEditOptions({insertable:!1,editable:!1}),h.setContextMenu([{label:"\uD488\uBC88 \uCD94\uAC00"}]),h.onContextMenuPopup=(t,u,a,m)=>m===void 0?!1:m.cellType==="data",h.onContextMenuItemClicked=async(t,u,a)=>{const m=h.getDataRow(a.itemIndex);Pe(m)}},xe=()=>{d=new g.exports.LocalDataProvider(!1),f=new g.exports.GridView(v.current),f.setDataSource(d),d.setFields(rt),f.setColumns(ot),f.setCheckBar({visible:!0,width:35}),f.setCopyOptions({singleMode:!0,enabled:!0}),f.setDisplayOptions({fitStyle:"evenFill",rowHeight:25}),f.setOptions({summaryMode:"aggregate"}),f.setEditOptions({insertable:!1,editable:!0}),f.onCellEdited=t=>{t.commit()},f.setRowStyleCallback(function(t,u){const a=t.getValue(u.index,"FixYn");if(a==="\uD655\uC815")return"rg-gray-color";if(a==="\uCDE8\uC18C")return"rg-pink-color";if(a==="\uBCF4\uB958")return"rg-green-color"})},Ee=()=>{setTimeout(()=>{l.fSetTabIndex()},300)},R=(t,u)=>{l.fFieldChange(U,t,u),(u==="342002"||u==="342003")&&l.fFieldChange(U,"info6","")},H=async t=>{E.Codeclass.inputType!=="DEL"&&E.Codeclass.inputType!=="INSERT"&&setTimeout(()=>{l.fMakeFocus(t)},10),Ae(t,E.Codeclass.selData)},Ae=(t,u)=>{switch(t){case"SchClass2Nm":l.fMultiFieldChange(P,{SchClass2:l.fTrim(u.minorcd),SchClass2Nm:l.fTrim(u.minornm),SchClass3:"",SchClass3Nm:"",SchClass4:"",SchClass4Nm:""}),u.minorcd?(ne(S.fRedefHelper(S.helperClass3,{iInId:"AGENT062",iInCode1:"061",iInCode2:u.minorcd})),q(S.fRedefHelper(S.helperClass4,{iInId:"AGENT062",iInCode1:"062",iInCode2:""}))):(ne(S.fRedefHelper(S.helperClass3,{iInId:"AGENT062",iInCode1:"061",iInCode2:""})),q(S.fRedefHelper(S.helperClass4,{iInId:"AGENT062",iInCode1:"062",iInCode2:""})));break;case"SchClass3Nm":l.fMultiFieldChange(P,{SchClass3:l.fTrim(u.minorcd),SchClass3Nm:l.fTrim(u.minornm),SchClass4:"",SchClass4Nm:""}),u.minorcd?q(S.fRedefHelper(S.helperClass4,{iInId:"AGENT062",iInCode1:"062",iInCode2:u.minorcd})):q(S.fRedefHelper(S.helperClass4,{iInId:"AGENT062",iInCode1:"062",iInCode2:""}));break;case"SchClass4Nm":l.fMultiFieldChange(P,{SchClass4:l.fTrim(u.minorcd),SchClass4Nm:l.fTrim(u.minornm)});break;case"SchClass5Nm":l.fMultiFieldChange(P,{SchClass5:l.fTrim(u.minorcd),SchClass5Nm:l.fTrim(u.minornm)});break}},K=()=>{Y({mtr:"N",testreport:"N",millsheet:"N",coc:"N",distension:"N"})},be=async()=>{try{const u=(await x.get("/@api/agency/orderentry/selectByArrivalInfo",{params:{CustCd:p.SchCustCd,UserId:p.SchUserID}})).data;u?l.fMultiFieldChange(U,{info1:u.info1?u.info1:"",info2:u.info2?u.info2:"",info3:u.info3?u.info3:"",info4:u.info4?u.info4:"",info5:u.info5?u.info5:"",info6:u.info6?u.info6:"",info7:u.info7?u.info7:"073006"}):l.fMultiFieldChange(U,{info1:"",info2:"",info3:"",info4:"",info5:"",info6:"",info7:""})}catch{r({visible:!0,desc:"\uB0A9\uD488\uBAA9\uB85D \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}},we=async()=>{try{const u=(await x.get("/@api/agency/orderentry/selectByInfo4")).data;u?fe(u):r({visible:!0,desc:"\uBC30\uC1A1\uAD6C\uBD84 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}catch{r({visible:!0,desc:"\uBC30\uC1A1\uAD6C\uBD84 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}},Fe=async()=>{try{const u=(await x.get("/@api/agency/orderentry/selectByInfo6")).data;u?pe(u):r({visible:!0,desc:"\uD654\uBB3C\uBE44\uAD6C\uBD84 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}catch{r({visible:!0,desc:"\uD654\uBB3C\uBE44\uAD6C\uBD84 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}},Ie=async()=>{try{const t=await x.get("/@api/agency/orderentry/selectByInfo7");t.data?ye(t.data):r({visible:!0,desc:"\uC8FC\uBB38\uAD6C\uBD84 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}catch{r({visible:!0,desc:"\uC8FC\uBB38\uAD6C\uBD84 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}},z=async()=>{try{ie([]);const u=(await x.get("/@api/agency/orderentry/selectByPmsseqList",{params:{CustCd:p.SchCustCd,SelDate:V(_).format("YYYYMM")}})).data;u.unshift({value:"NEW",text:"\uC2E0\uADDC"}),ie(u)}catch{r({visible:!0,desc:"\uC8FC\uBB38\uBC88\uD638 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4"})}},se=async()=>{try{const t=await x.get("/@api/agency/orderentry/selectByPmsList",{params:{PmsSeq:D,CustCd:p.SchCustCd}}),a=t.data[0];N.current=a.FixYn,d.setRows(t.data),l.fMultiFieldChange(U,{info1:a.info1?a.info1:"",info2:a.info2?a.info2:"",info3:a.info3?a.info3:"",info4:a.info4?a.info4:"",info5:a.info5?a.info5:"",info6:a.info6?a.info6:"",info7:a.info7?a.info7:"073006"}),l.fMultiFieldChange(Y,{mtr:a.mtr?a.mtr:"N",testreport:a.testreport?a.testreport:"N",millsheet:a.millsheet?a.millsheet:"N",coc:a.coc?a.coc:"N",dimension:a.dimension?a.dimension:"N"})}catch(t){r({visible:!0,desc:"\uB0A9\uD488\uBAA9\uB85D \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."+t})}},Te=async()=>{le({visible:!1}),await B.fSetFlag2("N")},Ce=()=>{l.fMultiFieldChange(P,{SchAccunit:"001",SchFactory:"00A",SchGoodno:"",SchYmd:V(new Date).format("YYYYMMDD"),SchGoodtype:"055004",SchClass2:"",SchClass2Nm:"",SchClass3:"",SchClass3Nm:"",SchClass4:"",SchClass4Nm:"",SchClass5:"",SchClass5Nm:"",SchCustCd:B.user.custcd,SchUserID:B.user.userid}),K(),w.clearRows(),h.orderBy([],[])},J=async()=>{if(p.SchGoodno.length<3&&l.fValidate(!p.SchClass4,"\uD488\uBC88\uCF54\uB4DC\uB97C 3\uC790\uB9AC \uC774\uC0C1 \uD639\uC740 \uC18C\uBD84\uB958\uB97C \uC120\uD0DD\uD558\uC5EC \uC8FC\uC138\uC694."))return;w.clearRows(),h.orderBy([],[]),K();let t={...p};t.SchClass2=t.SchClass2?t.SchClass2:"",t.SchClass2Nm=t.SchClass2Nm?t.SchClass2Nm:"",t.SchClass3=t.SchClass3?t.SchClass3:"",t.SchClass3Nm=t.SchClass3Nm?t.SchClass3Nm:"",t.SchClass4=t.SchClass4?t.SchClass4:"",t.SchClass4Nm=t.SchClass4Nm?t.SchClass4Nm:"",t.SchClass5=t.SchClass5?t.SchClass5:"",t.SchClass5Nm=t.SchClass5Nm?t.SchClass5Nm:"";try{const a=(await x.get("/@api/agency/orderentry/selectByList",{params:t})).data;a?w.setRows(a):r({visible:!0,desc:"\uC870\uD68C\uB41C \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."})}catch{r({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}},Re=async()=>{w.clearRows(),h.orderBy([],[]),K();try{const u=(await x.get("/@api/agency/orderentry/selectByTubeList",{params:p})).data;u?w.setRows(u):r({visible:!0,desc:"\uC870\uD68C\uB41C \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."})}catch{r({visible:!0,desc:"\uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4"});return}},ve=()=>{f.commit();const t=h.getCheckedItems(!0);if(l.fValidate(t.length<1,"\uBC1C\uC8FC \uC815\uBCF4\uB97C \uC120\uD0DD\uD558\uC5EC \uC8FC\uC138\uC694.")||l.fValidate(N.current!=="\uC785\uB825",`${N.current} \uB41C \uC8FC\uBB38\uBC88\uD638\uC5D0\uB294 \uD488\uBC88\uC744 \uCD94\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`))return;const u=d.getJsonRows(0,-1);t.forEach(async a=>{const m=h.getDataRow(a),n=w.getJsonRow(m);if(!u.some(Q=>Q.Goodcd===n.Goodcd)&&N.current==="\uC785\uB825"){const F=(await x.get("/@api/agency/orderentry/selectByRate",{params:{CustCd:p.SchCustCd,Goodcd:n.Goodcd}})).data,b={GoodNo:n.GoodNo,Goodcd:n.Goodcd,StkQty:n.StkQty,AssemQty:n.AssemQty,AcceptQty:n.AcceptQty,PossQty:n.PossQty,PmsQty:0,MinQty:n.MinQty,AddQty:n.AddQty,MaxQty:n.MaxQty,GoodTypeNm:n.GoodTypeNm,Class2Nm:n.Class2Nm,Class3Nm:n.Class3Nm,Class4Nm:n.Class4Nm,Class5Nm:n.Class5Nm,GoodNm:n.GoodNm,Spec:n.Spec,Box2_Weight:n.Box2_Weight,Box_Kind_LNL:n.Box_Kind_LNL,SUS316_Price:n.SUS316_Price,SUS316_Price_2:F.BasePrice?F.BasePrice:0,FixYn:"\uC785\uB825",DiscountRate:F.DiscountRate?F.DiscountRate:0};d.addRow(b)}})},Pe=async t=>{if(f.commit(),l.fValidate(N.current!=="\uC785\uB825",`${N.current} \uB41C \uC8FC\uBB38\uBC88\uD638\uC5D0\uB294 \uD488\uBC88\uC744 \uCD94\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`))return;const u=d.getJsonRows(0,-1),a=w.getJsonRow(t);if(!u.some(m=>m.Goodcd===a.Goodcd)&&N.current==="\uC785\uB825"){const n=(await x.get("/@api/agency/orderentry/selectByRate",{params:{CustCd:p.SchCustCd,Goodcd:a.Goodcd}})).data,Q={GoodNo:a.GoodNo,Goodcd:a.Goodcd,StkQty:a.StkQty,AssemQty:a.AssemQty,AcceptQty:a.AcceptQty,PossQty:a.PossQty,PmsQty:0,MinQty:a.MinQty,AddQty:a.AddQty,MaxQty:a.MaxQty,GoodTypeNm:a.GoodTypeNm,Class2Nm:a.Class2Nm,Class3Nm:a.Class3Nm,Class4Nm:a.Class4Nm,Class5Nm:a.Class5Nm,GoodNm:a.GoodNm,Spec:a.Spec,Box2_Weight:a.Box2_Weight,Box_Kind_LNL:a.Box_Kind_LNL,SUS316_Price:a.SUS316_Price,SUS316_Price_2:n.BasePrice?n.BasePrice:0,FixYn:"\uC785\uB825",DiscountRate:n.DiscountRate?n.DiscountRate:0};d.addRow(Q)}},ke=()=>{f.commit();const t=f.getCheckedItems(!0);if(l.fValidate(t.length<1,"\uC81C\uC678 \uD560 \uC8FC\uBB38 \uB4F1\uB85D \uC815\uBCF4\uB97C \uC120\uD0DD\uD558\uC5EC \uC8FC\uC138\uC694."))return;let u=0,a=[];t.forEach(function(m){const n=f.getDataRow(m);d.getRowState(n)==="created"&&(a.push(n),u++)}),d.removeRows(a,!1),l.fValidate(u===0,"\uC81C\uC678 \uD560 \uB4F1\uB85D \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")},Ge=()=>{f.commit(),T({visible:!0,desc:"\uC2E0\uADDC \uC8FC\uBB38\uC815\uBCF4\uB97C \uC785\uB825 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"NEW"})},Me=async()=>{if(f.commit(),!l.fValidate(!V(_,"YYYY-MM-DD").isValid(),"\uC8FC\uBB38\uC77C\uC790\uB97C \uBC14\uB974\uAC8C \uC785\uB825\uD574 \uC8FC\uC138\uC694.")&&!l.fValidate(!p.SchCustCd,"\uC678\uC8FC\uCC98\uAC00 \uC81C\uB300\uB85C \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")){if(y.info4&&y.info6&&y.info7){if(l.fValidate(d.getRowCount()<1,"\uC800\uC7A5\uD560 \uC8FC\uBB38 \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."))return;T({visible:!0,desc:"\uC8FC\uBB38\uC790\uB8CC\uB97C \uC800\uC7A5 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"SAVE"})}else if((y.info4==="342002"||y.info4==="342003")&&!y.info6&&y.info7)T({visible:!0,desc:"\uC8FC\uBB38\uC790\uB8CC\uB97C \uC800\uC7A5 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"SAVE"});else if(l.fValidate(!y.info7,"\uC8FC\uBB38\uAD6C\uBD84 \uC120\uD0DD \uD6C4 \uC800\uC7A5 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")||l.fValidate(!y.info4,"\uBC30\uC1A1\uAD6C\uBD84 \uC120\uD0DD \uD6C4 \uC800\uC7A5 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")||l.fValidate(!y.info6,"\uD654\uBB3C\uBE44\uAD6C\uBD84 \uC120\uD0DD \uD6C4 \uC800\uC7A5 \uAC00\uB2A5\uD569\uB2C8\uB2E4."))return}},Qe=async()=>{let t,u=[],a=d.getAllStateRows();if(a.updated.length>0&&a.updated.forEach(function(m,n){t=d.getJsonRow(a.updated[n]),t.state="U",u.push(t)}),a.created.length>0&&a.created.forEach(function(m,n){t=d.getJsonRow(a.created[n]),t.state="I",u.push(t)}),!l.fValidate(u.length<1,"\uBAA9\uB85D\uC911\uC5D0 \uC785\uB825/\uBCC0\uACBD \uD55C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")&&!l.fValidate(u.some(m=>m.PmsQty<1),"\uC800\uC7A5 \uBAA9\uB85D \uC911 \uC8FC\uBB38\uB7C9\uC774 \uC5C6\uB294 \uD488\uBC88\uC774 \uC788\uC2B5\uB2C8\uB2E4."))try{const n=(await x.post("/@api/agency/orderentry/updateByList",{params:{CustCd:p.SchCustCd,PmsSeq:D,UserName:B.user.username},data:u,info:y,inspection:k})).data;n.errmess===""&&n.pmsSeq!==""?(O({visible:!0,desc:"\uC800\uC7A5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),j(n.pmsSeq),I(""),I(D)):r({visible:!0,desc:n.errmess})}catch{r({visible:!0,desc:"\uC800\uC7A5\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4"})}},Ve=()=>{f.commit();const t=f.getCheckedItems(!0);l.fValidate(t.length<1,"\uC0AD\uC81C \uD560 \uC8FC\uBB38 \uB4F1\uB85D \uC815\uBCF4\uB97C \uC120\uD0DD\uD558\uC5EC \uC8FC\uC138\uC694.")||T({visible:!0,desc:"\uC120\uD0DD\uD55C \uC8FC\uBB38\uC790\uB8CC\uB97C \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"DELETE"})},Le=async()=>{const t=f.getCheckedItems(!0);let u=[];t.forEach(F=>{const b=f.getDataRow(F);(d.getRowState(b)==="none"||d.getRowState(b)==="updated")&&u.push(b)}),d.setRowStates(u,"deleted",!1,!1);let a,m=[];const n=d.getAllStateRows(),Q=d.getRowCount();if(n.deleted.length>0&&n.deleted.forEach((F,b)=>{a=d.getJsonRow(n.deleted[b]),a.state="D",m.push(a)}),!l.fValidate(m.length<1,`\uBAA9\uB85D\uC911\uC5D0 \uC0AD\uC81C \uAC00\uB2A5 \uD55C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
\uC800\uC7A5 \uC5EC\uBD80\uB97C \uD655\uC778 \uD6C4 \uC791\uC5C5\uD558\uC138\uC694.`))try{const b=(await x.post("/@api/agency/orderentry/deleteByList",{params:{CustCd:p.SchCustCd,PmsSeq:D},data:m})).data;b.errmess===""?(O({visible:!0,desc:"\uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),Q===m.length?(j(""),z()):(j(D),z(),se())):r({visible:!0,desc:b.errmess})}catch{r({visible:!0,desc:"\uC0AD\uC81C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4"})}},re=async()=>{if(!l.fValidate(!D,"\uC8FC\uBB38\uBC88\uD638\uB97C \uC120\uD0DD\uD558\uC5EC \uC8FC\uC138\uC694."))try{const u=(await x.post("/@api/agency/orderentry/updateByInfo",{params:{PmsSeq:D},info:y,inspection:k})).data;u.errmess===""?O({visible:!0,desc:"\uC815\uBCF4\uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}):r({visible:!0,desc:u.errmess})}catch{r({visible:!0,desc:"\uC218\uC815 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4"})}},Ue=()=>{if(N.current==="\uC785\uB825"){if(l.fValidate(d.getRowStateCount("created")+d.getRowStateCount("updated")>0,"\uC800\uC7A5\uD558\uC9C0 \uC54A\uC740 \uC8FC\uBB38 \uC790\uB8CC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.")||l.fValidate(d.getRowCount()<1,"\uC800\uC7A5\uD560 \uB0A9\uD488 \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."))return;T({visible:!0,desc:"\uBC1C\uC8FC\uC790\uB8CC\uB97C \uD655\uC815 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"CONFIRM"})}else r({visible:!0,desc:`${N.current} \uC790\uB8CC\uB294 \uD655\uC815 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4`})},Ye=async()=>{f.commit();try{const u=(await x.post("/@api/agency/orderentry/workByConfirm",{params:{CustCd:p.SchCustCd,PmsSeq:D},info:y,inspection:k})).data;u.errmess===""?(O({visible:!0,desc:"\uBC1C\uC8FC \uD655\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),j(D),z(),se()):r({visible:!0,desc:u.errmess})}catch{r({visible:!0,desc:"\uBC1C\uC8FC\uD655\uC815\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4"})}},_e=async()=>{M.id==="NEW"?I("NEW"):M.id==="SAVE"?Qe():M.id==="DELETE"?Le():M.id==="CONFIRM"&&Ye(),T({visible:!1,desc:"",id:""})};return C.exports.useEffect(()=>{G&&ae(new Date(V(G.substring(0,8)).format("YYYY-MM-DD")))},[G]),C.exports.useEffect(()=>{p.SchCustCd&&V(_,"YYYY-MM").isValid()?z():r({visible:!0,desc:"\uC8FC\uBB38\uC77C\uC790\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."})},[_]),C.exports.useEffect(()=>{W.length>1?G!=="NEW"&&W.some(t=>t.value===G)?I(G):I("NEW"):W.length>0&&I("NEW")},[W]),C.exports.useEffect(()=>{D&&p.SchCustCd&&(D==="NEW"?(N.current="\uC785\uB825",d.clearRows(),K(),be()):se())},[D]),C.exports.useEffect(()=>{l.fHotKey(E,E.isPopup,Ce,J)},[E.HotKey]),C.exports.useEffect(()=>{Ee(),De(),xe(),we(),Fe(),Ie(),z(),B.salechk.chk2==="Y"&&B.salechk.flag==="F"&&B.salechk.txt!=="\uCD9C\uACE0\uD1B5\uC81C \uBBF8\uC218\uAE08 \uC790\uB8CC \uC815\uC0C1"&&le({visible:!0,desc:B.salechk.txt,type:"W"})},[]),e.createElement(e.Fragment,null,e.createElement(it,{pgmid:c,visible:"11000",onNew:Ce,onSearch:J}),e.createElement(Ke,{className:"mainCon"},e.createElement(s,{style:{width:"100%",height:87,paddingLeft:5,border:"1px solid #e2e2e2",borderRadius:5,display:"flex",flexDirection:"column"}},e.createElement(s,{display:"flex",flexDirection:"row",alignItems:"baseline"},e.createElement(s,null,e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center"}},e.createElement($,{inputCls:"inputCls",pgmid:c,inputType:"",id:"SchClass2Nm",title:"\uB300\uBD84\uB958",helper:S.helperClass2,onConfirm:()=>H("SchClass2Nm"),inputValue:p.SchClass2Nm,labelStyles:{width:90,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:185,margin:"0px 0px 5px 0px"}}),e.createElement($,{inputCls:"inputCls",pgmid:c,inputType:"",id:"SchClass3Nm",title:"\uC911\uBD84\uB958",helper:ge,onConfirm:()=>H("SchClass3Nm"),inputValue:p.SchClass3Nm,labelStyles:{width:90,height:25,margin:"3px 10px 5px 25px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:185,margin:"0px 0px 5px 0px"}}),e.createElement($,{inputCls:"inputCls",pgmid:c,inputType:"",id:"SchClass4Nm",title:"\uC18C\uBD84\uB958",helper:Se,onConfirm:()=>H("SchClass4Nm"),inputValue:p.SchClass4Nm,labelStyles:{width:90,height:25,margin:"3px 10px 5px 25px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:185,margin:"0px 0px 5px 0px"},inputRequired:!0}),e.createElement($,{inputCls:"inputCls",pgmid:c,inputType:"",id:"SchClass5Nm",title:"\uC7AC\uC9C8",helper:S.helperClass5,onConfirm:()=>H("SchClass5Nm"),inputValue:p.SchClass5Nm,labelStyles:{width:90,height:25,margin:"3px 10px 5px 25px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:185,margin:"0px 0px 5px 0px"}})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uD488\uBC88\uCF54\uB4DC")),e.createElement(s,{onKeyDown:t=>{t.key==="Enter"&&J()}},e.createElement(o.exports.TextBox,{inputCls:"inputCls",name:"SchGoodno",inputId:l.fMakeId("SchGoodno"),value:p.SchGoodno,onChange:t=>l.fFieldChange(P,"SchGoodno",t),className:i.S4})),e.createElement(s,{style:{marginLeft:15}},e.createElement(o.exports.LinkButton,{className:"c9",style:{width:110,height:25,color:"#424242",borderRadius:3},disabled:!ue,onClick:J},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(oe,{size:12}),e.createElement(s,{style:{marginLeft:5,fontSize:12,paddingBottom:2,fontWeight:500}},"\uC5F4\uAE30")))),e.createElement(s,{style:{marginLeft:15}},e.createElement(o.exports.LinkButton,{className:"c11",style:{width:110,height:25,color:"#424242",borderRadius:3},disabled:!ue,onClick:Re},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(oe,{size:12}),e.createElement(s,{style:{marginLeft:5,fontSize:12,paddingBottom:2,fontWeight:500}},"TUBE \uC870\uD68C")))))),e.createElement(s,{style:{marginLeft:70,color:"red",fontSize:"12px",fontWeight:600}},B.salechk.flag==="F"&&B.salechk.txt!=="\uCD9C\uACE0\uD1B5\uC81C \uBBF8\uC218\uAE08 \uC790\uB8CC \uC815\uC0C1"&&B.salechk.txt))),e.createElement(s,{ref:A,style:{width:"100%",height:270,marginTop:5}}),e.createElement(s,{display:"flex",flexDirection:"column",alignItems:"flex-start",style:{padding:"10px 0"}},e.createElement(s,{display:"flex",flexDirection:"row"},e.createElement(s,{style:{marginRight:12}},e.createElement(o.exports.LinkButton,{className:"c11",style:{width:70,height:30,color:"#424242",borderRadius:3},onClick:ke},e.createElement(s,{style:{width:70,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(Je,{size:17})))),e.createElement(s,{style:{marginRight:24}},e.createElement(o.exports.LinkButton,{className:"c17",style:{width:70,height:30,color:"#424242",borderRadius:3},onClick:ve},e.createElement(s,{style:{width:70,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement($e,{size:17})))),e.createElement(s,{style:{marginRight:12}},e.createElement(o.exports.LinkButton,{style:{width:100,height:30,color:"#424242",borderRadius:3},onClick:Ge},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(Ze,{size:16}),e.createElement(s,{style:{marginLeft:5,fontSize:15,paddingBottom:2,fontWeight:500}},"\uC2E0\uADDC")))),e.createElement(s,{style:{marginRight:12}},e.createElement(o.exports.LinkButton,{className:"c4",style:{width:100,height:30,color:"#424242",borderRadius:3},onClick:Me},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(Xe,{size:16}),e.createElement(s,{style:{marginLeft:5,fontSize:15,paddingBottom:2,fontWeight:500}},"\uC800\uC7A5")))),e.createElement(s,{style:{marginRight:12}},e.createElement(o.exports.LinkButton,{className:"c11",style:{width:100,height:30,color:"#424242",borderRadius:3},onClick:Ve},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(et,{size:16}),e.createElement(s,{style:{marginLeft:5,fontSize:15,paddingBottom:2,fontWeight:500}},"\uC0AD\uC81C")))))),e.createElement(s,{display:"flex",flexDirection:"row"},e.createElement(s,{width:1300,style:{marginTop:"10px"}},e.createElement(s,{display:"flex",flexDirection:"column",alignItems:"flex-start",style:{padding:5,border:"1px solid #e2e2e2",borderRadius:5}},e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uC8FC\uBB38\uC77C\uC790")),e.createElement(s,{style:{display:"flex",alignItems:"center"}},e.createElement(at,{className:i.S3,selected:_,inputId:Ne.Common.fMakeId("selDate"),onHandleDateChange:t=>ae(t)})),e.createElement(s,{className:i.S1,style:{marginLeft:20}},e.createElement(s,{className:i.S2},"\uC8FC\uBB38\uBC88\uD638")),e.createElement(o.exports.ComboBox,{className:i.S5,style:{width:180},data:W,value:D,editable:!1,onChange:t=>I(t)}),e.createElement(s,{style:{marginLeft:12}},e.createElement(o.exports.LinkButton,{className:"c7",style:{width:100,height:30,color:"#424242",borderRadius:3},onClick:Ue},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(tt,{size:13}),e.createElement(s,{style:{marginLeft:5,fontSize:12,paddingBottom:2,fontWeight:500}},"\uD655\uC815")))))),e.createElement(s,{width:1300,style:{marginTop:"10px"}},e.createElement(s,{ref:v,style:{width:"100%",height:292,marginTop:5}}))),e.createElement(s,{display:"flex",flexDirection:"column",style:{width:400,marginTop:10,marginLeft:15}},e.createElement(o.exports.Tabs,{ref:L},e.createElement(o.exports.TabPanel,{key:0,title:"\uCC29\uC9C0\uC815\uBCF4",selected:!0},e.createElement(s,{style:{height:298,marginTop:15}},e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uB3C4\uCC29\uC9C0")),e.createElement(o.exports.TextBox,{placeholder:"\uB3C4\uCC29\uC9C0",className:i.S4,value:y.info1,onChange:t=>R("info1",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uC218\uCDE8\uC778")),e.createElement(o.exports.TextBox,{placeholder:"\uC218\uCDE8\uC778",className:i.S4,value:y.info2,onChange:t=>R("info2",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uBC1C\uC8FC\uC5C5\uCCB4")),e.createElement(o.exports.TextBox,{placeholder:"\uBC1C\uC8FC\uC5C5\uCCB4",className:i.S4,value:y.info3,onChange:t=>R("info3",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uBC30\uC1A1\uAD6C\uBD84")),e.createElement(o.exports.ComboBox,{className:i.S5,style:{width:185},panelStyle:{height:150},data:me,value:y.info4,editable:!1,onChange:t=>R("info4",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uD654\uBB3C\uBE44\uAD6C\uBD84")),e.createElement(o.exports.ComboBox,{className:i.S5,style:{width:185},panelStyle:{height:150},data:Be,value:y.info6,editable:!1,onChange:t=>R("info6",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uC8FC\uBB38\uAD6C\uBD84")),e.createElement(o.exports.ComboBox,{className:i.S5,style:{width:185},panelStyle:{height:150},data:he,value:y.info7,editable:!1,onChange:t=>R("info7",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uBE44\uACE0")),e.createElement(o.exports.TextBox,{placeholder:"\uBE44\uACE0",className:i.S4,value:y.info5,onChange:t=>R("info5",t)})),e.createElement(s,{style:{marginTop:10,display:"flex",justifyContent:"flex-end",marginRight:27}},e.createElement(o.exports.LinkButton,{className:"c4",style:{width:100,height:30,color:"#424242",borderRadius:3},onClick:re,disabled:D==="NEW"},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(ce,{size:13}),e.createElement(s,{style:{marginLeft:5,fontSize:12,paddingBottom:2,fontWeight:500}},"\uC815\uBCF4\uC218\uC815")))))),e.createElement(o.exports.TabPanel,{key:1,title:"\uC131\uC801\uC11C\uC720\uBB34"},e.createElement(s,{style:{height:298,marginTop:15}},e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"MTR")),e.createElement(o.exports.ComboBox,{className:i.S5,style:{width:185},panelStyle:{height:70},data:Z,value:k.mtr,editable:!1,onChange:t=>l.fFieldChange(Y,"mtr",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"TESTREPORT")),e.createElement(o.exports.ComboBox,{className:i.S5,style:{width:185},panelStyle:{height:70},data:Z,value:k.testreport,editable:!1,onChange:t=>l.fFieldChange(Y,"testreport",t)})),e.createElement(s,{style:{marginTop:5,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(s,{className:i.S1},e.createElement(s,{className:i.S2},"\uC6D0\uC18C\uC7AC\uC131\uC801\uC11C")),e.createElement(o.exports.ComboBox,{className:i.S5,style:{width:185},panelStyle:{height:70},data:Z,value:k.millsheet,editable:!1,onChange:t=>l.fFieldChange(Y,"millsheet",t)})),e.createElement(s,{style:{marginTop:10,display:"flex",justifyContent:"flex-end",marginRight:27}},e.createElement(o.exports.LinkButton,{className:"c4",style:{width:100,height:30,color:"#424242",borderRadius:3},onClick:re,disabled:D==="NEW"},e.createElement(s,{style:{width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(ce,{size:13}),e.createElement(s,{style:{marginLeft:5,fontSize:12,paddingBottom:2,fontWeight:500}},"\uC815\uBCF4\uC218\uC815")))))))))),e.createElement(lt,{visible:X.visible,description:X.desc,type:X.type,onConfirm:()=>O({visible:!1})}),e.createElement(de,{visible:ee.visible,description:ee.desc,type:ee.type,onConfirm:()=>r({visible:!1})}),e.createElement(de,{visible:te.visible,description:te.desc,type:te.type,onConfirm:Te}),e.createElement(st,{visible:M.visible,description:M.desc,onCancel:()=>T({visible:!1}),onConfirm:_e}))});let w,d,h,f;const dt=ze(ct);export{St as default};