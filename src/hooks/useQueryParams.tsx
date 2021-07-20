import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import { useCallback, useMemo } from 'react';

interface queryProps {
  category: string;
  key: 'in' | 'category' | 'search';
}

export const useQueryParams = (): {
  getGoogleQueryParams: () => string;
  changeParams: (
    category: queryProps['category'],
    key: queryProps['key'],
  ) => { isActive: boolean; parsedParams: string };
} => {
  const location = useLocation();

  const changeParams = useCallback(
    (category: queryProps['category'], key: queryProps['key']) => {
      let isActive = false;
      const queryParams = queryString.parse(location.search);
      if (queryParams[key] === category) {
        isActive = true;
      }
      queryParams[key] = category;
      const parsedParams = queryString.stringify(queryParams);
      return {
        isActive: isActive,
        parsedParams: parsedParams,
      };
    },
    [location.search],
  );
  const getGoogleQueryParams = useCallback(() => {
    const queryParams = queryString.parse(location.search);
    if (!queryParams.label && !queryParams.category && !queryParams.search)
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
      changeParams,
      getGoogleQueryParams,
    }),
    [changeParams, getGoogleQueryParams],
  );
};
