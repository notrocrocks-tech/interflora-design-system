/* Product.jsx — Interflora product detail: hero image, size/colour, add to bag */

function ProductDetail({ product, onBack, onAddToCart }) {
  const C = window.IFC;
  const [size, setSize] = React.useState('M');
  const [colour, setColour] = React.useState(0);
  const [fav, setFav] = React.useState(false);
  const p = product || { name:'Summer Bliss Bouquet', price:'£ 44.99',
    img:'https://picsum.photos/seed/flowers1/400/300',
    swatches:['#FFCBDB','#FF0050'] };
  const sizes = ['XS','S','M','L','XL'];
  return (
    <div style={{flex:1,display:'flex',flexDirection:'column',background:C.paper,overflowY:'auto'}}>
      {/* Hero image with controls */}
      <div style={{position:'relative'}}>
        <img src={p.img} style={{width:'100%',height:300,objectFit:'cover',display:'block'}}/>
        <button onClick={onBack} style={{position:'absolute',top:14,left:14,background:'rgba(255,255,255,.85)',
          border:'none',cursor:'pointer',borderRadius:'50%',width:38,height:38,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <MS name="arrow_back" size={22} color={C.ink}/>
        </button>
        <button onClick={()=>setFav(v=>!v)} style={{position:'absolute',top:14,right:14,
          background:fav?C.primary:'rgba(255,255,255,.85)',border:'none',cursor:'pointer',
          borderRadius:'50%',width:38,height:38,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <MS name="favorite" fill={fav?1:0} size={22} color={fav?'#fff':C.ink3}/>
        </button>
      </div>
      {/* Thumbnail strip */}
      <div style={{display:'flex',gap:8,padding:'10px 16px',background:C.bg,overflowX:'auto'}}>
        {[p.img,p.img,p.img].map((src,i)=>(
          <img key={i} src={src} style={{width:72,height:64,objectFit:'cover',borderRadius:6,flex:'none',
            border:i===0?`2px solid ${C.primary}`:`1px solid ${C.line}`}}/>
        ))}
      </div>
      {/* Details */}
      <div style={{padding:'18px 18px 24px',display:'flex',flexDirection:'column',gap:14}}>
        <div style={{fontFamily:'Arial,sans-serif',fontSize:26,fontWeight:700,color:C.ink}}>{p.name}</div>
        <div style={{fontFamily:'Arial,sans-serif',fontSize:24,fontWeight:700,color:C.ink}}>{p.price}</div>
        {/* Rating */}
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{display:'flex',gap:2}}>
            {[1,2,3,4,5].map(s=>(
              <MS key={s} name="star" size={18} color={s<=4?C.gold:C.ink4}/>
            ))}
          </div>
          <span style={{fontFamily:'Arial,sans-serif',fontSize:14,color:C.ink3}}>32 reviews</span>
          <span style={{flex:1}}/>
          <span style={{fontFamily:'Arial,sans-serif',fontSize:12,fontWeight:700,color:C.primary,letterSpacing:.5,textTransform:'uppercase',cursor:'pointer'}}>Write a review</span>
        </div>
        <div style={{height:1,background:C.line}}/>
        {/* Size picker */}
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <span style={{fontFamily:'Arial,sans-serif',fontSize:16,color:C.ink3}}>Size:</span>
          <div style={{display:'flex',gap:10}}>
            {sizes.map(s=>(
              <button key={s} onClick={()=>setSize(s)} style={{width:36,height:36,borderRadius:'50%',border:'none',cursor:'pointer',
                fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:13,
                background:size===s?C.primary:C.bg,color:size===s?'#fff':C.ink}}>{s}</button>
            ))}
          </div>
        </div>
        {/* Colour picker */}
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <span style={{fontFamily:'Arial,sans-serif',fontSize:16,color:C.ink3}}>Colour:</span>
          <div style={{display:'flex',gap:10}}>
            {p.swatches.map((sw,i)=>(
              <span key={i} onClick={()=>setColour(i)} style={{width:28,height:28,borderRadius:'50%',background:sw,cursor:'pointer',
                border:colour===i?`3px solid ${C.primary}`:'2px solid rgba(0,0,0,.15)',display:'inline-block'}}/>
            ))}
          </div>
        </div>
        {/* Add to bag */}
        <button onClick={onAddToCart} style={{width:'100%',height:52,borderRadius:999,
          background:C.primary,color:'#fff',border:'none',cursor:'pointer',
          fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:16,letterSpacing:.5,textTransform:'uppercase',marginTop:8}}>
          Add to bag
        </button>
      </div>
    </div>
  );
}
window.ProductDetail = ProductDetail;
