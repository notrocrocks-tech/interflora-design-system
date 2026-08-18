/* Chat.jsx — message thread with composer. */

function Chat() {
  const C = window.HelmColors;
  const [msgs, setMsgs] = React.useState([
    {from:'them', text:'Sed ullamcorper malesuada proin libero nunc consequat interdum. A lacus vestibulum sed arcu non odio.'},
    {from:'me', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', meta:'29 Apr, 14:10'},
    {from:'them', text:'I have a new feature for this project.', meta:'29 Apr, 14:12', name:true},
  ]);
  const [val, setVal] = React.useState('');
  const scrollRef = React.useRef();
  React.useEffect(()=>{ if(scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; },[msgs]);
  const send = () => { if(!val.trim()) return; setMsgs(m=>[...m,{from:'me', text:val, meta:'Just now'}]); setVal(''); };
  return (
    <div style={{flex:1, display:'flex', flexDirection:'column', background:C.bg}}>
      <div style={{display:'flex', alignItems:'center', gap:14, padding:'10px 16px', background:C.paper, boxShadow:'0 1px 0 rgba(0,0,0,.06)'}}>
        <MS name="arrow_back" size={24}/>
        <img src="https://i.pravatar.cc/80?img=5" style={{width:42,height:42,borderRadius:'50%',objectFit:'cover'}}/>
        <div style={{flex:1}}>
          <div style={{fontSize:19, fontWeight:500, color:C.ink}}>Jane Doe</div>
          <div style={{fontSize:13, color:C.ink3}}>Online</div>
        </div>
        <MS name="more_vert" size={22} color={C.ink3}/>
      </div>
      <div ref={scrollRef} style={{flex:1, overflowY:'auto', padding:'18px 16px', display:'flex', flexDirection:'column', gap:8}}>
        {msgs.map((m,i)=>(
          <React.Fragment key={i}>
            {m.meta && <div style={{display:'flex', justifyContent:'space-between', fontSize:12, color:C.ink4, margin:'8px 2px 0'}}>
              <span>{m.from==='me'?'You':'Jane Doe'}</span><span>{m.meta}</span></div>}
            <div style={{alignSelf:m.from==='me'?'flex-end':'flex-start', maxWidth:'78%',
              background:m.from==='them'?'#56A8F5':'#F7F8FA', color:m.from==='them'?'#fff':C.ink3,
              border:m.from==='me'?`1px solid ${C.line}`:'none', borderRadius:14, padding:'12px 16px', fontSize:15, lineHeight:1.5}}>
              {m.text}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div style={{display:'flex', alignItems:'center', gap:10, padding:'10px 14px', background:C.paper, borderTop:`1px solid ${C.line}`}}>
        <input value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()}
          placeholder="Type a message..." style={{flex:1, border:'none', outline:'none', fontSize:16, color:C.ink, fontFamily:'inherit', background:'transparent'}}/>
        <MS name="attach_file" size={22} color={C.ink3} style={{cursor:'pointer'}}/>
        <button onClick={send} style={{background:'none',border:'none',cursor:'pointer',display:'flex'}}><MS name="mood" size={22} color={C.ink3}/></button>
      </div>
    </div>
  );
}
window.Chat = Chat;
