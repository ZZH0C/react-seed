import React from 'react';
interface MainSectionContentModalProps {
  isHidden: boolean;
  toggleHandler: (arg0: boolean) => void;
}

export const MainSectionContentModal: React.FC<MainSectionContentModalProps> =
  ({ isHidden, toggleHandler }) => {
    return (
      <div
        className={isHidden ? 'modal fade in' : 'modal fade'}
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden={isHidden}
        style={isHidden ? { display: 'block' } : { display: 'none' }}
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
              <textarea className="form-control" rows={3} defaultValue={''} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                onClick={() => {
                  toggleHandler(!isHidden);
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
    );
  };
