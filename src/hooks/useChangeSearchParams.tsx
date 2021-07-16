import queryString from 'query-string';

export const useChangeSearchParams = () => {
  const changeCategory = (
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
  return { changeCategory };
};
