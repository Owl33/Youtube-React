import React from "react";
import Sidebar from "../sidebar/sidebar";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => (
  <section className={styles.videoSection}>
    <Sidebar/>
    <div className={styles.videoList}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  </section>
);

export default VideoList;
