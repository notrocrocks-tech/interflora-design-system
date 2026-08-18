/* @ds-bundle: {"format":3,"namespace":"HelmMobileUIKitDesignSystem_82e1d8","components":[],"sourceHashes":{"ui_kits/business-crm/Chat.jsx":"43a59fd33b49","ui_kits/business-crm/Clients.jsx":"17a315bcc310","ui_kits/business-crm/Dashboard.jsx":"79fe0d8c35b8","ui_kits/business-crm/Frame.jsx":"068953b78e5e","ui_kits/business-crm/NewTask.jsx":"d2519c86c913","ui_kits/icons.jsx":"9649c0db7cb8","ui_kits/interflora-shop/Cart.jsx":"dc90e8eabd5b","ui_kits/interflora-shop/Product.jsx":"d1488c083bab","ui_kits/interflora-shop/ShopFrame.jsx":"4e6f8f7f40c0","ui_kits/interflora-shop/SignIn.jsx":"4ee074f119c5","ui_kits/interflora-shop/Store.jsx":"b835f85138d6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HelmMobileUIKitDesignSystem_82e1d8 = window.HelmMobileUIKitDesignSystem_82e1d8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/business-crm/Chat.jsx
try { (() => {
/* Chat.jsx — message thread with composer. */

function Chat() {
  const C = window.HelmColors;
  const [msgs, setMsgs] = React.useState([{
    from: 'them',
    text: 'Sed ullamcorper malesuada proin libero nunc consequat interdum. A lacus vestibulum sed arcu non odio.'
  }, {
    from: 'me',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    meta: '29 Apr, 14:10'
  }, {
    from: 'them',
    text: 'I have a new feature for this project.',
    meta: '29 Apr, 14:12',
    name: true
  }]);
  const [val, setVal] = React.useState('');
  const scrollRef = React.useRef();
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs]);
  const send = () => {
    if (!val.trim()) return;
    setMsgs(m => [...m, {
      from: 'me',
      text: val,
      meta: 'Just now'
    }]);
    setVal('');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 16px',
      background: C.paper,
      boxShadow: '0 1px 0 rgba(0,0,0,.06)'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "arrow_back",
    size: 24
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/80?img=5",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 500,
      color: C.ink
    }
  }, "Jane Doe"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.ink3
    }
  }, "Online")), /*#__PURE__*/React.createElement(MS, {
    name: "more_vert",
    size: 22,
    color: C.ink3
  })), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, m.meta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: C.ink4,
      margin: '8px 2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", null, m.from === 'me' ? 'You' : 'Jane Doe'), /*#__PURE__*/React.createElement("span", null, m.meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
      maxWidth: '78%',
      background: m.from === 'them' ? '#56A8F5' : '#F7F8FA',
      color: m.from === 'them' ? '#fff' : C.ink3,
      border: m.from === 'me' ? `1px solid ${C.line}` : 'none',
      borderRadius: 14,
      padding: '12px 16px',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, m.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      background: C.paper,
      borderTop: `1px solid ${C.line}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: val,
    onChange: e => setVal(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "Type a message...",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: 16,
      color: C.ink,
      fontFamily: 'inherit',
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement(MS, {
    name: "attach_file",
    size: 22,
    color: C.ink3,
    style: {
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "mood",
    size: 22,
    color: C.ink3
  }))));
}
window.Chat = Chat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business-crm/Chat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/business-crm/Clients.jsx
try { (() => {
/* Clients.jsx — selectable client list with pagination. */

function Clients() {
  const C = window.HelmColors;
  const people = [{
    n: 'Lindsey Stroud',
    img: 47
  }, {
    n: 'George Fields',
    img: 12
  }, {
    n: 'Nicci Troiani',
    img: 32
  }, {
    n: 'Rebecca Moore',
    img: 45
  }, {
    n: 'Jones Dermot',
    img: 13
  }, {
    n: 'Jane Doe',
    img: 5
  }, {
    n: 'Martin Merces',
    img: 14
  }, {
    n: 'Franz Ferdinand',
    img: 33
  }, {
    n: 'Judith Williams',
    img: 44
  }, {
    n: 'Nikol Ricci',
    img: 49
  }, {
    n: 'John Smith',
    img: 51
  }, {
    n: 'Cindy Sherman',
    img: 48
  }];
  const [sel, setSel] = React.useState({});
  const toggle = i => setSel(s => ({
    ...s,
    [i]: !s[i]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 20px',
      borderBottom: `1px solid ${C.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      border: `2px solid ${C.ink4}`,
      borderRadius: 4,
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: C.ink4
    }
  }, "Name")), people.map((p, i) => {
    const on = sel[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '12px 20px',
        borderBottom: `1px solid ${C.line}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => toggle(i),
      style: {
        width: 20,
        height: 20,
        borderRadius: 4,
        cursor: 'pointer',
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        background: on ? C.primary : 'transparent',
        border: on ? 'none' : `2px solid ${C.ink4}`
      }
    }, on && /*#__PURE__*/React.createElement(MS, {
      name: "check",
      size: 15,
      color: "#fff",
      fill: 1
    })), /*#__PURE__*/React.createElement("img", {
      src: `https://i.pravatar.cc/80?img=${p.img}`,
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        objectFit: 'cover',
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 18,
        color: C.ink
      }
    }, p.n), /*#__PURE__*/React.createElement(MS, {
      name: "chat_bubble_outline",
      size: 22
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: C.ink3
    }
  }, "1-14 of 128"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "chevron_left",
    size: 22,
    color: C.ink4
  }), /*#__PURE__*/React.createElement(MS, {
    name: "chevron_right",
    size: 22,
    color: C.ink3
  })))));
}
window.Clients = Clients;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business-crm/Clients.jsx", error: String((e && e.message) || e) }); }

// ui_kits/business-crm/Dashboard.jsx
try { (() => {
/* Dashboard.jsx — Helm CRM dashboard: KPI tiles, calendar, charts, new clients. */

function StatTile({
  icon,
  value,
  label
}) {
  const C = window.HelmColors;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      border: `1px solid ${C.line}`,
      borderRadius: 8,
      padding: '18px 12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: icon,
    size: 38,
    fill: 1,
    color: "#C5C9CF"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      color: '#9AA0A8',
      lineHeight: 1.3
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#9AA0A8'
    }
  }, label));
}
function Card({
  children,
  pad = 20,
  style
}) {
  const C = window.HelmColors;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.paper,
      border: `1px solid ${C.line}`,
      borderRadius: 8,
      padding: pad,
      ...style
    }
  }, children);
}
function MiniCalendar() {
  const C = window.HelmColors;
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cells = [null, null, 1, 2, 3, 4, 5];
  const weeks = [[null, null, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19], [20, 21, 22, 23, 24, 25, 26], [27, 28, 29, 30, 31, null, null]];
  const [sel, setSel] = React.useState(2);
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 18,
      color: C.ink
    }
  }, "May ", /*#__PURE__*/React.createElement(MS, {
    name: "expand_more",
    size: 20,
    color: C.ink3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "chevron_left",
    size: 22,
    color: C.ink3
  }), /*#__PURE__*/React.createElement(MS, {
    name: "chevron_right",
    size: 22,
    color: C.ink3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      textAlign: 'center',
      rowGap: 10
    }
  }, days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      fontSize: 12,
      color: C.ink3
    }
  }, d)), weeks.flat().map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, n && /*#__PURE__*/React.createElement("span", {
    onClick: () => setSel(n),
    style: {
      width: 30,
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: 15,
      background: sel === n ? C.primary : 'transparent',
      color: sel === n ? '#fff' : C.ink
    }
  }, n)))));
}
function SalesChart() {
  const C = window.HelmColors;
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: C.ink,
      marginBottom: 14
    }
  }, "Sales"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 180",
    style: {
      width: '100%',
      display: 'block'
    }
  }, [0, 1, 2, 3, 4, 5, 6].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "0",
    x2: "270",
    y1: i * 26 + 8,
    y2: i * 26 + 8,
    stroke: C.line,
    strokeWidth: "1"
  })), ['$ 600', '$ 500', '$ 400', '$ 300', '$ 200', '$ 100', '0'].map((t, i) => /*#__PURE__*/React.createElement("text", {
    key: t,
    x: "274",
    y: i * 26 + 12,
    fontSize: "9",
    fill: C.ink3
  }, t)), /*#__PURE__*/React.createElement("path", {
    d: "M4,118 C36,86 52,150 86,150 C128,150 150,40 192,40 C228,40 250,96 268,116",
    fill: "none",
    stroke: C.primary,
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "192",
    cy: "40",
    r: "5",
    fill: C.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '58%',
      top: 6,
      transform: 'translateX(-50%)',
      border: `1px solid ${C.line}`,
      borderRadius: 4,
      padding: '2px 8px',
      fontSize: 11,
      color: C.ink,
      background: '#fff'
    }
  }, "$ 540"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: C.ink3,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "1 May"), /*#__PURE__*/React.createElement("span", null, "31 May"))));
}
function ActivityChart() {
  const C = window.HelmColors;
  const data = [60, 42, 78, 68, 90, 38, 28];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: C.ink,
      textAlign: 'center',
      marginBottom: 18
    }
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height: 110,
      gap: 8
    }
  }, data.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: h,
      background: C.primary,
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.ink3
    }
  }, days[i])))));
}
function TopStates() {
  const C = window.HelmColors;
  const rows = [{
    st: 'CA',
    bars: [[64, C.primary], [28, '#1976D2']]
  }, {
    st: 'IL',
    bars: [[72, C.primary], [40, '#1976D2']]
  }, {
    st: 'NY',
    bars: [[50, C.primary], [88, '#1976D2']]
  }];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: C.ink,
      marginBottom: 18
    }
  }, "Top States"), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.st,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      fontSize: 13,
      color: C.ink3
    }
  }, r.st), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, r.bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 8,
      width: `${b[0]}%`,
      background: b[1],
      borderRadius: 2
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      color: C.ink4,
      paddingLeft: 32
    }
  }, ['0', '1000', '2000', '3000', '4000'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))));
}
function NewClients() {
  const C = window.HelmColors;
  const people = [{
    n: 'Nicci Troiani',
    c: 'Chicago, IL',
    img: 32
  }, {
    n: 'George Fields',
    c: 'New York, NY',
    img: 12
  }, {
    n: 'Jones Dermot',
    c: 'San Francisco, CA',
    img: 13
  }, {
    n: 'Jane Doe',
    c: 'New York, NY',
    img: 5
  }];
  return /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: C.ink,
      padding: '0 20px 14px'
    }
  }, "New Clients"), people.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 20px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://i.pravatar.cc/80?img=${p.img}`,
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: C.ink
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.ink3
    }
  }, p.c)), /*#__PURE__*/React.createElement(MS, {
    name: "more_vert",
    size: 20,
    color: C.ink3
  }))));
}
function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "group",
    value: "128",
    label: "Clients"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "assignment_turned_in",
    value: "32",
    label: "Completed tasks"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "notifications",
    value: "2",
    label: "Notifications"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "report",
    value: "4",
    label: "Reports"
  })), /*#__PURE__*/React.createElement(MiniCalendar, null), /*#__PURE__*/React.createElement(SalesChart, null), /*#__PURE__*/React.createElement(ActivityChart, null), /*#__PURE__*/React.createElement(TopStates, null), /*#__PURE__*/React.createElement(NewClients, null));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business-crm/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/business-crm/Frame.jsx
try { (() => {
/* Frame.jsx — Android phone shell, app bar, navigation drawer, bottom system nav.
   Shared chrome for the Helm business/CRM UI kit. Material idiom. */

const C = {
  primary: '#9B00FE',
  primaryPress: '#8000d4',
  soft: '#E9CBFF',
  ink: '#000000',
  ink2: '#4F4F4F',
  ink3: '#6D6D6D',
  ink4: '#BDBDBD',
  paper: '#FFFFFF',
  bg: '#F6F6F6',
  field: '#F6F6F6',
  line: '#E6E6E6',
  icon: '#000000',
  gold: '#CAAD59',
  green: '#04FF7E',
  yellow: '#FEDC00'
};
window.HelmColors = C;
/* MS is provided by ../icons.jsx loaded before Frame.jsx */

/* Android status bar (top) + 3-button system nav (bottom black bar) */
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      background: '#ECEDEF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 9,
      padding: '0 12px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: '#9AA0A6'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: '#9AA0A6',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '9px solid #9AA0A6'
    }
  }));
}
function SystemNav() {
  const g = {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    display: 'flex'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderTop: '9px solid transparent',
      borderBottom: '9px solid transparent',
      borderRight: '14px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      border: '2px solid #fff',
      borderRadius: '50%'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      background: '#fff',
      borderRadius: 2
    }
  })));
}
function AppBar({
  title,
  onMenu,
  avatar,
  onAction,
  actionIcon = 'more_vert',
  filter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 16px',
      height: 64,
      background: C.paper,
      boxShadow: '0 1px 0 rgba(0,0,0,.06)',
      flex: 'none',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "menu",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      color: C.ink,
      flex: 1
    }
  }, title), filter && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "filter_list"
  })), avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: actionIcon
  })));
}
window.AppBar = AppBar;
const DRAWER = [{
  id: 'dashboard',
  icon: 'dashboard',
  label: 'Dashboard',
  fill: 1
}, {
  id: 'clients',
  icon: 'group',
  label: 'Clients',
  fill: 1
}, {
  id: 'messages',
  icon: 'chat_bubble',
  label: 'Messages',
  fill: 1
}, {
  id: 'schedule',
  icon: 'event',
  label: 'Schedule',
  fill: 0
}, {
  id: 'settings',
  icon: 'settings',
  label: 'Settings',
  fill: 0
}];
function Drawer({
  open,
  active,
  onClose,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .2s',
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 286,
      background: C.paper,
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform .25s cubic-bezier(.4,0,.2,1)',
      zIndex: 11,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: open ? '2px 0 16px rgba(0,0,0,.18)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/120?img=47",
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: C.ink
    }
  }, "Lindsey Stroud"), /*#__PURE__*/React.createElement(MS, {
    name: "expand_more",
    size: 22,
    color: C.ink3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.line,
      margin: '0 0 8px'
    }
  }), DRAWER.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        padding: '14px 22px',
        margin: '2px 10px',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        background: on ? C.soft : 'transparent',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(MS, {
      name: it.icon,
      fill: it.fill,
      color: on ? C.primary : C.icon
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        color: on ? C.primary : C.ink
      }
    }, it.label));
  })));
}
window.Drawer = Drawer;

/* The phone device bezel + scaffold. children = current screen. */
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      height: 760,
      background: '#000',
      borderRadius: 38,
      padding: 10,
      boxShadow: '0 30px 70px rgba(16,24,40,.30)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 28,
      overflow: 'hidden',
      background: C.bg,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, children), /*#__PURE__*/React.createElement(SystemNav, null)));
}
window.Phone = Phone;
window.HelmDrawerItems = DRAWER;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business-crm/Frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/business-crm/NewTask.jsx
try { (() => {
/* NewTask.jsx — "Create New Task" modal bottom-anchored dialog. */

function Field({
  label,
  value,
  placeholder,
  trailing
}) {
  const C = window.HelmColors;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.field,
      borderBottom: `1px solid ${C.ink4}`,
      borderRadius: '6px 6px 0 0',
      padding: '10px 14px 9px',
      display: 'flex',
      alignItems: 'center',
      minHeight: 54,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.ink3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: value ? C.ink : C.ink4,
      marginTop: label ? 2 : 0
    }
  }, value || placeholder)), trailing && /*#__PURE__*/React.createElement(MS, {
    name: trailing,
    size: 22,
    color: C.ink3
  }));
}
function NewTaskModal({
  open,
  onClose
}) {
  const C = window.HelmColors;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .2s',
      zIndex: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 16,
      right: 16,
      background: C.paper,
      borderRadius: 10,
      marginTop: 30,
      padding: '26px 22px 18px',
      zIndex: 21,
      boxShadow: '0 14px 36px rgba(16,24,40,.25)',
      transform: open ? 'translateY(0)' : 'translateY(-16px)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'all .22s cubic-bezier(.4,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 500,
      color: C.ink,
      marginBottom: 22
    }
  }, "Create New Task"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "List",
    value: "Tasks",
    trailing: "expand_more"
  }), /*#__PURE__*/React.createElement(Field, {
    placeholder: "Task name"
  }), /*#__PURE__*/React.createElement(Field, {
    placeholder: "Description"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.field,
      borderBottom: `1px solid ${C.ink4}`,
      borderRadius: '6px 6px 0 0',
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 54,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/60?img=47",
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.ink3
    }
  }, "Assigned to"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: C.ink
    }
  }, "Lindsey Stroud")), /*#__PURE__*/React.createElement(MS, {
    name: "expand_more",
    size: 22,
    color: C.ink3
  })), /*#__PURE__*/React.createElement(Field, {
    placeholder: "Close date",
    trailing: "calendar_today"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 30,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: C.ink3
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: C.primary
    }
  }, "Create"))));
}
window.NewTaskModal = NewTaskModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business-crm/NewTask.jsx", error: String((e && e.message) || e) }); }

// ui_kits/icons.jsx
try { (() => {
/* icons.jsx — inline Material Design icon paths (Apache-2.0, Google Material Icons).
   Replaces the ligature webfont so icons render in any capture / PDF / offline.
   Exposes <MS name size fill color/> with the same API used across the kits. */

const ICON_PATHS = {
  menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
  more_vert: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
  arrow_back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  chevron_left: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
  chevron_right: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  expand_more: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
  close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  add: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  group: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  assignment_turned_in: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8zm2-13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z',
  notifications: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
  report: 'M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z',
  chat_bubble: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
  chat_bubble_outline: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z',
  event: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
  calendar_today: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z',
  settings: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
  dashboard: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
  attach_file: 'M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z',
  mood: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
  filter_list: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
  search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
  visibility: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
  favorite: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  favorite_border: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z',
  shopping_cart: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
  shopping_basket: 'M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
  home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  person: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  person_add: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  track_changes: 'M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z',
  help: 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z',
  star: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  local_offer: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z'
};

/* fill flag swaps outline↔filled for the two icons that have both variants */
function MS({
  name,
  size = 24,
  fill = 0,
  color,
  style
}) {
  let key = name;
  if (fill === 0 && name === 'favorite') key = 'favorite_border';
  if (fill === 0 && name === 'chat_bubble') key = 'chat_bubble_outline';
  const d = ICON_PATHS[key] || ICON_PATHS[name] || ICON_PATHS.help;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    style: {
      display: 'inline-block',
      flex: 'none',
      fill: color || '#5A5A5A',
      verticalAlign: 'middle',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
window.MS = MS;
window.ICON_PATHS = ICON_PATHS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/interflora-shop/Cart.jsx
try { (() => {
/* Cart.jsx — Interflora shopping cart + order summary */

function Cart({
  items,
  onBack,
  onCheckout
}) {
  const C = window.IFC;
  const cartItems = items && items.length ? items : [{
    name: 'Summer Bliss Bouquet',
    price: '£ 52.00',
    img: 'https://picsum.photos/seed/flowers1/120/120',
    colour: 'Pink',
    size: 'M'
  }, {
    name: 'Golden Hour',
    price: '£ 38.00',
    origPrice: '£ 64.00',
    sale: true,
    img: 'https://picsum.photos/seed/flowers3/120/120',
    colour: 'Yellow',
    size: 'S'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.paper,
      borderRadius: 12,
      border: `1px solid ${C.line}`,
      padding: '18px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 20,
      fontWeight: 700,
      color: C.ink,
      marginBottom: 14
    }
  }, cartItems.length, " Items"), cartItems.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.line,
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    style: {
      width: 80,
      height: 80,
      objectFit: 'cover',
      borderRadius: 8,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, it.sale ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 20,
      color: C.red
    }
  }, it.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 14,
      color: C.ink4,
      textDecoration: 'line-through'
    }
  }, it.origPrice)) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 20,
      color: C.ink
    }
  }, it.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 14,
      color: C.ink3,
      marginTop: 4,
      lineHeight: 1.4
    }
  }, it.name)), /*#__PURE__*/React.createElement(MS, {
    name: "close",
    size: 20,
    color: C.ink3,
    style: {
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 10,
      fontFamily: 'Arial,sans-serif',
      fontSize: 13,
      color: C.ink3
    }
  }, /*#__PURE__*/React.createElement("span", null, "Colour: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.ink
    }
  }, it.colour)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.line
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, "Size: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.ink
    }
  }, it.size)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.line
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, "Qty: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.ink
    }
  }, "1"))))))), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'block',
      margin: '18px auto 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: C.ink3
    }
  }, "Back to shopping")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.paper,
      borderRadius: 12,
      border: `1px solid ${C.line}`,
      padding: '18px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 22,
      fontWeight: 700,
      color: C.ink,
      marginBottom: 16
    }
  }, "Summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.field,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "local_offer",
    size: 20,
    color: C.ink4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 15,
      color: C.ink4
    }
  }, "Have a promo code?")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.line,
      marginBottom: 14
    }
  }), [['Sub-total', '£ 90.00'], ['Delivery', '£ 12.50']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 10,
      fontFamily: 'Arial,sans-serif',
      fontSize: 16,
      color: C.ink
    }
  }, /*#__PURE__*/React.createElement("strong", null, k), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.line,
      margin: '4px 0 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 26,
      color: C.primary
    }
  }, "\xA3102.50"))), /*#__PURE__*/React.createElement("button", {
    onClick: onCheckout,
    style: {
      width: '100%',
      height: 52,
      borderRadius: 999,
      background: 'transparent',
      color: C.primary,
      border: `2px solid ${C.primary}`,
      cursor: 'pointer',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: .5,
      textTransform: 'uppercase'
    }
  }, "Checkout"));
}
window.Cart = Cart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/interflora-shop/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/interflora-shop/Product.jsx
try { (() => {
/* Product.jsx — Interflora product detail: hero image, size/colour, add to bag */

function ProductDetail({
  product,
  onBack,
  onAddToCart
}) {
  const C = window.IFC;
  const [size, setSize] = React.useState('M');
  const [colour, setColour] = React.useState(0);
  const [fav, setFav] = React.useState(false);
  const p = product || {
    name: 'Summer Bliss Bouquet',
    price: '£ 44.99',
    img: 'https://picsum.photos/seed/flowers1/400/300',
    swatches: ['#FFCBDB', '#FF0050']
  };
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.paper,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    style: {
      width: '100%',
      height: 300,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      background: 'rgba(255,255,255,.85)',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '50%',
      width: 38,
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "arrow_back",
    size: 22,
    color: C.ink
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFav(v => !v),
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      background: fav ? C.primary : 'rgba(255,255,255,.85)',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '50%',
      width: 38,
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "favorite",
    fill: fav ? 1 : 0,
    size: 22,
    color: fav ? '#fff' : C.ink3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '10px 16px',
      background: C.bg,
      overflowX: 'auto'
    }
  }, [p.img, p.img, p.img].map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    style: {
      width: 72,
      height: 64,
      objectFit: 'cover',
      borderRadius: 6,
      flex: 'none',
      border: i === 0 ? `2px solid ${C.primary}` : `1px solid ${C.line}`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 26,
      fontWeight: 700,
      color: C.ink
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 24,
      fontWeight: 700,
      color: C.ink
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(s => /*#__PURE__*/React.createElement(MS, {
    key: s,
    name: "star",
    size: 18,
    color: s <= 4 ? C.gold : C.ink4
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 14,
      color: C.ink3
    }
  }, "32 reviews"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color: C.primary,
      letterSpacing: .5,
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Write a review")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.line
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 16,
      color: C.ink3
    }
  }, "Size:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSize(s),
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 13,
      background: size === s ? C.primary : C.bg,
      color: size === s ? '#fff' : C.ink
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 16,
      color: C.ink3
    }
  }, "Colour:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, p.swatches.map((sw, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => setColour(i),
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: sw,
      cursor: 'pointer',
      border: colour === i ? `3px solid ${C.primary}` : '2px solid rgba(0,0,0,.15)',
      display: 'inline-block'
    }
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: onAddToCart,
    style: {
      width: '100%',
      height: 52,
      borderRadius: 999,
      background: C.primary,
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: .5,
      textTransform: 'uppercase',
      marginTop: 8
    }
  }, "Add to bag")));
}
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/interflora-shop/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/interflora-shop/ShopFrame.jsx
try { (() => {
/* ShopFrame.jsx — Interflora shop phone shell, app bar, and navigation drawer */

const IFC = {
  primary: '#9B00FE',
  primaryPress: '#8000d4',
  soft: '#E9CBFF',
  gold: '#CAAD59',
  red: '#FF0050',
  green: '#04FF7E',
  yellow: '#FEDC00',
  pink: '#FFCBDB',
  ink: '#000000',
  ink2: '#4F4F4F',
  ink3: '#6D6D6D',
  ink4: '#BDBDBD',
  paper: '#FFFFFF',
  bg: '#F6F6F6',
  field: '#F6F6F6',
  line: '#E6E6E6',
  icon: '#000000'
};
window.IFC = IFC;

/* MS is loaded from ../icons.jsx */

function ShopStatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      background: '#ECEDEF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 9,
      padding: '0 12px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: '#9AA0A6'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      background: '#9AA0A6',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '9px solid #9AA0A6'
    }
  }));
}
function ShopSystemNav() {
  const g = {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    display: 'flex'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderTop: '9px solid transparent',
      borderBottom: '9px solid transparent',
      borderRight: '14px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      border: '2px solid #fff',
      borderRadius: '50%'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: g
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      background: '#fff',
      borderRadius: 2
    }
  })));
}
function ShopAppBar({
  title,
  onMenu,
  avatar,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 16px',
      height: 64,
      background: IFC.paper,
      boxShadow: '0 1px 0 rgba(0,0,0,.07)',
      flex: 'none',
      zIndex: 2,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "menu",
    size: 24,
    color: IFC.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'Arial,sans-serif',
      color: IFC.ink,
      flex: 1
    }
  }, title), avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), trailing);
}
window.ShopAppBar = ShopAppBar;
const SHOP_NAV = [{
  id: 'store',
  icon: 'home',
  label: 'Home',
  fill: 1
}, {
  id: 'shop',
  icon: 'shopping_basket',
  label: 'Shop',
  fill: 1
}, {
  id: 'track',
  icon: 'track_changes',
  label: 'Track',
  fill: 0
}, {
  id: 'faq',
  icon: 'help',
  label: 'FAQ',
  fill: 1
}, {
  id: 'refer',
  icon: 'person_add',
  label: 'Refer a friend',
  fill: 0
}, {
  id: 'cart',
  icon: 'shopping_cart',
  label: 'Cart',
  fill: 1
}, {
  id: 'favs',
  icon: 'favorite',
  label: 'Favourites',
  fill: 1
}];
function ShopDrawer({
  open,
  active,
  onClose,
  onNavigate,
  cartCount
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .2s',
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 290,
      background: IFC.paper,
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform .25s cubic-bezier(.4,0,.2,1)',
      zIndex: 11,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: open ? '4px 0 20px rgba(0,0,0,.18)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/120?img=47",
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      fontFamily: 'Arial,sans-serif',
      color: IFC.ink
    }
  }, "Lindsey Stroud"), /*#__PURE__*/React.createElement(MS, {
    name: "expand_more",
    size: 22,
    color: IFC.ink3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: IFC.line,
      margin: '0 0 8px'
    }
  }), SHOP_NAV.map(it => {
    const on = it.id === active;
    const isCart = it.id === 'cart';
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        padding: '13px 22px',
        margin: '2px 10px',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        background: on ? IFC.soft : 'transparent',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(MS, {
      name: it.icon,
      fill: it.fill,
      color: on ? IFC.primary : IFC.icon
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontFamily: 'Arial,sans-serif',
        color: on ? IFC.primary : IFC.ink,
        flex: 1
      }
    }, it.label), isCart && cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        background: IFC.primary,
        color: '#fff',
        borderRadius: '50%',
        width: 22,
        height: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 700,
        fontFamily: 'Arial,sans-serif'
      }
    }, cartCount));
  })));
}
window.ShopDrawer = ShopDrawer;
function ShopPhone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      height: 760,
      background: '#000',
      borderRadius: 38,
      padding: 10,
      boxShadow: '0 30px 70px rgba(0,0,0,.32)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 28,
      overflow: 'hidden',
      background: IFC.bg,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ShopStatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, children), /*#__PURE__*/React.createElement(ShopSystemNav, null)));
}
window.ShopPhone = ShopPhone;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/interflora-shop/ShopFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/interflora-shop/SignIn.jsx
try { (() => {
/* SignIn.jsx — Interflora account sign-in + sign-up tabs */

function SignIn({
  onSignIn
}) {
  const C = window.IFC;
  const [tab, setTab] = React.useState('signin');
  const [showPw, setShowPw] = React.useState(false);
  const Field = ({
    label,
    type,
    trailing,
    onTrailing
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.field,
      borderRadius: '6px 6px 0 0',
      borderBottom: `1px solid ${C.ink4}`,
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minHeight: 56,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 13,
      color: C.ink3
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: trailing && !showPw ? 'password' : type || 'text',
    placeholder: label,
    style: {
      background: 'none',
      border: 'none',
      outline: 'none',
      width: '100%',
      fontFamily: 'Arial,sans-serif',
      fontSize: 17,
      color: C.ink,
      marginTop: 2
    }
  })), trailing && /*#__PURE__*/React.createElement("button", {
    onClick: onTrailing,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "visibility",
    size: 22,
    color: C.ink3
  })));
  const SocialBtn = ({
    name,
    icon
  }) => /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      height: 52,
      width: '100%',
      border: `1px solid ${C.line}`,
      borderRadius: 8,
      background: C.paper,
      cursor: 'pointer',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: .5,
      textTransform: 'uppercase',
      color: C.ink3
    }
  }, icon, /*#__PURE__*/React.createElement("span", null, name));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: C.paper,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: `1px solid ${C.line}`
    }
  }, ['signin', 'signup'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      flex: 1,
      height: 52,
      border: 'none',
      cursor: 'pointer',
      background: 'none',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: tab === t ? C.primary : C.ink3,
      borderBottom: tab === t ? `2px solid ${C.primary}` : '2px solid transparent'
    }
  }, t === 'signin' ? 'Sign in' : 'Sign up'))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 22,
      fontWeight: 700,
      color: C.ink,
      textAlign: 'center'
    }
  }, tab === 'signin' ? 'Sign in with email' : 'Create an account'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email Address",
    type: "email"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Field, {
    label: "Password",
    trailing: true,
    onTrailing: () => setShowPw(v => !v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 12,
      color: C.ink3,
      marginTop: 6,
      paddingLeft: 2
    }
  }, "Password must contain at least 6 characters"))), /*#__PURE__*/React.createElement("button", {
    onClick: onSignIn,
    style: {
      height: 52,
      borderRadius: 999,
      background: C.primary,
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: .5,
      textTransform: 'uppercase'
    }
  }, tab === 'signin' ? 'Sign in' : 'Create account'), tab === 'signin' && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: .5,
      textTransform: 'uppercase',
      color: C.ink4,
      cursor: 'pointer'
    }
  }, "Forgot password?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: C.line
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 13,
      color: C.ink4
    }
  }, "OR"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: C.line
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 18,
      fontWeight: 700,
      color: C.ink,
      textAlign: 'center'
    }
  }, "Sign in with\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SocialBtn, {
    name: "Facebook",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      fill: "#1877F2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"
    }))
  }), /*#__PURE__*/React.createElement(SocialBtn, {
    name: "Google",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#4285F4",
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#34A853",
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FBBC05",
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA4335",
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    }))
  }), /*#__PURE__*/React.createElement(SocialBtn, {
    name: "Twitter",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      fill: "#1DA1F2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59l-.05-.02z"
    }))
  }))));
}
window.SignIn = SignIn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/interflora-shop/SignIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/interflora-shop/Store.jsx
try { (() => {
/* Store.jsx — Interflora flower storefront: tabbed catalog + product cards */

const TABS = ['NEW IN', 'CLOTHING', 'SHOES', 'ACC'];
const PRODUCTS = [{
  id: 1,
  name: 'Summer Bliss Bouquet',
  price: '£ 44.99',
  img: 'https://picsum.photos/seed/flowers1/400/300',
  swatches: ['#FFCBDB', '#FF0050'],
  fav: false
}, {
  id: 2,
  name: 'Woodland Romance',
  price: '£ 59.99',
  img: 'https://picsum.photos/seed/flowers2/400/300',
  swatches: ['#CBFFE4', '#E9CBFF'],
  fav: true
}, {
  id: 3,
  name: 'Golden Hour',
  price: '£ 38.00',
  img: 'https://picsum.photos/seed/flowers3/400/300',
  swatches: ['#FEDC00', '#FF842B'],
  fav: false
}];
function Store({
  onProduct
}) {
  const C = window.IFC;
  const [tab, setTab] = React.useState(0);
  const [favs, setFavs] = React.useState({
    2: true
  });
  const toggleFav = (id, e) => {
    e.stopPropagation();
    setFavs(f => ({
      ...f,
      [id]: !f[id]
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      background: C.paper,
      borderBottom: `1px solid ${C.line}`,
      overflowX: 'auto'
    }
  }, TABS.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(i),
    style: {
      flex: 'none',
      padding: '14px 18px',
      border: 'none',
      cursor: 'pointer',
      background: 'none',
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: tab === i ? C.primary : C.ink3,
      borderBottom: tab === i ? `2px solid ${C.primary}` : '2px solid transparent'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      background: C.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "filter_list",
    size: 20,
    color: C.ink3
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 15,
      color: C.ink3
    }
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontFamily: 'Arial,sans-serif',
      color: C.ink3
    }
  }, "Sort by: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.primary,
      fontWeight: 700
    }
  }, "Newest"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px',
      fontFamily: 'Arial,sans-serif',
      fontSize: 13,
      color: C.ink4
    }
  }, "128 items found"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onProduct && onProduct(p),
    style: {
      background: C.paper,
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0,0,0,.07)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    style: {
      width: '100%',
      height: 220,
      objectFit: 'cover',
      display: 'block'
    },
    onError: e => {
      e.target.style.background = '#E9CBFF';
      e.target.style.height = '220px';
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: e => toggleFav(p.id, e),
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: favs[p.id] ? C.primary : 'rgba(255,255,255,.85)',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '50%',
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MS, {
    name: "favorite",
    fill: favs[p.id] ? 1 : 0,
    size: 20,
    color: favs[p.id] ? '#fff' : C.ink3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontSize: 16,
      color: C.ink
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Arial,sans-serif',
      fontWeight: 700,
      fontSize: 18,
      color: C.ink
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, p.swatches.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: s,
      border: '1px solid rgba(0,0,0,.12)',
      display: 'inline-block'
    }
  })))))))));
}
window.Store = Store;
window.STORE_PRODUCTS = PRODUCTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/interflora-shop/Store.jsx", error: String((e && e.message) || e) }); }

})();
