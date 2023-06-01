import { useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "./ResizeHandle";
import styles from "./styles.module.css";

import ArticleBox from "./components/ArticleBox";

export default function App() {
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(true);


  const articleBoxes = [
    {
      id: 1,
      imageSrc: 'images/Be1 Tier1.svg',
      articleLink: 'https://example.com/article1',
      content: {
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        references: "References sds boudart"
      }
    },
    {
      id: 2,
      imageSrc: 'images/Be1 Tier2.svg',
      articleLink: 'https://example.com/article2',
    },
    {
      id: 3,
      imageSrc: 'images/Be1 Tier3.svg',
      articleLink: 'https://example.com/article3',
    },
    {
      id: 4,
      imageSrc: 'images/Be1 Tier4.svg',
      articleLink: 'https://example.com/article4',
    },
    {
      id: 5,
      imageSrc: 'images/Be1 Tier5.svg',
      articleLink: 'https://example.com/article5',
    },
    {
      id: 6,
      imageSrc: 'images/Be1 Tier6.svg',
      articleLink: 'https://example.com/article6',
    },
    {
      id: 7,
      imageSrc: 'images/Be1 Tier7.svg',
      articleLink: 'https://example.com/article7',
    },
    {
      id: 8,
      imageSrc: 'images/Be1 Tier8.svg',
      articleLink: 'https://example.com/article8',
    },
    {
      id: 9,
      imageSrc: 'images/Be1 Tier9.svg',
      articleLink: 'https://example.com/article9',
    },
    // Add more article boxes as needed
  ];
  
  return (
    <div className={styles.Container}>
      <div className={styles.TopRow}>
        <a
          className={styles.Link}
          href="https://github.com/bvaughn/react-resizable-panels"
        >
          github.com/bvaughn/react-resizable-panels
        </a>

        <p>
          <button
            className={styles.Button}
            onClick={() => setShowFirstPanel(!showFirstPanel)}
          >
            {showFirstPanel ? "hide" : "show"} top panel
          </button>
          &nbsp;
          <button
            className={styles.Button}
            onClick={() => setShowLastPanel(!showLastPanel)}
          >
            {showLastPanel ? "hide" : "show"} bottom panel
          </button>
        </p>
      </div>
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
                  {/* <div className="article-list"> */}
                    {articleBoxes.map((box) => (
                      <ArticleBox
                        key={box.id}
                        imageSrc={box.imageSrc}
                        articleLink={box.articleLink}
                      />
                    ))}
                  {/* </div> */}
                </div>
              </Panel>
              <ResizeHandle />
            </>
          )}
          <Panel className={styles.Panel} collapsible={true} order={2}>
            <div className={styles.PanelContent}>middle</div>
          </Panel>
          {showLastPanel && (
            <>
              <ResizeHandle />
              <Panel
                className={styles.Panel}
                collapsible={true}
                defaultSize={20}
                order={3}
              >
                <div className={styles.PanelContent}>bottom</div>
              </Panel>
            </>
          )}
        </PanelGroup>
      </div>
    </div>
  );
}
