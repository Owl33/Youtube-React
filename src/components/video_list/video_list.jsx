import React from "react";
import Sidebar from "../sidebar/sidebar";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  const displayType = display === "main" ? styles.main : styles.detail;
  return (
    <div className={styles.videoSection}>
      <Sidebar display={display} />

      <div className={`${styles.videoList} ${displayType}`}>
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
