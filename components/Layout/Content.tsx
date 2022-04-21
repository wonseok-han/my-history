import React from "react";

interface ContentProps {
  children: any;
}

const Content = ({ children }: ContentProps) => {
  return (
    <>
      <div className="content">{children}</div>
      <style>{`
        .content {
          margin-top: 2rem;
          width: 100%;
          height: 100%; 
          display: flex;
          justify-content: center;
          overflow: auto;
          -ms-overflow-style: none;
        }
        .content::-webkit-scrollbar {
          display:none;
        }
      `}</style>
    </>
  );
};

export default Content;
