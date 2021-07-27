import React from 'react';
import styles from './Loader.module.scss';
import classNames from 'classnames';
interface LoaderProps {
  isActive: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isActive }) => {
  return (
    <div
      className={classNames(isActive ? styles.loader_container : styles.hidden)}
    >
      <div className={classNames(styles.lds_dual_ring)} />
    </div>
  );
};
