export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }
  return employees[Symbol.iterator]();
}
