import React from "react";
import styles from "../assets/css/Footer.module.css";
// IMGS
import LOGO from "../assets/images/logo.svg";
// ICONS
import { RiMapPin2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.item1}>
        <div className={styles.infoItem1}>
          <img src={LOGO} alt="logo" />
          <div>
            <p className={styles.textNameCompany}>
              CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
            </p>
            <h3 className={styles.textTitle}>PHUTHOTOURIST</h3>
          </div>
        </div>
        <div className={styles.textCopyright}>
          Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
        </div>
      </div>
      <div className={styles.item2}>
        <h3 className={styles.textTitleContact}>Liên hệ</h3>
        <div className={styles.itemContact}>
          <RiMapPin2Fill width={24} height={24} />
          <p>15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM </p>
        </div>
        {/* end itemContact */}
        <div className={styles.itemContact}>
          <FaPhone width={24} height={24} />
          <p>02838650921</p>
        </div>
        {/* end itemContact */}
        <div className={styles.itemContact}>
          <MdEmail width={24} height={24} />
          <p>vanphong@damsenpark.vn</p>
        </div>
        {/* end itemContact */}
        <div className={styles.itemContact}>
          <FaSquareFacebook width={24} height={24} />
          <p>Phuthotourist</p>
        </div>
        {/* end itemContact */}
      </div>
      <div className={styles.item3}>
        <h3 className={styles.textPlaceTitle}>
          CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
        </h3>
        <ul className={styles.listPlaces}>
          <li className={styles.itemPlace}>Công viên Văn hóa Đầm Sen</li>
          <li className={styles.itemPlace}>Khu du lịch sinh thái Vàm Sát</li>
          <li className={styles.itemPlace}>Khách sạn Ngọc Lan (Quận 1)</li>
          <li className={styles.itemPlace}>Khách sạn Phú Thọ (Quận 11)</li>
          <li className={styles.itemPlace}>Trung tâm Du lịch Đầm Sen</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
