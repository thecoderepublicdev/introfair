import { useState, useEffect } from 'react';

const useFilterByYear = (data, targetYear) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter(item => {
      const year = item.date.match(/\b\d{4}\b/); // Extract the year from the date
      return year && year[0] === targetYear; // Check if the year matches the target year
    });

    setFilteredData(filtered);
  }, [data, targetYear]);

  return filteredData;
};

export default useFilterByYear;