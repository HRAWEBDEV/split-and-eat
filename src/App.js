import './index.css';
import { useState } from 'react';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';
import { initialFriends } from './db/data';

const App = () => {
 const [friendsList, setFriendsList] = useState(initialFriends);
 const [showAddForm, setShowAddForm] = useState(false);
 const [selectedId, setSelectedId] = useState(null);
 const selectedFriend = friendsList.find((item) => item.id === selectedId);

 const handleAddFriend = (newFriend) => {
  const id = Date.now();
  setFriendsList([
   ...friendsList,
   {
    ...newFriend,
    id,
    balance: 0,
    image: newFriend.image || `https://i.pravatar.cc/48?u=${id}`,
   },
  ]);
 };

 const handleSelectFriend = (id) => {
  setSelectedId(id);
 };

 const handleEditBalance = (id, balance) => {
  setFriendsList((prev) =>
   prev.map((item) => (item.id === id ? { ...item, balance } : item))
  );
 };

 const handleTogglAddForm = () => {
  setShowAddForm((prev) => !prev);
 };

 return (
  <div className='app'>
   <div className='sidebar'>
    <FriendsList list={friendsList} onSelectFriend={handleSelectFriend} />
    {showAddForm && <FormAddFriend onAddFriend={handleAddFriend} />}
    <button className='button' onClick={handleTogglAddForm}>
     {showAddForm ? 'close' : 'add friend'}
    </button>
   </div>
   {selectedFriend && (
    <FormSplitBill {...selectedFriend} onEditBalance={handleEditBalance} />
   )}
  </div>
 );
};

export default App;
