import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import "./app.css";
import Navbar from "./components/nav/nav";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [nextPageTok, setNextPageTok] = useState([]); //nextPageToken을 저장
  const [loaded, setloaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });

  const seletedVideo = (video) => {
    setSelectedVideo(video);
    window.scrollTo(0, 0);
  };

  const clicklogo = () => {
    youtube.mostPopular().then((videos) => {
      // setNextPageTok(videos.nextPageToken);

      setSelectedVideo(null);
      setVideos(videos.items);
    });
  };

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );
  useEffect(() => {
    youtube.mostPopular().then((videos) => {
      setVideos(videos.items);
    });
  }, [youtube]);

  useEffect(() => {
    setloaded(true);
    if (inView && loaded === true) {
      if (nextPageTok !== undefined && selectedVideo === null) {
        youtube.mostPopular(nextPageTok).then((result) => {
          setNextPageTok(result.nextPageToken);
          setVideos([...videos, ...result.items]);
        });
        setloaded(false);
      }
    }
  }, [inView]);

  return (
    <div className={styles.app}>
      <Navbar onSearch={search} clickLogo={clicklogo} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.main}>
          <VideoList
            videos={videos}
            onVideoClick={seletedVideo}
            display={selectedVideo ? "detail" : "main"}
          />
        </div>
      </section>
      <div ref={ref}>
        <div></div>
      </div>
    </div>
  );
}

export default App;
