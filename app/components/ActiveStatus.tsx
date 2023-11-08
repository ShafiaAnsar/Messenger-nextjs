'use client'

import useActiveChannel from "../hooks/useActiveChannel"

const ActiveStatus = () => {
  return (
    useActiveChannel()
  )
}

export default ActiveStatus