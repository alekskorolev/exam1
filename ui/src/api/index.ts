import { IState } from '@/types/index.d';
import axios from 'axios';

const URL = 'http://192.168.1.121:4000/';

export default async function getData(): Promise<IState> {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (e) {
    console.error(e);
    return { items: [], count: 0 };
  }
}
