(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return a(231)}])},231:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return dashboard}});var s=a(5893),i=a(7294),r=a(5152),n=a.n(r),l=a(8029),o=a(6596),d=a(1046),c=a(8186),h=a(8899),x=a(92),u=a(6254),p=a(232),y=a(6610),g=a(9099),m=a(7340),j=a(1163),b=a(7179),f=a(4296),S=a(9342),v=a(2519),C=a(2206),w=a(8573),_=a(6523),T=a(1526);let W=(0,m.E)(l.x);var dashboard_ThreatSearchBar=e=>{let{onSearch:t}=e,[a,r]=(0,i.useState)(""),[n,o]=(0,i.useState)(!1),h=(0,d.ff)("white","gray.800"),u=(0,d.ff)("gray.200","gray.600"),handleSearch=()=>{a.trim()&&(t(a.trim()),o(!1))};return(0,s.jsxs)(c.g,{spacing:2,w:"full",children:[(0,s.jsx)(W,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},w:"full",maxW:"800px",mx:"auto",children:(0,s.jsxs)(f.B,{size:"lg",children:[(0,s.jsx)(S.Z,{children:(0,s.jsx)(v.h,{"aria-label":"Search",icon:(0,s.jsx)(w.W,{}),variant:"ghost",colorScheme:"brand",onClick:handleSearch})}),(0,s.jsx)(C.I,{placeholder:"Search for threats, IPs, URLs, or file hashes...",value:a,onChange:e=>{r(e.target.value),o(!0)},onKeyPress:e=>{"Enter"===e.key&&handleSearch()},onFocus:()=>o(!0),onBlur:()=>setTimeout(()=>o(!1),200),bg:h,borderWidth:"2px",borderColor:u,_hover:{borderColor:"brand.500"},_focus:{borderColor:"brand.500",boxShadow:"none"},rounded:"xl",fontSize:"md",pl:"50px",pr:"50px"}),a&&(0,s.jsx)(S.x,{children:(0,s.jsx)(v.h,{"aria-label":"Clear search",icon:(0,s.jsx)(_.T,{}),size:"sm",variant:"ghost",onClick:()=>{r(""),o(!1)}})})]})}),(0,s.jsx)(T.M,{children:n&&(0,s.jsxs)(W,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},w:"full",maxW:"800px",mx:"auto",p:4,bg:h,rounded:"xl",shadow:"md",borderWidth:"1px",borderColor:u,children:[(0,s.jsx)(x.x,{fontSize:"sm",color:"gray.500",mb:2,children:"Search examples:"}),(0,s.jsx)(l.x,{display:"flex",flexWrap:"wrap",gap:2,children:[{type:"URL",example:"https://example.com"},{type:"IP",example:"192.168.1.1"},{type:"Domain",example:"example.com"},{type:"Hash",example:"a1b2c3d4e5f6..."}].map(e=>(0,s.jsxs)(l.x,{bg:(0,d.ff)("gray.100","gray.700"),px:3,py:1,rounded:"full",fontSize:"sm",children:[(0,s.jsxs)(x.x,{as:"span",fontWeight:"bold",children:[e.type,":"]})," ",(0,s.jsx)(x.x,{as:"span",color:"gray.500",children:e.example})]},e.type))})]})})]})},z=a(8436),E=a(2553),k=a(6689),A=a(9131),L=a(2631),P=a(3321),H=a(6893);let D=(0,m.E)(l.x);function StatsCard(e){let{title:t,stat:a,helpText:i,icon:r,delay:n}=e,o=(0,d.ff)("white","gray.800"),c=(0,d.ff)("gray.200","gray.700");return(0,s.jsx)(D,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:n},px:4,py:5,bg:o,shadow:"xl",border:"1px",borderColor:c,rounded:"lg",whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,s.jsxs)(z.k,{position:"relative",children:[(0,s.jsx)(l.x,{position:"absolute",top:2,right:2,p:2,bg:(0,d.ff)("brand.50","brand.900"),rounded:"full",children:(0,s.jsx)(E.J,{as:r,w:6,h:6,color:"brand.500"})}),(0,s.jsx)(k.d,{fontSize:"xl",fontWeight:"medium",isTruncated:!0,children:t}),(0,s.jsx)(A.J,{fontSize:"4xl",fontWeight:"bold",mt:2,children:a}),(0,s.jsx)(L.v,{fontSize:"sm",color:"gray.500",children:i})]})})}var dashboard_ThreatStats=()=>{let e=[{title:"Threats Detected",stat:"2,847",helpText:"Last 30 days",icon:H.BJv},{title:"Protection Score",stat:"94%",helpText:"Current security rating",icon:H.bfl},{title:"Active Monitors",stat:"156",helpText:"Across all systems",icon:H.bAx},{title:"Security Events",stat:"12.4K",helpText:"Total events analyzed",icon:H.UIZ}];return(0,s.jsx)(P.M,{columns:{base:1,md:2,lg:4},spacing:5,mb:8,children:e.map((e,t)=>(0,s.jsx)(StatsCard,{title:e.title,stat:e.stat,helpText:e.helpText,icon:e.icon,delay:.1*t},t))})},I=a(4032),B=a(2867),R=a(6561),J=a(1502),N=a(5133),M=a(9109),U=a(8645);let X=(0,m.E)(l.x),O={low:"green",medium:"yellow",high:"orange",critical:"red"};var dashboard_SearchResults=e=>{let{results:t,isLoading:a,error:i}=e,r=(0,d.ff)("white","gray.800"),n=(0,d.ff)("gray.200","gray.700");return a?(0,s.jsx)(X,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},display:"flex",justifyContent:"center",alignItems:"center",p:8,children:(0,s.jsx)(h.$,{size:"xl",color:"brand.500",thickness:"4px"})}):i?(0,s.jsx)(X,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},p:8,bg:r,rounded:"xl",shadow:"xl",borderWidth:"1px",borderColor:n,children:(0,s.jsxs)(c.g,{spacing:4,align:"center",children:[(0,s.jsx)(H.BJv,{size:40,color:"red"}),(0,s.jsx)(x.x,{color:"red.500",children:i})]})}):t?(0,s.jsx)(X,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.5},children:(0,s.jsxs)(c.g,{spacing:6,align:"stretch",children:[(0,s.jsx)(l.x,{p:6,bg:r,rounded:"xl",shadow:"xl",borderWidth:"1px",borderColor:n,children:(0,s.jsxs)(c.g,{spacing:4,align:"stretch",children:[(0,s.jsx)(p.X,{size:"md",children:"Analysis Summary"}),(0,s.jsx)(l.x,{children:(0,s.jsxs)(x.x,{fontWeight:"bold",mb:2,children:["Threat Level:"," ",(0,s.jsx)(I.C,{colorScheme:O[t.summary.threatLevel],fontSize:"md",px:2,rounded:"full",children:t.summary.threatLevel.toUpperCase()})]})}),(0,s.jsxs)(l.x,{children:[(0,s.jsx)(x.x,{fontWeight:"bold",mb:2,children:"Recommendations:"}),(0,s.jsx)(B.aV,{spacing:2,children:t.summary.recommendations.map((e,a)=>(0,s.jsxs)(B.HC,{display:"flex",alignItems:"center",children:[(0,s.jsx)(B.DE,{as:H.bfl,color:"".concat(O[t.summary.threatLevel],".500")}),e]},a))})]})]})}),(0,s.jsx)(R.U,{allowMultiple:!0,children:Object.entries(t.results).map(e=>{var t,a,i,r;let[o,h]=e;return(0,s.jsxs)(J.Q,{border:"1px",borderColor:n,rounded:"lg",mb:4,children:[(0,s.jsxs)(N.K,{p:4,_hover:{bg:(0,d.ff)("gray.50","gray.700")},children:[(0,s.jsx)(l.x,{flex:"1",textAlign:"left",children:(0,s.jsxs)(p.X,{size:"sm",textTransform:"capitalize",children:[o," Analysis"]})}),(0,s.jsx)(M.X,{})]}),(0,s.jsx)(U.H,{pb:4,children:(0,s.jsxs)(c.g,{align:"stretch",spacing:4,children:["ip"===o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.x,{children:[(0,s.jsx)(x.x,{fontWeight:"bold",children:"AbuseIPDB Score:"}),(0,s.jsxs)(I.C,{colorScheme:h.abuseipdb.data.abuseConfidenceScore>50?"red":"green",children:[h.abuseipdb.data.abuseConfidenceScore,"%"]})]}),(0,s.jsxs)(l.x,{children:[(0,s.jsx)(x.x,{fontWeight:"bold",children:"AlienVault Analysis:"}),(0,s.jsx)(x.x,{children:h.alienvault.reputation||"No data"})]})]}),("url"===o||"domain"===o)&&(0,s.jsxs)(l.x,{children:[(0,s.jsx)(x.x,{fontWeight:"bold",children:"VirusTotal Analysis:"}),(null===(a=h.data)||void 0===a?void 0:null===(t=a.attributes)||void 0===t?void 0:t.last_analysis_stats)&&(0,s.jsxs)(B.aV,{spacing:2,children:[(0,s.jsxs)(B.HC,{children:[(0,s.jsx)(B.DE,{as:H.BJv,color:"red.500"}),"Malicious: ",h.data.attributes.last_analysis_stats.malicious]}),(0,s.jsxs)(B.HC,{children:[(0,s.jsx)(B.DE,{as:H._rq,color:"green.500"}),"Clean: ",h.data.attributes.last_analysis_stats.harmless]})]})]}),"hash"===o&&(0,s.jsxs)(l.x,{children:[(0,s.jsx)(x.x,{fontWeight:"bold",children:"File Analysis:"}),(null===(r=h.data)||void 0===r?void 0:null===(i=r.attributes)||void 0===i?void 0:i.last_analysis_stats)&&(0,s.jsx)(B.aV,{spacing:2,children:(0,s.jsxs)(B.HC,{children:[(0,s.jsx)(B.DE,{as:H.BJv,color:"red.500"}),"Detection Rate:"," ","".concat(h.data.attributes.last_analysis_stats.malicious,"/").concat(h.data.attributes.last_analysis_stats.total)]})})]})]})})]},o)})})]})}):null};let V=n()(()=>a.e(971).then(a.bind(a,4971)),{loadableGenerated:{webpack:()=>[4971]},ssr:!1}),F=n()(()=>a.e(432).then(a.bind(a,1432)),{loadableGenerated:{webpack:()=>[1432]},ssr:!1}),K=[{id:"1",type:"Malware Detected",severity:"high",source:"192.168.1.100",timestamp:"2024-02-20 14:30:00",status:"active"},{id:"2",type:"Suspicious Login",severity:"medium",source:"203.0.113.45",timestamp:"2024-02-20 14:15:00",status:"investigating"},{id:"3",type:"Port Scan",severity:"low",source:"198.51.100.67",timestamp:"2024-02-20 14:00:00",status:"mitigated"}],$=[{latitude:40.7128,longitude:-74.006,intensity:1},{latitude:51.5074,longitude:-.1278,intensity:2},{latitude:35.6762,longitude:139.6503,intensity:1.5},{latitude:-33.8688,longitude:151.2093,intensity:1},{latitude:48.8566,longitude:2.3522,intensity:2}],G=(0,m.E)(l.x);var dashboard=()=>{let{user:e,loading:t}=(0,b.a)(),a=(0,j.useRouter)(),r=(0,o.p)(),[n,m]=(0,i.useState)(!1),f=(0,d.ff)("gray.50","gray.900"),[S,v]=(0,i.useState)(null),[C,w]=(0,i.useState)(!1),[_,T]=(0,i.useState)(null),[W,z]=(0,i.useState)(!0);if((0,i.useEffect)(()=>{m(!0),z(!1)},[]),(0,i.useEffect)(()=>{t||e||a.replace("/login")},[e,t,a]),t||W)return(0,s.jsx)(l.x,{minH:"100vh",bg:f,display:"flex",alignItems:"center",justifyContent:"center",children:(0,s.jsxs)(c.g,{spacing:4,children:[(0,s.jsx)(h.$,{size:"xl",color:"blue.500",thickness:"4px"}),(0,s.jsx)(x.x,{children:"Loading dashboard..."})]})});if(!n||!e)return(0,s.jsx)(l.x,{minH:"100vh",bg:f,display:"flex",alignItems:"center",justifyContent:"center",children:(0,s.jsxs)(c.g,{spacing:4,children:[(0,s.jsx)(h.$,{size:"xl",color:"blue.500",thickness:"4px"}),(0,s.jsx)(x.x,{children:"Initializing..."})]})});let handleSearch=async e=>{w(!0),T(null),v(null);try{let t=await fetch("/api/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})});if(!t.ok)throw Error("Search failed. Please try again.");let a=await t.json();v(a);let s=a.summary.threatLevel;r({title:"Threat Level: ".concat(s.toUpperCase()),description:a.summary.recommendations[0],status:"low"===s?"success":"medium"===s?"warning":"error",duration:5e3,isClosable:!0})}catch(e){T(e.message),r({title:"Search Error",description:e.message,status:"error",duration:5e3,isClosable:!0})}finally{w(!1)}};return(0,s.jsx)(l.x,{minH:"100vh",bg:f,py:8,suppressHydrationWarning:!0,children:(0,s.jsx)(u.W,{maxW:"container.xl",children:(0,s.jsxs)(c.g,{spacing:8,align:"stretch",children:[(0,s.jsxs)(G,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},textAlign:"center",children:[(0,s.jsx)(p.X,{size:"xl",mb:2,children:"Security Dashboard"}),(0,s.jsx)(x.x,{color:"gray.500",children:"Real-time threat intelligence and security monitoring"})]}),(0,s.jsx)(dashboard_ThreatSearchBar,{onSearch:handleSearch}),S||C||_?(0,s.jsx)(dashboard_SearchResults,{results:S,isLoading:C,error:_}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(dashboard_ThreatStats,{}),(0,s.jsxs)(y.r,{templateColumns:{base:"1fr",lg:"1fr 1fr"},gap:8,w:"full",children:[(0,s.jsx)(g.P,{colSpan:1,children:(0,s.jsx)(V,{threats:$})}),(0,s.jsx)(g.P,{colSpan:1,children:(0,s.jsx)(F,{threats:K})})]})]})]})})})}}},function(e){e.O(0,[117,866,774,888,179],function(){return e(e.s=528)}),_N_E=e.O()}]);