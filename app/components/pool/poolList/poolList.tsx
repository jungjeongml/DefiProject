"use client"

import { useState } from "react"
import ConnectButton from "../../button/connectButton"
import styles from "./poolList.module.css"
import DepositModal from "../../modal/depositModal"

interface poolList {
  tokenName: string
  pairImg: string[]
  pairImgStyle: { width: string; height: string }
  stakingValue: string
  rewardImg: string
  rate: string
}

const PoolList = ({
  tokenName,
  pairImg,
  pairImgStyle,
  stakingValue,
  rewardImg,
  rate,
}: poolList) => {
  const [modal, setModal] = useState(false)

  const deposit = () => {
    setModal(true)
  }

  return (
    <>
      {modal && <DepositModal setModal={setModal} />}
      <div className={styles.container}>
        <div className={styles.pool}>
          <div className={styles.pairName}>
            <div className={styles.nameWrapper}>
              <div className={styles.imgWrapper}>
                {pairImg.map((img) => (
                  <img src={img} style={pairImgStyle} placeholder="blur" />
                ))}
              </div>
              <div>{tokenName}</div>
            </div>
          </div>
          <div className={styles.stakedLiquidity}>
            <div className={styles.stakeWrapper}>
              <div className={styles.subject}>Staked Liquidity</div>
              <div className={styles.value}>{stakingValue}</div>
            </div>
          </div>
          <div className={styles.rewardToken}>
            <div className={styles.rewardWrapper}>
              <div className={styles.subject}>Reward Token</div>
              <img src={rewardImg} style={pairImgStyle} placeholder="blur" />
            </div>
          </div>
          <div className={styles.rate}>
            <div className={styles.rateWrapper}>
              <div className={styles.subject}>APR</div>
              <div className={styles.value}>{rate}</div>
            </div>
          </div>
          <div className={styles.deposit}>
            <div className={styles.depositWrapper}>
              <ConnectButton
                width=""
                height="32px"
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
                onClick={deposit}
                web3Provider={""}
              >
                Deposit
              </ConnectButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PoolList
