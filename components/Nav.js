import styles from './Nav.module.css'
import Web3 from "web3"
import Web3Modal from "web3modal"

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

async function connectWallet() {
  console.log('connectWallet');

  const providerOptions = {};
  const web3Modal = new Web3Modal({
    providerOptions
  });
  
  const provider = await web3Modal.connect();
  console.log(`provider: ${provider}`);
  
  const web3 = new Web3(provider);
  console.log(`web3: ${web3}`);
  
  let address = window.web3.currentProvider.selectedAddress;
  console.log('address ' + address);

  document.getElementById('connect-wallet-button').innerHTML = address;

  web3.eth.getBalance(address, function(err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(web3.utils.fromWei(result, "ether") + " ETH")
    }
  })
}
