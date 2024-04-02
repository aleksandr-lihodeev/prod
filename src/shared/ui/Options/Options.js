import React from "react";
import "./Options.scss";
import { Link } from "react-router-dom";
import { WrapperHoc } from "../../helpers";
const Options = () => {
  
  return (
    <WrapperHoc>
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
    </WrapperHoc> 
  );
};

export default Options;
