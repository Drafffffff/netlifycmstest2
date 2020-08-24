import React, { useState } from "react"
import Styles from "../styles/home.module.scss"
import Nav from "../components/nav"
import Footer from "../components/footer"
// import { Link } from "gatsby"
const Layout = ({ title, children, url }) => {
  console.log(url)
  return (
    <div className={Styles.outContainer}>
      <Nav></Nav>
      <section className={Styles.secOne}>
        <div className={Styles.topLogo}>
          <div className={Styles.cube}>
            <div className={(Styles.cubeFace, Styles.cubeFront)}>
              <span>S</span>
            </div>
            <div className={(Styles.cubeFace, Styles.cubeBack)}></div>
            <div className={(Styles.cubeFace, Styles.cubeRight)}></div>
            <div className={(Styles.cubeFace, Styles.cubeLeft)}></div>
            <div className={(Styles.cubeFace, Styles.cubeTop)}></div>
            <div className={(Styles.cubeFace, Styles.cubeBottom)}></div>
          </div>
          <div className={Styles.language}>
            <span>中文</span>/<span>En</span>
          </div>
        </div>
        <div
          className={Styles.container}
          id="videoContainer"
          style={{ backgroundImage: `url(${url})` }}
        >
          <video loop muted autoPlay>
            <source
              src="http://pic.drafff.art/%E6%88%91%E4%BB%AC.mp4"
              type="video/mp4"
            />
          </video>
          <div id="imageCover" className={Styles.imageCover}></div>
          <div className={Styles.mainLogo}></div>
        </div>
      </section>
      <section className={Styles.secAbout}>
        <p>
          <em>Who?</em>我们是一群有志少年。
        </p>
        <p>
          <em>What?</em>我们在干什么？
        </p>
        <p>
          <em>How?</em>我们怎么做？
        </p>
      </section>
      <main className={Styles.mainContainer}>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
