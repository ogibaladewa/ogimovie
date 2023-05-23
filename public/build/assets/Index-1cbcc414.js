import{a as e,_ as h,j as r,n as s,d as a}from"./app-848fb18b.js";import{A as m}from"./Index-8f24f1f1.js";import{P as i}from"./PrimaryButton-dd884457.js";import"./index-4d501b15.js";function u({className:n,message:d=""}){return e("div",{className:`flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${n}`,children:d})}function f({auth:n,flashMessage:d,movies:l}){const{delete:c,put:o}=h();return r(m,{auth:n,children:[e(s,{title:"List of Movie"}),e(a,{href:route("admin.dashboard.movie.create"),children:e(i,{type:"button",className:"w-40 mb-8",children:"Insert New Movie"})}),(d==null?void 0:d.message)&&e(u,{message:d.message}),r("table",{className:"table-fixed w-full text-center",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Image"}),e("th",{children:"Name"}),e("th",{children:"Category"}),e("th",{children:"Rating"}),e("th",{colSpan:2,children:"Action"})]})}),e("tbody",{children:l.map(t=>r("tr",{children:[e("td",{children:e("img",{src:`/storage/${t.thumbnail}`,className:"w-32 rounded-md"})}),e("td",{children:t.name}),e("td",{children:t.category}),e("td",{children:t.rating.toFixed(1)}),e("td",{children:e(a,{href:route("admin.dashboard.movie.edit",t.id),children:e(i,{type:"button",variant:"warning",className:"w-full",children:"Edit"})})}),e("td",{children:e("div",{onClick:()=>{t.deleted_at?o(route("admin.dashboard.movie.restore",t.id)):c(route("admin.dashboard.movie.destroy",t.id))},children:e(i,{type:"button",variant:"danger",className:"w-full",children:t.deleted_at?"Restore":"Delete"})})})]},t.id))})]})]})}export{f as default};
