import{r as d,R as C}from"./index.da6908f5.js";import{o as w,B as y,m as c,h}from"./App.11263b70.js";const R=w(e=>{const i=d.exports.useRef(null),f=async()=>{e.Util.Grid.fContainerInit(e.Util.Common.fMakeId(e.Id)),o=new c.exports.LocalDataProvider(!1),a=new c.exports.GridView(i.current),e.Util.Grid.fInitGridHeader(a,o,e.GridFields,e.GridColumns,27,m,s,void 0,e.GridTitle),e.isCheckOption?a.setContextMenu([{label:"\uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC"},{label:"\uC804\uCCB4\uCCB4\uD06C"},{label:"\uCCB4\uD06C\uD574\uC81C"}]):a.setContextMenu([{label:"\uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC"}]),a.onContextMenuPopup=(t,n,r,u)=>{u.cellType},a.onContextMenuItemClicked=async(t,n,r)=>{const u=n.label;if(u==="\uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC")o.getRowCount()&&a.exportGrid({compatibility:!0,type:"excel",target:"local",applyDynamicStyles:!0,fileName:`${e.GridTitle}_${h(new Date).format("YYYYMMDD")}.xlsx`});else if(u==="\uC804\uCCB4\uCCB4\uD06C"){if(t.getColumnProperty(r.column,"renderer")===void 0)return;t.getColumnProperty(r.column,"renderer").type==="check"&&t.getColumnProperty(r.column,"renderer").editable!==!1&&t.getDataSource().getRows().forEach((D,l)=>{t.getDataSource().setValue(l,r.column,"Y")})}else if(u==="\uCCB4\uD06C\uD574\uC81C"){if(t.getColumnProperty(r.column,"renderer")===void 0)return;t.getColumnProperty(r.column,"renderer").type==="check"&&t.getColumnProperty(r.column,"renderer").editable!==!1&&t.getDataSource().getRows().forEach((D,l)=>{t.getDataSource().setValue(l,r.column,"N")})}},e.DataProviderBind(o),e.GridViewBind(a)},m=(t,n,r)=>{if(r>=0){if(!e.RowChanged)return;e.RowChanged(t,r)}},s=(t,n)=>{if(e.currentIndex.current===n.dataRow&&n.dataRow>=0){if(!e.RowChanged)return;e.RowChanged(t,n.dataRow)}};return d.exports.useEffect(()=>{f()},[]),C.createElement(C.Fragment,null,C.createElement(y,{ref:i,key:e.Util.Common.fMakeId(e.Id),id:e.Util.Common.fMakeId(e.Id),style:{width:"100%",height:e.Height}}))});let o,a;export{R as H};