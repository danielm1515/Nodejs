const fs = require("fs");
const os = require("os");
let baseFolder = "C:/Users/<user>/Downloads/";
const FILESIZE = 10000;
 
let result = {
  started: Date.now(),
  files: [],
  ended: null,
  totalSize : 0
};
const init = () => {
  console.log("Initializing");
  try {
    const userInfo = os.userInfo();
    const user = userInfo.username;
    baseFolder = baseFolder.replace("<user>", user);
    let files = [];
    fs.readdirSync(baseFolder).forEach((file) => {
      const fstat = fs.statSync(baseFolder + `${file}`);
      const fileSize = fstat.size / 1000;
      if (fileSize >= FILESIZE) {
 
        result.ended += fileSize;
        result.files.push({ fileName: file, size: fileSize });
      }
      
    });
    result.ended = Date.now();
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Initialized");
    return result;
  }
};

module.exports = init;
