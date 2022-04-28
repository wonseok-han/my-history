import TypeIt, { TypeItOptions } from "typeit";
import { useEffect, useState } from "react";

import { makeGuid } from "utils/functions";

interface TypeItProps {
  strings?: string | string[];
  options?: TypeItOptions;
  className?: string;
  style?: React.CSSProperties;
  JSXStyles?: string;
  handleTypeItInstance?: (typeit: any) => void;
  onClick?: () => void;
}

const TypeItAnime = ({
  strings,
  options,
  className,
  style,
  JSXStyles,
  handleTypeItInstance,
  onClick,
}: TypeItProps) => {
  const [guid, setGuid] = useState("");

  useEffect(() => {
    setGuid(makeGuid());
  }, []);

  useEffect(() => {
    if (!guid) return;

    const typeit = new (TypeIt as any)(`#${guid}`, {
      strings,
      ...options,
    });

    handleTypeItInstance?.(typeit);
  }, [guid]);

  return (
    <>
      {guid && (
        <span
          className={className}
          style={style}
          id={guid}
          onClick={onClick}
        ></span>
      )}
      <style jsx>{`
        ${JSXStyles}
      `}</style>
    </>
  );
};

export default TypeItAnime;
