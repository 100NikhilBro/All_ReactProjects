import React from 'react'

const Dashboard = ({login}) => {
  return (
    
    <div className='flex justify-center pt-96'>
       
      { login &&
        <h1>Welcome to Dash Page</h1>}
    </div>
  )
}

export default Dashboard
