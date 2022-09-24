import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { APP_CONTENT_CLASS_NAME } from "../../common/constant";

import styles from "./index.module.scss";

export interface HeaderItem {
  text: string;
  id: string;
  level: number;
  offsetTop: number;
}

const CLASS_NAME_CONNECTOR = "@";
const SCROLL_DELAY_TIME = 100;
const OFFSET_TOP_RANGE = 50;

const Director = () => {
  const [headers, setHeaders] = useState<HeaderItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const getHeaders = () => {
      const _headers: HeaderItem[] = [
        ...document.querySelectorAll(".header"),
      ].map((header: HTMLElement, index) => {
        const level = Number(header.tagName.replace(/[a-z]+/gi, ""));
        const text = header.innerText;
        const id = [...header.classList.values(), index].join(
          CLASS_NAME_CONNECTOR
        );
        return {
          id,
          level,
          text,
          offsetTop: header.offsetTop,
        };
      });
      setHeaders(_headers);
      setActiveId(_headers[0].id);
    };

    setTimeout(() => {
      getHeaders();
    });
  }, []);

  useEffect(() => {
    if (!headers.length) {
      return;
    }
    const scrollContainer = document.querySelector(
      `.${APP_CONTENT_CLASS_NAME}`
    );

    let timestamp = 0;
    const handleScroll = (e: Event) => {
      if (e.timeStamp - timestamp < SCROLL_DELAY_TIME) {
        return;
      }
      timestamp = e.timeStamp;
      const scrollTop = (e.target as HTMLElement).scrollTop;
      const minTop = scrollTop - OFFSET_TOP_RANGE;
      const maxTop = scrollTop + OFFSET_TOP_RANGE;
      const headerInRange = headers.find((item) => {
        return item.offsetTop >= minTop && item.offsetTop <= maxTop;
      });
      if (headerInRange) {
        setActiveId(headerInRange.id);
      }
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [headers]);

  if (!headers.length) {
    return null;
  }

  const handleClick = (headerItem: HeaderItem) => {
    const _classes = headerItem.id.split(CLASS_NAME_CONNECTOR).slice(0, -1);
    const selector = _classes.reduce((_className, current) => {
      if (_className) {
        return `${_className}.${current}`;
      }
      return `.${current}`;
    }, "");
    const matchedHeader = [...document.querySelectorAll(selector)].find(
      (header: HTMLElement) => {
        return header.innerText === headerItem.text;
      }
    );
    if (matchedHeader) {
      matchedHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveId(headerItem.id);
  };

  const minLevel = Math.min.apply(null, headers.map((i) => i.level))
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>目录</header>
      <div className={styles.content}>
        {headers.map((item) => {
          const currentLevel = item.level - minLevel + 1;
          return (
            <div
              className={classNames(styles.item, {
                [styles.active]: item.id === activeId,
              })}
              key={item.id}
              style={{
                paddingLeft: currentLevel * 8,
                fontWeight: 600 - item.level * 50,
              }}
              onClick={() => handleClick(item)}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Director;
