import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';

export const useQueryParams = (): {
  getGoogleQueryParams: () => any;
  changeParams: (
    category: string,
    key: string,
  ) => { isActive: boolean; parsedParams: string };
} => {
  const location = useLocation();
  const getGoogleQueryParams = () => {
    const queryParams = queryString.parse(location.search);
    if (!queryParams.label && !queryParams.category) return '';
    let result = '';
    _.forEach(queryParams, (value, key) => {
      result += `${key}:${value} `;
    });
    return result;
  };
  const changeParams = (
    category: string,
    key: string,
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
  return { changeParams, getGoogleQueryParams };
};
