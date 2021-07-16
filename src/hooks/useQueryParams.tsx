import queryString from 'query-string';

export const useQueryParams = () => {
  const getGoogleQueryParams = (searchParams: { search: string }) => {
    const queryParams = queryString.parse(searchParams.search);
    return `&q=in%3A${queryParams.category}%20category%3A${queryParams.label}`;
  };
  const changeParams = (
    category: string,
    location: { search: string },
    key: string,
  ) => {
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
