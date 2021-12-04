import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col px-10 footer-font gap-10">
        <div className="w-full py-px bg-santorini-s_dark place-self-center"></div>
        <div className="flex flex-row items-center gap-32 place-self-end mb-10">
          <div className="flex flex-col place-self-end text-right ">
            <p>Sangrai Kopi &copy; 2021</p>
            <address>
              <a href="#">
                sangraikopiku@sangrai.com
                <br />
              </a>
              <a href="#">
                Jl. HM. Toha No.36, <br />
                Pakansari, Cibinong, Bogor, <br />
                Jawa Barat 16915
              </a>
            </address>
          </div>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
