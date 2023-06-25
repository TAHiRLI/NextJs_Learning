import React from 'react'
import styles from "./Layout.module.scss"


const Layout =({children})=> {
  return (
    <>
        <div className={styles.nav}>Navbar</div>
        <div>
            {children}
        </div>
        <div className='footer'>footer</div>
    </>
  )
}

export default Layout


