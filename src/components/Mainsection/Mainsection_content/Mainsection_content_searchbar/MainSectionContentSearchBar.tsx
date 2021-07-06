import React, { useState } from 'react';
import { MainSectionContentModal } from './Mainsection_content_searchbar_modal/MainSectionContentModal';
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
          <MainSectionContentModal
            isHidden={isModalHidden}
            toggleHandler={setIsModalHidden}
          />
          <a href="index.html" className="btn btn-sm btn-option">
            <i className="icon-sliders"></i>
          </a>
        </div>
      </div>
    );
  };
