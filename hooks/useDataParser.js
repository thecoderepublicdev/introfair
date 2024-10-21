import { useState, useEffect } from 'react';

const useDateParser = (dateString) => {
  const [parsedDate, setParsedDate] = useState({
    dayStart: null,
    dayEnd: null,
    month: null,
    year: null,
  });

  useEffect(() => {
    const parseDate = (str) => {
      // "28 - 30 Ağustos 2025" gibi formatı parçalamak için regex
      const regex = /(\d{1,2})\s*-\s*(\d{1,2})\s+(\w+)\s+(\d{4})/;
      const match = str.match(regex);
      
      if (match) {
        const [, dayStart, dayEnd, month, year] = match;
        return {
          dayStart,
          dayEnd,
          month,
          year
        };
      }

      return {
        dayStart: null,
        dayEnd: null,
        month: null,
        year: null
      };
    };

    setParsedDate(parseDate(dateString));
  }, [dateString]);

  return parsedDate;
};

export default useDateParser;