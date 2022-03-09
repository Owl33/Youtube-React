import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => (
  <div className={styles.videoCard}>
    <img className={styles.videoThumbnails}src={props.video.snippet.thumbnails.medium.url} alt="" />
    <div>
      <p className={styles.videoTitle}>{props.video.snippet.title} </p>
      <p className={styles.channelTitle}>{props.video.snippet.channelTitle}</p>
    </div>
  </div>
);

export default VideoItem;
