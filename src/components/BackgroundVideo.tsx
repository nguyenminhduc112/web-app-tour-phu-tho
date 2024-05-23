import React from "react";
import videoBg from "../assets/videos/videoBg.mp4";
import styles from "../assets/css/BackgroundVideo.module.css";
interface BackgroundVideoProps {
  children: React.ReactNode;
}
const BackgroundVideo = ({ children }: BackgroundVideoProps) => {
  return (
    <div className={styles.main}>
      <video className={styles.video} src={videoBg} autoPlay loop muted />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BackgroundVideo;
