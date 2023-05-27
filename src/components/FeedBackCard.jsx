import React from 'react'
import { quotes } from '../assets'


const FeedBackCard = ({content, img, name, title}) =>  (
    <div className='flex justify-between flex-col px-10 py-12 max-w-[370px] rounded-[20px]
      mr-0 md:mr-10 sm:mr-5 my-5 feedback-card'>
        <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain'/>
        <p className='text-white font-normal font-poppins text-[18px] leading-[32px] my-10'>{content}</p>

        <div className='flex flex-row'>
          <img src={img} alt={name} className='w-[48px] h-{48px] rounded-full'/>
          <div className='flex flex-col ml-4'>
            <h4 className='text-white font-semibold font-poppins text-[20px] leading-[32px]'>{name}</h4>
            <p className='text-dimWhite font-normal font-poppins text-[16px] leading-[24px]'>{title}</p>
          </div>
        </div>
    </div>
  )


export default FeedBackCard