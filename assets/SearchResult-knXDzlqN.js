import{u as M,f as se,g as te,h as Y,i as ae,P as le,t as re,j as ie,k as T,l as b,m as ue,n as B,p as t,q as oe,R as $,s as ne,v as ce,x as ve,C as de,y as pe,z as he,A as ye,B as me,D as fe,E as ge,F as He,G as j,H as _,I as we,J as x,K as Re}from"./app-DqllVoUD.js";const ke=["/","/misson.html","/posts/stable%20diffusiion%20overview%20and%20design%20theory/20240711Ian%20Noble's%20theory%20overview.html","/posts/stable%20diffusiion%20overview%20and%20design%20theory/20240712The%20primary%20task%20of%20a%20designer%20is%20to%20identify.html","/posts/stable%20diffusiion%20overview%20and%20design%20theory/20240713visual%20significance.html","/posts/stable%20diffusiion%20overview%20and%20design%20theory/20240715AI%20tool%20exploration.html","/posts/stable%20diffusiion%20overview%20and%20design%20theory/20240716crafting%20your%20skills.html","/posts/stable%20diffusiion%20overview%20and%20design%20theory/20240717Types%20of%20Models.html","/posts/stable%20diffusiion%20overview%20and%20design%20theory/","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",f=M(Qe,[]),be=()=>{const{queryHistoryCount:a}=x,l=a>0;return{enabled:l,queryHistory:f,addQueryHistory:r=>{l&&(f.value=Array.from(new Set([r,...f.value.slice(0,a-1)])))},removeQueryHistory:r=>{f.value=[...f.value.slice(0,r),...f.value.slice(r+1)]}}},F=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,g=M(xe,[]),qe=()=>{const a=U>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,U-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},Se=a=>{const l=de(),r=Y(),q=pe(),u=T(0),R=b(()=>u.value>0),h=he([]);return ye(()=>{const{search:y,terminate:S}=me(),H=we(c=>{const w=c.join(" "),{searchFilter:C=p=>p,splitWord:D,suggestionsFilter:I,...m}=l.value;w?(u.value+=1,y(c.join(" "),r.value,m).then(p=>C(p,w,r.value,q.value)).then(p=>{u.value-=1,h.value=p}).catch(p=>{console.warn(p),u.value-=1,u.value||(h.value=[])})):h.value=[]},x.searchDelay-x.suggestDelay);B([a,r],([c])=>H(c),{immediate:!0}),fe(()=>{S()})}),{isSearching:R,results:h}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),q=Y(),u=ae(le),{enabled:R,addQueryHistory:h,queryHistory:y,removeQueryHistory:S}=be(),{enabled:H,resultHistory:c,addResultHistory:w,removeResultHistory:C}=qe(),D=R||H,I=re(a,"queries"),{results:m,isSearching:p}=Se(I),i=ie({isQuery:!0,index:0}),v=T(0),d=T(0),P=b(()=>D&&(y.value.length>0||c.value.length>0)),L=b(()=>m.value.length>0),A=b(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=i;s===0?(i.isQuery=!e,i.index=e?c.value.length-1:y.value.length-1):i.index=s-1},G=()=>{const{isQuery:e,index:s}=i;s===(e?y.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,d.value=A.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,d.value=0},N=()=>{d.value<A.value.contents.length-1?d.value+=1:K()},V=()=>{d.value>0?d.value-=1:J()},E=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[o,Q=""]=He(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",E([o,...n,Q])))}return e.display.map(s=>t("div",E(s)))},k=()=>{v.value=0,d.value=0,l("updateQuery",""),l("close")},X=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===s}],onClick:()=>{l("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,s)=>t($,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===s}],onClick:()=>{k()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>E(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=A.value.contents[d.value];h(a.queries.join(" ")),w(s),r.push(F(s)),k()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=i;i.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),k())}}}}),B([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!P.value}],id:"search-pro-results"},a.queries.length?p.value?t(oe,{hint:u.value.searching}):L.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),s.map((n,ee)=>{const O=Q&&d.value===ee;return t($,{to:F(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),w(n),k()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):u.value.emptyResult:D?P.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{De as default};
