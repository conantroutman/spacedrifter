import Head from "next/head";
import { Button } from "ui";
import { Logo } from "components/Logo";
import { SocialLinks } from "components/SocialLinks";
import { Footer } from "components/Footer";
import 'styles/global.css'
import { StarBackground } from "components/StarBackground";

export default function Web() {
  return (
    <>
      <div className="flex-wrapper">
        <Head>
          <title>Spacedrifter</title>
          <meta name="description" content="Spacedrifter is a heavy rock band from Sweden." />
          <link rel="canonical" href="https://spacedrifter.band/"></link>
        </Head>
        <main>
          <Logo />
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
