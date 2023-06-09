import React, { useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "../ResizeHandle";
import styles from "../styles.module.css";
import LeftPane from "../components/LeftPane";
import MainPane from "../components/MainPane";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

export default function App() {
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(true);
  const handleResizeHandleDoubleClick = (): void => {
    console.log("Working");
  };
  return (
      <div className={styles.Container}>
        <Header/>
        <div className={styles.BottomRow}>
          <PanelGroup autoSaveId="example" direction="horizontal">
            {showFirstPanel && (
              <>
                <Panel
                  className={styles.Panel}
                  collapsible={true}
                  defaultSize={20}
                  order={1}
                >
                  <div className={styles.PanelContent}>
                    <LeftPane />
                  </div>
                </Panel>
                <ResizeHandle  onDoubleClick={() => setShowFirstPanel(!showFirstPanel)} />
              </>
            )}
            <Panel className={styles.Panel} collapsible={true} order={2}>
              <LoginForm />
            </Panel>
            {showLastPanel && (
              <>
                 <ResizeHandle  onDoubleClick={() => setShowLastPanel(!showLastPanel)} />
                <Panel
                  className={styles.Panel}
                  collapsible={true}
                  defaultSize={20}
                  order={3}
                >
                  <div className={styles.PanelContent}>
                    <MainPane />
                  </div>
                </Panel>
              </>
            )}
          </PanelGroup>
        </div>
      </div>


  );
}
