import { useState } from 'react';

const FormSplitBill = ({ name, id, onEditBalance }) => {
 const [bill, setBill] = useState(0);
 const [myExpence, setMyExpence] = useState(0);
 const [payer, setPayer] = useState('you');

 let yourExpence = 0;
 let balance = 0;
 if (bill && myExpence) {
  yourExpence = Number(bill) - Number(myExpence);
  payer !== 'you' ? (balance = -1 * yourExpence) : (balance = yourExpence);
  console.log(balance);
 }

 return (
  <form className='form-split-bill'>
   <h2>split a bill with </h2>
   <label htmlFor='bill'>bill value</label>
   <input
    type='text'
    id='bill'
    value={bill}
    onChange={(e) => {
     setBill(e.target.value);
    }}
   />

   <label htmlFor='expence'>your expence</label>
   <input
    type='text'
    id='expence'
    value={myExpence}
    onChange={(e) => {
     setMyExpence(e.target.value);
    }}
   />

   <label htmlFor='friend-expence'>{name} expence</label>
   <input type='text' id='friend-expence' value={yourExpence} readOnly />

   <label htmlFor='payer'>who is paying the bill</label>
   <select
    value={payer}
    onChange={(e) => {
     setPayer(e.target.value);
    }}
    name=''
    id='payer'
   >
    <option value='you'>you</option>
    <option value='friend'>{name}</option>
   </select>

   <button
    className='button'
    onClick={(e) => {
     e.preventDefault();
     onEditBalance(id, balance);
    }}
   >
    split bill
   </button>
  </form>
 );
};

export default FormSplitBill;
