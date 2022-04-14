import styles from '../styles/NavBar.module.scss'
import logo from '../public/logo.png'
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}><Image src={logo} alt="BitPolimi Logo" /></div>
      <div className={styles.spacer}></div>
      <div className={styles.section}>News</div>
      <div className={styles.section}>Progetti</div>
      <div className={styles.section}>Contatti</div>
    </div>
  )
}

export default NavBar