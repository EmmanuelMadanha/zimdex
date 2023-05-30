
// import React, { useState } from 'react';
// import Popup from '../../components/Popup.js';
// import '../../css/Bills.css';

// function Bills() {
//   const [selected, setSelected] = useState("");
//   const [formData, setFormData] = useState({
//     meterNo: '',
//     address: '',
//     amount: '',
//     schoolName: '',
//     term: '',
//     airtimeProvider: '',
//     airtimeAmount: ''
//   });
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupOptions, setPopupOptions] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSelected(value);
//     setFormData({ ...formData, [name]: '' });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle the selected option here
//     console.log("Selected option:", selected);
//     console.log("Form data:", formData);
//     // you can perform further actions based on the selected option
//   };

//   const handleFormDataChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleZesaSubmit = (event) => {
//     event.preventDefault();
//     console.log("Buying token for:", formData);
//     const order = `Buying token for:\nMeter no: ${formData.meterNo}\nAddress: ${formData.address}\nAmount: ${formData.amount}`;
//     setPopupOptions({
//       title: 'Confirm Payment',
//       message: order,
//       confirmText: 'OK',
//       cancelText: 'Cancel',
//       onConfirm: () => {
//         alert("Order created.");
//     const orders = JSON.parse(localStorage.getItem('orders')) || [];
//     localStorage.setItem('orders', JSON.stringify([...orders, order]));
//     onClosePopup();
//       }
//   });
//   setShowPopup(true);

//   const handleSchoolFeesSubmit = (event) => {
//     event.preventDefault();
//     console.log("Paying:", formData);
//     const order = `Paying:\nSchool name: ${formData.schoolName}\nTerm: ${formData.term}\nAmount: ${formData.amount}`;
//     window.confirm(`${order}\n\nClick OK to confirm or Cancel to abort.`) && alert("Order created.");
//     const orders = JSON.parse(localStorage.getItem('orders')) || [];
//     localStorage.setItem('orders', JSON.stringify([...orders, order]));
//   };

//   const handleAirtimeSubmit = (event) => {
//     event.preventDefault();
//     console.log("Buying airtime for:", formData);
//     const order = `Buying airtime for:\nProvider: ${formData.airtimeProvider}\nAmount: ${formData.airtimeAmount}`;
//     window.confirm(`${order}\n\nClick OK to confirm or Cancel to abort.`) && alert("Order created.");
//     const orders = JSON.parse(localStorage.getItem('orders')) || [];
//     localStorage.setItem('orders', JSON.stringify([...orders, order]));
//   };

//   const zesaForm = (
//     <form onSubmit={handleZesaSubmit} className="bills-form">
//       <label className="bills-label">
//         Meter no:
//         <input type="text" name="meterNo" value={formData.meterNo} onChange={handleFormDataChange} className="bills-input" required />
//       </label>
//       <br />
//       <label className="bills-label">
//         Address:
//         <input type="text" name="address" value={formData.address} onChange={handleFormDataChange} className="bills-input" required />
//       </label>
//       <br />
//       <label className="bills-label">
//         Amount:
//         <input type="number"name="amount" value={formData.amount} onChange={handleFormDataChange} className="bills-input" required />
//       </label>
//       <br />
//       <button type="submit" className="bills-button">Pay</button>
//     </form>
//   );

//   const schoolFeesForm = (
//     <form onSubmit={handleSchoolFeesSubmit} className="bills-form">
//       <label className="bills-label">
//         School name:
//         <input type="text" name="schoolName" value={formData.schoolName} onChange={handleFormDataChange} className="bills-input" required />
//       </label>
//       <br />
//       <label className="bills-label">
//         Term:
//         <input type="text" name="term" value={formData.term} onChange={handleFormDataChange} className="bills-input" required />
//       </label>
//       <br />
//       <label className="bills-label">
//         Amount:
//         <input type="number" name="amount" value={formData.amount} onChange={handleFormDataChange} className="bills-input" required />
//       </label>
//       <br />
//       <button type="submit" className="bills-button">Process</button>
//     </form>
//   );

//   const airtimeForm = (
//     <form onSubmit={handleAirtimeSubmit} className="bills-form">
//       <label className="bills-label">
//         Select a provider:
//         <select name="airtimeProvider" value={formData.airtimeProvider} onChange={handleFormDataChange} className="bills-select" required>
//           <option value="">--Select an option--</option>
//           <option value="Econet">Econet</option>
//           <option value="Netone">Netone</option>
//           <option value="Telecel">Telecel</option>
//         </select>
//       </label>
//       <br />
//       <label className="bills-label">
//         Amount:
//         <input type="number" name="airtimeAmount" value={formData.airtimeAmount} onChange={handleFormDataChange} className="bills-input" required />
//       </label>
//       <br />
//       <button type="submit" className="bills-button">Buy</button>
//     </form>
//   );

//   let selectedForm;
//   if(selected === "ZESA") {
//     selectedForm = zesaForm;
//   } else if(selected === "ZINWA") {
//     selectedForm = <p className="bills-instruction">Coming soon, don't forget to conserve water</p>;
//   } else if(selected === "School fees") {
//     selectedForm = schoolFeesForm;
//   } else if(selected === "BuyAirtime") {
//     selectedForm = airtimeForm;
//   }

//   return (
//     <div className="bills-container">
//       <h1 className="bills-header">Pay Bills</h1>
//       <p className="bills-instruction">
//         You want to pay bills, no fuss just select the type of bill you want and hit pay
//       </p>
//       <form onSubmit={handleSubmit} className="bills-form">
//         <label className="bills-label">
//           Select a bill to pay:
//           <select name="selected" value={selected} onChange={handleChange} className="bills-select">
//             <option value="">--Select an option--</option>
//             <option value="ZESA">ZESA</option>
//             <option value="ZINWA">ZINWA</option>
//             <option value="School fees">School fees</option>
//             <option value="BuyAirtime">Buy Airtime</option>
//           </select>
//         </label>
//         <br />
//         {selectedForm}
//       </form>
//     </div>
//   );

import React, { useState } from 'react';
import Popup from '../Popup/Popup.js';
import '../../css/Bills.css';

function Bills() {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    meterNo: '',
    address: '',
    amount: '',
    schoolName: '',
    term: '',
    airtimeProvider: '',
    airtimeAmount: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupOptions, setPopupOptions] = 

useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelected(value);
    setFormData({ ...formData, [name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle the selected option here
    console.log("Selected option:", selected);
    console.log("Form data:", formData);
    // you can perform further actions based on the selected option
  };

  const handleFormDataChange = (event) => {
    const {name, value } = event.target;
    setFormData({ ...formData, [name]: value 

});
  };

  const handleZesaSubmit = (event) => {
    event.preventDefault();
    console.log("Buying token for:", formData);
    const order = `Buying token for:\nMeter no: ${formData.meterNo}\nAddress: ${formData.address}\nAmount: ${formData.amount}`;
    setPopupOptions({
      title: 'Confirm Payment',
      message: order,
      confirmText: 'Pay',
      cancelText: 'Cancel',
      onConfirm: () => {
        alert('Order created.');
        const orders = JSON.parse(localStorage.getItem('orders')) || [];

        localStorage.setItem('orders', JSON.stringify([...orders, order]));
      }
    });
    setShowPopup(true);
  };

  const handleSchoolFeesSubmit = (event) => {
    event.preventDefault();
    console.log("Paying:", formData);
    const order = `Paying:\nSchool name: ${formData.schoolName}\nTerm: ${formData.term}\nAmount: ${formData.amount}`;
    setPopupOptions({
      title: 'Confirm Payment',
      message: order,
      confirmText: 'Process',
      cancelText: 'Cancel',
      onConfirm: () => {

        alert('Order created.');
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        localStorage.setItem('orders', JSON.stringify([...orders, order]));
      }
    });
    setShowPopup(true);
  };

  const handleAirtimeSubmit = (event) => {
    event.preventDefault();
    console.log("Buying airtime for:", formData);
    const order = `Buying airtime for:\nProvider: ${formData.airtimeProvider}

\nAmount: ${formData.airtimeAmount}`;
    setPopupOptions({
      title: 'Confirm Purchase',
      message: order,
      confirmText: 'Buy',
      cancelText: 'Cancel',
      onConfirm: () => {
        alert('Order created.');
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        localStorage.setItem('orders', JSON.stringify([...orders, order]));
      }
    });
    setShowPopup(true);
  };

  const zesaForm = (
        <form onSubmit={handleZesaSubmit} className="bills-form">
          <label className="bills-label">
            Meter no:
            <input type="text" name="meterNo" value={formData.meterNo} onChange={handleFormDataChange} className="bills-input" required />
          </label>
          <br />
          <label className="bills-label">
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleFormDataChange} className="bills-input" required />
          </label>
          <br />
          <label className="bills-label">
            Amount:
            <input type="number"name="amount" value={formData.amount} onChange={handleFormDataChange} className="bills-input" required />
          </label>
          <br />
          <button type="submit" className="bills-button">Pay</button>
        </form>
      );
    
      const schoolFeesForm = (
        <form onSubmit={handleSchoolFeesSubmit} className="bills-form">
          <label className="bills-label">
            School name:
            <input type="text" name="schoolName" value={formData.schoolName} onChange={handleFormDataChange} className="bills-input" required />
          </label>
          <br />
          <label className="bills-label">
            Term:
            <input type="text" name="term" value={formData.term} onChange={handleFormDataChange} className="bills-input" required />
          </label>
          <br />
          <label className="bills-label">
            Amount:
            <input type="number" name="amount" value={formData.amount} onChange={handleFormDataChange} className="bills-input" required />
          </label>
          <br />
          <button type="submit" className="bills-button">Process</button>
        </form>
      );
    
      const airtimeForm = (
        <form onSubmit={handleAirtimeSubmit} className="bills-form">
          <label className="bills-label">
            Select a provider:
            <select name="airtimeProvider" value={formData.airtimeProvider} onChange={handleFormDataChange} className="bills-select" required>
              <option value="">--Select an option--</option>
              <option value="Econet">Econet</option>
              <option value="Netone">Netone</option>
              <option value="Telecel">Telecel</option>
            </select>
          </label>
          <br />
          <label className="bills-label">
            Amount:
            <input type="number" name="airtimeAmount" value={formData.airtimeAmount} onChange={handleFormDataChange} className="bills-input" required />
          </label>
          <br />
          <button type="submit" className="bills-button">Buy</button>
        </form>
      );
    
      let selectedForm;
      if(selected === "ZESA") {
        selectedForm = zesaForm;
      } else if(selected === "ZINWA") {
        selectedForm = <p className="bills-instruction">Coming soon, don't forget to conserve water</p>;
      } else if(selected === "School fees") {
        selectedForm = schoolFeesForm;
      } else if(selected === "BuyAirtime") {
        selectedForm = airtimeForm;
      }

return (
    <div className="bills-container">
      <h1 className="bills-header">Pay 

Bills</h1>
      <p className="bills-instruction">
        You want to pay bills, no fuss just select the type of bill you want and hit pay
      </p>
      <form onSubmit={handleSubmit} className="bills-form">
        <label className="bills-label">
          Select a bill to pay:
          <select name="selected" value={selected} onChange={handleChange} className="bills-select">
            <option value="">--Select an option--</option>
            <option value="ZESA">ZESA</option>
            <option value="ZINWA">ZINWA</option>
            <option value="School fees">School fees</option>

            <option value="BuyAirtime">Buy Airtime</option>
          </select>
        </label>
        <br />
        {selectedForm}
      </form>
      {showPopup && <Popup onClose={() => setShowPopup(false)} options={popupOptions} />}
    </div>
  );
}

export default Bills;