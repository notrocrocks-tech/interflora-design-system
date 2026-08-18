# Business / CRM UI Kit — Interflora brand

Interactive mobile app prototype (Android shell). Interflora brand colours + Arial.

## Screens
- **Dashboard** — KPI stat tiles, interactive month calendar (tap a day), line sales chart, activity bars, top states, new clients list.
- **Clients** — Selectable list (tap checkboxes), avatar + name, paginated.
- **Messages** — Live chat thread: type and send messages, incoming/outgoing bubbles.
- **New Task** — Modal dialog (tap the FAB `+` button on Dashboard or Clients): form fields with picker.
- **Schedule / Settings** — Placeholder screens (tap via the sidebar drawer).

## Usage
Open `index.html`. Use the **hamburger menu** to navigate between screens. Tap the **purple FAB (+)** to open the New Task modal. Tap a client name or message in the chat thread to interact.

## Components
| File | What it exports |
|---|---|
| `Frame.jsx` | `Phone`, `AppBar`, `Drawer`, `HelmColors` (brand tokens) |
| `Dashboard.jsx` | `Dashboard`, `StatTile`, `MiniCalendar`, `SalesChart`, `ActivityChart`, `TopStates`, `NewClients` |
| `Clients.jsx` | `Clients` |
| `Chat.jsx` | `Chat` |
| `NewTask.jsx` | `NewTaskModal` |
| `../icons.jsx` | `MS` — inline SVG Material icon component |
