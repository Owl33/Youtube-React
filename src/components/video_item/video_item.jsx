import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === "main" ? styles.main : styles.detail;

  return (
    <div
      className={`${styles.videoCard} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <img
        className={`${styles.videoThumbnails} ${displayType}`}
        src={snippet.thumbnails.medium.url}
        alt="videothumbnails"
      />
      <div className={styles.videoTitleBox}>
        <p className={`${styles.videoTitle} ${displayType}`}>{snippet.title}</p>
        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
      </div>
    </div>
  );
};
export default VideoItem;
