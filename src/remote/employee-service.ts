import { apiClient } from ".";

// Double check these endpoints!

/**Function to get all employees from employees microservice.*/
export const getAllEmployeesAPI = () => {
    return apiClient.get("employee/employee/employees");
}

/**Function to get employee by id*/
export const getEmployeeByIdAPI = (id:number) => {
    return apiClient.get(`employee/employee/employees/${id}`);
}

/**Function to create an employee*/
export const createEmployeeAPI = (data: any) => {
    return apiClient.post('employee/employee/employees', data);
}

/**Function to update an existing employee*/
export const updateEmployeeAPI = (id:number, data: any) => {
    return apiClient.put(`employee/employee/employees/${id}`, data);
}
