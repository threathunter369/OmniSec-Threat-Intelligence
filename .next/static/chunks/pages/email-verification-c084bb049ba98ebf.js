(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{704:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/email-verification",function(){return s(7515)}])},7515:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return EmailVerification}});var t=s(5893),n=s(6596),a=s(6254),r=s(8186),c=s(232),l=s(92),o=s(8029),u=s(8491),d=s(1163),f=s(7294),h=s(7179),m=s(3859);function EmailVerification(){let{user:e}=(0,h.a)(),i=(0,d.useRouter)(),s=(0,n.p)();(0,f.useEffect)(()=>{e||i.push("/signin")},[e,i]);let handleResendVerification=async()=>{try{e&&!e.emailVerified&&(await (0,m.w$)(e),s({title:"Success",description:"Verification email has been resent",status:"success",duration:5e3,isClosable:!0}))}catch(e){s({title:"Error",description:e.message||"Failed to resend verification email",status:"error",duration:5e3,isClosable:!0})}},handleRefreshStatus=async()=>{try{e&&(await e.reload(),e.emailVerified?(s({title:"Success",description:"Email verified successfully!",status:"success",duration:5e3,isClosable:!0}),i.push("/dashboard")):s({title:"Info",description:"Email not verified yet. Please check your email.",status:"info",duration:5e3,isClosable:!0}))}catch(e){s({title:"Error",description:e.message||"Failed to check verification status",status:"error",duration:5e3,isClosable:!0})}};return e?(0,t.jsx)(a.W,{maxW:"container.md",py:20,children:(0,t.jsxs)(r.g,{spacing:8,textAlign:"center",children:[(0,t.jsx)(c.X,{as:"h1",size:"xl",children:"Verify Your Email"}),(0,t.jsxs)(l.x,{fontSize:"lg",children:["We've sent a verification email to: ",e.email]}),(0,t.jsx)(l.x,{children:"Please check your email and click the verification link to continue."}),(0,t.jsxs)(o.x,{children:[(0,t.jsx)(u.z,{colorScheme:"blue",onClick:handleResendVerification,mr:4,children:"Resend Verification Email"}),(0,t.jsx)(u.z,{onClick:handleRefreshStatus,children:"I've Verified My Email"})]})]})}):null}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=704)}),_N_E=e.O()}]);