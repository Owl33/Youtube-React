import React, { memo } from "react";
import styles from "./video_detail.module.css";

const VideoDetail = memo(({ video, video: { snippet } }) => (
  <div className={styles.detail}>
    <iframe
      className={styles.video}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="650px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <div className={styles.titleBox}>
      <h1 className={styles.videoTitle}>{snippet.title}</h1>
      <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
    </div>
    <pre className={styles.description}>{snippet.description}</pre>
  </div>
));
export default VideoDetail;
