import React, { useRef, useEffect, useState } from "react";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
import styles from './index.less'

export default function Index(props: any) {
  const { text } = props
  const hisRef = useRef<HTMLDivElement>(null)
  const [showBtn, setShowBtn] = useState(false)
  const [autoHeight, setAutoHeight] = useState(false)
  const [hidMore, setHidMore] = useState(false)

  useEffect(() => {
    if (hisRef.current) {
      const height = hisRef.current.offsetHeight
      if (height > 44) {
        setShowBtn(true)
      } else {
        setAutoHeight(true)
      }
    }
  }, [text])

  return <div className={styles.hisWrapper} style={{height: autoHeight ? 'auto' : 44}}>
  <div ref={hisRef}>{text}{
    hidMore ? (
      <div className={`${styles.moreWrapper} ${styles.t}`}>
      <div
      className={styles.text}
      onClick={() => {
        setShowBtn(true);
        setAutoHeight(false);
        setHidMore(false)
      }}
    >
      收起<UpOutlined style={{marginLeft: 4, color: '#CF7E34'}} />
    </div>
    </div>
    ) : null
  }</div>
  {showBtn ? <div className={styles.moreWrapper}>
    <div className={styles.bg}></div>
    <div onClick={() => {
      setHidMore(true)
      setShowBtn(false)
      setAutoHeight(true)
    }} className={styles.text}>更多<DownOutlined style={{marginLeft: 4, color: '#CF7E34'}} /></div>
  </div> : null}
</div>
}
