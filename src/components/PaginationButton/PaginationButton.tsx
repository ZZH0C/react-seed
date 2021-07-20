import React from 'react';

// import classNames from 'classnames';

interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLElement> {
  isDisabled: boolean;
  isRight: boolean;
  onClickFunction: any;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClickFunction,
  isDisabled,
  isRight,
  children,
}) => {
  let buttonText;
  if (isRight) {
    buttonText = (
      <>
        {children}
        <i className={'icon-right-open-big'} />
      </>
    );
  } else {
    buttonText = (
      <>
        <i className={'icon-left-open-big'} />
        {children}
      </>
    );
  }

  return (
    <button
      onClick={onClickFunction}
      disabled={isDisabled}
      className={'btn btn-default btn-prevNext'}
    >
      {buttonText}
    </button>
  );
};
