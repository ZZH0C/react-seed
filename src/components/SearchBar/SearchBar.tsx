import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams';

//TODO: fix this abomination
export const SearchBar = (): JSX.Element => {
  const [state, setState] = useState('');
  const { changeParamsCallback } = useQueryParams();
  const params = changeParamsCallback(state, 'search');

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
              <Link
                to={{
                  pathname: '/home',
                  search: params.parsedParams,
                }}
                className="btn btn-search"
                onClick={() => {
                  setState('');
                }}
              >
                <i className="icon-search" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
