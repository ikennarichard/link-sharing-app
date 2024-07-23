import React from 'react'
import Logo from '../ui/icons/logo'
import Devlinks from '../ui/icons/devlinks'

export default function LogoText() {
  return (
    <h1 className='flex items-center gap-1'>
      <Logo />
      <Devlinks />
    </h1>
  )
}
