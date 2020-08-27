import React, { useRef, useState } from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css';

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  // useState
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // useRef
  const videoRef = useRef(null);
  
  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video 
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
      /> 
      <VideoFooter 
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />

      {/* src="https://www.instagram.com/p/CAjBpK3nZl8/?utm_source=ig_web_button_share_sheet"
      src='https://www.youtube.com/watch?v=9xwazD5SyVg'
      src='https://instagram.flhr3-2.fna.fbcdn.net/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht=instagram.flhr3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vjDPPklLnOYAX-xOjlv&oe=5F38FACF&oh=fbe19a529394aac8cc1a61f1b2b016e54' */}
    </div>
  ) 
}

export default VideoCard;