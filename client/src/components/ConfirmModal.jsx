// src/components/ConfirmModal.jsx
import { Dialog } from "@headlessui/react";

function ConfirmModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <Dialog.Panel className="bg-gray-800 p-6 rounded-lg max-w-sm w-fit">
          <Dialog.Title className="text-lg font-semibold text-red-400">
            Confirm Delete
          </Dialog.Title>
          <p className="text-gray-300 mt-2">Are you sure you want to delete this employee?</p>
          <div className="flex justify-end mt-4 gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-600 text-gray-200 hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ConfirmModal;
