"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function Youtube({ id }: any) {
  return (
    <LiteYouTubeEmbed
      id={id}
      title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  );
}

export default Youtube;
