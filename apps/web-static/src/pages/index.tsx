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
        </Head>
        <main>
          <Logo />
        </main>
        <Footer>
          <SocialLinks />
        </Footer>
      </div>
      <StarBackground />
    </>
  );
}
