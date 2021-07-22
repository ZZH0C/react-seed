import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams/useQueryParams';

//TODO: fix this abomination
export const SearchBar = (): JSX.Element => {
  const [state, setState] = useState('');
  const { changeParams } = useQueryParams();
  const params = changeParams(state, 'search');
  const history = useHistory();
  return (
    <>
      <div className="searchForm row">
        <div className="col-sm-14">
          <form
            name="search"
            className="form-inline form-search pull-left"
            onSubmit={(event) => {
              event.preventDefault();
              setState('');
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
                  setState('');
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
      </div>
    </>
  );
};
