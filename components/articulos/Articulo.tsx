import React from 'react'
import Image from 'next/image'
import jose from '../../public/jose.jpeg'

function Articulo() {
  return (
    <div className="flex items-start gap-6">
    <Image
      src="/jose.jpeg"
      alt="Image 1"
      width={400}
      height={400}
      className="rounded-lg overflow-hidden aspect-square object-cover"
    />
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Imagen 1</h3>
      <p className="text-muted-foreground">
        Esta es la descripción de la primera imagen. Aquí puedes agregar más detalles sobre lo que se muestra en la
        imagen.
      </p>
    </div>
  </div>

  )
}

export default Articulo