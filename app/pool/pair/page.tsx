import PoolIntro from "@/app/components/pool/intro/poolIntro"
import styles from "./page.module.css"
import PoolList from "@/app/components/pool//poolList/poolList"

const pairList = [
  {
    tokenName: "ASD-USDT LP",
    pairImg: [
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
    ],
    pairImgStyle: { width: "28px", height: "28px" },
    stakingValue: "$ 39,203",
    rewardImg:
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
    rate: "25.38 %",
  },
  {
    tokenName: "ASD-USDT LP",
    pairImg: [
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
    ],
    pairImgStyle: { width: "28px", height: "28px" },
    stakingValue: "$ 39,203",
    rewardImg:
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
    rate: "25.38 %",
  },
  {
    tokenName: "ASD-USDT LP",
    pairImg: [
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
    ],
    pairImgStyle: { width: "28px", height: "28px" },
    stakingValue: "$ 39,203",
    rewardImg:
      "https://ss.klayswap.com/data/img/token/0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654.svg",
    rate: "25.38 %",
  },
]

const PairPool = () => {
  return (
    <div className={styles.container}>
      <PoolIntro />
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          {pairList.map((pool) => (
            <PoolList
              key={pool.tokenName}
              tokenName={pool.tokenName}
              pairImg={pool.pairImg}
              pairImgStyle={pool.pairImgStyle}
              stakingValue={pool.stakingValue}
              rewardImg={pool.rewardImg}
              rate={pool.rate}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PairPool
