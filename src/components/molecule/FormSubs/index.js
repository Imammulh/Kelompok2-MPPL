import React, { useState } from 'react';
import bg from '../../../assets/images/background 3.png';

const FormSubs = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid items-center w-96 h-96  ">
      <div className="justify-center flex-col z-10">
        <h3 className="header2-home text-center mb-4 ">
          Would you subscribe <br />
          to our newsletter? <br />
        </h3>
        <p className="text-center">
          there will be new products information notified <br />
          to your email
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col "
        >
          <label>
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="px-3 py-2 w-full my-5 bg-transparent border-2 border-santorini-s_dark rounded-md focus:outline-none focus:ring-2 focus:ring-santorini-med focus:border-transparent 
              hover:bg-opacity-30"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="py-1 w-1/4 place-self-end rounded-md border-2 border-santorini-s_dark bg-transparent z-10 hover:bg-santorini-s_light"
          />
        </form>
      </div>
      <div className="z-0 -mt-96 opacity-50">
        <img src={bg} className="w-92" />
      </div>
    </div>
  );
};

export default FormSubs;
