import React from 'react'
import Image from 'next/image'
import jose from '../../public/jose.jpeg'

function Articulo() {
  return (
<div className='flex flex-col '> 
  <div className="mt-4 flex rounded-xl pl-2  max-h-60 min-h-60 items-center justify-center h-screen w-full">
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex w-full md:w-2/3 items-center justify-center">
        <Image alt='dibujos' height={200} width={200} src={jose} className="w-full max-h-36 md:max-h-60 object-cover  rounded-xl"/>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center max-h-24 overflow-x-scroll md:max-h-60" >
        <p className="text-pink-900 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde molestias vel perspiciatis suscipit placeat dolore veritatis impedit porro! Architecto nesciunt possimus tempora soluta porro dolor rem explicabo deleniti? Natus, magni.</p>
      </div>
    </div>
  </div>
        <p className="text-pink-900 text-lg mb-4 p-2">Fecha de creación: 12 de febrero 2023</p>

</div>
  )
}

export default Articulo