"use client"

import RouterButton from "@/app/components/button/routerButton"
import styles from "./firstContent.module.css"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import IsLogin from "@/app/components/login/isLogin"
import { useEffect, useState } from "react"

const FirstContent = () => {
  const [accounts, setAccounts] = useState<string[]>([])
  const router = useRouter()
  const account = useSelector((state: RootState) => state.account)
  console.log("account:", account) // account: []
  console.log("account.length:", account.length)

  useEffect(() => {
    setAccounts(account)
  }, [account])

  return (
    <div className={styles.container}>
      {accounts.length > 0 && <IsLogin />}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h2 className={styles.subject}>The moon is made of cookies.</h2>
          <h2 className={styles.content}>
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h2>
          <div className={styles.buttonWrap}>
            <RouterButton
              width=""
              height="48px"
              color="#fff"
              padding="0px 24px"
              background="#1FC7D4"
              border="none"
              borderRadius="16px"
              fontSize="16px"
              fontFamily=""
              fontWeight="600"
              cursor="pointer"
              letterSpacing="0.03rem"
              onClick={() => {}}
            >
              Connect Wallet
            </RouterButton>
            <RouterButton
              width=""
              height="48px"
              color="#1FC7D4"
              padding="0px 24px"
              background="#fff"
              border="none"
              borderRadius="16px"
              fontSize="16px"
              fontFamily=""
              fontWeight="600"
              cursor="pointer"
              letterSpacing="0.03rem"
              onClick={() => {
                router.push("/swap")
              }}
            >
              Trade Now
            </RouterButton>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src="https://assets.pancakeswap.finance/web/images/astronaut-bunny.png"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default FirstContent
