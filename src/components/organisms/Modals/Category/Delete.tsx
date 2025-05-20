import React from "react";

interface CategoryDeleteModalProps {
  isOpen: boolean;
  categoryName: string;
  onClose: () => void;
  onDelete: () => void;
  loading?: boolean;
}

const CategoryDeleteModal: React.FC<CategoryDeleteModalProps> = ({
  isOpen,
  categoryName,
  onClose,
  onDelete,
  loading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Delete Category</h2>
        <p>
          Are you sure you want to delete the category{" "}
          <strong>{categoryName}</strong>?
        </p>
        <div className="modal-actions">
          <button onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button onClick={onDelete} disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDeleteModal;
