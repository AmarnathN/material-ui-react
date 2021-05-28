import { MOCK_EMPLOYEE_DATA } from "./mockEmployeeData";

export const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartments = () => {
  return [
    { id: "1", title: "Engineering" },
    { id: "2", title: "Marketing" },
    { id: "3", title: "Sales" },
    { id: "4", title: "HR" },
  ];
};
export const setMockEmployeeData = () => {
  let employees = [];
  localStorage.setItem(KEYS.employeeId, MOCK_EMPLOYEE_DATA.length + 1);
  MOCK_EMPLOYEE_DATA.forEach((data) => employees.push(data));
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const addEmployee = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const updateEmployee = (data) => {
  let employees = getAllEmployees();
  let employeeRecordIndex = employees.findIndex((x) => x.id === data.id);
  employees[employeeRecordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

const generateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) == null) {
    localStorage.setItem(KEYS.employeeId, "0");
  }
  var id = Number.parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  let employees = [];
  if (localStorage.getItem(KEYS.employees)) {
    employees = JSON.parse(localStorage.getItem(KEYS.employees));
    return employees.map((emp) => ({ ...emp, department: getDepartments().filter((dep) => dep.id === emp.departmentId)[0].title }));
  }
  return employees;
};

export const deleteEmployee = (id) => {
  let employees = getAllEmployees();
  employees = employees.filter((x) => x.id != id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};
