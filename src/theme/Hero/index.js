import React from "react";
import clsx from "clsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Image from "@theme/IdealImage";

import screenshot from "@site/static/img/pages/light/panel-screenshot.png";
import styles from "./styles.module.scss";

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <header id="hero" className={clsx("hero", styles.banner)}>
      <div className="container">
        <img
          src={useBaseUrl(`img/logo-sm.png`)}
          alt="Logo"
          className={styles.logo}
        />

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Transform any Debian-based server into an all-in-one seedbox solution
        </p>

        <div className={styles.buttons}>
          <AnchorLink
            className={clsx("button button--primary button--lg", styles.button)}
            href="#quick-start"
          >
            Get Started
          </AnchorLink>
        </div>
      </div>

      <Image img={screenshot} className={clsx("shadow-md", styles.image)} />
    </header>
  );
}

export default Hero;
