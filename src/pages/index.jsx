import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { Cube } from "@phosphor-icons/react";
import styles from "./index.module.css";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <section title="main-content">
                <div className="container">
                    <Cube
                        width={48}
                        height={48}
                        style={{ marginBottom: "2rem" }}
                    />
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
