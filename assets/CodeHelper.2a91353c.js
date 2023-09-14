import{r as T,R as a}from"./index.da6908f5.js";import{m as t,h as ee,d as G,o as O,B as y,c as te,u as ae,U as re,P,r as I,A as oe,C as le,n as ie}from"./App.11263b70.js";import{C as se}from"./CommonButton.0b792d77.js";import{H as ue}from"./HeaderList.b90f1652.js";import{T as F}from"./TextEdit.ae1e2d77.js";const ne=[{fieldName:"MajorCd",dataType:t.exports.ValueType.TEXT},{fieldName:"MajorNm",dataType:t.exports.ValueType.TEXT},{fieldName:"Level",dataType:t.exports.ValueType.TEXT},{fieldName:"Remark",dataType:t.exports.ValueType.TEXT},{fieldName:"Head1",dataType:t.exports.ValueType.TEXT},{fieldName:"Head2",dataType:t.exports.ValueType.TEXT},{fieldName:"Head3",dataType:t.exports.ValueType.TEXT},{fieldName:"Head4",dataType:t.exports.ValueType.TEXT},{fieldName:"Head5",dataType:t.exports.ValueType.TEXT},{fieldName:"Head6",dataType:t.exports.ValueType.TEXT},{fieldName:"Head7",dataType:t.exports.ValueType.TEXT},{fieldName:"Head8",dataType:t.exports.ValueType.TEXT},{fieldName:"Head9",dataType:t.exports.ValueType.TEXT},{fieldName:"Head10",dataType:t.exports.ValueType.TEXT},{fieldName:"Head11",dataType:t.exports.ValueType.TEXT},{fieldName:"Head12",dataType:t.exports.ValueType.TEXT},{fieldName:"Head13",dataType:t.exports.ValueType.TEXT},{fieldName:"Head14",dataType:t.exports.ValueType.TEXT},{fieldName:"Head15",dataType:t.exports.ValueType.TEXT}],de=[{name:"MajorCd",fieldName:"MajorCd",type:"data",width:"80",header:{text:"\uCF54\uB4DC",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"MajorNm",fieldName:"MajorNm",type:"data",width:"150",header:{text:"\uCF54\uB4DC\uBA85",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Remark",fieldName:"Remark",type:"data",width:"80",header:{text:"\uBE44\uACE0",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"}],me=[{fieldName:"MinorCd",dataType:t.exports.ValueType.TEXT},{fieldName:"MinorNm",dataType:t.exports.ValueType.TEXT},{fieldName:"SortSeq",dataType:t.exports.ValueType.NUMBER},{fieldName:"Remark",dataType:t.exports.ValueType.TEXT},{fieldName:"Item1",dataType:t.exports.ValueType.TEXT},{fieldName:"Item2",dataType:t.exports.ValueType.TEXT},{fieldName:"Item3",dataType:t.exports.ValueType.TEXT},{fieldName:"Item4",dataType:t.exports.ValueType.TEXT},{fieldName:"Item5",dataType:t.exports.ValueType.TEXT},{fieldName:"Item6",dataType:t.exports.ValueType.TEXT},{fieldName:"Item7",dataType:t.exports.ValueType.TEXT},{fieldName:"Item8",dataType:t.exports.ValueType.TEXT},{fieldName:"Item9",dataType:t.exports.ValueType.TEXT},{fieldName:"Item10",dataType:t.exports.ValueType.TEXT},{fieldName:"Item11",dataType:t.exports.ValueType.TEXT},{fieldName:"Item12",dataType:t.exports.ValueType.TEXT},{fieldName:"Item13",dataType:t.exports.ValueType.TEXT},{fieldName:"Item14",dataType:t.exports.ValueType.TEXT},{fieldName:"Item15",dataType:t.exports.ValueType.TEXT}],ce=[{name:"MinorCd",fieldName:"MinorCd",type:"data",width:"70",header:{text:"\uCF54\uB4DC",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"MinorNm",fieldName:"MinorNm",type:"data",width:"150",header:{text:"\uCF54\uB4DC\uBA85",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"SortSeq",fieldName:"SortSeq",type:"data",width:"70",styleName:"right-column",editable:!0,header:{text:"\uC815\uB82C\uC21C\uC11C",showTooltip:!0},numberFormat:"0"},{name:"Remark",fieldName:"Remark",type:"data",width:"150",header:{text:"\uBE44\uACE0",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item1",fieldName:"Item1",type:"data",width:"80",header:{text:"Item1",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item2",fieldName:"Item2",type:"data",width:"80",header:{text:"Item2",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item3",fieldName:"Item3",type:"data",width:"80",header:{text:"Item3",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item4",fieldName:"Item4",type:"data",width:"80",header:{text:"Item4",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item5",fieldName:"Item5",type:"data",width:"80",header:{text:"Item5",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item6",fieldName:"Item6",type:"data",width:"80",header:{text:"Item6",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item7",fieldName:"Item7",type:"data",width:"80",header:{text:"Item7",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item8",fieldName:"Item8",type:"data",width:"80",header:{text:"Item8",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item9",fieldName:"Item9",type:"data",width:"80",header:{text:"Item9",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item10",fieldName:"Item10",type:"data",width:"80",header:{text:"Item10",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item11",fieldName:"Item11",type:"data",width:"80",header:{text:"Item11",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item12",fieldName:"Item12",type:"data",width:"80",header:{text:"Item12",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item13",fieldName:"Item13",type:"data",width:"80",header:{text:"Item13",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item14",fieldName:"Item14",type:"data",width:"80",header:{text:"Item14",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"Item15",fieldName:"Item15",type:"data",width:"80",header:{text:"Item15",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"}],pe={DateTitleBox:{margin:"5px 10px 0px 15px",backgroundColor:"#e0ecff",padding:5,color:"#163971",height:25,fontSize:"12px",display:"flex",width:85,alignItems:"center",fontWeight:600},TitleBox4:{backgroundColor:"#fccf76",color:"#163971",padding:5,height:20,fontSize:"12px",display:"flex",alignItems:"center",width:"100%",fontWeight:600},TitleText3:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},InputBox3:{marginTop:5,width:120,height:25,"& input":{fontSize:"12px !important"}},Scroll:{"& .mainCon":{height:"700px",padding:"10px"}}};function Ce(){const[e,o]=T.exports.useState({SchMajorNm:""}),[f,l]=T.exports.useState({MajorCd:"",MajorNm:"",Remark:""}),[n]=T.exports.useState({MajorNm:"required"}),[c,u]=T.exports.useState(""),[p,r]=T.exports.useState({visible:!1,desc:"",type:"N"}),[i,x]=T.exports.useState({visible:!1,desc:"",id:""}),[d,m]=T.exports.useState({visible:!1,description:"",value:"",datas:{},id:"",viewId:"",selectedData:{}});return String.prototype.DateValidation=function(h){return new Date(this)instanceof Date&&!isNaN(new Date(this))?ee(this).format(h):null},{searchVO:e,setSearchVO:o,InputVO:f,setInputVO:l,gridFocus:c,setGridFocus:u,alert:p,setAlert:r,confirm:i,setConfirm:x,codeClassInputs:d,setCodeClassInputs:m,ValidationRules:n}}const fe=async(e,o)=>{e({SchMajorNm:""},50),o({MajorCd:"",MajorNm:"",Remark:""},50)},b=async(e,o,f,l)=>{const n={...o};await e.Util.Command.fSearch(f,"/@api/admin/codeHelper/selectByList",n,l)},W=async(e,o,f,l)=>{const n={};n.MajorCd=l;try{const c=await e.Util.Command.fSearchByReturn("/@api/admin/codeHelper/selectByDetailList",n);c===void 0||c.length<1?e.Util.Common.fProviderClearRows(o):o.setRows(c),f.clearCurrent()}catch{e.setAlert({visible:!0,desc:"\uCF54\uB4DC\uBA85\uC138 \uC870\uD68C\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.",type:"E"})}},ye=async(e,o,f,l,n,c,u,p)=>{u.commit(!0);const r={...f};r.Factory=e.User.user.factory,r.iUserPno=e.User.user.userid;let i=[];if(e.Util.Grid.fCheckGridData(n,i,{MinorCd:"\uCF54\uB4DC",MinorNm:"\uCF54\uB4DC\uBA85"},"\uAE30\uB2A5")===void 0)try{const m=(await G.post("/@api/admin/codeHelper/updateByList",{header:r,detail:i})).data;if(m.errmess!==""){e.setAlert({visible:!0,desc:m.errmess,type:"E"});return}e.setAlert({visible:!0,desc:"\uBB38\uC11C \uC800\uC7A5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),setTimeout(()=>{setTimeout(async()=>{await b(e,o,l,"\uCF54\uB4DC\uB4F1\uB85D");const h=l.searchData({fields:["MajorCd"],value:p,partialMatch:!0});h!=null&&c.setCurrent({dataRow:h.dataRow,column:0})},500)},700)}catch(d){e.setAlert({visible:!0,desc:`\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.${d}`})}},Te=async(e,o,f,l,n,c)=>{const u={...f};u.Factory=e.User.user.factory,u.iUserPno=e.User.user.userid;try{const r=(await G.post("/@api/admin/codeHelper/deleteByList",{data:u})).data;return r.errmess!==""?(e.setAlert({visible:!0,desc:r.errmess,type:"E"}),r):(setTimeout(()=>{setTimeout(async()=>{await b(e,o,l,"\uCF54\uB4DC\uB4F1\uB85D");const i=l.searchData({fields:["MajorCd"],value:c,partialMatch:!0});i!=null&&n.setCurrent({dataRow:i.dataRow,column:0})},500)},700),r)}catch(p){e.setAlert({visible:!0,desc:`\uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.${p}`})}},he=async(e,o,f,l,n)=>{const c={...o};c.Factory=e.User.user.factory;let u=[];l.getCheckedItems(!0).forEach(r=>{const i=f.getJsonRow(r);u.push(i)});try{const i=(await G.post("/@api/admin/codeHelper/deleteByItem",{header:c,detail:u})).data;if(i.errmess!==""){e.setAlert({visible:!0,desc:i.errmess,type:"E"});return}e.setAlert({visible:!0,desc:"\uCF54\uB4DC \uBA85\uC138\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),setTimeout(async()=>{await W(e,f,l,n)},100)}catch{e.setAlert({visible:!0,desc:"\uCF54\uB4DC \uBA85\uC138 \uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4."})}},xe=O(e=>{const o=T.exports.useRef(null),f=[""],l=async()=>{e.Util.Grid.fContainerInit(e.Util.Common.fMakeId(e.Id)),R=new t.exports.LocalDataProvider(!1),w=new t.exports.GridView(o.current),e.Util.Grid.fInitGridDetail(w,R,e.GridFields,e.GridColumns,n,c,u),w.displayOptions.rowHeight=25,w.onItemChecked=()=>{e.setGridFocus("R")},w.onValidateColumn=(r,i,x,d)=>{const m={};return f[0].includes(i.fieldName)&&(!d||d===void 0)&&(m.level="warning",m.message="\uD544\uC218 \uC785\uB825 \uAC12\uC785\uB2C8\uB2E4."),m},w.onCurrentChanged=(r,i)=>{i.dataRow>=0&&e.Util.Grid.fSetGridKeyField(r,i.dataRow,["MinorCd"])},e.DataProviderBind(R),e.GridViewBind(w)},n=async r=>{r.commit(),e.setGridFocus("R")},c=r=>{r.commit(),e.setGridFocus("R"),w.validateCells()},u=async(r,i)=>{const x="Item15",d=r.getDataSource().getRowCount(),{fieldName:m}=r.getCurrent(),{itemIndex:h}=r.getCurrent();switch(e.setGridFocus("R"),i.key){case"Enter":e.setAlert({visible:!1,desc:""}),r.commit(!0),m===x&&e.Util.Grid.fEnterLastField(r,h,d,p()===0),r.setFocus();break;case"ArrowDown":e.Util.Grid.fArrowDown(r,h,d,p()===0);break;case"ArrowUp":r.commit(),e.Util.Grid.fArrowUp(r,h,d,p(h)>0);break}},p=r=>{const i=R.getAllStateRows().created;if(i.length>0){let x=0;return i.map(d=>{if(r===void 0||d>=r){const m=w.getValues(d);(!m.MinorCd||m.MinorCd===void 0)&&(x+=1)}}),x}return 0};return T.exports.useEffect(()=>{l()},[]),a.createElement(a.Fragment,null,a.createElement(y,{ref:o,key:e.Util.Common.fMakeId(e.Id),id:e.Util.Common.fMakeId(e.Id),style:{width:"100%",height:725}}))});let R,w;const ge=O(()=>{const e="CODEHELPER",{$CommonStore:o,$UserStore:f}=ae(),l=we(),{searchVO:n,setSearchVO:c,InputVO:u,setInputVO:p,gridFocus:r,setGridFocus:i,alert:x,setAlert:d,confirm:m,setConfirm:h,ValidationRules:q}=Ce(),s=new re(e,d,!0,!0,!0,!0,!0),K=T.exports.useRef(null),N=T.exports.useRef(""),k=T.exports.useRef(0),V=T.exports.useRef(null),S=async()=>{o.fSetBinding(!0),await fe(c,p),o.fSetBinding(!1),N.current="",s.Common.fSetTabIndex()},[A]=T.exports.useState({Util:s,User:f,fInit:S,setAlert:d,setInputVO:p}),$=C=>{D=C},z=C=>{g=C,g.onRowInserted=(v,B)=>{const U=E.getValue(B-1,"MinorCd");s.Grid.fSetMultiDataProvider(v,B,{MinorCd:ie(Number(U===null?N.current+"000":U)+1).format("000000"),SortSeq:Number(E.getValue(B-1,"SortSeq"))+1})}},J=C=>{M=C,M.onCellDblClicked=()=>{setTimeout(()=>{document.getElementById(s.Common.fMakeId("MajorNm")).focus()},0)}},_=C=>{E=C},Q=(C,v)=>{i("H"),E.commit(!0);const B=D.getJsonRow(v);N.current=B.MajorCd,o.fSetBinding(!0),p(B),o.fSetBinding(!1),setTimeout(async()=>{await W(A,g,E,B.MajorCd),k.current=v},100)},Y=async()=>{if(h({visible:!1,desc:"",id:""}),m.id==="SAVE"){const C=await ye(A,n,u,D,g,M,E,N.current);N.current=C}else m.id==="DELETE"?await Te(A,n,u,D,M,N.current):m.id==="DELETE_ITEM"&&await he(A,u,g,E,N.current)},Z=()=>{h({visible:!1,desc:"",id:""}),V.current.focus()},X=async()=>{S(),s.Common.fProviderClearRows(D),s.Common.fProviderClearRows(g)},j=async()=>{await b(A,n,D,"\uCF54\uB4DC\uB4F1\uB85D")},H=async()=>{s.Common.fValidateElements({MajorNm:"\uCF54\uB4DC\uBA85"})||(V.current=document.activeElement,h({visible:!0,desc:"\uC800\uC7A5 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"SAVE"}))},L=async()=>{if(!s.Common.fValidate(!u.MajorCd,"\uCF54\uB4DC\uAC00 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")){if(r==="H")V.current=document.activeElement,h({visible:!0,desc:"\uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"DELETE"});else if(r==="R"){if(E.commit(!0),s.Common.fValidate(E.getCheckedItems(!0).length<1,"\uC0AD\uC81C\uD560 \uC138\uBD80\uB0B4\uC5ED\uC744 \uC120\uD0DD\uD558\uC138\uC694."))return;V.current=document.activeElement,h({visible:!0,desc:"\uC138\uBD80\uB0B4\uC5ED\uC744 \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"DELETE_ITEM"})}}};return T.exports.useEffect(()=>{s.Common.fHotKey(o,o.isPopup,X,j,H,L)},[o.HotKey]),T.exports.useEffect(()=>(S(),()=>{o.fSetHotKey()}),[]),a.createElement(a.Fragment,null,a.createElement(se,{pgmid:e,visible:"111100",onNew:X,onSearch:j,onSave:H,onDelete:L}),a.createElement(P,{className:"mainCon"},a.createElement(I.exports.Layout,{style:{width:"100%",height:775}},a.createElement(I.exports.LayoutPanel,{region:"west",split:!0,style:{minWidth:370,maxWidth:480,height:775}},a.createElement(P,{className:l.Scroll},a.createElement(y,{style:{marginTop:5}},a.createElement(y,{display:"flex",alignItems:"center"},a.createElement(y,{style:{display:"flex",alignItems:"center"}},a.createElement(y,{className:l.DateTitleBox,style:{marginLeft:10}},"\uCF54\uB4DC\uBA85"),a.createElement(y,{style:{display:"flex",alignItems:"center"}},a.createElement(F,{inputCls:"inputCls",Util:s,name:"SchMajorNm",inputId:s.Common.fMakeId("SchMajorNm"),value:n.SchMajorNm,className:l.InputBox3,style:{width:200},maxLength:50,onChange:C=>{s.Common.fFieldChange(c,"SchMajorNm",C)}})))),a.createElement(y,{style:{marginTop:5}},a.createElement(ue,{Util:s,Id:"Grid1",GridTitle:"\uD5E4\uB354",Height:733,currentIndex:k,GridFields:ne,GridColumns:de,RowChanged:Q,DataProviderBind:$,GridViewBind:J}))))),a.createElement(I.exports.LayoutPanel,{region:"center",split:!0,style:{minWidth:400,maxWidth:1400,height:774}},a.createElement(I.exports.Layout,null,a.createElement(I.exports.LayoutPanel,{region:"north"},a.createElement(I.exports.Form,{ref:K,style:{maxWidth:"100%"},model:u,rules:q,labelWidth:120,labelAlign:"right"},a.createElement(y,{style:{width:"100%",height:40}},a.createElement(y,{display:"flex",style:{marginTop:5}},a.createElement(y,{className:l.DateTitleBox},"\uCF54\uB4DC"),a.createElement(y,{style:{display:"flex",alignItems:"center"}},a.createElement(F,{inputCls:"inputCls",Util:s,name:"MajorCd",inputId:s.Common.fMakeId("MajorCd"),value:u.MajorCd,className:l.InputBox3,style:{width:100},maxLength:50,onChange:C=>{s.Common.fFieldChange(p,"MajorCd",C)},disabled:!0})),a.createElement(y,{className:l.DateTitleBox},"\uCF54\uB4DC\uBA85"),a.createElement(y,{style:{display:"flex",alignItems:"center"}},a.createElement(F,{inputCls:"inputCls",Util:s,name:"MajorNm",inputId:s.Common.fMakeId("MajorNm"),value:u.MajorNm,className:l.InputBox3,style:{width:200},maxLength:50,onChange:C=>{s.Common.fFieldChange(p,"MajorNm",C)}})),a.createElement(y,{className:l.DateTitleBox},"\uBE44\uACE0"),a.createElement(y,{style:{display:"flex",alignItems:"center"}},a.createElement(F,{inputCls:"inputCls",Util:s,name:"Remark",inputId:s.Common.fMakeId("Remark"),value:u.Remark,className:l.InputBox3,style:{width:200},maxLength:50,onChange:C=>{s.Common.fFieldChange(p,"Remark",C)}})))))),a.createElement(I.exports.LayoutPanel,{region:"center"},a.createElement(y,{style:{width:"100%"}},a.createElement(xe,{Util:s,Id:"Grid2",GridTitle:"\uBA85\uC138",GridFields:me,GridColumns:ce,setGridFocus:i,setAlert:d,DataProviderBind:z,GridViewBind:_}))))))),a.createElement(oe,{visible:x.visible,description:x.desc,type:x.type,onConfirm:()=>{d({visible:!1}),V.current.focus()}}),a.createElement(le,{visible:m.visible,description:m.desc,onCancel:Z,onConfirm:Y}))});let D,g,M,E;const we=te(pe);export{ge as default};
