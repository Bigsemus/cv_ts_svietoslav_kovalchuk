import { useState, useEffect } from 'react';
import { getCatFact } from "../services/catfact.service";

const useCatFact = () => {
  const [fact, setFact] = useState(null);

  const refreshFact = async () => {
    try {
      const { data } = await getCatFact();
      setFact(data?.fact);
    } catch (e) {
      setFact(null);
    }
  };

  useEffect(() => {
    refreshFact();
  }, []);

  return {
    fact,
    refreshFact,
  };
};

export default useCatFact;
