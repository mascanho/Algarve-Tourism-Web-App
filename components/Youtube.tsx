"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function Youtube({ id }: any) {
  return <LiteYouTubeEmbed id={id} title="Video" />;
}

export default Youtube;
