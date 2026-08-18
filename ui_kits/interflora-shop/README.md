# Interflora Shop — UI Kit

Interactive flower e-commerce app prototype (Android shell). Interflora brand: PURPLE #9B00FE, Arial.

## Screens
- **Store** — Tabbed flower catalog (NEW IN / CLOTHING / SHOES / ACC), filter + sort bar, product cards with photo, favourite heart, colour swatches, price. Tap a product to go to detail.
- **Product** — Hero photo with gallery thumbnails, size picker (interactive), colour swatches, rating stars, ADD TO BAG pill button. Adds item to cart.
- **Cart** — Line items with photo, name, sale pricing in red, colour/size/qty. Order summary with promo code field, sub-total/delivery/total in purple. CHECKOUT button.
- **Sign in / Sign up** — Tabbed auth: email + password fields (filled style), purple pill CTA, FORGOT PASSWORD, OR divider, social login buttons (Facebook, Google, Twitter with real brand SVGs).
- **Placeholder screens** — Track, FAQ, Refer a friend, Favourites (via sidebar drawer).

## Usage
Open `index.html`. **Hamburger menu** opens the brand sidebar drawer. **Tap a product card** to open detail. **Add to Bag** updates the cart counter badge and navigates to Cart. **Checkout** goes to Sign In. **Sign In** returns to store.

## Components
| File | What it exports |
|---|---|
| `ShopFrame.jsx` | `ShopPhone`, `ShopAppBar`, `ShopDrawer`, `IFC` (brand tokens) |
| `Store.jsx` | `Store`, `STORE_PRODUCTS` |
| `Product.jsx` | `ProductDetail` |
| `Cart.jsx` | `Cart` |
| `SignIn.jsx` | `SignIn` |
| `../icons.jsx` | `MS` — inline SVG Material icon component |

## Brand tokens (IFC)
```js
primary:'#9B00FE'  // PURPLE — buttons, active states, prices
red:'#FF0050'      // sale prices
gold:'#CAAD59'     // rating stars, premium
ink:'#000000'      // default text
```
