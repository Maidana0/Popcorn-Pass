import BackButton from '@/components/atoms/BackButton'
import React from 'react'
import { Typography } from '@mui/material'
import MaintenancePage from '@/components/atoms/MaintenancePage'

const page = () => {
  return (
    <div>
      <BackButton />
      <Typography variant="h3" component="h1"  px={3}>
        Mis Comentarios!
      </Typography>
      <MaintenancePage />
    </div>
  )
}

export default page