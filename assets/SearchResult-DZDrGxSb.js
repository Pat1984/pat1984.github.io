import{u as M,f as se,g as te,h as Y,i as ae,P as le,t as re,j as ue,k as T,l as x,m as ie,n as B,p as t,q as oe,R as $,s as ne,v as ce,x as ve,C as pe,y as de,z as he,A as ye,B as me,D as fe,E as ge,F as He,G as j,H as _,I as Re,J as q,K as ke}from"./app-B7WK1kmU.js";const we=["/","/misson.html","/posts/design%20theory/20240711Ian%20Noble's%20theory%20overview.html","/posts/design%20theory/20240712The%20primary%20task%20of%20a%20designer%20is%20to%20identify.html","/posts/stable%20diffusion%20overview/20240715AI%20tool%20exploration.html","/posts/stable%20diffusion%20overview/20240716crafting%20your%20skills.html","/posts/stable%20diffusion%20overview/20240717Types%20of%20Models.html","/posts/stable%20diffusion%20overview/","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",f=M(Qe,[]),xe=()=>{const{queryHistoryCount:a}=q,l=a>0;return{enabled:l,queryHistory:f,addQueryHistory:r=>{l&&(f.value=Array.from(new Set([r,...f.value.slice(0,a-1)])))},removeQueryHistory:r=>{f.value=[...f.value.slice(0,r),...f.value.slice(r+1)]}}},F=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,g=M(qe,[]),be=()=>{const a=U>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,U-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},Se=a=>{const l=pe(),r=Y(),b=de(),i=T(0),k=x(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:S}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:C=d=>d,splitWord:D,suggestionsFilter:I,...m}=l.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(d=>C(d,R,r.value,b.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},q.searchDelay-q.suggestDelay);B([a,r],([c])=>H(c),{immediate:!0}),fe(()=>{S()})}),{isSearching:k,results:h}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),b=Y(),i=ae(le),{enabled:k,addQueryHistory:h,queryHistory:y,removeQueryHistory:S}=xe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:C}=be(),D=k||H,I=re(a,"queries"),{results:m,isSearching:d}=Se(I),u=ue({isQuery:!0,index:0}),v=T(0),p=T(0),P=x(()=>D&&(y.value.length>0||c.value.length>0)),L=x(()=>m.value.length>0),A=x(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=A.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},N=()=>{p.value<A.value.contents.length-1?p.value+=1:K()},V=()=>{p.value>0?p.value-=1:J()},E=e=>e.map(s=>ke(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[o,Q=""]=He(s)?s[b.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",E([o,...n,Q])))}return e.display.map(s=>t("div",E(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>E(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=A.value.contents[p.value];h(a.queries.join(" ")),R(s),r.push(F(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),B([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!P.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):L.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const O=Q&&p.value===ee;return t($,{to:F(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:D?P.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
