import React from 'react'
import bg from '../../assets/bg.jpg'
const Home = () => {
  return (
    <div className='bg-white pt-16 md:pt-24 text-orange-600 text-center font-semibold'>
      <div className='md:grid grid-cols-[1.5fr_1fr] place-content-center'>
          
          
          <div className='flex flex-col place-content-center justify-items-center py-10 px-4 text-xl'>
            <h>VISION CARE, LIFE CARE</h>
            <p className='text-center py-3'>A healthy lifestyle is key to managing diabetes, but what happens when diabetes silently damages your eyes? Diabetic Retinopathy (DR) is one of the leading causes of blindness among diabetic patients. Without early detection, it can progress undetected until significant vision loss occurs. Current diagnostic methods can be slow and costly, and sometimes, early signs are missed.

            Now, with the power of AI-driven technology, early detection is more accessible than ever. Our innovative system uses advanced AI based models to analyze retinal images, accurately identifying the stages of DR. This approach allows healthcare providers to diagnose the condition early, enabling timely treatment and reducing the risk of severe vision impairment. By offering faster and more reliable results, the model aims to improve patient outcomes and ease the workload on medical professionals.</p>
          </div>
          <div className='pb-12 md:py-12 px-4 place-content-center'>
            <img src={bg} className='h-30 w-30 object-contain rounded-full '></img>
      
          </div>
          
        
      </div>
    </div>
  )
}

export default Home
