// src/components/EmployeeForm.jsx
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

function EmployeeForm({ onSave, editingEmployee, cancelEdit }) {
  // Add form state
  const [addForm, setAddForm] = useState({ name: "", email: "", position: "" });
  const [addErrors, setAddErrors] = useState({});

  // Edit modal state
  const [editForm, setEditForm] = useState({ name: "", email: "", position: "" });
  const [editErrors, setEditErrors] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (editingEmployee) {
      setEditForm(editingEmployee);
      setOpen(true);
    }
  }, [editingEmployee]);

  // Validation function
  const validate = (form) => {
    let errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Valid email required";
    if (!form.position.trim()) errs.position = "Position is required";
    return errs;
  };

  // ---------- ADD FORM ----------
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const errs = validate(addForm);
    setAddErrors(errs);
    if (Object.keys(errs).length > 0) return;

    onSave(addForm);
    setAddForm({ name: "", email: "", position: "" }); // Reset
    setAddErrors({});
  };

  // ---------- EDIT FORM ----------
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const errs = validate(editForm);
    setEditErrors(errs);
    if (Object.keys(errs).length > 0) return;

    onSave(editForm);
    setOpen(false);
    cancelEdit();
  };

  return (
    <>
      {/* Add Employee Form */}
      {!editingEmployee && (
        <form
          onSubmit={handleAddSubmit}
          className="bg-gray-800 p-4 rounded-xl shadow-md space-y-3"
        >
          <h3 className="text-xl font-semibold text-teal-300">Add Employee</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={addForm.name}
                onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
                className="w-full p-2 rounded-md bg-gray-700 text-gray-100 focus:ring-2 focus:ring-teal-400"
              />
              {addErrors.name && <p className="text-red-400 text-sm">{addErrors.name}</p>}
            </div>
            <div className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={addForm.email}
                onChange={(e) => setAddForm({ ...addForm, email: e.target.value })}
                className="w-full p-2 rounded-md bg-gray-700 text-gray-100 focus:ring-2 focus:ring-teal-400"
              />
              {addErrors.email && <p className="text-red-400 text-sm">{addErrors.email}</p>}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={addForm.position}
                onChange={(e) => setAddForm({ ...addForm, position: e.target.value })}
                className="w-full p-2 rounded-md bg-gray-700 text-gray-100 focus:ring-2 focus:ring-teal-400"
              />
              {addErrors.position && <p className="text-red-400 text-sm">{addErrors.position}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600"
          >
            Add
          </button>
        </form>
      )}

      {/* Edit Employee Modal */}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          cancelEdit();
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Dialog.Panel className="bg-gray-800 p-6 rounded-lg max-w-md w-full space-y-4">
            <Dialog.Title className="text-xl font-semibold text-teal-300">
              Edit Employee
            </Dialog.Title>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  placeholder="Name"
                  className="w-full p-2 rounded bg-gray-700 text-gray-100"
                />
                {editErrors.name && <p className="text-red-400 text-sm">{editErrors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  placeholder="Email"
                  className="w-full p-2 rounded bg-gray-700 text-gray-100"
                />
                {editErrors.email && <p className="text-red-400 text-sm">{editErrors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="position"
                  value={editForm.position}
                  onChange={(e) => setEditForm({ ...editForm, position: e.target.value })}
                  placeholder="Position"
                  className="w-full p-2 rounded bg-gray-700 text-gray-100"
                />
                {editErrors.position && (
                  <p className="text-red-400 text-sm">{editErrors.position}</p>
                )}
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    cancelEdit();
                  }}
                  className="px-4 py-2 rounded bg-gray-600 text-gray-200 hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600"
                >
                  Update
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default EmployeeForm;
