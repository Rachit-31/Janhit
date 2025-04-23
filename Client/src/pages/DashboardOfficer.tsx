import React from 'react'
import { useSearchParams } from 'react-router-dom'

const DashboardOfficer = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');

  return (
    <div>
      
    </div>
  )
}

export default DashboardOfficer