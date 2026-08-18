/* ShopFrame.jsx — Interflora shop phone shell, app bar, and navigation drawer */

const IFC = {
  primary:'#9B00FE', primaryPress:'#8000d4', soft:'#E9CBFF', gold:'#CAAD59',
  red:'#FF0050', green:'#04FF7E', yellow:'#FEDC00', pink:'#FFCBDB',
  ink:'#000000', ink2:'#4F4F4F', ink3:'#6D6D6D', ink4:'#BDBDBD',
  paper:'#FFFFFF', bg:'#F6F6F6', field:'#F6F6F6', line:'#E6E6E6', icon:'#000000',
};
window.IFC = IFC;

/* MS is loaded from ../icons.jsx */

function ShopStatusBar() {
  return (
    <div style={{height:26,background:'#ECEDEF',display:'flex',alignItems:'center',
      justifyContent:'flex-end',gap:9,padding:'0 12px',flex:'none'}}>
      <span style={{width:9,height:9,background:'#9AA0A6'}}></span>
      <span style={{width:9,height:9,background:'#9AA0A6',borderRadius:'50%'}}></span>
      <span style={{width:0,height:0,borderLeft:'6px solid transparent',borderRight:'6px solid transparent',borderTop:'9px solid #9AA0A6'}}></span>
    </div>
  );
}

function ShopSystemNav() {
  const g = {background:'none',border:'none',padding:0,cursor:'pointer',display:'flex'};
  return (
    <div style={{height:48,background:'#000',display:'flex',alignItems:'center',
      justifyContent:'space-around',flex:'none'}}>
      <button style={g}><span style={{width:0,height:0,borderTop:'9px solid transparent',borderBottom:'9px solid transparent',borderRight:'14px solid #fff'}}></span></button>
      <button style={g}><span style={{width:17,height:17,border:'2px solid #fff',borderRadius:'50%'}}></span></button>
      <button style={g}><span style={{width:15,height:15,background:'#fff',borderRadius:2}}></span></button>
    </div>
  );
}

function ShopAppBar({ title, onMenu, avatar, trailing }) {
  return (
    <div style={{display:'flex',alignItems:'center',gap:16,padding:'0 16px',height:64,
      background:IFC.paper,boxShadow:'0 1px 0 rgba(0,0,0,.07)',flex:'none',zIndex:2,position:'relative'}}>
      <button onClick={onMenu} style={{background:'none',border:'none',padding:0,cursor:'pointer',display:'flex'}}>
        <MS name="menu" size={24} color={IFC.ink}/>
      </button>
      <div style={{fontSize:24,fontWeight:700,fontFamily:'Arial,sans-serif',color:IFC.ink,flex:1}}>{title}</div>
      {avatar && <img src={avatar} style={{width:38,height:38,borderRadius:'50%',objectFit:'cover'}}/>}
      {trailing}
    </div>
  );
}
window.ShopAppBar = ShopAppBar;

const SHOP_NAV = [
  {id:'store',   icon:'home',           label:'Home',         fill:1},
  {id:'shop',    icon:'shopping_basket', label:'Shop',        fill:1},
  {id:'track',   icon:'track_changes',  label:'Track',        fill:0},
  {id:'faq',     icon:'help',           label:'FAQ',          fill:1},
  {id:'refer',   icon:'person_add',     label:'Refer a friend',fill:0},
  {id:'cart',    icon:'shopping_cart',  label:'Cart',         fill:1},
  {id:'favs',    icon:'favorite',       label:'Favourites',   fill:1},
];

function ShopDrawer({ open, active, onClose, onNavigate, cartCount }) {
  return (
    <React.Fragment>
      <div onClick={onClose} style={{position:'absolute',inset:0,background:'rgba(0,0,0,.5)',
        opacity:open?1:0,pointerEvents:open?'auto':'none',transition:'opacity .2s',zIndex:10}}/>
      <div style={{position:'absolute',top:0,bottom:0,left:0,width:290,background:IFC.paper,
        transform:open?'translateX(0)':'translateX(-100%)',transition:'transform .25s cubic-bezier(.4,0,.2,1)',
        zIndex:11,display:'flex',flexDirection:'column',boxShadow:open?'4px 0 20px rgba(0,0,0,.18)':'none'}}>
        <div style={{padding:'28px 22px 18px'}}>
          <img src="https://i.pravatar.cc/120?img=47" style={{width:60,height:60,borderRadius:'50%',objectFit:'cover'}}/>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:14}}>
            <span style={{fontSize:22,fontWeight:700,fontFamily:'Arial,sans-serif',color:IFC.ink}}>Lindsey Stroud</span>
            <MS name="expand_more" size={22} color={IFC.ink3}/>
          </div>
        </div>
        <div style={{height:1,background:IFC.line,margin:'0 0 8px'}}/>
        {SHOP_NAV.map(it=>{
          const on = it.id===active;
          const isCart = it.id==='cart';
          return (
            <button key={it.id} onClick={()=>onNavigate(it.id)} style={{display:'flex',alignItems:'center',gap:22,
              padding:'13px 22px',margin:'2px 10px',borderRadius:8,border:'none',cursor:'pointer',
              background:on?IFC.soft:'transparent',textAlign:'left'}}>
              <MS name={it.icon} fill={it.fill} color={on?IFC.primary:IFC.icon}/>
              <span style={{fontSize:18,fontFamily:'Arial,sans-serif',color:on?IFC.primary:IFC.ink,flex:1}}>{it.label}</span>
              {isCart && cartCount>0 && <span style={{background:IFC.primary,color:'#fff',borderRadius:'50%',
                width:22,height:22,display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:12,fontWeight:700,fontFamily:'Arial,sans-serif'}}>{cartCount}</span>}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}
window.ShopDrawer = ShopDrawer;

function ShopPhone({ children }) {
  return (
    <div style={{width:380,height:760,background:'#000',borderRadius:38,padding:10,
      boxShadow:'0 30px 70px rgba(0,0,0,.32)',flex:'none'}}>
      <div style={{width:'100%',height:'100%',borderRadius:28,overflow:'hidden',
        background:IFC.bg,display:'flex',flexDirection:'column',position:'relative'}}>
        <ShopStatusBar/>
        <div style={{flex:1,display:'flex',flexDirection:'column',position:'relative',overflow:'hidden'}}>
          {children}
        </div>
        <ShopSystemNav/>
      </div>
    </div>
  );
}
window.ShopPhone = ShopPhone;
