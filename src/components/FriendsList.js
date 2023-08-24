import Friend from './Friend';

const FriendsList = ({ list, onSelectFriend }) => {
 return (
  <ul>
   {list.map((item) => {
    return <Friend key={item.id} {...item} onSelectFriend={onSelectFriend} />;
   })}
  </ul>
 );
};

export default FriendsList;
