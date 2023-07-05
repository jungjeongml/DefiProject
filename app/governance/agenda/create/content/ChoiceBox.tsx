"use client"

import { useState } from "react"
import { Choice, ChoiceText, ChoiceWrap } from "../styled/page.styled"
import ChoiceModal from "./ChoiceModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"

const ChoiceBox = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("Proposal Type")

  return (
    <>
      <ChoiceWrap>
        <Choice onClick={() => setOpen(true)}>
          <ChoiceText>
            <strong>{text}</strong>
          </ChoiceText>
          <FontAwesomeIcon icon={faArrowAltCircleDown} color="#bbb" />
          {open && (
            <ChoiceModal setOpen={setOpen} setText={setText}></ChoiceModal>
          )}
        </Choice>
      </ChoiceWrap>
    </>
  )
}

export default ChoiceBox
