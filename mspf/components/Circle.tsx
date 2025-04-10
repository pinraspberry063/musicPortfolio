import React from 'react'

const Circle = (radius: number, color: string, x: number, y: number) => {
  return (
    <svg width={x + radius * 2} height={y + radius * 2}>
        <circle
            cx={x + radius}
            cy={y + radius}
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="transparent"

        />
    </svg>
  )
}

export default Circle