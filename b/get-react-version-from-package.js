const fs = require('fs');
fs.writeFileSync(__dirname + "/react-version.txt", require("pkg").reactVersion)
