import React from "react";
import styles from "../assets/css/Navigation.module.css";
import { NavLink } from "react-router-dom";

// IMGS
import LOGO from "../assets/images/logo.svg";
const Navigation = () => {
  return (
    <div className={styles.containerNavigation}>
      <ul className={styles.listNavigation}>
        <li className={styles.itemNavigation}>
          <NavLink
            to="/"
            className={({ isActive }: any) => {
              return isActive
                ? [styles.link, styles.active].join(" ")
                : styles.link;
            }}
          >
            Trang chủ
          </NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink
            to="/post"
            className={({ isActive }: any) => {
              return isActive
                ? [styles.link, styles.active].join(" ")
                : styles.link;
            }}
          >
            Bài viết
          </NavLink>
        </li>
        <li>
          <img src={LOGO} alt="logo" />
        </li>
        <li className={styles.itemNavigation}>
          <NavLink
            to="/document"
            className={({ isActive }: any) => {
              return isActive
                ? [styles.link, styles.active].join(" ")
                : styles.link;
            }}
          >
            Tài tiệu
          </NavLink>
        </li>
        <li className={styles.itemNavigation}>
          <NavLink
            to="/feed"
            className={({ isActive }: any) => {
              return isActive
                ? [styles.link, styles.active].join(" ")
                : styles.link;
            }}
          >
            Tuyển dụng
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
