import Head from 'next/head';
import { Logo } from 'components/Logo';
import { SocialLinks } from 'components/SocialLinks';
import { Footer } from 'components/Footer';
import { StarBackground } from 'components/StarBackground';
import { Embed } from 'components/Embed';
import 'styles/global.css';
import styles from './index.module.css';

export default function Web() {
  return (
    <>
      <div className="flex-wrapper">
        <Head>
          <title>Spacedrifter</title>
          <meta name="description" content="Spacedrifter is a heavy rock band from Sweden." />
          <link rel="canonical" href="https://spacedrifter.band/"></link>
        </Head>
        <main className={styles.main}>
          <Logo />
          <Embed />
        </main>
        <Footer>
          <nav>
            <SocialLinks />
          </nav>
        </Footer>
      </div>
      <StarBackground />
    </>
  );
}
