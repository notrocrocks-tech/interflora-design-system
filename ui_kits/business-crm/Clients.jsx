/* Clients.jsx — selectable client list with pagination. */

function Clients() {
  const C = window.HelmColors;
  const people = [
    {n:'Lindsey Stroud', img:47},{n:'George Fields', img:12},{n:'Nicci Troiani', img:32},
    {n:'Rebecca Moore', img:45},{n:'Jones Dermot', img:13},{n:'Jane Doe', img:5},
    {n:'Martin Merces', img:14},{n:'Franz Ferdinand', img:33},{n:'Judith Williams', img:44},
    {n:'Nikol Ricci', img:49},{n:'John Smith', img:51},{n:'Cindy Sherman', img:48},
  ];
  const [sel, setSel] = React.useState({});
  const toggle = i => setSel(s => ({...s, [i]: !s[i]}));
  return (
    <div style={{flex:1, display:'flex', flexDirection:'column', background:C.paper}}>
      <div style={{flex:1, overflowY:'auto'}}>
        <div style={{display:'flex', alignItems:'center', gap:16, padding:'12px 20px', borderBottom:`1px solid ${C.line}`}}>
          <span style={{width:20,height:20,border:`2px solid ${C.ink4}`,borderRadius:4,boxSizing:'border-box'}}/>
          <span style={{fontSize:18, color:C.ink4}}>Name</span>
        </div>
        {people.map((p,i)=>{
          const on = sel[i];
          return (
            <div key={i} style={{display:'flex', alignItems:'center', gap:16, padding:'12px 20px', borderBottom:`1px solid ${C.line}`}}>
              <span onClick={()=>toggle(i)} style={{width:20,height:20,borderRadius:4,cursor:'pointer',flex:'none',
                display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',
                background:on?C.primary:'transparent', border:on?'none':`2px solid ${C.ink4}`}}>
                {on && <MS name="check" size={15} color="#fff" fill={1}/>}
              </span>
              <img src={`https://i.pravatar.cc/80?img=${p.img}`} style={{width:42,height:42,borderRadius:'50%',objectFit:'cover',flex:'none'}}/>
              <span style={{flex:1, fontSize:18, color:C.ink}}>{p.n}</span>
              <MS name="chat_bubble_outline" size={22}/>
            </div>
          );
        })}
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:30, padding:'18px 0'}}>
          <span style={{fontSize:15, color:C.ink3}}>1-14 of 128</span>
          <div style={{display:'flex', gap:18}}>
            <MS name="chevron_left" size={22} color={C.ink4}/>
            <MS name="chevron_right" size={22} color={C.ink3}/>
          </div>
        </div>
      </div>
    </div>
  );
}
window.Clients = Clients;
