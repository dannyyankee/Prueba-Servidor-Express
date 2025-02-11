const fs = require("fs");

const saveToJSON = (heroes) => {
  fs.writeFileSync("./src/data/heroe.json", JSON.stringify(heroes, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = saveToJSON;
