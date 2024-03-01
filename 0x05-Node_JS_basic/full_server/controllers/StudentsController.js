const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString())
      .then((data) => {
        const res = ['This is the list of our students'];
        Object.keys(data).forEach((key) => {
          res.push(
            `Number of students in ${key}: ${data[key].length}. List: ${data[
              key
            ].join(', ')}`,
          );
        });
        response.status(200).send(res.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString())
      .then((students) => {
        if (!(field in students)) {
          response.status(500).send('Major parameter must be CS or SWE');
        } else {
          response.status(200).send(`List: ${students[field].join(', ')}`);
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
