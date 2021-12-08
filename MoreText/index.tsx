import { Button } from 'antd';
import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';

export default function Index(props: any) {
  const { text } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);
  const [hidMore, setHidMore] = useState(false)

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.offsetHeight;
      if (height > 42) {
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
      
      {showMore ? (
        <div style={{float: 'right'}} className={styles.text}>
          <span className={styles.btnText} onClick={() => {
          setShowMore(false);
          setHidMore(true);
        }} >查看更多</span>
        </div>
        
      ) : null}
      <div ref={divRef} className={styles.t}>{text}{
        hidMore ? (
          <Button
          type="link"
          onClick={() => {
            setShowMore(true);
            setHidMore(false);
          }}
        >
          收起
        </Button>
        ) : null
      }</div>
    </div>
  );
}
