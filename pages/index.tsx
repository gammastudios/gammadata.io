import { data } from '../content/content';
import { Reacteroids } from '../components/Reacteroids';
import { animated, useSpring } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, Suspense, useEffect, useState } from "react";
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

const FooterTag = styled("div", {
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

// Define types for view data
interface View {
  section: string | null;
  toggleable: boolean;
  expanded: boolean;
}

// Define types for section data
interface Section {
  text: string;
  buttons?: {
    text: string;
    action: string;
  }[];
}

// Define types for button data
interface Button {
  text: string;
  action: string;
  url: string | null;
  activationKey: string | null;
}

// Define type for data object
interface Data {
  views: {
    md: {
      right: View[];
    };
  };
  sections: {
    [key: string]: Section;
  };
}

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

const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsMdUp(mediaQuery.matches);

    const listener = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMdUp(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  return isMdUp;
};

const Home: NextPage = () => {
    const showBg = true;

    const isMdUp = useIsMdUp();

    const [view, setView] = useState<"initial" | "active" | "maximised">(
        "initial"
    );

    const AnimatedGroup = animated.group;
    const scaleValue = view === "initial" ? 0.1 : 1;
    const { scale } = useSpring({ scale: scaleValue });

    const renderSection = (view: { section: string | number; toggleable: boolean | undefined; expanded: boolean | undefined; }, index: React.Key | null | undefined) => {
        const sectionData = data.sections[view.section];

        // Check if the section has any buttons
        const hasButtons = Array.isArray(sectionData.buttons) && sectionData.buttons.length > 0;

        return (
        <AnimatedPanel key={index} toggleable={view.toggleable} expanded={view.expanded} title={sectionData.title}>
            <Text dangerouslySetInnerHTML={{ __html: sectionData.text }} />

            {/* Render buttons if they exist */}
            {hasButtons && sectionData.buttons.map((button: { activationKey: string; url: string; action: string | number; text: string; }, buttonIndex: number | undefined) => (
            <ActionButton
                key={buttonIndex}
                index={buttonIndex}
                activationKey={button.activationKey}
                onActivate={button.url ? urlActionMap[button.action](button.url) : actionMap[button.action]}
            >
                {button.text}
            </ActionButton>
            ))}
        </AnimatedPanel>
        );
    };
  
    const urlActionMap: { [key: string]: (url: string) => (() => void) } = {
        visit: (url: string) => () => visit(url, 300),
      };
      
      const actionMap: { [key: string]: () => void } = {
        entry: () => {
          setTimeout(entry, 100);
          setTimeout(() => {
            setView("active");
          }, 300);
        },
        maximiseArt: () => setTimeout(() => setView("maximised"), 300),
      };
      
      // const generateButtons = (buttons: { activationKey: string; action: string; url?: string; text: string; }[]) =>
      //   buttons.map((button, index) => (
      //     <ActionButton
      //       key={index}
      //       index={index}
      //       activationKey={button.activationKey}
      //       onActivate={button.url ? urlActionMap[button.action](button.url) : actionMap[button.action]}
      //     >
      //       {button.text}
      //     </ActionButton>
      //   ));
                  
  return (
    <div className={styles.container}>
      <Head>
        <title>
        {data.shared.title}
        </title>
        {data.shared.meta.map((meta: { name: string | undefined; content: string | undefined; }, index: React.Key | null | undefined) => (
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
                <AnimatedGroup scale={scale.to(s => [s, s, s])}>
                    <Ribbon id={1} color="#7b505c" />
                    <Ribbon id={64} color="#E8AE3B" />
                    <Ribbon id={256} color="#E8AE3B" />
                    <Ribbon id={512} color="#E8AE3B" />
                    <Ribbon id={128} color="#e4d6cf" />
                </AnimatedGroup>
              <Effects />
            </Suspense>
            <OrbitControls
              minPolarAngle={Math.PI / 10}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        )}
      </Main>

      <FooterTag>
        <Text>
        {data.shared.footer.name}<br />
        {data.shared.footer.abn}
        </Text>
      </FooterTag>
      <HudGrid className="hud">
        {/* {view === "maximised" && (
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
        )} */}
{view==="maximised"&&(
    <Maximised layout={{ "@initial": "small", "@bp2": "large" }}>
        <Reacteroids />
        <Padding layout="md" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
            <PanelList>
                <AnimatedPanel title="Go Back" actions={[
                    <ActionButton
                        onActivate={() => {
                            setTimeout(entry, 100);
                            setTimeout(() => { setView("active") }, 300);
                        }}
                        index={1}
                        key={1}
                        activationKey="B">
                        back to site
                    </ActionButton>
                ]}>
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
                  <Text>{data.initial.headline}</Text>
                  <Text><br/>{data.initial.byline}</Text>
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
              {/* <PlayWithArtPrompt>
                <Text>click + drag + scroll</Text>
              </PlayWithArtPrompt> */}
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
                  {(isMdUp ? data.views.md.left : data.views.sm).map((view: { section: string | number; toggleable: boolean | undefined; expanded: boolean | undefined; }, index: React.Key | null | undefined) => renderSection(view, index))}
                </PanelList>
              </Padding>
            </Overlay>
          </>
        )}
        {view === "active" && isMdUp && (
          <OverlayRight
            layout={{
              "@initial": "sm",
              "@bp1": "sm",
              "@bp2": "md",
              "@bp3": "lg",
            }}
            className="source-panel"
          >
            <PanelList>
            {data.views.md.right.map((view: { section: string | number; toggleable: boolean | undefined; expanded: boolean | undefined; }, index: React.Key | null | undefined) => renderSection(view, index))}              
            </PanelList>
          </OverlayRight>
        )}
      </HudGrid>
    </div>
  );
};

export default Home;