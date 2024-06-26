'use client'

import Conteo from '@/components/dashboard/Conteo';
import React from 'react'
import Link from  'next/link'

function DashboardPage() {
  return (

    <div>

      <Conteo moneyCount={"2"} restCount={'100'} />

    </div>
  )
}

export default DashboardPage