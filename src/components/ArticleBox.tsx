import React from 'react';

interface ArticleBoxProps {
  imageSrc: string;
  articleLink: string;
}

const ArticleBox: React.FC<ArticleBoxProps> = ({ imageSrc, articleLink }) => {
    const boxStyle: React.CSSProperties = {
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '70px',
        height: '70px',
      };
      
      
      console.log(boxStyle.backgroundImage);
  return (
    <a href={articleLink} target="_blank" rel="noopener noreferrer">
      <div className="article-box" style={boxStyle} />
    </a>
  );
};

export default ArticleBox;

