// src/components/FeedbackModal.jsx
import { Dialog } from "@headlessui/react";

function FeedbackModal({ open, success, message, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <Dialog.Panel className="bg-gray-800 p-6 rounded-lg max-w-sm w-fit text-center space-y-4">
          <Dialog.Title
            className={`text-lg font-semibold ${
              success ? "text-teal-400" : "text-red-400"
            }`}
          >
            {success ? "Success" : "Error"}
          </Dialog.Title>
          <p className="text-gray-200">{message}</p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-700 text-gray-200 hover:bg-gray-600"
          >
            OK
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default FeedbackModal;
