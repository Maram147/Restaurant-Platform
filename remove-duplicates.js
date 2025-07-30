const fs = require('fs');
const path = require('path');

const directory = './public'; 

function removeDuplicateFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      removeDuplicateFiles(filePath);
    } else {
      if (/\(\d+\)\.tsx$/.test(file)) {
        console.log(`Deleting duplicate file: ${filePath}`);
        fs.unlinkSync(filePath);
      }
    }
  });
}

removeDuplicateFiles(directory);
