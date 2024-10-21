import { useState, useEffect } from 'react';

const useYearFilter = (data, targetYear) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterByYear = (items, year) => {
      return items.filter(item => {
        const regex = /(\d{4})$/; // Tarihten yılı ayırmak için regex
        const match = item.date.match(regex);
        
        return match && match[0] === year.toString(); // Yılı karşılaştır
      });
    };

    if (data && targetYear) {
      setFilteredData(filterByYear(data, targetYear));
    }
  }, [data, targetYear]);

  return filteredData;
};

export default useYearFilter;