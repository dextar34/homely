import React from 'react'
import cn from '../../lib/cn'

const Container = ({children,className}) => {
  return (
    <div className={cn(className,'max-w-[1320px] mx-auto')}>
      {children}
    </div>
  )
}

export default Container
