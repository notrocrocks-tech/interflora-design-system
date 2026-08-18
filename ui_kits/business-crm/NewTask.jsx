/* NewTask.jsx — "Create New Task" modal bottom-anchored dialog. */

function Field({ label, value, placeholder, trailing }) {
  const C = window.HelmColors;
  return (
    <div style={{background:C.field, borderBottom:`1px solid ${C.ink4}`, borderRadius:'6px 6px 0 0', padding:'10px 14px 9px',
      display:'flex', alignItems:'center', minHeight:54, boxSizing:'border-box'}}>
      <div style={{flex:1}}>
        {label && <div style={{fontSize:13, color:C.ink3}}>{label}</div>}
        <div style={{fontSize:18, color:value?C.ink:C.ink4, marginTop:label?2:0}}>{value||placeholder}</div>
      </div>
      {trailing && <MS name={trailing} size={22} color={C.ink3}/>}
    </div>
  );
}

function NewTaskModal({ open, onClose }) {
  const C = window.HelmColors;
  return (
    <React.Fragment>
      <div onClick={onClose} style={{position:'absolute', inset:0, background:'rgba(0,0,0,.5)',
        opacity:open?1:0, pointerEvents:open?'auto':'none', transition:'opacity .2s', zIndex:20}}/>
      <div style={{position:'absolute', top:0, left:16, right:16, background:C.paper, borderRadius:10,
        marginTop:30, padding:'26px 22px 18px', zIndex:21, boxShadow:'0 14px 36px rgba(16,24,40,.25)',
        transform:open?'translateY(0)':'translateY(-16px)', opacity:open?1:0,
        pointerEvents:open?'auto':'none', transition:'all .22s cubic-bezier(.4,0,.2,1)'}}>
        <div style={{fontSize:26, fontWeight:500, color:C.ink, marginBottom:22}}>Create New Task</div>
        <div style={{display:'flex', flexDirection:'column', gap:18}}>
          <Field label="List" value="Tasks" trailing="expand_more"/>
          <Field placeholder="Task name"/>
          <Field placeholder="Description"/>
          <div style={{background:C.field, borderBottom:`1px solid ${C.ink4}`, borderRadius:'6px 6px 0 0', padding:'8px 14px',
            display:'flex', alignItems:'center', gap:12, minHeight:54, boxSizing:'border-box'}}>
            <img src="https://i.pravatar.cc/60?img=47" style={{width:34,height:34,borderRadius:'50%',objectFit:'cover'}}/>
            <div style={{flex:1}}>
              <div style={{fontSize:13, color:C.ink3}}>Assigned to</div>
              <div style={{fontSize:18, color:C.ink}}>Lindsey Stroud</div>
            </div>
            <MS name="expand_more" size={22} color={C.ink3}/>
          </div>
          <Field placeholder="Close date" trailing="calendar_today"/>
        </div>
        <div style={{display:'flex', justifyContent:'flex-end', gap:30, marginTop:24}}>
          <button onClick={onClose} style={{background:'none',border:'none',cursor:'pointer',fontFamily:'inherit',
            fontSize:15, fontWeight:500, letterSpacing:1, textTransform:'uppercase', color:C.ink3}}>Cancel</button>
          <button onClick={onClose} style={{background:'none',border:'none',cursor:'pointer',fontFamily:'inherit',
            fontSize:15, fontWeight:500, letterSpacing:1, textTransform:'uppercase', color:C.primary}}>Create</button>
        </div>
      </div>
    </React.Fragment>
  );
}
window.NewTaskModal = NewTaskModal;
