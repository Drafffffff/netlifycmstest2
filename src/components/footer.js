import React from "react"
import styles from "../styles/footer.module.scss"
export default function footer() {
  return (
    <div className={styles.container}>
      <span>Contact</span>
      
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}
