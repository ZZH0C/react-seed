import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const useQueryParams = (): {
  getGoogleQueryParams: () => string;
  changeParams: (
    category: string,
    key: string,
  ) => { isActive: boolean; parsedParams: string };
} => {
  const location = useLocation();
  const getGoogleQueryParams = () => {
    const queryParams = queryString.parse(location.search);
    return `&q=in%3A${queryParams.category}%20category%3A${queryParams.label}`;
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
