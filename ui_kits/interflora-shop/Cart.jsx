/* Cart.jsx — Interflora shopping cart + order summary */

function Cart({ items, onBack, onCheckout }) {
  const C = window.IFC;
  const cartItems = items && items.length ? items : [
    {name:'Summer Bliss Bouquet', price:'£ 52.00', img:'https://picsum.photos/seed/flowers1/120/120', colour:'Pink', size:'M'},
    {name:'Golden Hour', price:'£ 38.00', origPrice:'£ 64.00', sale:true, img:'https://picsum.photos/seed/flowers3/120/120', colour:'Yellow', size:'S'},
  ];
  return (
    <div style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:16,padding:16}}>
      {/* Items card */}
      <div style={{background:C.paper,borderRadius:12,border:`1px solid ${C.line}`,padding:'18px 16px'}}>
        <div style={{fontFamily:'Arial,sans-serif',fontSize:20,fontWeight:700,color:C.ink,marginBottom:14}}>
          {cartItems.length} Items
        </div>
        {cartItems.map((it,i)=>(
          <React.Fragment key={i}>
            {i>0 && <div style={{height:1,background:C.line,margin:'14px 0'}}/>}
            <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <img src={it.img} style={{width:80,height:80,objectFit:'cover',borderRadius:8,flex:'none'}}/>
              <div style={{flex:1}}>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                  <div>
                    {it.sale
                      ? <div style={{display:'flex',gap:8,alignItems:'baseline'}}>
                          <span style={{fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:20,color:C.red}}>{it.price}</span>
                          <span style={{fontFamily:'Arial,sans-serif',fontSize:14,color:C.ink4,textDecoration:'line-through'}}>{it.origPrice}</span>
                        </div>
                      : <div style={{fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:20,color:C.ink}}>{it.price}</div>}
                    <div style={{fontFamily:'Arial,sans-serif',fontSize:14,color:C.ink3,marginTop:4,lineHeight:1.4}}>{it.name}</div>
                  </div>
                  <MS name="close" size={20} color={C.ink3} style={{cursor:'pointer'}}/>
                </div>
                <div style={{display:'flex',gap:14,marginTop:10,fontFamily:'Arial,sans-serif',fontSize:13,color:C.ink3}}>
                  <span>Colour: <strong style={{color:C.ink}}>{it.colour}</strong></span>
                  <span style={{color:C.line}}>|</span>
                  <span>Size: <strong style={{color:C.ink}}>{it.size}</strong></span>
                  <span style={{color:C.line}}>|</span>
                  <span>Qty: <strong style={{color:C.ink}}>1</strong></span>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
        <button style={{display:'block',margin:'18px auto 0',background:'none',border:'none',cursor:'pointer',
          fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:13,letterSpacing:1,textTransform:'uppercase',color:C.ink3}}>
          Back to shopping
        </button>
      </div>
      {/* Summary */}
      <div style={{background:C.paper,borderRadius:12,border:`1px solid ${C.line}`,padding:'18px 16px'}}>
        <div style={{fontFamily:'Arial,sans-serif',fontSize:22,fontWeight:700,color:C.ink,marginBottom:16}}>Summary</div>
        {/* Promo code */}
        <div style={{background:C.field,borderRadius:8,display:'flex',alignItems:'center',gap:10,padding:'12px 14px',marginBottom:16}}>
          <MS name="local_offer" size={20} color={C.ink4}/>
          <span style={{fontFamily:'Arial,sans-serif',fontSize:15,color:C.ink4}}>Have a promo code?</span>
        </div>
        <div style={{height:1,background:C.line,marginBottom:14}}/>
        {[['Sub-total','£ 90.00'],['Delivery','£ 12.50']].map(([k,v])=>(
          <div key={k} style={{display:'flex',justifyContent:'space-between',marginBottom:10,
            fontFamily:'Arial,sans-serif',fontSize:16,color:C.ink}}>
            <strong>{k}</strong><span>{v}</span>
          </div>
        ))}
        <div style={{height:1,background:C.line,margin:'4px 0 14px'}}/>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <span style={{fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:26,color:C.primary}}>£102.50</span>
        </div>
      </div>
      {/* Checkout CTA */}
      <button onClick={onCheckout} style={{width:'100%',height:52,borderRadius:999,
        background:'transparent',color:C.primary,border:`2px solid ${C.primary}`,cursor:'pointer',
        fontFamily:'Arial,sans-serif',fontWeight:700,fontSize:16,letterSpacing:.5,textTransform:'uppercase'}}>
        Checkout
      </button>
    </div>
  );
}
window.Cart = Cart;
