/* Frame.jsx — Android phone shell, app bar, navigation drawer, bottom system nav.
   Shared chrome for the Helm business/CRM UI kit. Material idiom. */

const C = {
  primary:'#9B00FE', primaryPress:'#8000d4', soft:'#E9CBFF',
  ink:'#000000', ink2:'#4F4F4F', ink3:'#6D6D6D', ink4:'#BDBDBD',
  paper:'#FFFFFF', bg:'#F6F6F6', field:'#F6F6F6', line:'#E6E6E6', icon:'#000000',
  gold:'#CAAD59', green:'#04FF7E', yellow:'#FEDC00',
};
window.HelmColors = C;
/* MS is provided by ../icons.jsx loaded before Frame.jsx */

/* Android status bar (top) + 3-button system nav (bottom black bar) */
function StatusBar() {
  return (
    <div style={{height:26, background:'#ECEDEF', display:'flex', alignItems:'center',
      justifyContent:'flex-end', gap:9, padding:'0 12px', flex:'none'}}>
      <span style={{width:9,height:9,background:'#9AA0A6'}}></span>
      <span style={{width:9,height:9,background:'#9AA0A6',borderRadius:'50%'}}></span>
      <span style={{width:0,height:0,borderLeft:'6px solid transparent',borderRight:'6px solid transparent',borderTop:'9px solid #9AA0A6'}}></span>
    </div>
  );
}
function SystemNav() {
  const g = { background:'none', border:'none', padding:0, cursor:'pointer', display:'flex' };
  return (
    <div style={{height:48, background:'#000', display:'flex', alignItems:'center',
      justifyContent:'space-around', flex:'none'}}>
      <button style={g}><span style={{width:0,height:0,borderTop:'9px solid transparent',borderBottom:'9px solid transparent',borderRight:'14px solid #fff'}}></span></button>
      <button style={g}><span style={{width:17,height:17,border:'2px solid #fff',borderRadius:'50%'}}></span></button>
      <button style={g}><span style={{width:15,height:15,background:'#fff',borderRadius:2}}></span></button>
    </div>
  );
}

function AppBar({ title, onMenu, avatar, onAction, actionIcon='more_vert', filter }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:16, padding:'0 16px', height:64,
      background:C.paper, boxShadow:'0 1px 0 rgba(0,0,0,.06)', flex:'none', position:'relative', zIndex:2}}>
      <button onClick={onMenu} style={{background:'none',border:'none',padding:0,cursor:'pointer',display:'flex'}}>
        <MS name="menu" size={24}/>
      </button>
      <div style={{fontSize:24, fontWeight:500, color:C.ink, flex:1}}>{title}</div>
      {filter && <button onClick={onAction} style={{background:'none',border:'none',cursor:'pointer',display:'flex'}}><MS name="filter_list"/></button>}
      {avatar
        ? <img src={avatar} style={{width:38,height:38,borderRadius:'50%',objectFit:'cover'}}/>
        : <button onClick={onAction} style={{background:'none',border:'none',padding:0,cursor:'pointer',display:'flex'}}><MS name={actionIcon}/></button>}
    </div>
  );
}
window.AppBar = AppBar;

const DRAWER = [
  { id:'dashboard', icon:'dashboard', label:'Dashboard', fill:1 },
  { id:'clients',   icon:'group',     label:'Clients',   fill:1 },
  { id:'messages',  icon:'chat_bubble', label:'Messages', fill:1 },
  { id:'schedule',  icon:'event',     label:'Schedule',  fill:0 },
  { id:'settings',  icon:'settings',  label:'Settings',  fill:0 },
];

function Drawer({ open, active, onClose, onNavigate }) {
  return (
    <React.Fragment>
      <div onClick={onClose} style={{position:'absolute', inset:0, background:'rgba(0,0,0,.5)',
        opacity:open?1:0, pointerEvents:open?'auto':'none', transition:'opacity .2s', zIndex:10}}/>
      <div style={{position:'absolute', top:0, bottom:0, left:0, width:286, background:C.paper,
        transform:open?'translateX(0)':'translateX(-100%)', transition:'transform .25s cubic-bezier(.4,0,.2,1)',
        zIndex:11, display:'flex', flexDirection:'column', boxShadow:open?'2px 0 16px rgba(0,0,0,.18)':'none'}}>
        <div style={{padding:'28px 22px 18px'}}>
          <img src="https://i.pravatar.cc/120?img=47" style={{width:60,height:60,borderRadius:'50%',objectFit:'cover'}}/>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:14}}>
            <span style={{fontSize:22,fontWeight:500,color:C.ink}}>Lindsey Stroud</span>
            <MS name="expand_more" size={22} color={C.ink3}/>
          </div>
        </div>
        <div style={{height:1, background:C.line, margin:'0 0 8px'}}/>
        {DRAWER.map(it=>{
          const on = it.id===active;
          return (
            <button key={it.id} onClick={()=>onNavigate(it.id)} style={{display:'flex',alignItems:'center',gap:22,
              padding:'14px 22px', margin:'2px 10px', borderRadius:8, border:'none', cursor:'pointer',
              background:on?C.soft:'transparent', textAlign:'left'}}>
              <MS name={it.icon} fill={it.fill} color={on?C.primary:C.icon}/>
              <span style={{fontSize:18, color:on?C.primary:C.ink}}>{it.label}</span>
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}
window.Drawer = Drawer;

/* The phone device bezel + scaffold. children = current screen. */
function Phone({ children }) {
  return (
    <div style={{width:380, height:760, background:'#000', borderRadius:38, padding:10,
      boxShadow:'0 30px 70px rgba(16,24,40,.30)', flex:'none'}}>
      <div style={{width:'100%', height:'100%', borderRadius:28, overflow:'hidden',
        background:C.bg, display:'flex', flexDirection:'column', position:'relative'}}>
        <StatusBar/>
        <div style={{flex:1, display:'flex', flexDirection:'column', position:'relative', overflow:'hidden'}}>
          {children}
        </div>
        <SystemNav/>
      </div>
    </div>
  );
}
window.Phone = Phone;
window.HelmDrawerItems = DRAWER;
