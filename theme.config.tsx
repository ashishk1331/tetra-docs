import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import favicon from "./public/favicon.ico";

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: "%s – Tetrapack",
        };
    },
    head: <link rel="icon" type="image/x-icon" href={favicon.src} />,
    logo: (
        <>
            <svg width="20" height="20" viewBox="0 0 256 256">
                <path
                    fill="currentColor"
                    d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"
                ></path>
            </svg>
            <span style={{ marginLeft: ".4em" }}>Tetra Pack</span>
        </>
    ),
    project: {
        link: "https://github.com/ashishk1331/tetra-docs",
    },
    docsRepositoryBase: "https://github.com/ashishk1331/tetra-docs",
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{" "}
                <a href="https://nextra.site" target="_blank">
                    Tetra Pack
                </a>
                .
            </span>
        ),
    },
};

export default config;
