import TypeIt, { TypeItOptions } from "typeit";
import { useEffect, useState } from "react";

import { makeGuid } from "utils/functions";

interface TypeItProps {
  strings?: string | string[];
  options?: TypeItOptions;
  className?: string;
  style?: React.CSSProperties;
  JSXStyles?: string;
}

const TypeItAnime = ({
  strings,
  options,
  className,
  style,
  JSXStyles,
}: TypeItProps) => {
  const [guid, setGuid] = useState("");

  useEffect(() => {
    setGuid(makeGuid());
  }, []);

  useEffect(() => {
    if (!guid) return;

    new (TypeIt as any)(`#${guid}`, {
      strings,
      ...options,
    }).go();
  }, [guid]);

  return (
    <>
      {guid && <span className={className} style={style} id={guid}></span>}
      <style jsx>{`
        ${JSXStyles}
      `}</style>
    </>
  );
};

export default TypeItAnime;
