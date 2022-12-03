import React from 'react'
import { SiBandcamp, SiFacebook, SiInstagram, SiSpotify, SiYoutube } from "react-icons/si";
import styles from './SocialLinks.module.css'

export const SocialLinks = () => {
  return (
    <ul className={styles['social-links']}>
        <li><a href="https://open.spotify.com/artist/4otyLOpxTJ6VdY0EEfjIcS" target="_blank" rel="noreferrer" title="Spotify"><SiSpotify /></a></li>
        <li><a href="https://spacedrifterband.bandcamp.com/album/spacedrifter" target="_blank" rel="noreferrer" title="Bandcamp"><SiBandcamp /></a></li>
        <li><a href="https://www.youtube.com/@spacedrifter3846/" target="_blank" rel="noreferrer" title="Youtube"><SiYoutube /></a></li>
        <li><a href="https://www.instagram.com/spacedrifterband/" target="_blank" rel="noreferrer" title="Instagram"><SiInstagram /></a></li>
        <li><a href="https://www.facebook.com/spacedrifterband/" target="_blank" rel="noreferrer" title="Facebook"><SiFacebook /></a></li>
    </ul>
  )
}
