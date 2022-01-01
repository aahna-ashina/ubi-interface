import styles from './Nav.module.css'

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <img src="/logo.png" alt="UBI Logo" className={styles.logo} />
        <button className={styles.button} id="connect-wallet-button" onClick={connectWallet}>Connect Wallet</button>
      </nav>
    </>
  )
}

function connectWallet() {
  console.log('connectWallet');

}
