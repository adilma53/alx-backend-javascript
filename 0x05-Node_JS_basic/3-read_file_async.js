const fs = require('fs').promises;

async function countStudents(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8')
      .then((data) => {
        const db = data
          .toString()
          .split('\n')
          .filter((line) => line.trim() !== '');
        console.log(`Number of students: ${db.length - 1}`);
        const fields = {};
        db.slice(1).forEach((student) => {
          const field = student.split(',')[3];
          const name = student.split(',')[0];
          if (fields[field]) {
            fields[field].push(name);
          } else {
            fields[field] = [name];
          }
        });
        Object.keys(fields).forEach((field) => {
          console.log(
            `Number of students in ${field}: ${
              fields[field].length
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
