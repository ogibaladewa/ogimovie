import{r,a as n}from"./app-848fb18b.js";import{p as e}from"./index-4d501b15.js";r.forwardRef.propTypes={type:e.oneOf(["text","email","password","number","file"]),name:e.string,value:e.oneOfType([e.string,e.number]),defaultValue:e.oneOfType([e.string,e.number]),className:e.string,variant:e.oneOf(["primary","error","primary-outline"]),autoComplete:e.string,required:e.bool,isFocused:e.bool,handleChange:e.func,placeholder:e.string,isError:e.bool};const E=r.forwardRef(function({type:s="text",name:a,id:p,value:i,defaultValue:u,variant:l="primary",className:f,autoComplete:m,required:c,isFocused:x,handleChange:d,placeholder:y,isError:g},t){const o=t||r.useRef();return r.useEffect(()=>{x&&o.current.focus()},[]),n("div",{className:"flex flex-col items-start",children:n("input",{type:s,name:a,id:p,value:i,defaultValue:u,className:`rounded-2xl py-[13px] px-7 w-full ${g&&"input-error"} input-${l} ${f}`,ref:o,autoComplete:m,required:c,onChange:T=>d(T),placeholder:y})})});export{E as T};