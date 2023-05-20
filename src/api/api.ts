import { IFetchData } from './types';

async function createSubscriber(userData: IFetchData) {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default createSubscriber;
