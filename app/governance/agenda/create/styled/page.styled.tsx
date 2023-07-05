"use client"

import { styled } from "styled-components"

export const Container = styled.div`
  padding: 30px 50px;
  background: #fff;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 150px;
  border: 1px solid #000;
`

export const Title = styled.h1`
  margin-bottom: 20px;
`

export const IsHave = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin-bottom: 20px;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
`

export const Line = styled.div`
  width: 1px;
  height: 20px;
  border: none;
  margin: 0 20px;
  background: #000;
`

export const Ticket = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
`

export const ChoiceWrap = styled.div`
  width: 100%;
  padding: 20px 20px;
  border: 1px solid #000;
`

export const Choice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
`

export const ChoiceText = styled.h4``

export const ModalWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  background: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 10;
  border: 1px solid #000;
  top: 44px;
  left: -21px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: dodgerblue;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LevelWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid #eee;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
