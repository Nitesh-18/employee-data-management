// src/components/EmployeeTable.jsx
function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[400px] bg-gray-800 rounded-xl shadow-md">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-700 text-teal-300 sticky top-0 z-10">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Position</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp, index) => (
              <tr
                key={emp.id}
                className="border-t border-gray-700 hover:bg-gray-700/50 transition"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.email}</td>
                <td className="p-3">{emp.position}</td>
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => onEdit(emp)}
                    className="px-3 py-1 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(emp.id)}
                    className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="p-4 text-center text-gray-400 italic"
              >
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
}

export default EmployeeTable;
