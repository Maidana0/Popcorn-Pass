import BackButton from '@/components/atoms/BackButton'
import MaintenancePage from '@/components/atoms/MaintenancePage'
import { Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <div>
      <BackButton />
      <Typography variant="h3" component="h1" px={3}>
        Mi Perfil
      </Typography>
      <MaintenancePage />
    </div>
  )
}

export default page