

// import React from 'react';
// import "./DisplayData.css";
// import { MdEdit,  MdDelete } from "react-icons/md";

// const DisplayData = ({ data, onEdit, onDelete }) => {
//   return (
//     <div style={{marginTop:"150px", position:"relative"}}>
//       <ul>
//         {data.map((item, index) => (
          
//           <li key={index} className='list-none' >
//             <div style={{color:"black", marginLeft:"200px", fontWeight:"bold", textShadow:"initial"}}>{item.date}</div>
//             <div className="divbox1">
//               <div className="img"><img className="image1" src={item.image} alt={item.name} /></div>
//               <div className="hurl">
//                 <div className="a1">{item.name}</div>
//                 <div className="a2">{item.createrName}</div>
//                 <div className='btn'>
//                   <button className='btnE' onClick={() => onEdit(index)}><MdEdit /></button>
//                   <button className='btnD' onClick={() => onDelete(index)}><MdDelete /></button>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DisplayData;


import React, { useState } from 'react';
import "./DisplayData.css";
import { MdEdit,  MdDelete } from "react-icons/md";

const DisplayData = ({ data, onEdit, onDelete }) => {
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteConfirmation = (index) => {
    setDeleteIndex(index);
  };

  const handleDeleteCancel = () => {
    setDeleteIndex(null);
  };

  const handleDeleteConfirm = () => {
    onDelete(deleteIndex);
    setDeleteIndex(null);
  };

  return (
    <div style={{marginTop:"150px", position:"relative"}}>
      <ul>
        {data.map((item, index) => (
          <li key={index} className='list-none' >
            <div style={{color:"black", marginLeft:"200px", fontWeight:"bold", textShadow:"initial"}}>{item.date}</div>
            <div className="divbox1">
              <div className="img"><img className="image1" src={item.image} alt={item.name} /></div>
              <div className="hurl">
                <div className="a1">{item.name}</div>
                <div className="a2">{item.createrName}</div>
                <div className='btn'>
                  <button className='btnE' onClick={() => onEdit(index)}><MdEdit /></button>
                  <button className='btnD' onClick={() => handleDeleteConfirmation(index)}><MdDelete /></button>
                </div>
              </div>
            </div>
            {deleteIndex === index && (
              <div className="delete-confirmation">
                <p>Are you sure you want to delete?</p>
                <button className='btnE' onClick={handleDeleteCancel}>Cancel</button>
                <button className='btnD' onClick={handleDeleteConfirm}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;

