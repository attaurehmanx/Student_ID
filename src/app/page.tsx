import React from 'react'
import Card from './components/Card'

const Home = () => {
  return (
    <>
      <h1 className='text-center text-3xl text-gray-700 mt-32 hover:text-blue-500'>Student Identification Card</h1>

      
      <div className='grid grid-cols-1 gap-4  bg-gray-400 mx-96 rounded-3xl p-5 h-1/2' >
        <div className= 'border-r-gray-500 border-2 w-full h-44 bg-white rounded-lg pl-4 pt-4 mt-10 hover:bg-blue-500' >
          <Card name='Attaurehman'
            age={ 19 }
            distance='No'
            rollno='00437330'
            class='Monday 2 to 5'
            campus='Main' />
            
        </div>
       

        
        
        <div className= 'border-gray-500 border-2 w-full h-44 bg-white rounded-lg pl-4 pt-4 mt-10 hover:bg-blue-500'>
          <Card name='naveed'
            age={ 17 }
            distance='No'
            rollno='00123456'
            class='Monday 2 to 5'
            campus='Main' />
        </div>
          

          <div className='border-gray-500 border-2 w-full h-44 bg-white rounded-lg pl-4 pt-4 mt-10 hover:bg-blue-500' >
        
          <Card name='Nazeer'
            age={ 20 }
            distance='No'
            rollno='00234556'
            class='Monday 2 to 5'
            campus='Main' />
        </div> 
        </div>
      
    </>
  )
}

export default Home