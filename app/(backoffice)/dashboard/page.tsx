'use client'

import Conteo from '@/components/dashboard/Conteo';
import React from 'react'

function DashboardPage() {
  return (
    <Conteo moneyCount={"2"} restCount={'100'} />
  )
}

export default DashboardPage