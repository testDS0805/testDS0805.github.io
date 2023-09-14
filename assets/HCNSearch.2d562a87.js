import{r as c,R as i}from"./index.da6908f5.js";import{m as o,h as Y,o as v,B as N,u as Z,U as J,P as j,r as S,A as Q,C as _}from"./App.11263b70.js";import{C as ee}from"./CommonButton.0b792d77.js";import{H as te}from"./HeaderList.b90f1652.js";import{C as M}from"./CodeHelperPopup.3932fdb9.js";const ae=[{fieldName:"Material",dataType:o.exports.ValueType.TEXT},{fieldName:"Materialnm",dataType:o.exports.ValueType.TEXT},{fieldName:"MaterialStandard",dataType:o.exports.ValueType.TEXT},{fieldName:"MaterialStandardnm",dataType:o.exports.ValueType.TEXT},{fieldName:"DesignGrade",dataType:o.exports.ValueType.TEXT},{fieldName:"DesignGradenm",dataType:o.exports.ValueType.TEXT},{fieldName:"Conditions",dataType:o.exports.ValueType.TEXT},{fieldName:"Conditionsnm",dataType:o.exports.ValueType.TEXT},{fieldName:"SizeMin",dataType:o.exports.ValueType.NUMBER},{fieldName:"SizeMax",dataType:o.exports.ValueType.NUMBER}],ie=[{name:"Materialnm",fieldName:"Materialnm",type:"data",width:"160",header:{text:"\uC7AC\uC9C8",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"MaterialStandardnm",fieldName:"MaterialStandardnm",type:"data",width:"80",header:{text:"\uC7AC\uB8CC\uD45C\uC900",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"DesignGradenm",fieldName:"DesignGradenm",type:"data",width:"160",header:{text:"\uB4F1\uAE09",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Conditionsnm",fieldName:"Conditionsnm",type:"data",width:"160",header:{text:"CONDITIONS",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"SizeMin",fieldName:"SizeMin",width:80,styleName:"right-column",editable:!1,header:{text:"SIZE MIN",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"number",editFormat:"#,##0.##"},numberFormat:"#,##0.##"},{name:"SizeMax",fieldName:"SizeMax",width:80,styleName:"right-column",editable:!1,header:{text:"SIZE MAX",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"number",editFormat:"#,##0.##"},numberFormat:"#,##0.##"}],ne=[{fieldName:"ReferenceNo",dataType:o.exports.ValueType.TEXT},{fieldName:"ReferenceCode",dataType:o.exports.ValueType.TEXT},{fieldName:"ReferenceCodenm",dataType:o.exports.ValueType.TEXT},{fieldName:"MinReference",dataType:o.exports.ValueType.NUMBER},{fieldName:"MaxReference",dataType:o.exports.ValueType.NUMBER}],re=[{name:"ReferenceNo",fieldName:"ReferenceNo",width:50,styleName:"center-column",editable:!1,header:{text:"No",showTooltip:!0},renderer:{type:"text",showTooltip:!0}},{name:"ReferenceCodenm",fieldName:"ReferenceCodenm",type:"data",width:100,styleName:"left-column",editable:!1,header:{text:"\uD654\uD559\uC131\uBD84",showTooltip:!0}},{name:"MinReference",fieldName:"MinReference",width:80,styleName:"right-column",editable:!1,header:{text:"MIN",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"number",editFormat:"#,##0.###"},numberFormat:"#,##0.###"},{name:"MaxReference",fieldName:"MaxReference",width:80,styleName:"right-column",editable:!1,header:{text:"MAX",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"number",editFormat:"#,##0.###"},numberFormat:"#,##0.###"}],oe=[{fieldName:"ReferenceNo",dataType:o.exports.ValueType.TEXT},{fieldName:"ReferenceCode",dataType:o.exports.ValueType.TEXT},{fieldName:"ReferenceCodenm",dataType:o.exports.ValueType.TEXT},{fieldName:"MinReference",dataType:o.exports.ValueType.NUMBER},{fieldName:"MaxReference",dataType:o.exports.ValueType.NUMBER}],le=[{name:"ReferenceNo",fieldName:"ReferenceNo",width:50,styleName:"center-column",editable:!1,header:{text:"No",showTooltip:!0},renderer:{type:"text",showTooltip:!0}},{name:"ReferenceCodenm",fieldName:"ReferenceCodenm",type:"data",width:100,styleName:"left-column",editable:!1,header:{text:"\uBB3C\uC131\uCE58",showTooltip:!0}},{name:"MinReference",fieldName:"MinReference",width:80,styleName:"right-column",editable:!1,header:{text:"MIN",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"number",editFormat:"#,##0.###"},numberFormat:"#,##0.###"},{name:"MaxReference",fieldName:"MaxReference",width:80,styleName:"right-column",editable:!1,header:{text:"MAX",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editor:{type:"number",editFormat:"#,##0.###"},numberFormat:"#,##0.###"}];function se(){const[e,r]=c.exports.useState({HCN:"",Ymd:"",Materialcd:"",Materialno:"",Material:"",Materialnm:"",MaterialStandard:"",MaterialStandardnm:"",DesignGrade:"",DesignGradenm:"",Conditions:"",Conditionsnm:"",SchAccunit:""}),[p,l]=c.exports.useState({Material:"",MaterialStandard:"",DesignGrade:"",Conditions:""}),[s]=c.exports.useState({a:"required"}),[w,x]=c.exports.useState(""),[f,t]=c.exports.useState({visible:!1,desc:"",type:"N"}),[d,u]=c.exports.useState({visible:!1,desc:"",id:""}),[n,a]=c.exports.useState({visible:!1,description:"",value:"",datas:{},id:"",viewId:"",selectedData:{}});return String.prototype.DateValidation=function(m){return new Date(this)instanceof Date&&!isNaN(new Date(this))?Y(this).format(m):null},{searchVO:e,setSearchVO:r,headerVO:p,setHeaderVO:l,gridFocus:w,setGridFocus:x,alert:f,setAlert:t,confirm:d,setConfirm:u,codeClassInputs:n,setCodeClassInputs:a,ValidationRules:s}}const de=async(e,r)=>{e({HCN:"",Ymd:"",Materialcd:"",Materialno:"",Material:"",Materialnm:"",MaterialStandard:"",MaterialStandardnm:"",DesignGrade:"",DesignGradenm:"",Conditions:"",Conditionsnm:"",SchAccunit:""},50),r({Material:"",MaterialStandard:"",DesignGrade:"",Conditions:""},50)},me=async(e,r,p,l)=>{const s={...r};s.SchAccunit=e.User.user.accunit,await e.Util.Command.fSearch(p,"/@api/quality/hcnSearch/selectByList",s,l)},ce=async(e,r,p)=>{const l={...r},s=await e.Util.Command.fSearchByReturnTrim("/@api/quality/hcnSearch/selectByChemicalValueList",l);p.setRows(s)},ue=async(e,r,p)=>{const l={...r},s=await e.Util.Command.fSearchByReturnTrim("/@api/quality/hcnSearch/selectByPropertyValueList",l);p.setRows(s)},fe=v(e=>{const r=c.exports.useRef(null),p=[""],l=async()=>{e.Util.Grid.fContainerInit(e.Util.Common.fMakeId(e.Id)),E=new o.exports.LocalDataProvider(!1),h=new o.exports.GridView(r.current),e.Util.Grid.fInitGridHeader(h,E,e.GridFields,e.GridColumns,s,w,x),h.displayOptions.rowHeight=25,h.setRowIndicator({visible:!1}),h.setStateBar({visible:!1}),h.setCheckBar({visible:!1}),h.onItemChecked=()=>{e.setGridFocus("R")},h.onValidateColumn=(t,d,u,n)=>{const a={};return p[0].includes(d.fieldName)&&(!n||n===void 0)&&(a.level="warning",a.message="\uD544\uC218 \uC785\uB825 \uAC12\uC785\uB2C8\uB2E4."),a},e.DataProviderBind(E),e.GridViewBind(h)},s=async t=>{t.commit(),e.setGridFocus("R")},w=t=>{t.commit(),e.setGridFocus("R"),h.validateCells()},x=async(t,d)=>{const u="LastField",n=t.getDataSource().getRowCount(),{fieldName:a}=t.getCurrent(),{itemIndex:m}=t.getCurrent();switch(e.setGridFocus("R"),d.key){case"Enter":e.setAlert({visible:!1,desc:""}),t.commit(!0),a===u&&e.Util.Grid.fEnterLastField(t,m,n,f()===0),t.setFocus();break;case"Escape":e.Util.Grid.fEscape(t,m,n,"No");break;case"Insert":e.Util.Grid.fKeyInsert(t,m,f()===0,"No");break;case"ArrowDown":e.Util.Grid.fArrowDown(t,m,n,f()===0,"No");break;case"ArrowUp":e.Util.Grid.fArrowUp(t,m,n,f(m)>0);break}},f=t=>{const d=E.getAllStateRows().created;if(d.length>0){let u=0;return d.map(n=>{if(t===void 0||n>=t){const a=h.getValues(n);(!a.ItemTypeNm||a.ItemTypeNm===void 0)&&(u+=1)}}),u}return 0};return c.exports.useEffect(()=>{l()},[]),i.createElement(i.Fragment,null,i.createElement(N,{ref:r,key:e.Util.Common.fMakeId(e.Id),id:e.Util.Common.fMakeId(e.Id),style:{width:"100%",height:386}}))});let E,h;const pe=v(e=>{const r=c.exports.useRef(null),p=[""],l=async()=>{e.Util.Grid.fContainerInit(e.Util.Common.fMakeId(e.Id)),R=new o.exports.LocalDataProvider(!1),y=new o.exports.GridView(r.current),e.Util.Grid.fInitGridHeader(y,R,e.GridFields,e.GridColumns,s,w,x),y.displayOptions.rowHeight=25,y.setRowIndicator({visible:!1}),y.setStateBar({visible:!1}),y.setCheckBar({visible:!1}),y.onItemChecked=()=>{e.setGridFocus("R")},y.onValidateColumn=(t,d,u,n)=>{const a={};return p[0].includes(d.fieldName)&&(!n||n===void 0)&&(a.level="warning",a.message="\uD544\uC218 \uC785\uB825 \uAC12\uC785\uB2C8\uB2E4."),a},e.DataProviderBind(R),e.GridViewBind(y)},s=async t=>{t.commit(),e.setGridFocus("R")},w=t=>{t.commit(),e.setGridFocus("R"),y.validateCells()},x=async(t,d)=>{const u="LastField",n=t.getDataSource().getRowCount(),{fieldName:a}=t.getCurrent(),{itemIndex:m}=t.getCurrent();switch(e.setGridFocus("R"),d.key){case"Enter":e.setAlert({visible:!1,desc:""}),t.commit(!0),a===u&&e.Util.Grid.fEnterLastField(t,m,n,f()===0),t.setFocus();break;case"Escape":e.Util.Grid.fEscape(t,m,n,"No");break;case"Insert":e.Util.Grid.fKeyInsert(t,m,f()===0,"No");break;case"ArrowDown":e.Util.Grid.fArrowDown(t,m,n,f()===0,"No");break;case"ArrowUp":e.Util.Grid.fArrowUp(t,m,n,f(m)>0);break}},f=t=>{const d=R.getAllStateRows().created;if(d.length>0){let u=0;return d.map(n=>{if(t===void 0||n>=t){const a=y.getValues(n);(!a.ItemTypeNm||a.ItemTypeNm===void 0)&&(u+=1)}}),u}return 0};return c.exports.useEffect(()=>{l()},[]),i.createElement(i.Fragment,null,i.createElement(N,{ref:r,key:e.Util.Common.fMakeId(e.Id),id:e.Util.Common.fMakeId(e.Id),style:{width:"100%",height:386}}))});let R,y;const Te=v(()=>{const e="HCNSEARCH",{$CommonStore:r,$UserStore:p}=Z(),{searchVO:l,setSearchVO:s,setHeaderVO:w,setGridFocus:x,alert:f,setAlert:t,confirm:d,setConfirm:u,ValidationRules:n}=se(),a=new J(e,t,!0,!0,!0,!0,!0),m=c.exports.useRef(null),k=c.exports.useRef(""),P=c.exports.useRef(0),B=async()=>{r.fSetBinding(!0),await de(s,w),r.fSetBinding(!1),k.current="",a.Common.fSetTabIndex()},[I]=c.exports.useState({Util:a,User:p,fInit:B,setAlert:t,setHeaderVO:w}),H=C=>{F=C},L=C=>{b=C},X=C=>{V=C},O=C=>{D=C},z=C=>{},K=C=>{},G=async(C,g,T)=>{if(!r.fGetBinding())switch(C){case"Materialnm":a.Common.fMultiFieldChange(s,{Material:g,Materialnm:T});break;case"MaterialStandardnm":a.Common.fMultiFieldChange(s,{MaterialStandard:g,MaterialStandardnm:T});break;case"DesignGradenm":a.Common.fMultiFieldChange(s,{DesignGrade:g,DesignGradenm:T});break;case"Conditionsnm":a.Common.fMultiFieldChange(s,{Conditions:g,Conditionsnm:T});break}},W=async(C,g)=>{D.commit(),x("H"),b.clearRows(),V.clearRows();const T=F.getJsonRow(g);r.fSetBinding(!0),w(T),r.fSetBinding(!1),setTimeout(()=>{ce(I,T,b),ue(I,T,V)},100)},$=async()=>{u({visible:!1,desc:"",id:""})},q=()=>{u({visible:!1,desc:"",id:""})},U=async()=>{B(),b.clearRows(),V.clearRows()},A=async()=>{await me(I,l,F,"\uAE30\uC900\uAC12"),setTimeout(()=>{D.setFocus()},100)};return c.exports.useEffect(()=>{a.Common.fHotKey(r,r.isPopup,U,A)},[r.HotKey]),c.exports.useEffect(()=>{B()},[]),i.createElement(i.Fragment,null,i.createElement(ee,{pgmid:e,visible:"110000",onNew:U,onSearch:A}),i.createElement(j,{className:"mainCon"},i.createElement(S.exports.Layout,{style:{width:"100%",height:775}},i.createElement(S.exports.LayoutPanel,{region:"west",style:{width:1260,height:774}},i.createElement(S.exports.Layout,null,i.createElement(S.exports.LayoutPanel,{region:"north"},i.createElement(S.exports.Form,{ref:m,model:l,rules:n,labelWidth:120,labelAlign:"right"},i.createElement(N,{style:{width:"100%",height:42,marginTop:5}},i.createElement(N,{display:"flex"},i.createElement(M,{inputCls:"inputCls",pgmid:e,inputType:"",id:"Materialnm",title:"\uC7AC\uC9C8",helper:a.CodeHelper.helperMaterial,ComponentCode:l.Material,ComponentValue:l.Materialnm,SetValue:G,labelStyles:{width:90,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:200,margin:"0px 0px 5px 0px"}}),i.createElement(M,{inputCls:"inputCls",pgmid:e,inputType:"",id:"MaterialStandardnm",title:"\uC7AC\uB8CC\uD45C\uC900",helper:a.CodeHelper.helperMaterialStandard,ComponentCode:l.MaterialStandard,ComponentValue:l.MaterialStandardnm,SetValue:G,labelStyles:{width:90,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:200,margin:"0px 0px 5px 0px"}}),i.createElement(M,{inputCls:"inputCls",pgmid:e,inputType:"",id:"DesignGradenm",title:"\uB4F1\uAE09",helper:a.CodeHelper.helperDesignGrade,ComponentCode:l.DesignGrade,ComponentValue:l.DesignGradenm,SetValue:G,labelStyles:{width:90,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:200,margin:"0px 0px 5px 0px"}}),i.createElement(M,{inputCls:"inputCls",pgmid:e,inputType:"",id:"Conditionsnm",title:"CONDITION",helper:a.CodeHelper.helperConditions,ComponentCode:l.Conditions,ComponentValue:l.Conditionsnm,SetValue:G,labelStyles:{width:90,height:25,margin:"3px 10px 5px 10px",padding:5,fontSize:12,display:"flex",alignItems:"center",fontWeight:600},inputStyles:{width:200,margin:"0px 0px 5px 0px"}})))),i.createElement(N,{style:{width:"100%"}},i.createElement(te,{Util:a,Id:"Grid1",GridTitle:"\uBA85\uC138",Height:723,currentIndex:P,GridFields:ae,GridColumns:ie,RowChanged:W,DataProviderBind:H,GridViewBind:O}))))),i.createElement(S.exports.LayoutPanel,{region:"east",style:{width:400,height:774}},i.createElement(N,{style:{width:"100%"}},i.createElement(fe,{Util:a,Id:"Grid2",GridTitle:"\uBA85\uC138",GridFields:ne,GridColumns:re,setGridFocus:x,setAlert:t,DataProviderBind:L,GridViewBind:z})),i.createElement(N,{style:{width:"100%"}},i.createElement(pe,{Util:a,Id:"Grid3",GridTitle:"\uBA85\uC138",GridFields:oe,GridColumns:le,setGridFocus:x,setAlert:t,DataProviderBind:X,GridViewBind:K}))))),i.createElement(Q,{visible:f.visible,description:f.desc,type:f.type,onConfirm:()=>t({visible:!1})}),i.createElement(_,{visible:d.visible,description:d.desc,onCancel:q,onConfirm:$}))});let F,b,V,D;export{Te as default};
