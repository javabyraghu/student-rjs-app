import axios from 'axios';

const baseUrl = 'http://spring-boot-rest-crud-mysqlex:8080/v1/api/student';

class StudentService {

      getAllStudents() {
            return axios.get(`${baseUrl}/all`);
      }

      createStudent(student) {
            return axios.post(`${baseUrl}/create`, student);
      }

      deleteStudent(id) {
            return axios.delete(`${baseUrl}/remove/${id}`, id);
      }

      getOneStudent(id) {
            return axios.get(`${baseUrl}/find/${id}`, id);
      }

      updateStudent(student) {
            return axios.put(`${baseUrl}/modify`, student);
      }
}

export default new StudentService();
