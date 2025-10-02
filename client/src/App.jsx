// src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import ConfirmModal from "./components/ConfirmModal";
import { Toaster, toast } from "react-hot-toast";

const API_URL = "http://localhost:5000/api/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(API_URL);
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSave = async (employee) => {
    try {
      if (editingEmployee) {
        await axios.put(`${API_URL}/${editingEmployee.id}`, employee);
        toast.success("Employee updated successfully!");
      } else {
        await axios.post(API_URL, employee);
        toast.success("Employee added successfully!");
      }
      setEditingEmployee(null);
      fetchEmployees();
    } catch (err) {
      toast.error("Error saving employee.");
      console.error("Error saving employee:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Employee deleted successfully!");
      fetchEmployees();
    } catch (err) {
      toast.error("Error deleting employee.");
      console.error("Error deleting employee:", err);
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">
        Employee Management
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search employees by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-800 text-gray-200 focus:ring-2 focus:ring-teal-400"
        />

        <EmployeeForm
          onSave={handleSave}
          editingEmployee={editingEmployee}
          cancelEdit={() => setEditingEmployee(null)}
        />

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={(emp) => setEditingEmployee(emp)}
          onDelete={(id) => setDeleteId(id)}
        />
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          handleDelete(deleteId);
          setDeleteId(null);
        }}
      />
    </div>
  );
}

export default App;
