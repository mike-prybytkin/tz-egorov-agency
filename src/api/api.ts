import { IFetchData, IUserData } from '../shared/types';
import callPopup from '../components/UI/popup/popup';

async function createSubscriber(userData: IUserData) {
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(URL, options);
    const data: IFetchData = await response.json();
    callPopup('success', data);
  } catch (error) {
    callPopup('failed');
    console.error(error);
  }
}

export default createSubscriber;
