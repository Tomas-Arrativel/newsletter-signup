import React, { Dispatch, SetStateAction } from 'react';

interface SuccessProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

const SuccessContainer = ({ setActive }: SuccessProps) => {
  return (
    <>
      <img src='images/icon-list.svg' alt='Check list icon' />
      <h2>Thanks for subscribing!</h2>
      <p>A confirmation email has been sent to</p>
    </>
  );
};

export default SuccessContainer;
