import React from 'react'
import MovingText from 'react-moving-text'
 
const MyAnimatedTypo = () => {
  return (
    <MovingText
      type="animation_type"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
      Content...
    </MovingText>
  )
}