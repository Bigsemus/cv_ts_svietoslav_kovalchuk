import axios from 'axios';

import { CAT_FACT_API } from '../utils/constants/api.constants';

export const getCatFact = () => axios.get(`${CAT_FACT_API}/fact`);

export const getCatFactList = (limit = 5) => axios
  .get(`${CAT_FACT_API}/facts`, {
    params: { limit },
  });
