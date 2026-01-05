const fs = require("fs");
const spritePath = "public/assets/icons/sprite.svg";
const sprite = fs.readFileSync(spritePath, "utf-8");

const ids = [...sprite.matchAll(/<symbol[^>]+id="([^"]+)"/g)].map((m) => m[1]);

console.log("Available Icon IDs:");
ids.forEach((id) => console.log(" - " + id));
console.log("\nTotal Icons:", ids.length);
