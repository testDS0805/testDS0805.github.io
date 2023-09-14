import{r as m,R as o}from"./index.da6908f5.js";import{m as n,o as ot,c as rt,u as nt,U as ut,P as Se,r as T,B as u,F as se,f as st,q as it,A as lt,C as dt,h as x,n as ct,d as ie}from"./App.11263b70.js";import{C as mt}from"./CommonButton.0b792d77.js";import{C as te}from"./CommonDatePicker.d7bc57f8.js";import{T as Ct}from"./TextEdit.ae1e2d77.js";import{S as pt}from"./SearchGoods.aa0af31e.js";import{C as ae}from"./CodeHelperPopup.3932fdb9.js";import{A as ft}from"./Approval.69c4f070.js";import{A as yt}from"./Attachments.19d97d2b.js";import"./index.6f186c21.js";import"./EvidenceViewer.5aab9677.js";const ht={SA1:{width:70,height:25,margin:"3px 3px",backgroundColor:"#e0ecff",color:"#163971",padding:5,fontSize:"12px",alignItems:"center",fontWeight:600,display:"flex"},SA2:{width:60},SA3:{width:"15px!important",height:"15px!important",border:"1px solid #3c96ff",marginTop:"1px","& .checkbox-checked":{border:0,background:"#3c96ff"}},SA4:{width:90,height:25,"& input":{fontSize:"12px !important"}},SA5:{marginLeft:5,width:140,height:25,"& input":{fontSize:"12px !important"}},SB1:{width:253,height:32,"& input":{fontSize:"16px !important",textAlign:"center",color:"#0070c0"}},SB2:{fontSize:12,paddingBottom:2,fontWeight:500},SC1:{width:90,height:25,margin:"3px 10px",backgroundColor:"#e0ecff",color:"#163971",padding:5,fontSize:"12px",alignItems:"center",fontWeight:600,display:"flex"},SC2:{width:80},SC3:{width:200,height:25,"& input":{fontSize:"12px !important"}},SC4:{width:200,height:25,"& input":{fontSize:"12px !important",textAlign:"right"}},SC5:{fontSize:12,paddingBottom:2,fontWeight:500,marginLeft:5},SC6:{width:150,height:25,"& input":{fontSize:"12px !important",textAlign:"center"}},SC7:{width:80,height:29,margin:"3px 1px",backgroundColor:"#e0ecff",color:"#163971",padding:5,fontSize:"12px",alignItems:"center",fontWeight:600,display:"flex"},SC8:{"& textarea":{fontSize:"12px !important"}}},Dt=[{fieldName:"Accunit",dataType:n.exports.ValueType.TEXT},{fieldName:"Factory",dataType:n.exports.ValueType.TEXT},{fieldName:"ForNo",dataType:n.exports.ValueType.TEXT},{fieldName:"ExpType",dataType:n.exports.ValueType.TEXT},{fieldName:"PayCond",dataType:n.exports.ValueType.DATE,datetimeFormat:"yyyyMMdd"},{fieldName:"OutReqYmd",dataType:n.exports.ValueType.DATE,datetimeFormat:"yyyyMMdd"},{fieldName:"Custcd",dataType:n.exports.ValueType.TEXT},{fieldName:"Custcdnm",dataType:n.exports.ValueType.TEXT},{fieldName:"Addr",dataType:n.exports.ValueType.TEXT},{fieldName:"Tel",dataType:n.exports.ValueType.TEXT},{fieldName:"Fax",dataType:n.exports.ValueType.TEXT},{fieldName:"CustOutcd",dataType:n.exports.ValueType.TEXT},{fieldName:"ResultDeptcd",dataType:n.exports.ValueType.TEXT},{fieldName:"ResultDeptcdnm",dataType:n.exports.ValueType.TEXT},{fieldName:"ResultPno",dataType:n.exports.ValueType.TEXT},{fieldName:"ResultPnonm",dataType:n.exports.ValueType.TEXT},{fieldName:"DelStatus",dataType:n.exports.ValueType.TEXT},{fieldName:"Remark2",dataType:n.exports.ValueType.TEXT},{fieldName:"CrePno",dataType:n.exports.ValueType.TEXT},{fieldName:"CreDate",dataType:n.exports.ValueType.TEXT},{fieldName:"ModPno",dataType:n.exports.ValueType.TEXT},{fieldName:"ModDate",dataType:n.exports.ValueType.TEXT},{fieldName:"DocStatus",dataType:n.exports.ValueType.TEXT},{fieldName:"forqty",dataType:n.exports.ValueType.NUMBER},{fieldName:"EtcQty",dataType:n.exports.ValueType.NUMBER},{fieldName:"ApprDocProg",dataType:n.exports.ValueType.TEXT}],Tt=[{name:"ForNo",fieldName:"ForNo",width:100,styleName:"center-column",header:{text:"\uC0D8\uD50C\uC694\uCCAD\uBC88\uD638",showTooltip:!0},renderer:{type:"text",showTooltip:!0}},{name:"PayCond",fieldName:"PayCond",width:100,styleName:"center-column",header:{text:"\uC0D8\uD50C\uC694\uCCAD\uC77C",showTooltip:!0},renderer:{type:"text",showTooltip:!0},datetimeFormat:"yyyy-MM-dd"},{name:"Custcdnm",fieldName:"Custcdnm",width:140,styleName:"left-column",header:{text:"\uAC70\uB798\uCC98\uBA85",showTooltip:!0},renderer:{type:"text",showTooltip:!0}}],xt=[{fieldName:"Accunit",dataType:n.exports.ValueType.TEXT},{fieldName:"Factory",dataType:n.exports.ValueType.TEXT},{fieldName:"ExpType",dataType:n.exports.ValueType.TEXT},{fieldName:"ForNo",dataType:n.exports.ValueType.TEXT},{fieldName:"ForSeq",dataType:n.exports.ValueType.TEXT},{fieldName:"No",dataType:n.exports.ValueType.TEXT},{fieldName:"Goodcd",dataType:n.exports.ValueType.TEXT},{fieldName:"Goodno",dataType:n.exports.ValueType.TEXT},{fieldName:"Goodnm",dataType:n.exports.ValueType.TEXT},{fieldName:"Goodtype",dataType:n.exports.ValueType.TEXT},{fieldName:"GoodtypeNm",dataType:n.exports.ValueType.TEXT},{fieldName:"Spec",dataType:n.exports.ValueType.TEXT},{fieldName:"Qty",dataType:n.exports.ValueType.NUMBER},{fieldName:"EtcQty",dataType:n.exports.ValueType.NUMBER},{fieldName:"ProcQty",dataType:n.exports.ValueType.NUMBER},{fieldName:"Unitcd",dataType:n.exports.ValueType.TEXT},{fieldName:"Unitcdnm",dataType:n.exports.ValueType.TEXT},{fieldName:"Whcd",dataType:n.exports.ValueType.TEXT},{fieldName:"Whcdnm",dataType:n.exports.ValueType.TEXT},{fieldName:"Remark",dataType:n.exports.ValueType.TEXT},{fieldName:"Intype",dataType:n.exports.ValueType.TEXT},{fieldName:"Intypenm",dataType:n.exports.ValueType.TEXT}],Et=[{name:"No",fieldName:"No",width:50,styleName:"center-column",editable:!1,header:{text:"No",showTooltip:!0},renderer:{type:"text",showTooltip:!0}},{name:"Goodno",fieldName:"Goodno",width:200,styleName:"left-column",editable:!0,header:{text:"\uD488\uBC88",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{textCase:"upper"}},{name:"Spec",fieldName:"Spec",width:160,styleName:"left-column",editable:!1,header:{text:"\uADDC  \uACA9",showTooltip:!0},renderer:{type:"text",showTooltip:!0}},{name:"Goodnm",fieldName:"Goodnm",width:162,styleName:"left-column",editable:!0,header:{text:"\uD488  \uBA85",showTooltip:!0},footer:{text:"\uD569\uACC4"},renderer:{type:"text",showTooltip:!0},editor:{type:"line",textCase:"upper"}},{name:"Qty",fieldName:"Qty",width:80,styleName:"right-column",editable:!0,header:{text:"\uC694\uCCAD\uB7C9",showTooltip:!0},renderer:{type:"text",showTooltip:!0},footer:{numberFormat:"#,##0.#",expression:"sum"},editor:{type:"number",editFormat:"#,##0.#"},numberFormat:"#,##0.#"},{name:"EtcQty",fieldName:"EtcQty",width:80,styleName:"right-column rg-disable-cell",editable:!1,header:{text:"\uCD9C\uD558\uB7C9",showTooltip:!0},renderer:{type:"text",showTooltip:!0},footer:{numberFormat:"#,##0.#",expression:"sum"},editor:{type:"number",editFormat:"#,##0.#"},numberFormat:"#,##0.#"},{name:"Unitcdnm",fieldName:"Unitcdnm",width:60,styleName:"center-column",button:"action",editable:!0,header:{text:"\uB2E8\uC704",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"line",textCase:"upper"}},{name:"Whcdnm",fieldName:"Whcdnm",width:100,styleName:"left-column",button:"action",editable:!0,header:{text:"\uCD9C\uACE0\uCC3D\uACE0",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"line",textCase:"upper"}},{name:"Intypenm",fieldName:"Intypenm",width:80,styleName:"left-column",button:"action",editable:!0,header:{text:"\uCD9C\uACE0\uAD6C\uBD84",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"line",textCase:"upper"}},{name:"Remark",fieldName:"Remark",width:300,styleName:"left-column",editable:!0,placeHolder:"\uCD5C\uB30060\uC790",header:{text:"\uBE44  \uACE0",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{maxLength:60}}],Gt=ot(()=>{const D="REQUESTSAMPLE",d=St(),{$CommonStore:y,$UserStore:p}=nt(),le=m.exports.useRef(null),de=m.exports.useRef(null),ge=m.exports.useRef(null),w=m.exports.useRef(null),Q=m.exports.useRef(0),P=m.exports.useRef("\uACB0\uC7AC"),we=m.exports.useRef(!1),$=m.exports.useRef(""),M=m.exports.useRef(""),Y=m.exports.useRef(""),U=m.exports.useRef(""),L=m.exports.useRef(""),G=m.exports.useRef(0),B=m.exports.useRef(""),oe=m.exports.useRef(!0),[_,k]=m.exports.useState(""),[re,N]=m.exports.useState({visible:!1,desc:"",type:"N"}),[W,O]=m.exports.useState({visible:!1,desc:"",id:""}),[X,ce]=m.exports.useState({visible:!1,selectedData:{},id:"",pgmid:"",value:""}),[Be,me]=m.exports.useState(!1),[Ne,Ce]=m.exports.useState(!1),[h,b]=m.exports.useState({SchAccunit:"",SchFactory:"",SchFrDate:new Date,SchToDate:new Date,SchCompGubun:"0",SchCustcd:"",SchCustnm:"",SchText:"",SchForNo:"",SchExpType:"",SchResultDeptcd:"",SchResultPno:"",SchPayCond:"",SchInForno:""}),[c,S]=m.exports.useState({}),[Ae]=m.exports.useState({PayCond:"required",OutReqYmd:"required",ExpType:"required",Custcdnm:"required",ResultPnonm:"required",ResultDeptcdnm:"required"}),[Re]=m.exports.useState([{value:"1",text:"\uB0B4\uC218"},{value:"2",text:"\uC218\uCD9C"}]),[I,V]=m.exports.useState({visible:!1,description:"",value:"",datas:{},id:"",viewId:"",selectedData:{}}),F=(e,a)=>{P.current="\uACB0\uC7AC",a&&b({...h,SchCompGubun:e})},Ie=e=>{e.preventDefault(),e.key==="1"&&F("0","checked"),e.key==="2"&&F("1","checked"),!e.shiftKey&&e.key==="Tab"?document.getElementById(t.Common.fMakeId("SchCustnm")).focus():e.shiftKey&&e.key==="Tab"&&document.getElementById(t.Common.fMakeId("SchToDate")).focus();const a=["0","1","2"];if(e.key==="ArrowRight"){let s=a.indexOf(h.SchCompGubun)+1;s>1&&(s=1),F(a[s],"checked")}else if(e.key==="ArrowLeft"){let s=a.indexOf(h.SchCompGubun)-1;s<0&&(s=0),F(a[s],"checked")}},t=new ut(D,N,!0,!0,!0,!0,!0),be=["No","Goodno","Unitcd","Unitcdnm","Intype","Intypenm","Whcd","Whcdnm","Qty"],Ve=["Goodno","Whcdnm","Unitcdnm","Intypenm"],Fe={No:"No",Goodno:"\uD488\uBA85",Unitcd:"\uB2E8\uC704\uCF54\uB4DC",Whcd:"\uCD9C\uACE0\uCC3D\uACE0\uCF54\uB4DC",Intype:"\uCD9C\uACE0\uAD6C\uBD84",Qty:"\uC694\uCCAD\uB7C9"},Pe=()=>{b({SchAccunit:"",SchFactory:"",SchFrDate:x().clone().startOf("month").toDate(),SchToDate:new Date,SchCompGubun:"0",SchCustcd:"",SchCustnm:""},50),S({Accunit:"001",Factory:p.user.factory,ForNo:"",ExpType:"1",PayCond:new Date,OutReqYmd:new Date,Custcd:"",Custcdnm:"",Addr:"",Tel:"",Fax:"",CustOutcd:"",ResultDeptcd:p.user.deptcd,ResultDeptcdnm:p.user.deptnm,ResultPno:p.user.userid,ResultPnonm:p.user.username.trim(),DelStatus:"",Remark2:"",CrePno:"",CreDate:"",ModPno:"",ModDate:""},50),$.current="",M.current="",U.current="",Y.current="",L.current="",Q.current="",setTimeout(()=>{t.Common.fSetTabIndex(),document.getElementById(t.Common.fMakeId("SchFrDate")).focus()},300),document.getElementById(t.Common.fMakeId("Remark2")).maxLength=50},pe=()=>{S({Accunit:"001",Factory:p.user.factory,ForNo:"",ExpType:"1",PayCond:new Date,OutReqYmd:new Date,Custcd:"",Custcdnm:"",Addr:"",Tel:"",Fax:"",CustOutcd:"",ResultDeptcd:p.user.deptcd,ResultDeptcdnm:p.user.deptnm,ResultPno:p.user.userid,ResultPnonm:p.user.username.trim(),DelStatus:"",Remark2:"",CrePno:"",CreDate:"",ModPno:"",ModDate:""},50),$.current="",M.current="",U.current="",Y.current="",L.current="",Q.current=""},Ge=()=>{t.Grid.fContainerInit(t.Common.fMakeId("Grid1")),v=new n.exports.LocalDataProvider(!1),g=new n.exports.GridView(le.current),t.Grid.fInitGridHeader(g,v,Dt,Tt,30,ve,Me,Ye),g.setRowIndicator({visible:!1}),g.orderBy([],[]),g.setRowStyleCallback(ke),g.onCellDblClicked=()=>{setTimeout(()=>{document.getElementById(t.Common.fMakeId("OutReqYmd")).focus()},100)}},ke=(e,a)=>{const r=e.getValue(a.index,"ApprDocProg");if(r==="\uC644\uACB0")return"rg-column-color-3";if(r==="\uC9C4\uD589\uC911")return"rg-column-color-2";if(r==="\uBC18\uB824")return"rg-column-color-1"},ve=(e,a,r)=>{r>=0&&fe(e,r)},Me=(e,a)=>{Q.current===a.dataRow&&a.dataRow>=0&&fe(e,a.dataRow)},fe=(e,a)=>{g.commit(),l.commit(),k("H"),f.clearRows();const r=v.getJsonRow(a);w.current===r.ForNo&&(oe.current=!oe.current),w.current=r.ForNo,P.current=r.DocStatus,$.current=r.Custcd,M.current=r.Addr,U.current=r.Fax,Y.current=r.Tel,L.current=r.CustOutcd,y.fSetBinding(!0),S(r),y.fSetBinding(!1),De(),setTimeout(async()=>{Q.current=a},100)},Ye=async(e,a)=>{switch(a.key){case(a.shiftKey&&"Tab"):document.getElementById(t.Common.fMakeId("SchCustnm")).focus();break;case"Tab":setTimeout(()=>{document.getElementById(t.Common.fMakeId("SchFrDate")).focus()},0);break}},Ue=()=>{t.Grid.fContainerInit(t.Common.fMakeId("Grid2")),f=new n.exports.LocalDataProvider(!1),l=new n.exports.GridView(de.current),t.Grid.fInitGridDetail(l,f,xt,Et,ye,Le,_e),l.setRowIndicator({visible:!1}),l.setFooters({visible:!0}),l.orderBy([],[]),l.onCellClicked=function(e,a){a.dataRow>=0&&k("D")},l.onValidateColumn=(e,a,r,s)=>{const i={};return be.includes(a.fieldName)&&(!s||s===void 0)&&(i.level="warning",i.message="\uD544\uC218 \uC785\uB825 \uAC12\uC785\uB2C8\uB2E4."),i},f.onRowInserted=(e,a)=>{t.Grid.fSetMultiDataProvider(e,a,{No:ct(a+1).format("000")})}},ye=async(e,a)=>{e.commit();const r=e.getValue(e.getCurrent().itemIndex,a.fieldName);let s={},i=0;k("D"),a.fieldName==="Goodnm"?(s=await t.Grid.gridCodeClass(e.getCurrent(),t.CodeHelper.helperGoodNoExoffer,D,r,!0),s.datas[0].map(C=>{i+=Number(C.Size)}),G.current=i<470?470:i+500,V(s)):a.fieldName==="Unitcdnm"?(s=await t.Grid.gridCodeClass(e.getCurrent(),t.CodeHelper.helperProdunitnm,D,r,!0),s.datas[0].map(C=>{i+=Number(C.Size)}),G.current=i<470?470:i+500,V(s)):a.fieldName==="Whcdnm"?(s=await t.Grid.gridCodeClass(e.getCurrent(),t.CodeHelper.helperWhNm,D,r,!0),s.datas[0].map(C=>{i+=Number(C.Size)}),G.current=i<470?470:i+500,V(s)):a.fieldName==="Intypenm"&&(s=await t.Grid.gridCodeClass(e.getCurrent(),t.CodeHelper.helperIntype,D,r,!0),s.datas[0].map(C=>{i+=Number(C.Size)}),G.current=i<470?470:i+500,V(s))},Le=async e=>{e.commit(),k("D");const a=e.getCurrent(),r=e.getValue(a.itemIndex,a.column);(r===null||r==="")&&(a.column==="Goodnm"?t.Grid.fSetDataProvider(f,a.dataRow,["Goodnm","Goodcd","Spec","Goodno","Goodtype","GoodtypeNm","Unitcd","Unitcdnm","Whcd","Whcdnm"],void 0):a.column==="Unitcdnm"?t.Grid.fSetDataProvider(f,a.dataRow,["Unitcdnm","Unitcd"],void 0):a.column==="Whcdnm"?t.Grid.fSetDataProvider(f,a.dataRow,["Whcdnm","Whcd"],void 0):a.column==="Intypenm"&&t.Grid.fSetDataProvider(f,a.dataRow,["Intypenm","Intype"],void 0))},_e=async(e,a)=>{const r="Remark",s=e.getDataSource().getRowCount(),{fieldName:i}=e.getCurrent(),{itemIndex:C}=e.getCurrent(),Z={fieldName:i},z=f.getJsonRows(),ee=z.length-1;switch(a.key){case"Enter":if(N({visible:!1,desc:""}),e.commit(!0),i===r)C+1===s?t.Grid.fEnterLastField(e,C,s,q()===0):(l.setFocus(),C+1===s?t.Grid.fTab(l,q()===0,"No"):e.setCurrent({dataRow:C+1,column:0}));else if(e.getDataSource().getValue(C,i)&&Ve.includes(i)){e.commit(),e.setCurrent({itemIndex:C,fieldName:i});const K=e.getValue(C,i);let E={};if(K!==""){if(i==="Whcdnm"){if(E=await t.Grid.gridCodeClass(e.getCurrent(),t.CodeHelper.helperWhNm,D,K,!1),!E.visible){const A=E.res;t.Grid.fSetMultiDataProvider(f,C,{Whcdnm:A.wrhnm,Whcd:A.wrhcd})}}else if(i==="Intypenm"){if(E=await t.Grid.gridCodeClass(e.getCurrent(),t.CodeHelper.helperIntype,D,K,!1),!E.visible){const A=E.res;t.Grid.fSetMultiDataProvider(f,C,{Intypenm:A.minornm,Intype:A.minorcd})}}else if(i==="Unitcdnm"){if(E=await t.Grid.gridCodeClass(e.getCurrent(),t.CodeHelper.helperProdunitnm,D,K,!1),!E.visible){const A=E.res;t.Grid.fSetMultiDataProvider(f,C,{Unitcdnm:A.minornm,Unitcd:A.minorcd})}}else if(i==="Goodno"){const A=t.CodeHelper.fRedefHelper(t.CodeHelper.helperProtypeNm,{iInId:"A111",iInCode1:"001",iInCode2:p.user.factory,iInCode3:t.Common.fTrim(e.getValue(e.getCurrent().itemIndex,"Goodno"))});if(E=await t.Grid.gridCodeClass(e.getCurrent(),A,D,K,!1),!E.visible){const R=E.res;t.Grid.fSetMultiDataProvider(f,C,{Goodcd:R.goodcd,Goodno:R.goodno,Spec:R.spec,Goodnm:R.goodnm,Goodtype:R.goodtype,GoodtypeNm:R.goodtypenm,Whcdnm:R.wrhnm,Whcd:R.wrhcd,Unitcd:R.boxunit,Unitcdnm:R.boxunitnm})}}let ue=0;E.datas[0].map(A=>{ue+=Number(A.Size)}),G.current=ue<470?470:ue+80,V(E)}}l.validateCells(),e.setFocus();break;case"Escape":t.Grid.fEscape(e,C,s,"No");break;case"Insert":t.Grid.fKeyInsert(e,C,q()===0,"No");break;case"ArrowDown":t.Grid.fArrowDown(e,C,s,q()===0,"No");break;case"ArrowUp":z[ee].Goodno||z[ee].Unitcd||z[ee].Qty||z[ee].Intype||t.Grid.fArrowUp(e,C,s,q(C)>0);break;case(a.ctrlKey&&" "):ye(e,Z);break}},q=e=>{const a=f.getAllStateRows().created;if(a.length>0){let r=0;return a.map(s=>{if(e===void 0||s>=e){const i=l.getValues(s);(!i.Goodnm||i.Goodnm===void 0||!i.Unitcd||i.Unitcd===void 0||!i.Qty||i.Qty===void 0||!i.Intype||i.Intype===void 0)&&(r+=1)}}),r}return 0},he=async()=>{pe(),ne(),setTimeout(()=>{document.getElementById(t.Common.fMakeId("PayCond")).focus()},100),P.current="\uACB0\uC7AC",w.current=""},H=async()=>{if(pe(),ne(),t.Common.fValidate(!x(h.SchFrDate,"YYYY-MM-DD").isValid()||!x(h.SchToDate,"YYYY-MM-DD").isValid(),"\uC870\uD68C\uAE30\uAC04\uC744 \uBC14\uB974\uAC8C \uC785\uB825\uD574\uC8FC\uC138\uC694.")||t.Common.fValidate(x(h.SchFrDate).format("YYYYMMDD")>x(h.SchToDate).format("YYYYMMDD"),"\uC870\uD68C\uAE30\uAC04\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."))return;const e={...h};if(B.current!=""&&B.current!=null){const a=x(B.current).format("YYYY-MM-DD"),r=x(h.SchFrDate).format("YYYY-MM-DD"),s=x(h.SchToDate).format("YYYY-MM-DD");a<r?(e.SchFrDate=x(B.current).format("YYYYMMDD"),J(B.current,"fr")):a>s&&(e.SchToDate=x(B.current).format("YYYYMMDD"),J(B.current,"to"))}e.SchFrDate=x(e.SchFrDate).format("YYYYMMDD"),e.SchToDate=x(e.SchToDate).format("YYYYMMDD"),e.SchCompGubun=P.current==="\uACB0\uC7AC \xB7 \uC9C4\uD589\uC911"?"1":h.SchCompGubun,e.SchAccunit=p.user.accunit,e.SchFactory=p.user.factory,await t.Command.fSearch(v,"/@api/business/requestSample/selectByList",e,"\uC0D8\uD50C\uC694\uCCAD\uC11C \uBAA9\uB85D"),document.getElementById(t.Common.fMakeId("SchFrDate")).focus(),B.current=""},J=(e,a)=>{a==="fr"?t.Common.fFieldChange(b,"SchFrDate",e):t.Common.fFieldChange(b,"SchToDate",e)},De=async()=>{try{const a=(await ie.get("/@api/business/requestSample/selectByDetailList",{params:{SchForNo:w.current,SchAccunit:p.user.accunit,SchFactory:p.user.factory,UserId:p.user.userid}})).data;a.dList===void 0||a.dList.length<1?t.Grid.fNewRow(f,{No:"001"}):f.setRows(a.dList),l.clearCurrent()}catch{N({visible:!0,desc:"\uC0C1\uC138 \uB0B4\uC5ED \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},We=async()=>{const e={...c};e.PayCond=x(c.PayCond).format("YYYYMMDD"),e.OutReqYmd=x(c.OutReqYmd).format("YYYYMMDD"),e.Accunit=p.user.accunit,e.Factory=p.user.factory,e.UserId=p.user.userid;let a=[];if(t.Grid.fCheckGridData(f,a,Fe,"\uC0D8\uD50C\uC694\uCCAD\uC11C \uC0C1\uC138")===void 0)try{const i=(await ie.post("/@api/business/requestSample/updateByList",{header:e,detail:a})).data;if(i.errmess!==""){N({visible:!0,desc:i.errmess,type:"E"});return}const C=i.ForNo?i.ForNo.trim():c.ForNo.trim();N({visible:!0,desc:"\uBB38\uC11C \uC800\uC7A5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),setTimeout(()=>{H(),S({...c,ForNo:C}),setTimeout(async()=>{const Z=v.searchData({fields:["ForNo"],value:C,partialMatch:!0});Z!=null&&g.setCurrent({dataRow:Z.dataRow,column:0})},400)},500)}catch(s){N({visible:!0,desc:`\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.${s}`})}},Oe=async()=>{const e={...c};e.Accunit=p.user.accunit,e.Factory=p.user.factory;try{const r=(await ie.post("/@api/business/requestSample/deleteByList",{data:e})).data;return r.errmess!==""?(N({visible:!0,desc:r.errmess,type:"E"}),r):(r.errmess===""&&await t.Command.fDeleteFiles("RequestSample",r.List),setTimeout(async()=>{await H(),g.setCurrent({dataRow:0,column:0})},700),r)}catch(a){N({visible:!0,desc:`\uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.${a}`})}},Xe=async()=>{const e={...c};e.Accunit=p.user.accunit,e.Factory=p.user.factory,await t.Command.fDeleteCheckItem(l,f,"/@api/business/requestSample/deleteByItem",e,"\uC0D8\uD50C\uC694\uCCAD\uC11C \uC0C1\uC138\uB0B4\uC5ED"),setTimeout(()=>{De()},100)},Te=async()=>{const e={...c};e.Accunit=p.user.accunit,e.Factory=p.user.factory;try{const a=await t.Command.fSearchByReturn("/@api/business/requestSample/selectByPrint",e),r=' { "data": '+JSON.stringify(a)+"}";a?(me(!0),t.Report.fReport(r,"/\uC0D8\uD50C\uC694\uCCAD\uC11C.mrd","http://report.ehansun.co.kr/ReportingServer","http://hseerp.ehansun.co.kr/report")):N({visible:!0,desc:"\uCD9C\uB825\uC790\uB8CC \uC870\uD68C \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."})}catch(a){N({visible:!0,desc:`\uCD9C\uB825\uC790\uB8CC \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.${a}`})}},ne=()=>{f.clearRows(),g.clearCurrent(),l.clearCurrent(),t.Grid.fNewRow(f,{No:"001"})},j=(e,a,r,s)=>{if(!y.fGetBinding())switch(e){case"SchCustnm":t.Common.fMultiFieldChange(b,{SchCustcd:s.Data.custoutcd,SchCustnm:r});break;case"Custcdnm":t.Common.fMultiFieldChange(S,{Custcd:a,Custcdnm:r,Addr:s.Data.haddr1,Tel:s.Data.tel,Fax:s.Data.fax,CustOutcd:s.Data.custoutcd}),a&&($.current=a,M.current=s.Data.haddr1,Y.current=s.Data.tel,U.current=s.Data.fax,L.current=s.Data.custoutcd);break;case"ResultPnonm":t.Common.fMultiFieldChange(S,{ResultPno:a,ResultPnonm:r});break;case"ResultDeptcdnm":t.Common.fMultiFieldChange(S,{ResultDeptcd:a,ResultDeptcdnm:r});break}},qe=()=>{if(_==="D"){l.commit();const e=X.selectedData;if(e.column==="Goodnm")try{y.Parameter.map((a,r)=>{l.getDataSource().getRowCount()<=r+e.dataRow&&l.getDataSource().addRow([]),t.Grid.fSetMultiDataProvider(f,e.dataRow+r,{Goodnm:y.Parameter[r].Goodnm,Spec:y.Parameter[r].Spec,Goodno:y.Parameter[r].Goodno,Goodcd:y.Parameter[r].Goodcd,Goodtype:y.Parameter[r].GoodType,GoodtypeNm:y.Parameter[r].GoodTypenm,Unitcd:y.Parameter[r].Unitcd,Unitcdnm:y.Parameter[r].Unitnm,Whcd:y.Parameter[r].Wrhcd,Whcdnm:y.Parameter[r].Wrhnm})})}catch{N({visible:!0,desc:"\uD488\uBAA9\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",type:"W"});return}l.commit(),l.validateCells(),ce({visible:!1,selectedData:{},id:"",viewId:"",searchValue:""}),l.setFocus(),y.fSetParameter("")}},He=async()=>{if(_==="D"){l.commit();const e=I.selectedData,a=y.Codeclass.selData;e.column==="Goodno"||e.column==="Goodnm"?t.Grid.fSetMultiDataProvider(f,e.dataRow,{Goodcd:a.goodcd,Goodno:a.goodno,Spec:a.spec,Goodnm:a.goodnm,Goodtype:a.goodtype,GoodtypeNm:a.goodtypenm,Unitcd:a.boxunit,Unitcdnm:a.boxunitnm,Whcd:a.wrhcd,Whcdnm:a.wrhnm}):e.column==="Unitcdnm"?t.Grid.fSetMultiDataProvider(f,e.dataRow,{Unitcdnm:a.minornm,Unitcd:a.minorcd}):e.column==="Whcdnm"?t.Grid.fSetMultiDataProvider(f,e.dataRow,{Whcdnm:a.wrhnm,Whcd:a.wrhcd}):e.column==="Intypenm"&&t.Grid.fSetMultiDataProvider(f,e.dataRow,{Intypenm:a.minornm,Intype:a.minorcd}),l.commit(),l.validateCells(),V({visible:!1,desc:"",value:"",datas:{},selectedData:{},id:"",viewId:""}),l.setFocus()}else return},ze=()=>{if(_==="D"){const e=l.getCurrent().itemIndex;l.setCurrent({itemIndex:e,fieldName:l.getCurrent().fieldName}),l.setFocus(),k("D")}V({visible:!1})},Ke=async()=>{O({visible:!1,desc:"",id:""}),W.id==="SAVE"?We():W.id==="DELETE"?Oe():W.id==="DELETE_ITEM"&&Xe()},Qe=()=>{O({visible:!1,desc:"",id:""})},xe=async()=>{t.Common.fValidate(!x(c.PayCond,"YYYY-MM-DD").isValid(),"\uC791\uC131\uC77C\uC790\uAC00 \uC81C\uB300\uB85C \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")||t.Common.fValidate(!c.ExpType,"\uC218\uCD9C\uAD6C\uBD84\uC774 \uC81C\uB300\uB85C \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")||t.Common.fValidate(!c.Custcdnm,"\uAC70\uB798\uCC98\uBA85\uC774 \uC81C\uB300\uB85C \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")||t.Common.fValidate(!c.ResultPnonm,"\uC694\uCCAD\uC790\uAC00 \uC81C\uB300\uB85C \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")||t.Common.fValidate(!c.ResultDeptcdnm,"\uBD80\uC11C\uBA85\uC774 \uC81C\uB300\uB85C \uC785\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")||((B.current===null||B.current==="")&&(B.current=c.PayCond),l.commit(),O({visible:!0,desc:"\uC800\uC7A5 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"SAVE"}))},Ee=async()=>{if(!t.Common.fValidate(!c.ForNo,"\uC0D8\uD50C\uC694\uCCAD\uC11C \uBAA9\uB85D\uC774 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")){if(l.commit(!0),_==="H")O({visible:!0,desc:`\uC8FC\uC758) ${w.current} \uBB38\uC11C\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,id:"DELETE"});else if(_==="D"){if(t.Common.fValidate(l.getCheckedItems(!0).length<1,"\uC0AD\uC81C\uD560 \uC0D8\uD50C\uB0B4\uC5ED\uC744 \uC120\uD0DD\uD558\uC138\uC694."))return;O({visible:!0,desc:`${w.current} \uC0C1\uC138\uB0B4\uC5ED\uC744 \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,id:"DELETE_ITEM"})}}},$e=e=>{P.current=e,b(e==="\uACB0\uC7AC \xB7 \uC9C4\uD589\uC911"?{...h,SchWriting:"N"}:{...h}),b({...h}),setTimeout(()=>{H(),S({...c,ForNo:w.current}),setTimeout(()=>{F("1","checked");const a=v.searchData({fields:["ForNo"],value:w.current,partialMatch:!0});a!=null&&g.setCurrent({dataRow:a.dataRow,column:0})},400)},500)},Je=()=>{ce({visible:!1,selectedData:{},id:"",viewId:"",value:""}),setTimeout(()=>{y.fSetParameter(""),l.setFocus()},10)},je=e=>{e.shiftKey&&e.key==="Tab"?setTimeout(()=>{document.getElementById(t.Common.fMakeId("Remark2")).focus()},10):e.key==="Tab"&&(e.preventDefault(),document.getElementById(t.Common.fMakeId("OutReqYmd")).focus())},Ze=e=>{e.shiftKey&&e.key==="Tab"&&setTimeout(()=>{l.setFocus()},10)},et=e=>{e.shiftKey&&e.key==="Tab"&&(e.preventDefault(),g.setFocus())},tt=()=>{t.Common.fValidate(t.Common.fEmptyReturn(w.current)==="",`\uC0D8\uD50C\uC694\uCCAD\uBC88\uD638\uAC00 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. 
\uD655\uC778\uD574 \uC8FC\uC2ED\uC2DC\uC624.`)||Ce(!0)},at=()=>{Ce(!1)};return m.exports.useEffect(()=>{X.visible===!1&&t.Common.fHotKey(y,y.isPopup,he,H,xe,Ee,Te)},[y.HotKey]),m.exports.useEffect(()=>(Pe(),Ge(),Ue(),ne(),setTimeout(()=>{document.getElementById(t.Common.fMakeId("PayCond")).focus()},100),()=>{y.fSetHotKey()}),[]),o.createElement(o.Fragment,null,o.createElement(mt,{pgmid:D,visible:"111111",onNew:he,onSearch:H,onSave:xe,onDelete:Ee,onPrint:Te,onAttachment:tt}),o.createElement(Se,{className:"mainCon"},o.createElement(T.exports.Layout,{style:{width:"100%",height:"100%"}},o.createElement(T.exports.LayoutPanel,{region:"west",split:!0,style:{minWidth:380,width:380,maxWidth:380,height:775}},o.createElement(Se,null,o.createElement(u,{style:{marginLeft:8,marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SA1,style:{width:89}},o.createElement(u,{className:d.SA2},"\uAE30\uAC04")),o.createElement(u,{style:{display:"flex",alignItems:"center",marginLeft:8}},o.createElement(u,{onKeyDown:e=>et(e)},o.createElement(te,{inputCls:"inputCls",selected:h.SchFrDate,inputId:t.Common.fMakeId("SchFrDate"),onHandleDateChange:e=>J(e,"fr")})),o.createElement(u,{style:{display:"flex",alignItems:"center"}},"~"),o.createElement(u,null,o.createElement(te,{inputCls:"inputCls",selected:h.SchToDate,inputId:t.Common.fMakeId("SchToDate"),onHandleDateChange:e=>J(e,"to")})))),o.createElement(u,{style:{marginLeft:8,marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SA1,style:{width:89}},o.createElement(u,{className:d.SA2},"\uACB0\uC7AC\uC0C1\uD0DC")),o.createElement(u,{style:{height:25,border:"1px solid #9ac9ed",color:"#434343",borderRadius:5,width:"230px",display:"flex",padding:5,marginLeft:8},id:t.Common.fMakeId("radioBox"),className:"inputCls",onKeyDown:e=>Ie(e)},o.createElement(u,{display:"flex",alignItems:"center",style:{marginRight:5}},o.createElement(T.exports.RadioButton,{style:{width:"15px",height:"15px"},inputId:t.Common.fMakeId("balDate"),value:"0",groupValue:h.SchCompGubun,onChange:e=>F("0",e)}),o.createElement(T.exports.Label,{htmlFor:t.Common.fMakeId("balDate"),style:{marginLeft:"3px",fontSize:"12px",width:90}},"\uC791\uC131\uC911+\uBC18\uB824")),o.createElement(u,{display:"flex",alignItems:"center",style:{marginRight:5}},o.createElement(T.exports.RadioButton,{style:{width:"15px",height:"15px"},inputId:t.Common.fMakeId("delvDate"),value:"1",groupValue:h.SchCompGubun,onChange:e=>F("1",e)}),o.createElement(T.exports.Label,{htmlFor:t.Common.fMakeId("delvDate"),style:{marginLeft:"3px",width:40,fontSize:"12px"}},"\uC804\uCCB4")))),o.createElement(u,{onKeyDown:e=>{e.shiftKey&&e.key==="Tab"?setTimeout(()=>{document.getElementById(t.Common.fMakeId("radioBox")).focus()},0):e.key==="Tab"&&(e.preventDefault(),setTimeout(()=>{g.setFocus()},10))}},o.createElement(ae,{inputCls:"inputCls",pgmid:D,inputType:"Cust",id:"SchCustnm",title:"\uAC70\uB798\uCC98\uBA85",helper:t.CodeHelper.helperCust,ComponentCode:h.SchCustcd,ComponentValue:h.SchCustnm,SetValue:j,labelStyles:{width:90,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:230,margin:"0px 0px 5px 0px"},onConfirm:()=>{}})),o.createElement(u,{ref:le,id:t.Common.fMakeId("Grid1"),style:{width:"100%",height:664,marginTop:5}}))),o.createElement(T.exports.LayoutPanel,{region:"center",style:{height:775}},o.createElement(u,{style:{paddingLeft:0}},o.createElement(u,{style:{display:"flex"}},o.createElement(T.exports.Form,{ref:ge,style:{maxWidth:"100%"},model:c,rules:Ae},o.createElement(u,{style:{width:"100%",height:"100%",borderRadius:"5px",display:"flex",flexDirection:"column",padding:1}},o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"},onKeyDown:e=>Ze(e)},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"\uC0D8\uD50C\uC694\uCCAD\uBC88\uD638")),o.createElement(T.exports.TextBox,{name:"ForNo",inputId:t.Common.fMakeId("ForNo"),value:c.ForNo,onChange:e=>t.Common.fFieldChange(S,"ForNo",e),editable:!1,className:d.SC3,style:{width:150}})),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"\uC791\uC131\uC77C\uC790"),o.createElement(se,{style:{marginLeft:25,color:"#ffa8a8"},size:12})),o.createElement(te,{inputCls:"inputCls",selected:c.PayCond,inputId:t.Common.fMakeId("PayCond"),disabled:!!w.current,onHandleDateChange:e=>{t.Common.fFieldChange(S,"PayCond",e),B.current=e},style:{width:110},inputRequired:!0})),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"\uC0D8\uD50C\uCD9C\uD558\uC77C"),o.createElement(se,{style:{marginLeft:25,color:"#ffa8a8"},size:12})),o.createElement(te,{inputCls:"inputCls",selected:c.OutReqYmd,inputId:t.Common.fMakeId("OutReqYmd"),onHandleDateChange:e=>t.Common.fFieldChange(S,"OutReqYmd",e),style:{width:110},inputRequired:!0})),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"\uC218\uCD9C\uAD6C\uBD84"),o.createElement(se,{style:{marginLeft:25,color:"#ffa8a8"},size:12})),o.createElement(T.exports.ComboBox,{inputId:t.Common.fMakeId("ExpType"),inputCls:"inputCls",style:{width:80,height:27},data:Re,value:c.ExpType,onChange:e=>t.Common.fFieldChange(S,"ExpType",e),editable:!1,panelStyle:{height:67}})),o.createElement(ae,{inputCls:"inputCls",pgmid:D,inputType:"Cust",id:"Custcdnm",title:"\uAC70\uB798\uCC98\uBA85",helper:t.CodeHelper.helperCust,ComponentCode:c.Custcd,ComponentValue:c.Custcdnm,SetValue:j,labelStyles:{width:110,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:150,margin:"0px 0px 5px 0px"},inputRequired:!0,onConfirm:()=>{}}),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"\uC8FC\uC18C")),o.createElement(T.exports.TextBox,{inputId:t.Common.fMakeId("Addr"),inputCls:"inputCls",value:M.current,editable:!1,className:d.SC3,style:{width:430}})),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"Tel")),o.createElement(T.exports.TextBox,{inputId:t.Common.fMakeId("Tel"),inputCls:"inputCls",value:Y.current,editable:!1,className:d.SC3,style:{width:150}}),o.createElement(ae,{inputCls:"inputCls",pgmid:D,inputType:"Pno",id:"ResultPnonm",title:"\uC694\uCCAD\uC790",helper:t.CodeHelper.helperPnoNm2,ComponentCode:c.ResultPno,ComponentValue:c.ResultPnonm,SetValue:j,labelStyles:{width:110,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{margin:"0px 0px 5px 0px",width:150},inputRequired:!0,onConfirm:()=>{}})),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"Fax")),o.createElement(T.exports.TextBox,{inputId:t.Common.fMakeId("Fax"),inputCls:"inputCls",value:U.current,editable:!1,className:d.SC3,style:{width:150}}),o.createElement(ae,{inputCls:"inputCls",pgmid:D,inputType:"Dept",id:"ResultDeptcdnm",title:"\uBD80\uC11C\uBA85",helper:t.CodeHelper.helperDeptNm,ComponentCode:c.ResultDeptcd,ComponentValue:c.ResultDeptcdnm,SetValue:j,labelStyles:{width:110,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{margin:"0px 0px 5px 0px",width:150},inputRequired:!0,onConfirm:()=>{}})),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"\uAC70\uB798\uCC98\uCF54\uB4DC")),o.createElement(T.exports.TextBox,{inputId:t.Common.fMakeId("CustOutcd"),inputCls:"inputCls",value:L.current,editable:!1,className:d.SC3,style:{width:150}})),o.createElement(u,{style:{marginTop:3,display:"flex",alignItems:"center"},onKeyDown:e=>{!y.isShift&&e.key==="Tab"&&setTimeout(()=>{k("D"),l.setFocus(),l.setCurrent({itemIndex:0,column:0})},0)}},o.createElement(u,{className:d.SC1,style:{width:110}},o.createElement(u,{className:d.SC2},"\uBE44\uACE01")),o.createElement(Ct,{inputCls:"inputCls",Util:t,name:"Remark2",inputId:t.Common.fMakeId("Remark2"),value:c.Remark2,onChange:e=>t.Common.fFieldChange(S,"Remark2",e),className:d.SC3,style:{width:430}}))))),o.createElement(u,{ref:de,id:t.Common.fMakeId("Grid2"),style:{width:"100%",height:404,marginTop:15},onKeyDown:e=>je(e)}))),o.createElement(T.exports.LayoutPanel,{region:"east",title:P.current,collapsible:!0,collapsed:!0,expander:!0,style:{width:400}},o.createElement(u,{style:{marginTop:10}},o.createElement(ft,{PGMID:D,Init:we.current,ApprovalType:"A",ApprovalDocNo:w.current,ApprovalDocSource:"RS",ApprovalDocFlag:"C",AttachmentsKeyName:"\uC0D8\uD50C\uC694\uCCAD\uBC88\uD638",RetrieveFlag:oe.current,MaxRevNo:0,RevNo:0,SetTitle:$e,isImageComponent:!0,isAttachments:!0,filepath:"RequestSample"}))))),o.createElement(st,{visible:I.visible,description:I.desc,value:I.value,datas:I.datas,id:I.id,viewId:I.viewId,selectedData:I.selectedData,width:G.current,onConfirm:He,onCancel:()=>ze({target:I.id})}),Ne&&o.createElement(yt,{PGMID:D,FileTitle:"\uC0D8\uD50C\uC694\uCCAD\uBC88\uD638",FileType:"RS",FileNo:w.current,FilePath:"requestsample",setClose:at}),Be&&o.createElement(T.exports.Dialog,{title:o.createElement(u,{style:{display:"flex"}},o.createElement("img",{src:it,alt:"logo",style:{width:"50px"}}),o.createElement(u,{style:{marginLeft:15}},"\uC0D8\uD50C\uC694\uCCE5\uC11C")),style:{width:"1870px",height:"900px"},bodyCls:"f-column",closable:!0,draggable:!0,modal:!0,onClose:()=>me(!1)},o.createElement(u,{className:"f-full"},o.createElement("div",{id:"crownix-viewer",style:{position:"absolute",width:"100%",height:"100%"}}))),o.createElement(lt,{visible:re.visible,description:re.desc,type:re.type,onConfirm:()=>N({visible:!1})}),o.createElement(dt,{visible:W.visible,description:W.desc,onCancel:Qe,onConfirm:Ke}),o.createElement(pt,{visible:X.visible,selectedData:X.selectedData,id:X.id,onConfirm:()=>qe(),onClose:()=>Je(),pgmid:D}))});let g,l,v,f;const St=rt(ht);export{Gt as default};