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
                    d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"
                ></path>
            </svg>
            <span style={{ marginLeft: ".4em" }}>Tetra Pack</span>
        </>
    ),
    project: {
        link: "https://github.com/ashishk1331/tetra-docs",
        icon: (
            <svg width="24" height="24" viewBox="0 0 256 256">
                <path
                    fill="currentColor"
                    d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"
                ></path>
            </svg>
        ),
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
