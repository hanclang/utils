import { Button, Tooltip } from 'antd';
import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';

export default function Index(props: any) {
  const { text } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.offsetHeight;
      if (height > 44) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  }, [props.text]);

  return (
    <div
      className={styles.wrapper}
      style={{ overflow: showMore ? 'hidden' : 'inherit', height: showMore ? 42 : 'auto' }}
    >
      <Tooltip title={showMore ? text : null}>
        <div ref={divRef} className={showMore ? 'two-lines' : ''}>{text}</div>
      </Tooltip>
    </div>
  );
}
