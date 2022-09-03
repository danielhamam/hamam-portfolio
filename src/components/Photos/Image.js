import { useEffect, useRef } from "react";
import { getImageList } from "./imageList";

export const Image = ({ src, rootElement, setImageList }) => {
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const currentElement = ref.current;
    if (currentElement) {
      observer.current = new IntersectionObserver((entries) => { // callback takes list of entries (all the things that have changed -- stuff that has intersected or unintersected)
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.2) { // intersectionRatio = what percentage of the item is on our screen (1 means 100% on the screen)
              ref.current.src = src;
              observer.current.unobserve(currentElement);
              setImageList((imageList) => [...imageList, ...getImageList()]);
            }
          });
        },
        {
          root: rootElement,
          threshold: [0, 0.5, 1]
        }
      );

      observer.current.observe(currentElement); // "observe when this thing changed intersections"
    }
    return () => {
      observer.current.unobserve(currentElement);
    };
  }, [ref]);

  return <img ref={ref} width="200px" height="200px" alt="" />;
};
