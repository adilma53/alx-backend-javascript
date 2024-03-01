const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.trim().split('\n').filter(line => line.trim() !== '');

        const studentsCount = {};

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line !== '') {
                const [firstname, lastname, age, field] = line.split(',');

                if (studentsCount[field]) {
                    studentsCount[field].count++;
                    studentsCount[field].list.push(firstname);
                } else {
                    studentsCount[field] = { count: 1, list: [firstname] };
                }
            }
        }

        console.log(`Number of students: ${lines.length - 1}`);

        for (const field in studentsCount) {
            console.log(`Number of students in ${field}: ${studentsCount[field].count}. List: ${studentsCount[field].list.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
