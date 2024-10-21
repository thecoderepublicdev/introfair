import { useState, useEffect } from 'react';

const useExtractYears = (data) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const extractYears = (items) => {
      const yearSet = new Set();

      items.forEach(item => {
        const regex = /(\d{4})$/; // Tarihten yılı ayırmak için regex
        const match = item.date.match(regex);

        if (match) {
          yearSet.add(match[0]); // Yılı Set'e ekle (tekrarları engellemek için)
        }
      });

      return Array.from(yearSet); // Set'i array'e çevir
    };

    if (data) {
      setYears(extractYears(data));
    }
  }, [data]);

  return years;
};

export default useExtractYears;