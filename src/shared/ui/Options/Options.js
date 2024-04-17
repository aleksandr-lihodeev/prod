import React from "react";
import "./Options.scss";
import { Link } from "react-router-dom";
const Options = () => {
  
  return (
      <div className="options">
        <ul>
          <li>
            <Link>Купить</Link>
          </li>
          <li>
            <Link>Продать</Link>
          </li>
          <li>
            <Link>Ипотека</Link>
          </li>
        </ul>
      </div>
  );
};

export default Options;
