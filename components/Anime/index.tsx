/* eslint-disable react-hooks/rules-of-hooks */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import anime, { AnimeInstance } from "animejs";

import { v4 as uuidv4 } from "uuid";

interface AnimeProps {
  className?: string;
  style?: React.CSSProperties;
  config?: any;
  children?: React.ReactNode;
}

// Need to use a forwardRef, obtaining a ref from the parent to allow the use of controls.
const Anime = forwardRef(
  ({ className, style, config, children }: AnimeProps, ref: any) => {
    // if (typeof window === "undefined") {
    //   return <div className={className} style={style} />;
    // }

    const animeInstance = useRef<AnimeInstance>(anime({}));
    const uuid = uuidv4();

    useEffect(() => {
      // Cleanup any other wandering anime tags.
      anime.remove(`.__anime__${uuid}`);

      const myAnimeInstance = anime({
        targets: document.querySelectorAll(`.__anime__${uuid}`),
        ...config,
      });

      animeInstance.current = myAnimeInstance;
    }, [className, style, config, children]);

    // Setup controls here, the user can access these if they use a ref.
    useImperativeHandle(ref, () => ({
      restart() {
        animeInstance.current.restart();
      },
      play() {
        animeInstance.current.play();
      },
      pause() {
        animeInstance.current.pause();
      },
      reverse() {
        animeInstance.current.reverse();
      },
      seek(timeStamp: number) {
        animeInstance.current.seek(timeStamp);
      },
      seekPercent(scrollPercent: number) {
        animeInstance.current.seek(
          (scrollPercent / 100) * animeInstance.current.duration
        );
      },
    }));

    // Ensure that props.children is always an array so .map works.
    const childArray = Array.isArray(children) ? children : [children];

    // Attach __anime__id to each child so Anime.js can track and manipulate the elements.
    // Note that it is important that every child has a unique key prop or else hotloading will produce strange behaviour.
    const styleChildren = (children: any) => {
      return React.Children.map(children, (child, key) =>
        React.cloneElement(child, {
          className: `${child?.props?.className} __anime__${uuid}`,
          key: `__anime__${uuid}__${key}`,
        })
      );
    };

    return (
      // This outer <div></div> appears as <Anime></Anime> to the user.
      <div style={{ ...style }} className={`${className}`}>
        {/* The children are the individual components or divs that the user passes in. */}
        {styleChildren(childArray)}
      </div>
    );
  }
);
Anime.displayName = "Anime";

// Expose anime to the user so they can do things such as anime.random(0, 270) for the config for Anime components if they want.
export { Anime as default, anime };
