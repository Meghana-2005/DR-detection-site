import React from 'react'

const Pd = () => {
  return (
    <div className='bg-white font-semibold text-center  flex justify-center '>
    <div className='mt-4 mb-4 ml-4 mr-4 '>
      <div className='bg-orange-600 text-white py-5 px-5'>
        <h>Upload an image of your retina</h>
        <p>click on the submit button to know the RESULT</p>
        <div className='grid py-2'>
          <input type="file" />
          <div className='mt-4 bg-white rounded-full text-orange-600 py-1 px-3 justify-self-center hover:shadow-md hover:shadow-white'>
            <button>Submit</button>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Pd