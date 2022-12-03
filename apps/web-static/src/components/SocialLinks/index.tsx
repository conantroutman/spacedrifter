import React from 'react'
import { SiBandcamp, SiFacebook, SiInstagram, SiSpotify, SiYoutube } from "react-icons/si";
import styles from './SocialLinks.module.css'

export const SocialLinks = () => {
  return (
    <ul className={styles['social-links']}>
        <li><a href="https://open.spotify.com/artist/4otyLOpxTJ6VdY0EEfjIcS" target="_blank" rel="noreferrer" title="Spotify" aria-label='Spotify artist page'><SiSpotify /></a></li>
        <li><a href="https://spacedrifterband.bandcamp.com/album/spacedrifter" target="_blank" rel="noreferrer" title="Bandcamp" aria-label="Bandcamp page"><SiBandcamp /></a></li>
        <li><a href="https://www.youtube.com/@spacedrifter3846/" target="_blank" rel="noreferrer" title="Youtube" aria-label="Youtube channel"><SiYoutube /></a></li>
        <li><a href="https://www.instagram.com/spacedrifterband/" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram profile"><SiInstagram /></a></li>
        <li><a href="https://www.facebook.com/spacedrifterband/" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook page"><SiFacebook /></a></li>
    </ul>
  )
}
