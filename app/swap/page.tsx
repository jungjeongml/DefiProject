"use client"

import { useState } from "react"
import ConnectButton from "../components/button/connectButton"
import styles from "./page.module.css"
import ConnectWalletModal from "../components/modal/connectWalletModal"

const Swap = () => {
  const [connectModal, setConnectModal] = useState(false)

  const selectWallet = () => {
    setConnectModal(true)
  }

  return (
    <div className={styles.container}>
      {connectModal && <ConnectWalletModal setConnectModal={setConnectModal} />}
      <div className={styles.swapWrapper}>
        <div className={styles.header}>
          <div className={styles.info}>
            <h3>Swap</h3>
            <span>Trade tokens in an instant</span>
          </div>
          <div className={styles.options}>
            <button className={styles.setting}>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                color="#7a6eaa"
                fill="#7a6eaa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.fromTo}>
            <div className={styles.select}>
              <div className={styles.token}>
                <img
                  src="	https://assets.pancakeswap.finance/web/native/5.png"
                  style={{ width: "24px" }}
                />
                <div>GOR</div>
                <img />
              </div>
              <div className={styles.balance}>Balance: 0</div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.inputLayout}>
                <input placeholder={"0.0"} className={styles.inputBox} />
              </div>
              <div className={styles.exchange}>
                <div className={styles.rateText}>~539,698,250.39 USD</div>
              </div>
            </div>
          </div>
          <div className={styles.arrowWrap}>
            <button className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="30px"
                color="#1fc7d4"
                fill="#1fc7d4"
                viewBox="0 0 24 24"
                className={styles.arrowImg}
              >
                <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
              </svg>
            </button>
          </div>
          <div className={styles.fromTo}>
            <div className={styles.select}>
              <div className={styles.token}>
                <img
                  src="	https://assets.pancakeswap.finance/web/native/5.png"
                  style={{ width: "24px" }}
                />
                <div>GOR</div>
                <img />
              </div>
              <div className={styles.balance}>Balance: 0</div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={styles.inputLayout}>
                <input placeholder={"0.0"} className={styles.inputBox} />
              </div>
              <div className={styles.exchange}>
                <div className={styles.rateText}>~539,698,250.39</div>
              </div>
            </div>
          </div>
          <div className={styles.slippageWrapper}>
            <div className={styles.slipText}>Slippage Tolerance</div>
            <div className={styles.slipRate}>0.5%</div>
          </div>
          <ConnectButton
            width="100%"
            height="48px"
            color="#fff"
            padding="0px 16px"
            background="#1FC7D4"
            border="none"
            borderRadius="16px"
            fontSize="16px"
            fontFamily=""
            fontWeight="600"
            cursor="pointer"
            letterSpacing="0.03rem"
            onClick={selectWallet}
            web3Provider={""}
          >
            Connect Wallet
          </ConnectButton>
        </div>
      </div>
    </div>
  )
}

export default Swap
