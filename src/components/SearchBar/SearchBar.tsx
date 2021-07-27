import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams/useQueryParams';

//TODO: change this to uncontrollable input with useRef
export const SearchBar = (): JSX.Element => {
  const [state, setState] = useState('');
  const { changeParams } = useQueryParams();
  const params = changeParams(state, 'search');
  const history = useHistory();

  const handleCreateMessage = useCallback(() => {
    history.replace({
      pathname: '/home/add',
      search: params.parsedParams,
    });
  }, [history, params.parsedParams]);

  return (
    <>
      <div className="searchForm row">
        <div className="col-sm-14">
          <form
            name="search"
            className="form-inline form-search pull-left"
            onSubmit={(event) => {
              event.preventDefault();
              history.push({
                pathname: '/home',
                search: params.parsedParams,
              });
            }}
          >
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                name="search"
                placeholder="Search..."
                value={state}
                onChange={(event) => {
                  setState(event.target.value);
                }}
              />
              <button
                className="btn btn-search"
                onClick={() => {
                  history.push({
                    pathname: '/home',
                    search: params.parsedParams,
                  });
                }}
              >
                <i className="icon-search" />
              </button>
            </div>
          </form>
        </div>
        <div className={'options col-sm-10'}>
          <button onClick={handleCreateMessage}>
            <i className="icon-plus-small" />
            <span>New message</span>
          </button>
        </div>
      </div>
    </>
  );
};
