import React from "react";
import "./Topbar.css";
import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';

const Topbar = () => {
  return (
    <div className="topbar" name="top">
      <div className="topbar-content container">
        <div className="address bar-box1 top-hide">
          <p><span><MdLocationPin />&nbsp;</span> 7454 Melrose Ave., Los Angeles CA 90046</p>
        </div>

        <div className="email bar-box2">
          <p><span><FiMail />&nbsp;</span> info@kingstms.com</p>
        </div>

        <div className="number bar-box3">
          <p> <span><BsPhone />&nbsp;</span> (323) 319-6219</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
