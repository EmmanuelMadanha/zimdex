import React from 'react';
import "../../css/Popup.css";

const Popup = ({ onClose, options }) => {
  const handleConfirmClick = () => {
    options.onConfirm();
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2 className="popup-header">{options.title}</h2>
        {options.message && (
          <p className="popup-message">{options.message}</p>
        )}
        <div className="popup-buttons">
          <button className="popup-confirm" onClick={handleConfirmClick}>
            {options.confirmText || 'Confirm'}

          </button>
          <button className="popup-cancel" onClick={onClose}>
            {options.cancelText || 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;