(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return s(5449)}])},2941:function(e,r,s){"use strict";var n=s(5893),t=s(7294),i=s(1163),a=s(7179),l=s(5715),o=s(8899);r.Z=e=>{let{children:r}=e,{user:s,loading:d}=(0,a.a)(),c=(0,i.useRouter)();return((0,t.useEffect)(()=>{!d&&s&&(console.log("PublicRoute: Redirecting authenticated user to dashboard"),c.replace("/dashboard"))},[s,d,c]),d)?(0,n.jsx)(l.M,{h:"100vh",children:(0,n.jsx)(o.$,{size:"xl",color:"blue.500",thickness:"4px",speed:"0.65s"})}):s?null:(0,n.jsx)(n.Fragment,{children:r})}},5449:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return SignUp}});var n=s(5893),t=s(1046),i=s(8029),a=s(6254),l=s(8186),o=s(232),d=s(92),c=s(6596),u=s(8491),h=s(4506),m=s(980),p=s(2206),f=s(5544),g=s(2110),x=s(4926),b=s(2553),v=s(9381),y=s(6158),j=s(7430);let[_,S]=(0,g.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),F=(0,v.G)((e,r)=>{let s=(0,y.j)("FormError",e),t=(0,f.L)(e),i=(0,h.NJ)();return i?.isInvalid?(0,n.jsx)(_,{value:s,children:(0,n.jsx)(j.m.div,{...i?.getErrorMessageProps(t,r),className:(0,x.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...s.text}})}):null});F.displayName="FormErrorMessage";let C=(0,v.G)((e,r)=>{let s=S(),t=(0,h.NJ)();if(!t?.isInvalid)return null;let i=(0,x.cx)("chakra-form__error-icon",e.className);return(0,n.jsx)(b.J,{ref:r,"aria-hidden":!0,...e,__css:s.icon,className:i,children:(0,n.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});C.displayName="FormErrorIcon";var N=s(7294),I=s(1163),w=s(7179),P=s(1872),k=s(340),auth_SignUpForm=()=>{let[e,r]=(0,N.useState)(""),[s,a]=(0,N.useState)(""),[o,f]=(0,N.useState)(""),[g,x]=(0,N.useState)(!1),[b,v]=(0,N.useState)(""),{signUp:y,signInWithGoogle:j}=(0,w.a)(),_=(0,I.useRouter)(),S=(0,c.p)(),validatePassword=()=>s!==o?(v("Passwords do not match"),!1):s.length<6?(v("Password must be at least 6 characters long"),!1):(v(""),!0),handleSubmit=async r=>{if(r.preventDefault(),validatePassword()){x(!0);try{await y(e,s),S({title:"Success!",description:"Your account has been created. Please check your email for verification.",status:"success",duration:5e3,isClosable:!0}),_.push("/dashboard")}catch(e){S({title:"Error",description:e.message,status:"error",duration:5e3,isClosable:!0})}finally{x(!1)}}},handleGoogleSignIn=async()=>{x(!0);try{console.log("SignUpForm: Attempting Google sign in"),await j(),console.log("SignUpForm: Google sign in successful"),S({title:"Success!",description:"You have been successfully signed up with Google.",status:"success",duration:5e3,isClosable:!0}),_.push("/dashboard")}catch(e){console.error("SignUpForm: Google sign in error:",e),S({title:"Error",description:e.message||"Failed to sign in with Google",status:"error",duration:5e3,isClosable:!0})}finally{x(!1)}};return(0,n.jsx)(i.x,{as:"form",onSubmit:handleSubmit,width:"100%",maxW:"400px",bg:(0,t.ff)("white","gray.700"),p:8,borderRadius:"lg",boxShadow:"lg",border:"1px solid",borderColor:(0,t.ff)("gray.200","gray.600"),children:(0,n.jsxs)(l.g,{spacing:6,children:[(0,n.jsx)(u.z,{leftIcon:(0,n.jsx)(P.JM8,{}),w:"100%",onClick:handleGoogleSignIn,isLoading:g,mb:4,variant:"outline",_hover:{bg:(0,t.ff)("gray.50","gray.600")},children:"Sign up with Google"}),(0,n.jsx)(d.x,{children:"Or sign up with email"}),(0,n.jsxs)(h.NI,{id:"email",isRequired:!0,children:[(0,n.jsx)(m.l,{children:"Email address"}),(0,n.jsx)(p.I,{type:"email",value:e,onChange:e=>r(e.target.value),disabled:g})]}),(0,n.jsxs)(h.NI,{id:"password",isRequired:!0,isInvalid:!!b,children:[(0,n.jsx)(m.l,{children:"Password"}),(0,n.jsx)(p.I,{type:"password",value:s,onChange:e=>a(e.target.value),disabled:g}),(0,n.jsx)(F,{children:b})]}),(0,n.jsxs)(h.NI,{id:"confirmPassword",isRequired:!0,isInvalid:!!b,children:[(0,n.jsx)(m.l,{children:"Confirm Password"}),(0,n.jsx)(p.I,{type:"password",value:o,onChange:e=>f(e.target.value),disabled:g}),(0,n.jsx)(F,{children:b})]}),(0,n.jsx)(u.z,{type:"submit",colorScheme:"blue",w:"100%",isLoading:g,children:"Sign Up"}),(0,n.jsxs)(d.x,{children:["Already have an account?"," ",(0,n.jsx)(k.Z,{href:"/signin",color:"blue.500",children:"Sign in"})]})]})})},R=s(2941),q=s(9008),E=s.n(q);function SignUp(){let e=(0,t.ff)("gray.50","gray.900");return(0,n.jsxs)(R.Z,{children:[(0,n.jsx)(E(),{children:(0,n.jsx)("title",{children:"Sign Up - OmniSec Live"})}),(0,n.jsx)(i.x,{minH:"100vh",bg:e,py:20,children:(0,n.jsx)(a.W,{maxW:"lg",children:(0,n.jsxs)(l.g,{spacing:8,align:"center",children:[(0,n.jsxs)(l.g,{spacing:2,textAlign:"center",children:[(0,n.jsx)(o.X,{size:"xl",children:"Create an Account"}),(0,n.jsx)(d.x,{color:"gray.500",children:"Join OmniSec Live for advanced security monitoring"})]}),(0,n.jsx)(auth_SignUpForm,{})]})})})]})}},9008:function(e,r,s){e.exports=s(9201)},5715:function(e,r,s){"use strict";s.d(r,{M:function(){return a}});var n=s(5893),t=s(7430),i=s(9381);let a=(0,t.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";let l={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,i.G)(function(e,r){let{axis:s="both",...i}=e;return(0,n.jsx)(t.m.div,{ref:r,__css:l[s],...i,position:"absolute"})})},4506:function(e,r,s){"use strict";s.d(r,{NI:function(){return x},NJ:function(){return g},e:function(){return p}});var n=s(5893),t=s(9062),i=s(5544),a=s(2110),l=s(397),o=s(4926),d=s(7294),c=s(9381),u=s(6158),h=s(7430);let[m,p]=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,g]=(0,a.k)({strict:!1,name:"FormControlContext"}),x=(0,c.G)(function(e,r){let s=(0,u.j)("Form",e),a=(0,i.L)(e),{getRootProps:c,htmlProps:p,...g}=function(e){let{id:r,isRequired:s,isInvalid:n,isDisabled:i,isReadOnly:a,...o}=e,c=(0,d.useId)(),u=r||`field-${c}`,h=`${u}-label`,m=`${u}-feedback`,p=`${u}-helptext`,[f,g]=(0,d.useState)(!1),[x,b]=(0,d.useState)(!1),[v,y]=(0,d.useState)(!1),j=(0,d.useCallback)((e={},r=null)=>({id:p,...e,ref:(0,t.lq)(r,e=>{e&&b(!0)})}),[p]),_=(0,d.useCallback)((e={},r=null)=>({...e,ref:r,"data-focus":(0,l.P)(v),"data-disabled":(0,l.P)(i),"data-invalid":(0,l.P)(n),"data-readonly":(0,l.P)(a),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,i,v,n,a,h]),S=(0,d.useCallback)((e={},r=null)=>({id:m,...e,ref:(0,t.lq)(r,e=>{e&&g(!0)}),"aria-live":"polite"}),[m]),F=(0,d.useCallback)((e={},r=null)=>({...e,...o,ref:r,role:"group","data-focus":(0,l.P)(v),"data-disabled":(0,l.P)(i),"data-invalid":(0,l.P)(n),"data-readonly":(0,l.P)(a)}),[o,i,v,n,a]),C=(0,d.useCallback)((e={},r=null)=>({...e,ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!s,isInvalid:!!n,isReadOnly:!!a,isDisabled:!!i,isFocused:!!v,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:f,setHasFeedbackText:g,hasHelpText:x,setHasHelpText:b,id:u,labelId:h,feedbackId:m,helpTextId:p,htmlProps:o,getHelpTextProps:j,getErrorMessageProps:S,getRootProps:F,getLabelProps:_,getRequiredIndicatorProps:C}}(a),x=(0,o.cx)("chakra-form-control",e.className);return(0,n.jsx)(f,{value:g,children:(0,n.jsx)(m,{value:s,children:(0,n.jsx)(h.m.div,{...c({},r),className:x,__css:s.container})})})});x.displayName="FormControl";let b=(0,c.G)(function(e,r){let s=g(),t=p(),i=(0,o.cx)("chakra-form__helper-text",e.className);return(0,n.jsx)(h.m.div,{...s?.getHelpTextProps(e,r),__css:t.helperText,className:i})});b.displayName="FormHelperText"},980:function(e,r,s){"use strict";s.d(r,{l:function(){return c}});var n=s(5893),t=s(5544),i=s(4926),a=s(4506),l=s(9381),o=s(6158),d=s(7430);let c=(0,l.G)(function(e,r){let s=(0,o.m)("FormLabel",e),l=(0,t.L)(e),{className:c,children:h,requiredIndicator:m=(0,n.jsx)(u,{}),optionalIndicator:p=null,...f}=l,g=(0,a.NJ)(),x=g?.getLabelProps(f,r)??{ref:r,...f};return(0,n.jsxs)(d.m.label,{...x,className:(0,i.cx)("chakra-form__label",l.className),__css:{display:"block",textAlign:"start",...s},children:[h,g?.isRequired?m:p]})});c.displayName="FormLabel";let u=(0,l.G)(function(e,r){let s=(0,a.NJ)(),t=(0,a.e)();if(!s?.isRequired)return null;let l=(0,i.cx)("chakra-form__required-indicator",e.className);return(0,n.jsx)(d.m.span,{...s?.getRequiredIndicatorProps(e,r),__css:t.requiredIndicator,className:l})});u.displayName="RequiredIndicator"},6013:function(e,r,s){"use strict";s.d(r,{K:function(){return useFormControlProps},Y:function(){return useFormControl}});var n=s(397),t=s(8928),i=s(4506);function useFormControl(e){let{isDisabled:r,isInvalid:s,isReadOnly:t,isRequired:i,...a}=useFormControlProps(e);return{...a,disabled:r,readOnly:t,required:i,"aria-invalid":(0,n.Q)(s),"aria-required":(0,n.Q)(i),"aria-readonly":(0,n.Q)(t)}}function useFormControlProps(e){let r=(0,i.NJ)(),{id:s,disabled:n,readOnly:a,required:l,isRequired:o,isInvalid:d,isReadOnly:c,isDisabled:u,onFocus:h,onBlur:m,...p}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return r?.hasFeedbackText&&r?.isInvalid&&f.push(r.feedbackId),r?.hasHelpText&&f.push(r.helpTextId),{...p,"aria-describedby":f.join(" ")||void 0,id:s??r?.id,isDisabled:n??u??r?.isDisabled,isReadOnly:a??c??r?.isReadOnly,isRequired:l??o??r?.isRequired,isInvalid:d??r?.isInvalid,onFocus:(0,t.v)(r?.onFocus,h),onBlur:(0,t.v)(r?.onBlur,m)}}},2206:function(e,r,s){"use strict";s.d(r,{I:function(){return c}});var n=s(5893),t=s(5544),i=s(4926),a=s(6013),l=s(9381),o=s(6158),d=s(7430);let c=(0,l.G)(function(e,r){let{htmlSize:s,...l}=e,c=(0,o.j)("Input",l),u=(0,t.L)(l),h=(0,a.Y)(u),m=(0,i.cx)("chakra-input",e.className);return(0,n.jsx)(d.m.input,{size:s,...h,__css:c.field,ref:r,className:m})});c.displayName="Input",c.id="Input"}},function(e){e.O(0,[994,774,888,179],function(){return e(e.s=7805)}),_N_E=e.O()}]);