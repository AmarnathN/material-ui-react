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

export const addEmployee = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
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
    return employees.map((emp) => ({ ...emp, department: getDepartments()[emp.departmentId].title }));
  }
  return employees;
};
