import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import { useCallback, useMemo } from 'react';

interface queryProps {
  category: string;
  key: 'in' | 'category' | 'search';
}

// getGoogleQueryParams: () => string;
// changeParams: (
//   category: queryProps['category'],
//   key: queryProps['key'],
// ) => { isActive: boolean; parsedParams: string };

export const useQueryParams = () => {
  const location = useLocation();
  const changeParams = useCallback(
    (category: queryProps['category'], key: queryProps['key']) => {
      const queryParams = queryString.parse(location.search);
      const isActive = queryParams[key] === category;
      queryParams[key] = category;
      const parsedParams = queryString.stringify(queryParams);
      return {
        isActive: isActive,
        parsedParams: parsedParams,
      };
    },
    [location.search],
  );
  const removeParam = useCallback(
    (key: queryProps['key']) => {
      const queryParams = queryString.parse(location.search);
      delete queryParams[key];
      return queryString.stringify(queryParams);
    },
    [location.search],
  );

  const getGoogleQueryParams = useCallback(() => {
    const queryParams = queryString.parse(location.search);
    if (!queryParams.in && !queryParams.category && !queryParams.search)
      return '';
    let result = '';
    _.forEach(queryParams, (value, key) => {
      if (key === 'search') {
        result += ` ${value} `;
      } else {
        result += `${key}:${value} `;
      }
    });
    return _.trim(result);
  }, [location.search]);

  return useMemo(
    () => ({
      removeParam,
      changeParams,
      getGoogleQueryParams,
    }),
    [changeParams, getGoogleQueryParams, removeParam],
  );
};
