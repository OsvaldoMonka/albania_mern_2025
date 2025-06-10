const seedQarqet = require("./qark");
const seedDestinacionet = require("./destinacionet");

async function runAllSeeds() {
  await seedQarqet();
  await seedDestinacionet();
}

runAllSeeds()
  .then(() => {
    console.log("All seeds completed");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
