import{d as w}from"./App.11263b70.js";const y=async(t,c,l,a="",r)=>{const s=t.fieldName,n=t.dataRow,m=t.fieldIndex,f=t.itemIndex,o={column:s,dataRow:n,fieldIndex:m,fieldName:s,itemIndex:f};try{let e=await w.get("/@api/common/codeclass/selectByTSqlItem",{params:c}),v=e.data[1],d={};v.map((u,I,b)=>{const k=x=>x===(a.length>0&&a);Object.values(u).some(k)&&(d={...d,...b[I]})});let i={};return r?i={visible:!0,datas:e.data,desc:e.data[2][0].Remark,value:a,id:s,viewId:l,selectedData:o}:Object.keys(d).length<1?i={visible:!0,datas:e.data,desc:e.data[2][0].Remark,value:a,id:s,viewId:l,selectedData:o}:Object.keys(d).length>0&&(i={visible:!1,datas:e.data,desc:e.data[2][0].Remark,value:a,res:d,id:s,viewId:l,selectedData:o}),i}catch(e){return{error:e}}},R=t=>{setTimeout(()=>{t.clearCurrent()},10)};export{R as a,y as g};