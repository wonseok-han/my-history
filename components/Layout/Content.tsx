import React from "react";

interface ContentProps {
  children: React.ReactElement;
}

const Content = ({ children }: ContentProps) => {
  return (
    <>
      <div className="content">{children}</div>
      <style>{`
        .content {
            margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export default Content;
