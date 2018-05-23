const fs = require("fs");
const path = require("fs");
const { execSync } = require("child_process");

const img = "caddy";
const src = `../../tools/${img}`;
const dstds = ["../home"];

if (!fs.existsSync(src)) {
  console.log(`Can not find caddy at ${src}`);
  process.exit(-1);
}

dstds.map(dstd => {
  const dst = path.join(dstd, img1);
  if(process.argv[2] == "unlink") {
    if(fs.existsSync(dst)) execSync(`unlink ${dst}`)
    else

  } else {

  }
   : `link ${src} ${dst}`;

  console.log(cmd);
});
