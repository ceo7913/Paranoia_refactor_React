import React from 'react'
import styled from 'styled-components'

export const GameOver = () => {
  return (
    <GameOverPage>
      GameOver
    </GameOverPage>
  )
}

/* 
public 경로에 있는 image 접근 방법
const imagePath = process.env.PUBLIC_URL + '/img/background/ded_image.png';
background-image: url(${imagePath}); 
*/

const GameOverPage = styled.div`
    // 그냥 이렇게도 접근 가능하다
    background-image: url('/img/background/ded_image.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 1024px;
    height: 576px;
    font-family: 'NeoDunggeunmo';
    font-size: 150px;
    color: white;
`