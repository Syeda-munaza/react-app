import React from "react";
import Video from "../components/Video";
import thumbnail from "../components/Video"; // Adjust path as needed
import logo from "../components/Img.avif"; // Adjust path as needed
import pic from "../components/img-logo.avif";
import img from "../components/harry.avif";
import animal from "../components/animal.avif";
import name from "../components/english.avif";

export default function Home() {
  const videoData = [
    {
      thumbnail: thumbnail,
      logo: logo,
      title: "Best online business platform  | Make money online"
    },
    {
      thumbnail: thumbnail,
      logo: pic,
      title: "Complete YouTube automation for  beginners | Make money "
    },
    {
      thumbnail: thumbnail,
      logo: img,
      title: "Projects YouTube  for abroad| Make money "
    },
    {
      thumbnail: thumbnail,
      logo: animal,
      title: "How to grow your YouTube channel | No experience needed!"
    },
  
    {
      thumbnail: thumbnail,
      logo: name,
      title: "Best strategies for YouTube success in 2025 | Step-by-step guide"
    }
  ];

  return (
    <>
    <div className="direction">
    {videoData.map((video, index) => (
        <Video 
          key={index} 
          thumbnail={video.thumbnail} 
          logo={video.logo} 
          title={video.title} 
        />
      ))}
    </div>

    <div className="direction">
    {videoData.map((video, index) => (
        <Video 
          key={index} 
          thumbnail={video.thumbnail} 
          logo={video.logo} 
          title={video.title} 
        />
      ))}
    </div>
    <div className="direction">
    {videoData.map((video, index) => (
        <Video 
          key={index} 
          thumbnail={video.thumbnail} 
          logo={video.logo} 
          title={video.title} 
        />
      ))}
    </div>
    </>
  );
}
