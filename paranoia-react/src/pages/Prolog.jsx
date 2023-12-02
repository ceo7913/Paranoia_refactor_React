import React from 'react'
import styled from 'styled-components'
import { BiCaretRight } from "react-icons/bi"

export const Prolog = () => {
  return (
    <PrologPageBox>
    <div className='prologBox'>
        <div className='prologText'>1972년 경기도 연천에 한 폐병원에서 비명소리가 들렸다는 신고가 들어온다.

            해당 병원은 1970년 6월 6일 병원장이 약물 과다 복용으로 사망한 뒤 계속 비워져 있는 것으로 확인되어 신고를 받은 상황실에서는 비를 피해 들어간 노숙자의 고성방가인 것으로 추측했지만

            1971년 2월 1일 해당 지역 인근에서 발생한 시체 집단 유기 사건과 관련이 있다고 파악한 한 형사는 해당 병원을 조사하게 되는데…
        </div>
        <button>SKIP<BiCaretRight/></button>
    </div>
</PrologPageBox>
  )
}

const PrologPageBox = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width: 1024px;
    height: 576px;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .prologBox{
      font-family: 'NeoDunggeunmo';
      color: #dadce0;
      font-size: 23px;
      line-height: 40px;
      .prologText{
        width: 718px;
        height: 350px;
        filter: drop-shadow(0 0 2px #e4d808);
        white-space: pre-line;
        margin-left: 150px;
        margin-right: 150px;
      }
      button{
        display: flex;
        gap: 8px;
        font-family: 'NeoDunggeunmo';
        background-color: transparent;
        border: transparent;
        box-sizing: border-box;
        color: #e0dbda;
        filter: drop-shadow(0 0 2px #e4d808);
        font-size: 27px;
        line-height: 1.25rem;
        text-decoration: none #D1D5DB solid;;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 134px;
        height: 39.59px;
        margin-left: 740px;
        margin-top: 50px;
        &:hover{
          background-repeat: no-repeat;
          background-image: url("/img/playImage/findIt.png");
          filter: none;
          background-color: transparent;
          color: rgba(0, 0, 0, 0);
          background-size: cover;
          border-color: transparent;
        }
        &:focus{
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        &:focus-visible{
          box-shadow: none;
        }
      }
    }
`
