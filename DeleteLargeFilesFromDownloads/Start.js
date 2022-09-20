const SUGGESTED = 5;
const start = (initResult) => {
  console.log("Starting");
  try {
    let sorted = initResult.files.sort((a, b) => {
      return b.size - a.size;
    });
    console.log(
      sorted.length < SUGGESTED
        ? `Total suggested files to delete ${sorted.files}`
        : "Total suggested files to delete " + SUGGESTED
    );
    let MAX = sorted.length < SUGGESTED ? sorted.length : SUGGESTED;
    for (var i = 0; i < MAX; i++) {
      console.log(`${sorted[i].fileName + " | " + sorted[i].size}`);
    }
  } catch (e) {
    console.log(`${e}`);
  } finally {
    console.log("Done");
  }
};

module.exports = start;
