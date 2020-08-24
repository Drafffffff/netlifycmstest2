import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styles from "../styles/home.module.scss"
export default function Nav() {
  const [pageHeight, setpageHeight] = useState()

  useEffect(() => {
    setpageHeight(document.body.scrollHeight - window.screen.height * 0.9)
  })
  // console.log(pageHeight)
  return (
    <div className={styles.nav} style={{ height: pageHeight }}>
      <div className={styles.navContainer}>
        <Link className={styles.navLink} to={"/home"}>
          About
        </Link>
        <Link className={styles.navLink} to={"/home"}>
          Contact
        </Link>
      </div>
    </div>
  )
}
