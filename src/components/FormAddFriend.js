import { useState } from 'react';

const FormAddFriend = ({ onAddFriend }) => {
 const [name, setName] = useState('');
 const [image, setImage] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!name) return;
  const newFriend = {
   name,
   image,
  };
  onAddFriend(newFriend);
  setName('');
 };

 return (
  <form className='form-add-friend'>
   <label htmlFor='friend'>friend name</label>
   <input
    type='text'
    id='friend'
    value={name}
    onChange={(e) => {
     setName(e.target.value);
    }}
   />
   <label htmlFor='image'>image url</label>
   <input
    type='text'
    id='image'
    value={image}
    onChange={(e) => {
     setImage(e.target.value);
    }}
   />
   <button className='button' onClick={handleSubmit}>
    add
   </button>
  </form>
 );
};

export default FormAddFriend;
