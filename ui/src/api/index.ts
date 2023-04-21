import { IDataResult } from '@/types/index.d';
import axios from 'axios';

const URL = '/api';

export default async function getData(): Promise<IDataResult> {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (e) {
    console.error(e);
    return { items: [], count: 0 };
  }
}
