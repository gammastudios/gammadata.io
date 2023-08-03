// pages/contactus.tsx
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

const ContactUs: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [isPanelExpanded, setIsPanelExpanded] = useState(true); // new state for tracking panel expand/collapse

  const handlePanelToggle = () => { // method to handle toggle event
    setIsPanelExpanded(!isPanelExpanded);
  }

  const [{ pos }, api] = useSpring(() => ({
    pos: [-1, -1, -2],
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
      </Head>
      <Canvas className="bg-black">
        <OrbitControls />
        <Suspense fallback={null}>
          <Effects />
          <Ribbon />
        </Suspense>
      </Canvas>
      <AnimatedPanel
        title="Case Studies"
        expanded={isPanelExpanded} // use state here
        toggleable={true}
        onToggle={handlePanelToggle} // handle toggle event
        actions={[
        ]}
      >
        <Panel top left width={400} space={2} title="Contact Us" footer="© 2023 - All rights reserved">
          <PanelList>
            <Text>For any questions, concerns, or inquiries, please reach out to us at:</Text>
            <Text>Email: test@test.com</Text>
            <Text>Phone: 123-456-7890</Text>
          </PanelList>
        </Panel>
      </AnimatedPanel>
    </div>
  );
};

export default ContactUs;
