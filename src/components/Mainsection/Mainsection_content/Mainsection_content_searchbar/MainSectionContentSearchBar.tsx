import React, { useState } from 'react';
type MainSectionContentSearchbarProps = React.HTMLAttributes<HTMLElement>;

export const MainSectionContentSearchbar: React.FC<MainSectionContentSearchbarProps> =
  () => {
    const [isModalHidden, setIsModalHidden] = useState(false);
    return (
      <div className="searchForm row">
        <div className="col-sm-14">
          <form
            name="search"
            action="#"
            method="get"
            className="form-inline form-search pull-left"
          >
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                name="search"
                placeholder="Search..."
              />
              <a href="index.html" className="btn btn-search">
                <i className="icon-search"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="options col-sm-10">
          <button
            onClick={() => {
              setIsModalHidden(!isModalHidden);
            }}
            title="Add new item"
            className="newItem"
            data-toggle="modal"
            data-target="#myModal"
          >
            <i className="icon-plus-small"></i>
            <span>New Item</span>
          </button>
          <div
            className={isModalHidden ? 'modal fade in' : 'modal fade'}
            id="myModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden={isModalHidden}
            style={isModalHidden ? { display: 'block' } : { display: 'none' }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">
                    Add new item
                  </h4>
                </div>
                <div className="modal-body">
                  <p className="modal-label">Item name</p>
                  <input type="text" className="form-control" />
                  <p className="modal-label">Text</p>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={''}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    onClick={() => {
                      setIsModalHidden(!isModalHidden);
                    }}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a href="index.html" className="btn btn-sm btn-option">
            <i className="icon-sliders"></i>
          </a>
        </div>
      </div>
    );
  };
