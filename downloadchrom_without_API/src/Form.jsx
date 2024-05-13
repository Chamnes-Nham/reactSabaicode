import  { useState } from 'react';
import "./Form.css"

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [createrName, setCreaterName] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, createrName, image, date });
    setName('');
    setCreaterName('');
    setImage('');
    setDate('');
  };

  return (
    <div className="modal-container" >
       <div className="modal">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="dte">Date:</label>
                <input 
                    name='dte'
                    type="Date"
                    placeholder='date...'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                     />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input
                    name='name'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="age">CreaterName: </label>
                <input
                    name='creater'
                    type="text"
                    placeholder="creater name..."
                    value={createrName}
                    onChange={(e) => setCreaterName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image: </label>
                <input
                    name='image'
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
            </div>
        <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default Form;
