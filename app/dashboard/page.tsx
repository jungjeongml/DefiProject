import styles from "./page.module.css"

const DashBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.subject}>
          <h2>CookieSwap Info & Analytics</h2>
        </div>
        <div className={styles.total}>
          <div className={styles.amount}>
            <h3>Liquidity</h3>
            <h1>64,146,968.8 ASD</h1>
          </div>
          <div className={styles.staking}>
            <h3>Total amount of Staking</h3>
            <h1>45,471,451 ASD</h1>
          </div>
        </div>
      </div>
      <div className={styles.tokens}>
        <div className={styles.subject}>
          <h2>Top Tokens</h2>
        </div>
        <div className={styles.tokenList}>
          <div className={styles.info}>
            <div className={styles.numbering}>#</div>
            <div className={styles.tokenName}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
