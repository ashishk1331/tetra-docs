import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Atomic configuration",
        Svg: require("@site/static/img/atomic.svg").default,
        description: "Edit basic elements like headings and image tags to shape whole document.",
    },
    {
        title: "Keyed Approach",
        Svg: require("@site/static/img/keyed.svg").default,
        description: "Edit basic elements like headings and image tags to shape whole document.",
    },
    {
        title: "Server and client compatible",
        Svg: require("@site/static/img/ssg.svg").default,
        description: "Compatible with rendering at the client as well as at the server side.",
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
