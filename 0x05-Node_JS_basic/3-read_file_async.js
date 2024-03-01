const fsPromises = require('fs').promises;

async function countStudents(filename) {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(filename, 'utf8')
      .then((fileContents) => {
        const database = fileContents
          .toString()
          .split('\n')
          .filter((line) => line.trim() !== '');
        console.log(`Number of students: ${database.length - 1}`);
        const fields = {};
        database.slice(1).forEach((studentRecord) => {
          const field = studentRecord.split(',')[3];
          const firstName = studentRecord.split(',')[0];
          if (fields[field]) {
            fields[field].push(firstName);
          } else {
            fields[field] = [firstName];
          }
        });
        Object.keys(fields).forEach((field) => {
          console.log(
            `Number of students in ${field}: ${fields[field].length
            }. List: ${fields[field].join(', ')}`,
          );
        });
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
