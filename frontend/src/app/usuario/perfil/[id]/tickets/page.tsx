import BackButton from '@/components/atoms/BackButton'
import React from 'react'
import MaintenancePage from '@/components/atoms/MaintenancePage'
import { Typography } from '@mui/material'

const page = () => {
  return (
    <div>
      <BackButton />
      <Typography variant="h3" component="h1"  px={3}>
        Mis Tickets!
      </Typography>
      <MaintenancePage />
    </div>
  )
}

export default page