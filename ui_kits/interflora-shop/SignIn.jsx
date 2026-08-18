/* SignIn.jsx — Interflora account sign-in + sign-up tabs */

function SignIn({ onSignIn }) {
  const C = window.IFC;
  const [tab, setTab] = React.useState('signin');
  const [showPw, setShowPw] = React.useState(false);
  const Field = ({ label, type, trailing, onTrailing }) => (
    <div style={{background:C.field,borderRadius:'6px 6px 0 0',borderBottom:`1px solid ${C.ink4}`,
      padding:'10px 14px',display:'flex',alignItems:'center',gap:10,minHeight:56,boxSizing:'border-box'}}>
      <div style={{flex:1}}>
        <div style={{fontFamily:'Arial,sans-serif',fontSize:13,color:C.ink3}}>{label}</div>
        <input type={trailing&&!showPw?'password':type||'text'} placeholder={label}
          style={{background:'none',border:'none',outline:'none',width:'100%',fontFamily:'Arial,sans-serif',
            fontSize:17,color:C.ink,marginTop:2}}/>
      </div>
      {trailing && <button onClick={onTrailing} style={{background:'none',border:'none',cursor:'pointer',display:'flex',padding:0}}>
        <MS name="visibility" size={22} color={C.ink3}/>
      </button>}
    </div>
  );
  const SocialBtn = ({ name, icon }) => (
    <button style={{display:'flex',alignItems:'center',justifyContent:'center',gap:14,height:52,width:'100%',
      border:`1px solid ${C.line}`,borderRadius:8,background:C.paper,cursor:'pointer',
      fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:14,letterSpacing:.5,textTransform:'uppercase',color:C.ink3}}>
      {icon}<span>{name}</span>
    </button>
  );
  return (
    <div style={{flex:1,overflowY:'auto',background:C.paper,display:'flex',flexDirection:'column'}}>
      {/* Tabs */}
      <div style={{display:'flex',borderBottom:`1px solid ${C.line}`}}>
        {['signin','signup'].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{flex:1,height:52,border:'none',cursor:'pointer',background:'none',
            fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:14,letterSpacing:1,textTransform:'uppercase',
            color:tab===t?C.primary:C.ink3,borderBottom:tab===t?`2px solid ${C.primary}`:'2px solid transparent'}}>
            {t==='signin'?'Sign in':'Sign up'}
          </button>
        ))}
      </div>
      <div style={{padding:'28px 20px',display:'flex',flexDirection:'column',gap:20}}>
        <div style={{fontFamily:'Arial,sans-serif',fontSize:22,fontWeight:700,color:C.ink,textAlign:'center'}}>
          {tab==='signin'?'Sign in with email':'Create an account'}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:18}}>
          <Field label="Email Address" type="email"/>
          <div>
            <Field label="Password" trailing={true} onTrailing={()=>setShowPw(v=>!v)}/>
            <div style={{fontFamily:'Arial,sans-serif',fontSize:12,color:C.ink3,marginTop:6,paddingLeft:2}}>
              Password must contain at least 6 characters
            </div>
          </div>
        </div>
        <button onClick={onSignIn} style={{height:52,borderRadius:999,background:C.primary,color:'#fff',border:'none',
          cursor:'pointer',fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:16,letterSpacing:.5,textTransform:'uppercase'}}>
          {tab==='signin'?'Sign in':'Create account'}
        </button>
        {tab==='signin' && (
          <div style={{textAlign:'center',fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:13,
            letterSpacing:.5,textTransform:'uppercase',color:C.ink4,cursor:'pointer'}}>
            Forgot password?
          </div>
        )}
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{flex:1,height:1,background:C.line}}/><span style={{fontFamily:'Arial,sans-serif',fontSize:13,color:C.ink4}}>OR</span><div style={{flex:1,height:1,background:C.line}}/>
        </div>
        <div style={{fontFamily:'Arial,sans-serif',fontSize:18,fontWeight:700,color:C.ink,textAlign:'center'}}>Sign in with…</div>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <SocialBtn name="Facebook" icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>}/>
          <SocialBtn name="Google" icon={<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>}/>
          <SocialBtn name="Twitter" icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="#1DA1F2"><path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59l-.05-.02z"/></svg>}/>
        </div>
      </div>
    </div>
  );
}
window.SignIn = SignIn;
