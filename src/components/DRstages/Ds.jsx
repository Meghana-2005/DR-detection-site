import React from 'react'
import nodri from '../../assets/nodri.png'
import mildi from '../../assets/mildi.png'
import severei from '../../assets/severei.png'
import moderatei from '../../assets/moderatei.png'
import poliferativei from '../../assets/poliferativei.png'

const Ds = () => {
  return (
    <div className='bg-orange-600 text-white text-center font-semibold ml-4 mr-4 '>
      <div className='mt-2'>
        <h>Stages Of DR</h>
      </div>
      
      <div className='bg-white text-orange-600 mt-5 mb-5 rounded-3xl'>
        <div className='py-4'>
          <img src={nodri} className='flex h-30 w-30 object-contain rounded-full justify-self-center'></img>

        </div>
        
        <h>no dr</h>
        <p className='pb-2'>Eye is healthy</p>
      </div>
      <div className=' text-orange-500  md:grid grid-cols-2 gap-10 '>
        <div className='bg-white mb-5 mt-5 rounded-3xl'>
          <div className='py-4'>
            <img src={mildi} className='flex h-30 w-30 object-contain rounded-full justify-self-center'></img>

          </div>
          
          <h>mild dr</h>

          <p className='pb-2'>Early stage with small areas of swelling in the blood vessels of the retina, often showing microaneurysms.</p>

        </div>
        <div className='bg-white mb-5 mt-5 rounded-3xl'>
          <div className='py-4'>
            <img src={moderatei} className='flex h-30 w-30 object-contain rounded-full justify-self-center'></img>

          </div>
          
          <h>moderate dr</h>
          <p className='pb-2'>Progression with more extensive damage, where blood vessels become blocked, leading to retinal blood supply reduction.</p>

        </div>
        
      </div>


      <div className=' text-orange-600  md:grid grid-cols-2 gap-10 '>
        <div className='bg-white mb-5 mt-5 rounded-3xl'>
          <div className='py-4'>
            <img src={severei} className='flex h-30 w-30 object-contain rounded-full justify-self-center'></img>

          </div>
          
          <h>severe dr</h>
          <p className='pb-2'>Many blood vessels are blocked, causing significant retinal damage, with higher risk of neovascularization.</p>

        </div>
        <div className='bg-white mb-5 mt-5 rounded-3xl'>
          <div className='py-4'>
            <img src={poliferativei} className='flex h-30 w-30 object-contain rounded-full justify-self-center'></img>

          </div>
          
          <h>proliferative dr</h>
          <p className='pb-2'>Advanced stage where abnormal new blood vessels grow on the retina, potentially leading to severe vision loss or retinal detachment.</p>

        </div>
        
      </div>

    </div>
  )
}

export default Ds