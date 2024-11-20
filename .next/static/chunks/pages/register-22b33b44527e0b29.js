(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(1237)}])},1144:function(e,r,s){"use strict";s.d(r,{a:function(){return useAuth}}),s(5893);var n=s(7294);s(3859),s(3748),s(2793);let i=(0,n.createContext)({}),useAuth=()=>(0,n.useContext)(i)},1237:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return register}});var n=s(5893),i=s(8029),t=s(8186),a=s(232),o=s(92),l=s(6596),d=s(3712),c=s(4506),u=s(980),h=s(2206),m=s(8491),x=s(4831),f=s(2553),g=s(5715),p=s(2175),w=s(6310),j=s(1664),v=s.n(j),b=s(1872),_=s(7179),S=s(1163),auth_AuthForm=e=>{let{mode:r}=e,{signIn:s,signUp:t,signInWithGoogle:a}=(0,_.a)(),j=(0,l.p)(),y=(0,S.useRouter)(),C=w.Ry().shape({email:w.Z_().email("Invalid email address").required("Email is required"),password:w.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),..."register"===r&&{confirmPassword:w.Z_().oneOf([w.iH("password")],"Passwords must match").required("Password confirmation is required")}}),P=(0,p.TA)({initialValues:{email:"",password:"",..."register"===r&&{confirmPassword:""}},validationSchema:C,onSubmit:async e=>{try{"login"===r?(await s(e.email,e.password),j({title:"Login successful",status:"success",duration:3e3})):(await t(e.email,e.password),j({title:"Registration successful",description:"Please check your email for verification link",status:"success",duration:5e3})),y.push("/dashboard")}catch(e){j({title:"Error",description:e.message,status:"error",duration:5e3})}}}),handleGoogleSignIn=async()=>{try{await a(),j({title:"Login successful",status:"success",duration:3e3}),y.push("/dashboard")}catch(e){j({title:"Error",description:e.message,status:"error",duration:5e3})}};return(0,n.jsx)(i.x,{maxW:"md",mx:"auto",mt:8,children:(0,n.jsx)("form",{onSubmit:P.handleSubmit,children:(0,n.jsxs)(d.K,{spacing:4,children:[(0,n.jsxs)(c.NI,{children:[(0,n.jsx)(u.l,{children:"Email address"}),(0,n.jsx)(h.I,{type:"email",name:"email",onChange:P.handleChange,onBlur:P.handleBlur,value:P.values.email}),P.touched.email&&P.errors.email&&(0,n.jsx)(o.x,{color:"red.500",fontSize:"sm",children:P.errors.email})]}),(0,n.jsxs)(c.NI,{children:[(0,n.jsx)(u.l,{children:"Password"}),(0,n.jsx)(h.I,{type:"password",name:"password",onChange:P.handleChange,onBlur:P.handleBlur,value:P.values.password}),P.touched.password&&P.errors.password&&(0,n.jsx)(o.x,{color:"red.500",fontSize:"sm",children:P.errors.password})]}),"register"===r&&(0,n.jsxs)(c.NI,{children:[(0,n.jsx)(u.l,{children:"Confirm Password"}),(0,n.jsx)(h.I,{type:"password",name:"confirmPassword",onChange:P.handleChange,onBlur:P.handleBlur,value:P.values.confirmPassword}),P.touched.confirmPassword&&P.errors.confirmPassword&&(0,n.jsx)(o.x,{color:"red.500",fontSize:"sm",children:P.errors.confirmPassword})]}),(0,n.jsx)(m.z,{type:"submit",colorScheme:"brand",size:"lg",fontSize:"md",isLoading:P.isSubmitting,children:"login"===r?"Sign In":"Sign Up"}),(0,n.jsx)(x.i,{}),(0,n.jsx)(m.z,{w:"full",variant:"outline",leftIcon:(0,n.jsx)(f.J,{as:b.JM8}),onClick:handleGoogleSignIn,children:"Sign in with Google"}),"login"===r?(0,n.jsxs)(d.K,{direction:"row",justify:"space-between",fontSize:"sm",children:[(0,n.jsx)(v(),{href:"/register",children:(0,n.jsx)(o.x,{color:"brand.500",_hover:{textDecoration:"underline"},children:"Create an account"})}),(0,n.jsx)(v(),{href:"/forgot-password",children:(0,n.jsx)(o.x,{color:"brand.500",_hover:{textDecoration:"underline"},children:"Forgot password?"})})]}):(0,n.jsx)(g.M,{children:(0,n.jsxs)(o.x,{fontSize:"sm",children:["Already have an account?"," ",(0,n.jsx)(v(),{href:"/login",children:(0,n.jsx)(o.x,{as:"span",color:"brand.500",_hover:{textDecoration:"underline"},children:"Sign in"})})]})})]})})})},y=s(1144),C=s(7294),register=()=>{let{user:e}=(0,y.a)(),r=(0,S.useRouter)();return(0,C.useEffect)(()=>{e&&r.push("/dashboard")},[e,r]),(0,n.jsx)(i.x,{py:10,children:(0,n.jsxs)(t.g,{spacing:8,children:[(0,n.jsxs)(i.x,{textAlign:"center",children:[(0,n.jsx)(a.X,{size:"xl",mb:2,children:"Create an Account"}),(0,n.jsx)(o.x,{color:"gray.600",children:"Join OmniSec Live for comprehensive threat intelligence"})]}),(0,n.jsx)(auth_AuthForm,{mode:"register"})]})})}},5715:function(e,r,s){"use strict";s.d(r,{M:function(){return a}});var n=s(5893),i=s(7430),t=s(9381);let a=(0,i.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";let o={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,t.G)(function(e,r){let{axis:s="both",...t}=e;return(0,n.jsx)(i.m.div,{ref:r,__css:o[s],...t,position:"absolute"})})},4831:function(e,r,s){"use strict";s.d(r,{i:function(){return d}});var n=s(5893),i=s(5544),t=s(4926),a=s(9381),o=s(6158),l=s(7430);let d=(0,a.G)(function(e,r){let{borderLeftWidth:s,borderBottomWidth:a,borderTopWidth:d,borderRightWidth:c,borderWidth:u,borderStyle:h,borderColor:m,...x}=(0,o.m)("Divider",e),{className:f,orientation:g="horizontal",__css:p,...w}=(0,i.L)(e);return(0,n.jsx)(l.m.hr,{ref:r,"aria-orientation":g,...w,__css:{...x,border:"0",borderColor:m,borderStyle:h,...{vertical:{borderLeftWidth:s||c||u||"1px",height:"100%"},horizontal:{borderBottomWidth:a||d||u||"1px",width:"100%"}}[g],...p},className:(0,t.cx)("chakra-divider",f)})});d.displayName="Divider"}},function(e){e.O(0,[994,615,774,888,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);