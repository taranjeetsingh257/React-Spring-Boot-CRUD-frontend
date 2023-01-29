import axios from 'axios'

// Localhost:
// const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

// Deploy:
const EMPLOYEE_BASE_REST_API_URL = 'http://springbootemployeecrudapi-env.eba-nzdcuth2.us-east-1.elasticbeanstalk.com/api/v1/employees';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
}

export default new EmployeeService();
