import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const location = useLocation();

  const getGoogleQueryParams = (searchParams: { search: string }) => {
    const queryParams = queryString.parse(searchParams.search);
    return `&q=in%3A${queryParams.category}%20category%3A${queryParams.label}`;
  };
  const changeParams = (category: string, key: string) => {
    let isActive = false;
    const queryParams = queryString.parse(location.search);
    if (queryParams[key] === category) {
      isActive = true;
    }
    queryParams[key] = category;
    const parsedParams = queryString.stringify(queryParams);
    console.log(parsedParams);
    return {
      isActive: isActive,
      parsedParams: parsedParams,
    };
  };
  return { changeParams, getGoogleQueryParams };
};
