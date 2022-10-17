import axios from 'axios';
import { getCatFactList } from './catfact.service';

describe('CatFact Service Test Suite', () => {
  jest.mock('axios');

  it('should respond with correct data', async () => {
    const fact = {
      fact: 'A 2007 Gallup poll revealed that both men and women were equally likely to own a cat.',
      length: 85,
    };
    const payload = { data: fact };
    axios.get = jest.fn().mockResolvedValue(payload);
    await expect(getCatFactList().then((response) => response.data)).resolves.toEqual(fact);
  });
});
