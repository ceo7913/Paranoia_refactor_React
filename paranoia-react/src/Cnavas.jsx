import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
export const Cnavas = () => {
  const canvasRef = useRef(null); 
  const contextRef = useRef(null); // 캔버스 드로잉 컨텍스트를 참조

  const [canvasTag, setCanvasTag] = useState([]);
  const [ctx, setCtx] = useState(); // 캔버스의 드로잉 컨텍스트

  useEffect(() => {
    // canvasRef.current를 통해 현재 참조되는 DOM 요소에 접근 가능
    const canvas = canvasRef.current;
    // 이제 canvas를 사용하여 작업을 수행할 수 있음
    canvas.width = 1024;
    canvas.height = 576;

    const context = canvas.getContext('2d');
    context.storkeStyle = 'black' // 선의 색
    context.lineWidth = 2.5 // 선의 굵기
    contextRef.current = context

    setCanvasTag(canvas)
    setCtx(contextRef.current);
  }, []);
  
  console.log("ctx:", ctx);

  return (
    <CanvasWrap>
        <canvas ref={canvasRef}>

        </canvas>
    </CanvasWrap>
  )
}

const CanvasWrap = styled.div`
    overflow: auto;
    width: 1024px;
    height: 576px;
    box-sizing: border-box;
    position: relative;
    background: #ffffff;
    canvas{
      position: absolute;
    }
`


