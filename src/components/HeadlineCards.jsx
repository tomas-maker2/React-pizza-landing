import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
        {/* {CARD} */}
        <div className='relative rounded-xl '>
            {/* {OVERLAY} */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Suns out , 800</p>
                <p className='px-2'>Suns out , 800</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[150px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
        </div>
         {/* {CARD} */}
         <div className='relative rounded-xl '>
            {/* {OVERLAY} */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Suns out , 800</p>
                <p className='px-2'>Suns out , 800</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[150px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
        </div>
         {/* {CARD} */}
         <div className='relative rounded-xl '>
            {/* {OVERLAY} */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Suns out , 800</p>
                <p className='px-2'>Suns out , 800</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[150px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards