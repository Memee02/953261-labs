
// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder, cheapDrinks } from "./src/cafe.js";

console.log("=== Kad Café menu ===");
menu.forEach((item) => console.log(menuLine(item)));

console.log("\n=== Today's orders ===");
// TODO (Part D): print one line per order, e.g.  "A001 Mint — 160 THB"
orders.forEach((order) => {
  console.log(`${order.id} ${order.customer} — ${orderTotal(order, menu)} THB`);
});

console.log("\n=== Summary ===");
// TODO (Part D): print the number of orders, the total sales and the average order.
const totalSales = orders.reduce((sum, order) => sum + orderTotal(order, menu), 0);
const avgOrder = averageOrder(orders, menu).toFixed(2);

console.log(`Orders: ${orders.length}`);
console.log(`Total sales: ${totalSales} THB`);
console.log(`Average order: ${avgOrder} THB`);

// TODO (Part D): print the result of your own function.
console.log("\n=== Cheap drinks ===");
console.log(cheapDrinks(menu, 60));
