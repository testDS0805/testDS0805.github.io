import{r as f,R as t}from"./index.da6908f5.js";import{m as s,h as Z,d as V,o as _,c as ee,u as te,U as re,P as ae,r as C,B as d,al as ne,$ as se,a0 as oe,a1 as ie,am as ue,A as le,C as ce}from"./App.11263b70.js";import{C as Ce}from"./CommonButton.0b792d77.js";const de=[{fieldName:"MinorCd",dataType:s.exports.ValueType.TEXT},{fieldName:"MinorNm",dataType:s.exports.ValueType.TEXT},{fieldName:"SortSeq",dataType:s.exports.ValueType.NUMBER},{fieldName:"Remark",dataType:s.exports.ValueType.TEXT},{fieldName:"Item1",dataType:s.exports.ValueType.TEXT},{fieldName:"Item2",dataType:s.exports.ValueType.TEXT},{fieldName:"Item3",dataType:s.exports.ValueType.TEXT},{fieldName:"Item4",dataType:s.exports.ValueType.TEXT},{fieldName:"Item5",dataType:s.exports.ValueType.TEXT},{fieldName:"Item6",dataType:s.exports.ValueType.TEXT},{fieldName:"Item7",dataType:s.exports.ValueType.TEXT},{fieldName:"Item8",dataType:s.exports.ValueType.TEXT},{fieldName:"Item9",dataType:s.exports.ValueType.TEXT},{fieldName:"Item10",dataType:s.exports.ValueType.TEXT},{fieldName:"Item11",dataType:s.exports.ValueType.TEXT},{fieldName:"Item12",dataType:s.exports.ValueType.TEXT},{fieldName:"Item13",dataType:s.exports.ValueType.TEXT},{fieldName:"Item14",dataType:s.exports.ValueType.TEXT},{fieldName:"Item15",dataType:s.exports.ValueType.TEXT},{fieldName:"UseYn",dataType:s.exports.ValueType.TEXT}],pe=[{name:"MinorCd",fieldName:"MinorCd",type:"data",width:"70",header:{text:"\uCF54\uB4DC",showTooltip:!0},renderer:{type:"text",showTooltip:!0},editable:!1,styleName:"left-column"},{name:"MinorNm",fieldName:"MinorNm",type:"data",width:"150",header:{text:"\uCF54\uB4DC\uBA85",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"SortSeq",fieldName:"SortSeq",type:"data",width:"70",styleName:"left-column",editable:!1,header:{text:"\uC815\uB82C\uC21C\uC11C",showTooltip:!0},numberFormat:"0"},{name:"Remark",fieldName:"Remark",type:"data",width:"120",header:{text:"\uBE44\uACE0",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"},{name:"UseYn",fieldName:"UseYn",type:"data",width:"80",button:"popup",popupMenu:"UseYn",editable:!1,header:{text:"\uC0AC\uC6A9\uC720\uBB34",showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"center-column"}],me={DateTitleBox:{backgroundColor:"#e0ecff",padding:5,color:"#163971",height:25,fontSize:"12px",display:"flex",width:85,alignItems:"center",fontWeight:600},TitleBox4:{backgroundColor:"#fccf76",color:"#163971",padding:5,height:20,fontSize:"12px",display:"flex",alignItems:"center",width:"100%",fontWeight:600},TitleText3:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},InputBox3:{marginTop:5,width:120,height:25,"& input":{fontSize:"12px !important"}},Scroll:{"& .mainCon":{height:"700px",padding:"10px"}}};function fe(){const[h,l]=f.exports.useState(""),[x,y]=f.exports.useState({visible:!1,desc:"",type:"N"}),[w,N]=f.exports.useState({visible:!1,desc:"",id:""});return String.prototype.DateValidation=function(T){return new Date(this)instanceof Date&&!isNaN(new Date(this))?Z(this).format(T):null},{gridFocus:h,setGridFocus:l,alert:x,setAlert:y,confirm:w,setConfirm:N}}const ye=async(h,l)=>{const x={};x.SchTyp=l;try{return await h.Util.Command.fSearchByReturn("/@api/admin/codeHelperSort/selectByList",x)}catch(y){return h.setAlert({visible:!0,desc:`\uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.
${y}`,type:"E"}),null}},he=async(h,l,x)=>{const y={};y.SchTyp=l,y.UserPno=h.User.user.userid;try{return(await V.post("/@api/admin/codeHelperSort/updateByList",{param:y,item:x})).data.errmess===""}catch{return!1}},xe=async(h,l)=>{try{return(await V.post("/@api/admin/codeHelperSort/sortBySeq",{item:l})).data.errmess===""}catch{return!1}},Se=_(()=>{const h="CODEHELPERSORT",{$CommonStore:l,$UserStore:x}=te(),y=Be(),{gridFocus:w,setGridFocus:N,alert:T,setAlert:m,confirm:S,setConfirm:D}=fe(),u=new re(h,m,!0,!0,!0,!0,!0);f.exports.useRef(null);const n=f.exports.useRef(0),R=f.exports.useRef(null),[g,U]=f.exports.useState("106"),[F]=f.exports.useState(pe),G=["MinorNm","Remark","UseYn","Item1"],[L,ge]=f.exports.useState({MinorNm:"\uCF54\uB4DC\uBA85",UseYn:"\uC0AC\uC6A9\uC720\uBB34"}),X=[{label:"Y",group:"UseYn"},{label:"N",group:"UseYn"}],v=async()=>{l.fSetBinding(!0),l.fSetBinding(!1),u.Common.fSetTabIndex()},[b]=f.exports.useState({Util:u,User:x,fInit:v,setAlert:m}),P=async e=>{u.Grid.fContainerInit(u.Common.fMakeId("MainGrid")),i=new s.exports.LocalDataProvider(!1),p=new s.exports.GridView(R.current),u.Grid.fInitGridDetail(p,i,de,e,H,q,O,"\uD68C\uACC4 \uAD00\uB828 \uCF54\uB4DC"),p.onCurrentRowChanged=z,p.onCellClicked=j,p.setCheckBar({visible:!1}),p.addPopupMenu("UseYn",X),p.onMenuItemClicked=(r,a,o)=>{i.setValue(o.itemIndex,a.group,a.label)},p.onValidateColumn=(r,a,o,B)=>{const c={};return G.includes(a.fieldName)&&(!B||B===void 0)&&(c.level="warning",c.message="\uD544\uC218 \uC785\uB825 \uAC12\uC785\uB2C8\uB2E4."),c}},H=async(e,r)=>{e.commit()},q=e=>{e.commit(),p.validateCells()},Y=async e=>{const r=[...F];return Object.keys(e).some((a,o)=>{let B={name:`Item${o+1}`,fieldName:`Item${o+1}`,type:"data",width:"120",editable:!0,header:{text:e[a],showTooltip:!0},renderer:{type:"text",showTooltip:!0},styleName:"left-column"};r.push(B)}),r},z=async(e,r,a)=>{a>=0&&(n.current=a)},j=(e,r)=>{n.current===r.dataRow&&r.dataRow>=0&&(n.current=r.dataRow)},O=async(e,r)=>{const a="Item15",o=e.getDataSource().getRowCount(),{fieldName:B}=e.getCurrent(),{itemIndex:c}=e.getCurrent();switch(r.key){case"Enter":m({visible:!1,desc:""}),e.commit(!0),B===a&&u.Grid.fEnterLastField(e,c,o,I()===0),e.setFocus();break;case"ArrowDown":u.Grid.fArrowDown(e,c,o,I()===0);break;case"ArrowUp":e.commit(),u.Grid.fArrowUp(e,c,o,I(c)>0);break}},I=e=>{const r=i.getAllStateRows().created;if(r.length>0){let a=0;return r.map(o=>{if(e===void 0||o>=e){const B=p.getValues(o);(!B.MinorNm||B.MinorNm===void 0)&&(a+=1)}}),a}return 0},k=async(e,r)=>{r&&U(e)},A=async e=>{if(i.getStateRows("created").length!==0||i.getStateRows("updated").length!==0){m({visible:!0,desc:"\uC2E0\uADDC / \uC218\uC815 \uD56D\uBAA9\uC744 \uC800\uC7A5 \uD6C4 \uC21C\uC11C \uBCC0\uACBD\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",type:"E"});return}if(n.current!==null){if(e==="U"){if(n.current===0){m({visible:!0,desc:"\uCCAB\uBC88\uC9F8 \uC21C\uC11C\uC785\uB2C8\uB2E4."});return}i.moveRow(n.current,n.current-1),p.setCurrent({dataRow:n.current-1,column:0}),n.current=n.current-1}else if(e==="UU"){if(n.current===0){m({visible:!0,desc:"\uCCAB\uBC88\uC9F8 \uC21C\uC11C\uC785\uB2C8\uB2E4."});return}i.moveRow(n.current,0),p.setCurrent({dataRow:0,column:0}),n.current=0}else if(e==="D"){if(n.current===i.getJsonRows().length-1){m({visible:!0,desc:"\uB9C8\uC9C0\uB9C9 \uC21C\uC11C\uC785\uB2C8\uB2E4."});return}i.moveRow(n.current,n.current+1),p.setCurrent({dataRow:n.current+1,column:0}),n.current=n.current+1}else if(e==="DD"){if(n.current===i.getJsonRows().length-1){m({visible:!0,desc:"\uB9C8\uC9C0\uB9C9 \uC21C\uC11C\uC785\uB2C8\uB2E4."});return}const r=i.getJsonRows().length-1;i.moveRow(n.current,r),p.setCurrent({dataRow:r,column:0}),n.current=r}}},$=()=>{D({visible:!0,desc:"\uC21C\uBC88\uC744 \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"CHANGESEQ"})},J=async()=>{const e=i.getJsonRows();for(let a=1;a<e.length+1;a++)e[a-1].NewSeq=a,e[a-1].Minor=g;await xe(b,e)?(m({visible:!0,desc:"\uC21C\uBC88\uBCC0\uACBD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),await E()):m({visible:!0,desc:"\uC21C\uBC88 \uBCC0\uACBD \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",type:"E"})},K=async()=>{D({visible:!1,desc:"",id:""}),S.id==="CHANGESEQ"?J():S.id==="SAVE"&&W()},Q=()=>{D({visible:!1,desc:"",id:""})},E=async()=>{const e=await ye(b,g),r=await Y(e[0][0]);await P(r),i.setRows(e[1])},M=async()=>{D({visible:!0,desc:"\uC800\uC7A5 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",id:"SAVE"})},W=async()=>{let e=[];if(u.Grid.fCheckGridData(i,e,L,"\uCF54\uB4DC \uC0C1\uC138"))return;let a=1,o=1;e.forEach(c=>{c.Minor=g,c.MinorCd===void 0&&(c.MinorCd=a,a=a+1),c.SortSeq===void 0&&(c.SortSeq=o,o=o+1)}),await he(b,g,e)?(m({visible:!0,desc:"\uC800\uC7A5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),await E()):m({visible:!0,desc:"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",type:"E"})};return f.exports.useEffect(()=>{u.Common.fHotKey(l,l.isPopup,null,E,M,null)},[l.HotKey]),f.exports.useEffect(()=>(v(),()=>{l.fSetHotKey()}),[]),f.exports.useEffect(()=>{E()},[g]),t.createElement(t.Fragment,null,t.createElement(Ce,{pgmid:h,visible:"011000",onSearch:E,onSave:M}),t.createElement(ae,{className:"mainCon"},t.createElement(C.exports.Layout,{style:{width:"100%",height:775}},t.createElement(C.exports.LayoutPanel,{region:"center",split:!0,style:{width:"100%",height:774}},t.createElement(C.exports.Layout,null,t.createElement(C.exports.LayoutPanel,{region:"north"},t.createElement(d,{style:{width:"100%",height:40}},t.createElement(d,{display:"flex",alignItems:"center",style:{marginTop:5}},t.createElement(d,{className:y.DateTitleBox,style:{marginLeft:10}},"\uAD6C\uBD84"),t.createElement(d,{display:"flex",alignItems:"center",style:{marginLeft:10,marginRight:5}},t.createElement(C.exports.RadioButton,{style:{width:"15px",height:"15px"},inputId:u.Common.fMakeId("asset"),value:"106",groupValue:g,onChange:e=>k("106",e)}),t.createElement(C.exports.Label,{htmlFor:u.Common.fMakeId("asset"),style:{marginLeft:"5px",width:40,fontSize:"14px"}},"\uD1B5\uC7A5")),t.createElement(d,{display:"flex",alignItems:"center",style:{marginRight:5}},t.createElement(C.exports.RadioButton,{style:{width:"15px",height:"15px"},inputId:u.Common.fMakeId("debt"),value:"098",groupValue:g,onChange:e=>k("098",e)}),t.createElement(C.exports.Label,{htmlFor:u.Common.fMakeId("debt"),style:{marginLeft:"5px",width:40,fontSize:"14px"}},"\uCE74\uB4DC")),t.createElement(d,null,t.createElement(C.exports.LinkButton,{style:{height:30,width:30,margin:"4px 0px 4px 10px",color:"#424242",borderRadius:3,marginLeft:1170},onClick:()=>A("UU")},t.createElement(d,{style:{height:30,width:42,display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement(ne,{size:15}))),t.createElement(C.exports.LinkButton,{style:{height:30,width:30,margin:"4px 0px 4px 10px",color:"#424242",borderRadius:3},onClick:()=>A("U")},t.createElement(d,{style:{height:30,width:42,display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement(se,{size:15}))),t.createElement(C.exports.LinkButton,{style:{width:84,margin:"4px 0px 4px 10px",color:"#424242",borderRadius:3},onClick:()=>$()},t.createElement(d,{style:{width:70,display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement(oe,{size:15,style:{marginRight:5}}),t.createElement(d,{className:y.SB2},"\uC21C\uC11C \uBCC0\uACBD"))),t.createElement(C.exports.LinkButton,{style:{height:30,width:30,margin:"4px 0px 4px 10px",color:"#424242",borderRadius:3},onClick:()=>A("D")},t.createElement(d,{style:{height:30,width:42,display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement(ie,{size:15}))),t.createElement(C.exports.LinkButton,{style:{height:30,width:30,margin:"4px 0px 4px 10px",color:"#424242",borderRadius:3},onClick:()=>A("DD")},t.createElement(d,{style:{height:30,width:42,display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement(ue,{size:15}))))))),t.createElement(C.exports.LayoutPanel,{region:"center"},t.createElement(d,{style:{width:"100%",height:723}},t.createElement(d,{ref:R,id:u.Common.fMakeId("MainGrid"),style:{padding:"0 2px",width:"100%",height:"100%"}}))))))),t.createElement(le,{visible:T.visible,description:T.desc,type:T.type,onConfirm:()=>{m({visible:!1})}}),t.createElement(ce,{visible:S.visible,description:S.desc,onCancel:Q,onConfirm:K}))});let i,p;const Be=ee(me);export{Se as default};
