"use client"
import useUser from '@/hooks/useUsers';
import React from 'react'

const page = () => {
    const { user, isLoading } = useUser();
    console.log(user)

  return (
    <div>page</div>
  )
}

export default page