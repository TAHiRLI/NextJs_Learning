import React from 'react'
import styles from "./Layout.module.scss"
import clsx from 'clsx'


const Layout =({children,bgColor})=> {
  return (
    <>
        <div className={`${styles.nav} ${clsx( {[styles.footer]: bgColor === "bg-danger"})}`}>Navbar</div>
        <div>
            {children}
        </div>
        <div className={styles.footer}>footer</div>
    </>
  )
}

export default Layout


