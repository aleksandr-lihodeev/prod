import React from "react";
import { useState } from "react";
import logo from "./logo.jpeg";
import "./Header.scss";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { classNames } from "../../../shared/helpers";
const Header = () => {
  const [size, setSize] = useState("middle");

  return (
    <div className={classNames("header")}>
        <div className={classNames("header__wrapp")}>
          <div className={classNames("header__logo")}>
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <Link>Главная</Link>
            </li>
            <li>
              <Link>О компании</Link>
            </li>
            <li>
              <Link>Услуги</Link>
            </li>
            <li>
              <Link>Контакты</Link>
            </li>
          </ul>
          <div className={classNames("header__right")}>
            <div className={classNames("header__favorite")}>
              <FavoriteIcon style={{ color: "red" }} />
            </div>
            <div className={classNames("header__phone")}>
              <LocalPhoneIcon style={{ color: "#0073E1" }} />
              <span>0556504665</span>
            </div>
            <Button
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size={size}
            >
              Добавить объявление
            </Button>
          </div>
        </div>
    </div>
  );
};

export default Header;
