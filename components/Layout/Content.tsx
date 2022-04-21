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
            text-align: center;
        }
      `}</style>
    </>
  );
};

export default Content;
