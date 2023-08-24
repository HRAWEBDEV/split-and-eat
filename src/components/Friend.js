const Friend = ({ name, image, balance, onSelectFriend, id }) => {
 return (
  <li>
   <img src={image} alt={name} />
   <h3>{name}</h3>
   {balance < 0 && (
    <p className='red'>
     you owe {name} {balance}
    </p>
   )}
   {balance < 0 && (
    <p className='red'>
     you owe {name} {Math.abs(balance)}
    </p>
   )}
   {balance > 0 && (
    <p className='greeen'>you'r friend owes you {Math.abs(balance)}</p>
   )}
   {balance === 0 && <p>you and you'r friend are even</p>}
   <button className='button' onClick={() => onSelectFriend(id)}>
    select
   </button>
  </li>
 );
};

export default Friend;
