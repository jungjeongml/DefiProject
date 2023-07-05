import { Amount, IsHave, Line, Ticket } from "../styled/page.styled"

const HaveBox = () => {
  return (
    <>
      <IsHave>
        <Amount>
          <div>Current ASD</div>
          <div>
            <div>0 ASD</div>
            <p>등록 비용 500ASD</p>
          </div>
        </Amount>
        <Line></Line>
        <Ticket>
          <div>Current Ticket</div>
          <div>
            <div>0 vKSP</div>
            <p>최소 보유 투표권 vKSP</p>
          </div>
        </Ticket>
      </IsHave>
    </>
  )
}

export default HaveBox
