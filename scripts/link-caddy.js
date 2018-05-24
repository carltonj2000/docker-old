const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const img = "caddy";
const src = `../../tools/${img}`;
const dstds = ["../", "../home", "../do", "../do/tinaandcarlton"];

if (!fs.existsSync(src)) {
  console.log(`Can not find caddy at ${src}`);
  process.exit(-1);
}

dstds.map(dstd => {
  const dst = path.join(dstd, img);
  if (process.argv[2] == "unlink") {
    if (fs.existsSync(dst)) {
      const cmd = `unlink ${dst}`;
      execSync(cmd);
      console.log(cmd);
    } else console.log(`Skip unlink! No file at ${dst}`);
  } else {
    const cmd = `ln -f ${src} ${dst}`;
    execSync(cmd);
    console.log(cmd);
  }
});
