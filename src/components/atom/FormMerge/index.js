import React from 'react';
import FormAsk from '../../molecule/FormAsk';
import FormSubs from '../../molecule/FormSubs';
const FormMerge = () => {
  return (
    <div className="flex flex-row justify-center align-middle gap-56 py-60">
      <FormAsk />
      <div className="px-0.5 py-48 bg-santorini-s_dark"></div>
      <FormSubs />
    </div>
  );
};

export default FormMerge;
