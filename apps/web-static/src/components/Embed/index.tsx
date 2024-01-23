import React from "react";
import styles from "./Embed.module.css";

export const Embed = () => {
  return (
    <div className={styles.container}>
      <iframe
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/artist/4otyLOpxTJ6VdY0EEfjIcS?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};
