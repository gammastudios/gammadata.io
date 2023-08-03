import { data } from '../content/content';
import Link from "next/link";
import { animated, useSpring } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import Effects from "../components/Effects";
import {
  ActionButton,
  AnimatedPanel,
  Panel,
  PanelList,
  Text,
} from "../components/hud";
import Ribbon from "../components/Ribbon";
import { entry } from "../components/sounds";
import pkg from "../package.json";
import { styled } from "../stitches";
import styles from "../styles/Home.module.css";

const Main = styled("main", {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  margin: 0,
  padding: 0,
  length: 0
});

const VersionTag = styled("div", {
  position: "fixed",
  right: "$2",
  bottom: "$2",
  opacity: 0.3,
  color: "white",
  pointerEvents: "none",
  length: 0
});

const PlayWithArtPrompt = styled("div", {
  position: "fixed",
  right: "$2",
  left: "$2",
  bottom: "4%",
  textAlign: "center",
  opacity: 0.3,
  color: "white",
  pointerEvents: "none",
  length: 0
});

const Overlay = styled("div", {
  gridColumn: "1 / 5",
  gridRow: "1 / 5",
  paddingBottom: "$space$6",
  color: "white",
  overflowY: "auto",

  pointerEvents: "all",

  variants: {
    layout: {
      sm: {
        gridColumn: "1 / 5",
        gridRow: "1 / 5",
        maxWidth: "$sidebar$maxWidth",
        paddingBottom: "$space$6",
      },
      md: {
        gridColumn: "1 / 3",
        gridRow: "1 / 5",
        paddingBottom: "0",
      },
      lg: {
        gridColumn: "1 / 3",
        gridRow: "1 / 5",
        minWidth: "$sidebar$minWidth",
        maxWidth: "$sidebar$maxWidth",
        paddingBottom: "0",
      },
    },
  },
  length: 0
});

const Padding = styled("div", {
  padding: "$2",
  boxSizing: "border-box",
  variants: {
    layout: {
      sm: {
        padding: "$1",
      },
      md: {
        padding: "$2",
      },
      lg: {
        padding: "$3",
      },
    },
  },
  length: 0
});

const HudGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "25% 25% 25% 25%",
  gridTemplateRows: "auto",

  position: "fixed",
  pointerEvents: "none",

  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  length: 0
});

const OverlayRight = styled("div", {
  display: "none",
  color: "white",
  overflowY: "auto",

  pointerEvents: "all",

  variants: {
    layout: {
      sm: {
        display: "none",
      },
      md: {
        display: "block",
        gridColumn: "4 / 5",
        gridRow: "1 / 5",
      },
      lg: {
        justifySelf: "end",
        display: "block",
        gridColumn: "4 / 5",
        gridRow: "1 / 5",
        // minWidth: "$sidebar$minWidth",
        maxWidth: "$sidebar$maxWidth",
      },
    },
  },
  length: 0
});

const visit = (url: string, delay: number = 0) => {
  if (delay > 0) {
    setTimeout(() => {
      window.open(url, "_blank");
    }, delay);
  } else {
    window.open(url, "_blank");
  }
};

const DesktopOnly = () => {
  return (
    <Padding layout="md">
      <PanelList>
        <AnimatedPanel
          title="Case Studies"
          expanded
          actions={[]}
        >            
            <h2>Australia Post</h2>
            --- <br />
          <Text>
            Migrating Teradata to Google Cloud and BigQuery
          </Text>
          <ul>
            <li>dbt</li>
            <li>bigquery</li>
            <li>BKEY and BMAP migration</li>
            <li>Looker Enterprise Rollout</li>
          </ul>
            <a href="https://notion.ai" target="_blank" rel="noreferrer">
              <h2>Notion.ai</h2>
            </a>
            --- <br />
          <Text>   
            Generate unique insights into the world's largest content database
          </Text>
          <ul>
            <li>Google Kubernetes Engine</li>
            <li>Cloud Spanner</li>
          </ul>
          <h2>Government agency</h2>
          <Text>
            --- <br />
            Strategic Data Platform on BigQuery 
          </Text>
          <ul>
            <li>dbt</li>
            <li>prefect.io</li>
            <li>gitlab</li>
            <li>salesforce</li>
          </ul>
        </AnimatedPanel>

        <AnimatedPanel
          title="View Source"
          toggleable={false}
          actions={[
            <ActionButton
              onActivate={() =>
                visit("https://github.com/TomKlimovski/bf-3/blob/main/pages/index.tsx", 300)
              }
              index={0}
              key={0}
              activationKey="Q"
            >
              view code
            </ActionButton>,
          ]}
        >
          <Text>
            View the code for this site on github, it&apos;s built with react,
            next.js, stitchesjs, react-three-fiber, react-spring, framer-motion,
            zzfx and rage.
          </Text>
        </AnimatedPanel>
      </PanelList>
    </Padding>
  );
};

const Visibility = styled("div", {
  variants: {
    visiblity: {
      visible: {
        display: "block",
      },
      hidden: {
        display: "none",
      },
    },
  },
  length: 0
});

const Greetings = styled("div", {
  gridColumn: "2 / 3",
  gridRow: "2 / 3",
  pointerEvents: "all",
  variants: {
    size: {
      small: {
        gridColumn: "1 / 5",
        gridRow: "2 / 4",
      },
      regular: {
        gridColumn: "2 / 3",
        gridRow: "2 / 3",
      },
    },
  },
  length: 0
});

const Maximised = styled("div", {
  gridColumn: "1 / 4",
  gridRow: "1 / 1",
  pointerEvents: "all",
  variants: {
    layout: {
      small: {
        gridColumn: "1 / 5",
        gridRow: "1 / 1",

        maxWidth: "$sidebar$maxWidth",
      },
      large: {
        gridColumn: "1 / 3",
        gridRow: "1 / 1",
        maxWidth: "$sidebar$maxWidth",
      },
    },
  },
  length: 0
});

const Home: NextPage = () => {
  const showBg = true;

  const [view, setView] = useState<"initial" | "active" | "maximised">(
    "initial"
  );
  const { scale } = useSpring({
    scale: view === "initial" ? 0.1 : 1,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>
        {data.index.head.title}
        </title>
        {data.index.head.meta.map((meta: { name: string | undefined; content: string | undefined; }, index: React.Key | null | undefined) => (
        <meta
          key={index}
          name={meta.name}
          content={meta.content}
        />
        ))}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {showBg && (
          <Canvas camera={{ position: [15, 15, 15] }}>
            <color attach="background" args={["black"]} />
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <pointLight position={[30, 0, 0]} color="blue" intensity={10} />
              <pointLight position={[0, -30, 0]} color="pink" intensity={5} />
              <pointLight position={[0, 0, 30]} color="purple" intensity={5} />
              <animated.group scale={scale}>
                <Ribbon id={1} color="#7b505c" />
                <Ribbon id={64} color="#E8AE3B" />
                <Ribbon id={256} color="#E8AE3B" />
                <Ribbon id={512} color="#E8AE3B" />
                <Ribbon id={128} color="#e4d6cf" />
              </animated.group>
              <Effects />
            </Suspense>
            <OrbitControls
              minPolarAngle={Math.PI / 10}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        )}
      </Main>

      <VersionTag>
        <Text>
          gammadata.io
          {" " + pkg.version + " "}
          <a href="https://forms.gle/UbdTJndFVoKihuQeA" >π</a>
        </Text>
      </VersionTag>
      <HudGrid className="hud">
        {view === "maximised" && (
          <Maximised layout={{ "@initial": "small", "@bp2": "large" }}>
            <Padding layout="md">
              <PanelList>
                <AnimatedPanel
                  title="Go Back"
                  actions={[
                    <ActionButton
                      onActivate={() => {
                        setTimeout(entry, 100);
                        setTimeout(() => {
                          setView("active");
                        }, 300);
                      }}
                      index={1}
                      key={1}
                      activationKey="B"
                    >
                      back to site
                    </ActionButton>,
                  ]}
                >
                  <Text>Use the mouse or touch to pan, zoom and rotate.</Text>
                </AnimatedPanel>
              </PanelList>
            </Padding>
          </Maximised>
        )}
        {view === "initial" && (
          <Greetings size={{ "@initial": "small", "@bp1": "regular" }}>
            <Padding layout="md">
              <PanelList>
                <Panel title="BF.WTF">
                  <Text>Welcome to Gamma Data .</Text>
                  <Text><br/>We Build Data Platforms for the Enterprise</Text>
                  <br />
                  <ActionButton
                    onActivate={() => {
                      setTimeout(entry, 100);
                      setTimeout(() => {
                        setView("active");
                      }, 300);
                    }}
                    index={2}
                    key={2}
                    activationKey="E"
                  >
                    enter
                  </ActionButton>
                </Panel>
              </PanelList>
            </Padding>
          </Greetings>
        )}
        {view === "active" && (
          <>
            <Visibility visiblity={{ "@initial": "hidden", "@bp4": "visible" }}>
              <PlayWithArtPrompt>
                <Text>click + drag + scroll</Text>
              </PlayWithArtPrompt>
            </Visibility>
            <Overlay
              layout={{
                "@initial": "sm",
                "@bp1": "sm",
                "@bp2": "md",
                "@bp3": "lg",
              }}
            >
              <Padding layout="md" className="special">
                <PanelList>
                  <AnimatedPanel title="Welcome">
                    <Text>
                      Hi, you&apos;ve landed on Gamma Data&apos;s page.
                      <br/> <br/>
                      We are Data Specialists for the Cloud, located in
                      Melbourne, Australia. We spend most of our time 
                      thinking about, and working on:
                    </Text>  
                      <ul>
                        <li>strategic platform oversight</li>
                        <li>building out data-centric infrastructure</li>
                        <li>modelling your data for lightning-fast reports</li>
                        <li>software &amp; process architecture</li>
                        <li>staff augmentation &amp; department review</li>
                        <li>learning and education</li>
                      </ul>
                  </AnimatedPanel>

                  <AnimatedPanel
                    title="Work"
                    actions={[
                      <ActionButton
                        onActivate={() => visit("https://www.linkedin.com/company/gamma-data/", 300)}
                        index={3}
                        key={3}
                        activationKey="C"
                      >
                        linkedin
                      </ActionButton>,
                      <ActionButton
                        onActivate={() =>
                          visit("https://github.com/gamma-data", 300)
                        }
                        index={4}
                        key={4}
                        activationKey="G"
                      >
                        github
                      </ActionButton>,
                      <ActionButton
                        onActivate={() => visit("mailto:info@gammadata.io", 300)}
                        index={5}
                        key={5}
                        activationKey="A"
                      >
                        email us
                      </ActionButton>,
                    ]}
                  >
                    <Text>
                      The Gamma Data team is open to all types of data-driven work.
                    </Text>
                    <br />
                    <Text>
                      If you&apos;re looking for someone to bring your Data strategy vision
                      to life, then do reach out.
                    </Text>
                    <br />
                    <Text>
                      We are experts in:
                    </Text>  
                      <ul>
                        <li><b>☁️ Cloud, especially Google Cloud. </b> <br /> 
                           Our team can help with green 
                           field cloud projects, hybrid or multi-cloud implementations, 
                           or migrations between major cloud providers.</li>
                        <li><b>📊 Data.</b> <br /> 
                           Delivering end to end data solutions including channel solutions, 
                           reporting systems and advanced analytics applications.</li>
                        <li><b> 🏗️ Engineering. </b>  <br />
                           From automating infrastructure, platform and 
                           application deployment to test automation to continuous security and compliance, 
                           we can help you build a world class platform, data and machine 
                           learning engineering capability and culture.</li>
                        <li> <b> 🚆Training.</b> <br /> 
                           We are one of two agencies in Australia that can boast a Google Developer Expert
                           <i> and </i> authorised Google Trainer for your organisation
                        </li>
                      </ul>
                  </AnimatedPanel>
                  <AnimatedPanel
                    title="Our Blog"
                    toggleable={false}
                    actions={[
                      <ActionButton
                          onActivate={() =>
                            visit("https://medium.com/gammadata", 300)
                          }
                          index={6}
                          key={6}
                          activationKey="M"
                        >
                        medium 
                        </ActionButton>,
                      <ActionButton
                      onActivate={() =>
                        visit("https://fullstackchronicles.io/", 300)
                      }
                      index={7}
                      key={7}
                      activationKey="F"
                    >
                    full stack chronicles 
                    </ActionButton>                        
                    ]}
                    >
                    <Text>
                      <b>Unveiling the Power of Service Account Impersonation in Google Cloud Platform</b>
                      <br /> --- <br />
                      Want to stop using service account keys at your command line? Would you like to run dbt from
                      <br />
                      your command line but impersonate the same service account that’s running your code in GCP?
                      <a href='https://medium.com/p/23c6adbf4355'> [link] </a>
                      <br />
                    </Text>                    
                    <Text>
                      <br />
                      <b>Apache Iceberg and Google Cloud</b>
                      <br /> --- <br />
                      Wanted to time-travel, query a lake at a point-in-time, 
                      and support schema evolution effortlessly? Then read on... 
                      <a href='https://medium.com/gammadata/apache-iceberg-and-google-cloud-239b1ae9fceb'> [link] </a>
                    </Text>
                    <Text>
                      <br />
                      <b>Serving dbt docs on Gitlab (Static) Pages</b>
                      <br /> --- <br />
                      Want a true static page, and not have to run `dbt run server` so you can host
                      on Gitlab or Github?
                      <a href='https://medium.com/gammadata/serving-dbt-docs-on-gitlab-static-pages-3365416c8b22'> [link] </a>

                      <br /> <br />more...
                    </Text>

                  </AnimatedPanel>
                  <AnimatedPanel
                    title="Explore Mode"
                    toggleable={false}
                    actions={[
                      <ActionButton
                        onActivate={() =>
                          setTimeout(() => setView("maximised"), 300)
                        }
                        index={8}
                        key={8}
                        activationKey="X"
                      >
                        maximise art
                      </ActionButton>,
                    ]}
                  ></AnimatedPanel>
                </PanelList>
              </Padding>
            </Overlay>
          </>
        )}
        {view === "active" && (
          <OverlayRight
            layout={{
              "@initial": "sm",
              "@bp1": "sm",
              "@bp2": "md",
              "@bp3": "lg",
            }}
            className="source-panel"
          >
            <DesktopOnly />
          </OverlayRight>
        )}
      </HudGrid>
      
    </div>
  );
};

export default Home;
