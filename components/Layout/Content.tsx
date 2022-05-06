import React from "react";

interface ContentProps {
  children: any;
  style?: React.CSSProperties;
}

const Content = ({ children, style }: ContentProps) => {
  return (
    <>
      <div className="content" style={style}>
        {children}
      </div>
      <style jsx>{`
        .content {
          /* margin-top: 2rem; */
          width: 100%;
          height: 100%;
          /* display: flex; */
          justify-content: center;
          overflow-y: auto;
          overflow-x: hidden;
          -ms-overflow-style: none;
        }
        .content::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Content;
