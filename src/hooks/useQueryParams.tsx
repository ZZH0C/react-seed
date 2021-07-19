import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import { useCallback } from 'react';

interface queryProps {
  category: string;
  key: 'in' | 'category' | 'search';
}

export const useQueryParams = (): {
  getGoogleQueryParamsCallback: () => string;
  changeParamsCallback: (
    category: queryProps['category'],
    key: queryProps['key'],
  ) => { isActive: boolean; parsedParams: string };
} => {
  const location = useLocation();
  const getGoogleQueryParams = () => {
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
  };
  const changeParams = (
    category: queryProps['category'],
    key: queryProps['key'],
  ): { isActive: boolean; parsedParams: string } => {
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
  };

  const changeParamsCallback = useCallback(
    (category: string, key: queryProps['key']) => {
      return changeParams(category, key);
    },
    [changeParams],
  );
  const getGoogleQueryParamsCallback = useCallback(() => {
    return getGoogleQueryParams();
  }, [getGoogleQueryParams]);

  return {
    changeParamsCallback,
    getGoogleQueryParamsCallback,
  };
};
