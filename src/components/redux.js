
import { useDispatch } from 'react-redux';

const Redux = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'UPDATE_USER_NAME',
      payload: {
        name: 'John Doe'
      }
    });
  };

  return (
    <button onClick={handleClick}>Update User Name</button>
  );
};

export default Redux;