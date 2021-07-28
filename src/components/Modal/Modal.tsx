import ReactDOM from 'react-dom';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../pages/HomePage/HomePage';
import { useHistory, useLocation } from 'react-router-dom';
import { sendMessageData } from '../../models/SendMessageData';
import { sendMessage } from '../../api/sendMessage/sendMessage';
import { Loader } from '../Loader/Loader';

const Portal: React.FC = ({ children }) => {
  const modalRoot = document.getElementById('modal');
  return modalRoot && ReactDOM.createPortal(children, modalRoot);
};

interface ModalProps {
  backUrl?: string;
}

export const Modal: React.FC<ModalProps> = ({ backUrl }) => {
  const userData = useContext(UserContext);
  const history = useHistory();
  const { search } = useLocation();
  const [isDisabled, setIsDisabled] = useState(false);
  let token = '';
  if (userData && 'accessToken' in userData) {
    token = userData.accessToken;
  }
  const { register, handleSubmit } = useForm();

  const handleError = useCallback((error: any) => {
    console.error(error);
  }, []);

  const handleClose = useCallback(() => {
    if (backUrl) {
      history.replace({
        pathname: backUrl,
        search,
      });
    } else {
      history.goBack();
    }
  }, [backUrl, history, search]);

  const handleSave = useCallback(
    (data: sendMessageData) => {
      setIsDisabled(!isDisabled);
      sendMessage(data, token).then(() => {
        handleClose();
      });
    },
    [token, handleClose],
  );

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Portal>
      <form
        onClick={handleClose}
        role="none"
        className={classNames(styles.modal_module_wrapper)}
        onSubmit={handleSubmit(handleSave, handleError)}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          role="none"
          className={classNames(styles.modal_module_container)}
        >
          <div className={classNames(styles.modal_module_field)}>
            <span>To:</span>
            <input
              readOnly={isDisabled}
              {...register('to')}
              type="text"
              className="form-control"
            />
          </div>
          <div className={classNames(styles.modal_module_field)}>
            <span>Cc:</span>
            <input
              readOnly={isDisabled}
              {...register('cc')}
              type="text"
              className="form-control"
            />
          </div>
          <div className={classNames(styles.modal_module_field)}>
            <span>Subject:</span>
            <input
              readOnly={isDisabled}
              type="text"
              {...register('subject')}
              className="form-control"
            />
          </div>
          <div className={classNames(styles.modal_module_field)}>
            <span>Message:</span>
            <textarea
              disabled={isDisabled}
              {...register('messageText')}
              className="form-control"
              rows={4}
              defaultValue={''}
            />
          </div>
          <div className={classNames(styles.send_button_container)}>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
        <Loader isActive={isDisabled} />
      </form>
    </Portal>
  );
};
