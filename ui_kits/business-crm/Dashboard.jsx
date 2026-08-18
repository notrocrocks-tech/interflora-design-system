/* Dashboard.jsx — Helm CRM dashboard: KPI tiles, calendar, charts, new clients. */

function StatTile({ icon, value, label }) {
  const C = window.HelmColors;
  return (
    <div style={{background:C.bg, border:`1px solid ${C.line}`, borderRadius:8, padding:'18px 12px',
      display:'flex', flexDirection:'column', alignItems:'center', gap:2}}>
      <MS name={icon} size={38} fill={1} color="#C5C9CF"/>
      <div style={{fontSize:28, fontWeight:500, color:'#9AA0A8', lineHeight:1.3}}>{value}</div>
      <div style={{fontSize:13, color:'#9AA0A8'}}>{label}</div>
    </div>
  );
}

function Card({ children, pad=20, style }) {
  const C = window.HelmColors;
  return <div style={{background:C.paper, border:`1px solid ${C.line}`, borderRadius:8, padding:pad, ...style}}>{children}</div>;
}

function MiniCalendar() {
  const C = window.HelmColors;
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const cells = [null,null,1,2,3,4,5];
  const weeks = [[null,null,1,2,3,4,5],[6,7,8,9,10,11,12],[13,14,15,16,17,18,19],[20,21,22,23,24,25,26],[27,28,29,30,31,null,null]];
  const [sel,setSel] = React.useState(2);
  return (
    <Card>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16}}>
        <div style={{display:'flex',alignItems:'center',gap:6,fontSize:18,color:C.ink}}>May <MS name="expand_more" size={20} color={C.ink3}/></div>
        <div style={{display:'flex',gap:14}}>
          <MS name="chevron_left" size={22} color={C.ink3}/><MS name="chevron_right" size={22} color={C.ink3}/>
        </div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(7,1fr)', textAlign:'center', rowGap:10}}>
        {days.map(d=><div key={d} style={{fontSize:12,color:C.ink3}}>{d}</div>)}
        {weeks.flat().map((n,i)=>(
          <div key={i} style={{height:30,display:'flex',alignItems:'center',justifyContent:'center'}}>
            {n && <span onClick={()=>setSel(n)} style={{width:30,height:30,display:'flex',alignItems:'center',justifyContent:'center',
              borderRadius:'50%', cursor:'pointer', fontSize:15,
              background:sel===n?C.primary:'transparent', color:sel===n?'#fff':C.ink}}>{n}</span>}
          </div>
        ))}
      </div>
    </Card>
  );
}

function SalesChart() {
  const C = window.HelmColors;
  return (
    <Card>
      <div style={{fontSize:22, fontWeight:500, color:C.ink, marginBottom:14}}>Sales</div>
      <div style={{position:'relative'}}>
        <svg viewBox="0 0 300 180" style={{width:'100%', display:'block'}}>
          {[0,1,2,3,4,5,6].map(i=>(
            <line key={i} x1="0" x2="270" y1={i*26+8} y2={i*26+8} stroke={C.line} strokeWidth="1"/>
          ))}
          {['$ 600','$ 500','$ 400','$ 300','$ 200','$ 100','0'].map((t,i)=>(
            <text key={t} x="274" y={i*26+12} fontSize="9" fill={C.ink3}>{t}</text>
          ))}
          <path d="M4,118 C36,86 52,150 86,150 C128,150 150,40 192,40 C228,40 250,96 268,116"
            fill="none" stroke={C.primary} strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="192" cy="40" r="5" fill={C.primary}/>
        </svg>
        <div style={{position:'absolute', left:'58%', top:6, transform:'translateX(-50%)',
          border:`1px solid ${C.line}`, borderRadius:4, padding:'2px 8px', fontSize:11, color:C.ink, background:'#fff'}}>$ 540</div>
        <div style={{display:'flex', justifyContent:'space-between', fontSize:12, color:C.ink3, marginTop:6}}>
          <span>1 May</span><span>31 May</span>
        </div>
      </div>
    </Card>
  );
}

function ActivityChart() {
  const C = window.HelmColors;
  const data = [60,42,78,68,90,38,28];
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  return (
    <Card>
      <div style={{fontSize:18, fontWeight:500, color:C.ink, textAlign:'center', marginBottom:18}}>Activity</div>
      <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', height:110, gap:8}}>
        {data.map((h,i)=>(
          <div key={i} style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:8}}>
            <div style={{width:5, height:h, background:C.primary, borderRadius:3}}/>
            <span style={{fontSize:12, color:C.ink3}}>{days[i]}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TopStates() {
  const C = window.HelmColors;
  const rows = [
    {st:'CA', bars:[[64,C.primary],[28,'#1976D2']]},
    {st:'IL', bars:[[72,C.primary],[40,'#1976D2']]},
    {st:'NY', bars:[[50,C.primary],[88,'#1976D2']]},
  ];
  return (
    <Card>
      <div style={{fontSize:22, fontWeight:500, color:C.ink, marginBottom:18}}>Top States</div>
      {rows.map(r=>(
        <div key={r.st} style={{display:'flex', alignItems:'center', gap:12, marginBottom:14}}>
          <span style={{width:20, fontSize:13, color:C.ink3}}>{r.st}</span>
          <div style={{flex:1, display:'flex', flexDirection:'column', gap:4}}>
            {r.bars.map((b,i)=><div key={i} style={{height:8, width:`${b[0]}%`, background:b[1], borderRadius:2}}/>)}
          </div>
        </div>
      ))}
      <div style={{display:'flex', justifyContent:'space-between', fontSize:11, color:C.ink4, paddingLeft:32}}>
        {['0','1000','2000','3000','4000'].map(t=><span key={t}>{t}</span>)}
      </div>
    </Card>
  );
}

function NewClients() {
  const C = window.HelmColors;
  const people = [
    {n:'Nicci Troiani', c:'Chicago, IL', img:32},
    {n:'George Fields', c:'New York, NY', img:12},
    {n:'Jones Dermot', c:'San Francisco, CA', img:13},
    {n:'Jane Doe', c:'New York, NY', img:5},
  ];
  return (
    <Card pad={0} style={{padding:'20px 0'}}>
      <div style={{fontSize:22, fontWeight:500, color:C.ink, padding:'0 20px 14px'}}>New Clients</div>
      {people.map((p,i)=>(
        <div key={i} style={{display:'flex', alignItems:'center', gap:14, padding:'10px 20px'}}>
          <img src={`https://i.pravatar.cc/80?img=${p.img}`} style={{width:42,height:42,borderRadius:'50%',objectFit:'cover'}}/>
          <div style={{flex:1}}>
            <div style={{fontSize:16, color:C.ink}}>{p.n}</div>
            <div style={{fontSize:13, color:C.ink3}}>{p.c}</div>
          </div>
          <MS name="more_vert" size={20} color={C.ink3}/>
        </div>
      ))}
    </Card>
  );
}

function Dashboard() {
  return (
    <div style={{flex:1, overflowY:'auto', padding:16, display:'flex', flexDirection:'column', gap:16}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
        <StatTile icon="group" value="128" label="Clients"/>
        <StatTile icon="assignment_turned_in" value="32" label="Completed tasks"/>
        <StatTile icon="notifications" value="2" label="Notifications"/>
        <StatTile icon="report" value="4" label="Reports"/>
      </div>
      <MiniCalendar/>
      <SalesChart/>
      <ActivityChart/>
      <TopStates/>
      <NewClients/>
    </div>
  );
}
window.Dashboard = Dashboard;
