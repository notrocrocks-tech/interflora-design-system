/* Store.jsx — Interflora flower storefront: tabbed catalog + product cards */

const TABS = ['NEW IN','CLOTHING','SHOES','ACC'];
const PRODUCTS = [
  {id:1, name:'Summer Bliss Bouquet', price:'£ 44.99', img:'https://picsum.photos/seed/flowers1/400/300', swatches:['#FFCBDB','#FF0050'], fav:false},
  {id:2, name:'Woodland Romance', price:'£ 59.99', img:'https://picsum.photos/seed/flowers2/400/300', swatches:['#CBFFE4','#E9CBFF'], fav:true},
  {id:3, name:'Golden Hour', price:'£ 38.00', img:'https://picsum.photos/seed/flowers3/400/300', swatches:['#FEDC00','#FF842B'], fav:false},
];

function Store({ onProduct }) {
  const C = window.IFC;
  const [tab, setTab] = React.useState(0);
  const [favs, setFavs] = React.useState({2:true});
  const toggleFav = (id,e) => { e.stopPropagation(); setFavs(f=>({...f,[id]:!f[id]})); };
  return (
    <div style={{flex:1,display:'flex',flexDirection:'column',background:C.bg}}>
      {/* Category tabs */}
      <div style={{display:'flex',gap:0,background:C.paper,borderBottom:`1px solid ${C.line}`,overflowX:'auto'}}>
        {TABS.map((t,i)=>(
          <button key={t} onClick={()=>setTab(i)} style={{flex:'none',padding:'14px 18px',border:'none',cursor:'pointer',
            background:'none',fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:13,letterSpacing:1,
            textTransform:'uppercase',color:tab===i?C.primary:C.ink3,
            borderBottom:tab===i?`2px solid ${C.primary}`:'2px solid transparent'}}>
            {t}
          </button>
        ))}
      </div>
      {/* Filter bar */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 16px',background:C.paper}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <MS name="filter_list" size={20} color={C.ink3}/>
          <span style={{fontFamily:'Arial,sans-serif',fontSize:15,color:C.ink3}}>Filter</span>
        </div>
        <div style={{fontSize:14,fontFamily:'Arial,sans-serif',color:C.ink3}}>Sort by: <span style={{color:C.primary,fontWeight:700}}>Newest</span></div>
      </div>
      <div style={{padding:'8px 16px',fontFamily:'Arial,sans-serif',fontSize:13,color:C.ink4}}>128 items found</div>
      {/* Product list */}
      <div style={{flex:1,overflowY:'auto',padding:'0 16px 16px',display:'flex',flexDirection:'column',gap:16}}>
        {PRODUCTS.map(p=>(
          <div key={p.id} onClick={()=>onProduct&&onProduct(p)} style={{background:C.paper,borderRadius:12,overflow:'hidden',
            boxShadow:'0 2px 6px rgba(0,0,0,.07)',cursor:'pointer'}}>
            <div style={{position:'relative'}}>
              <img src={p.img} style={{width:'100%',height:220,objectFit:'cover',display:'block'}}
                onError={e=>{e.target.style.background='#E9CBFF';e.target.style.height='220px';}}/>
              <button onClick={(e)=>toggleFav(p.id,e)} style={{position:'absolute',top:12,right:12,
                background:favs[p.id]?C.primary:'rgba(255,255,255,.85)',border:'none',cursor:'pointer',
                borderRadius:'50%',width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <MS name="favorite" fill={favs[p.id]?1:0} size={20} color={favs[p.id]?'#fff':C.ink3}/>
              </button>
            </div>
            <div style={{padding:'12px 14px'}}>
              <div style={{fontFamily:'Arial,sans-serif',fontSize:16,color:C.ink}}>{p.name}</div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:6}}>
                <span style={{fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:18,color:C.ink}}>{p.price}</span>
                <div style={{display:'flex',gap:6}}>
                  {p.swatches.map((s,i)=>(
                    <span key={i} style={{width:20,height:20,borderRadius:'50%',background:s,
                      border:'1px solid rgba(0,0,0,.12)',display:'inline-block'}}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.Store = Store;
window.STORE_PRODUCTS = PRODUCTS;
