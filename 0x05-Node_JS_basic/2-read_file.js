const fs = require('fs');

function countStudents(filePath) {
    let fileContent;
    try {
        fileContent = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
    } catch (err) {
        throw new Error('Cannot load the database');
    }

    const r = fileContent.split('\n');
    const l1 = [];
    const l2 = [];

    r.forEach((record) => {
        const field = record.split(',');
        if (field !== [] && field !== null) {
            if (field[3] === 'CS') {
                l1.push(field[0]);
            } else if (field[3] === 'SWE') {
                l2.push(field[0]);
            }
        }
    });
    console.log(`Number of students: ${l1.length + l2.length}`);
    console.log(`Number of students in CS: ${l1.length}. List: ${l1.join(', ')}`);
    console.log(`Number of students in SWE: ${l2.length}. List: ${l2.join(', ')}`);
}

module.exports = countStudents;