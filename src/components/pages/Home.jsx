import React, { useState } from 'react'
import Container from '../layer/Container'
import P4 from '/img/p9.jpg'
import P5 from '/img/p5.jpg'
import P6 from '/img/p6.jpg'
import P7 from '/img/p7.jpg'
import P8 from '/img/p8.jpg'
import ProductDetails from '../ProductDetails'

const picData = [
  {
    src : P4,
    alt : "/img/p1.jpg",
  },
  {
    src : P5,
    alt : "/img/p1.jpg",
  },
  {
    src : P6,
    alt : "/img/p1.jpg",
  },
  {
    src : P7,
    alt : "/img/p1.jpg",
  },
  {
    src : P8,
    alt : "/img/p1.jpg",
  },
]


const Home = () => {
  const [pic,setPic] = useState(picData[0]);
  return (
    <div>
      <Container className={'py-28'}>
        <div className="main flex justify-between">
        <div className="left ">
          <div className="pic flex  items-center gap-2.5">
          <div className="small">
            {picData.map((pic,index) => (
              <div className="w-[91px] h-[91px]">
                <img 
                className='my-5 rounded-[10px]' 
                key={index} 
                src={pic.src} 
                alt={pic.alt}
                onClick={() => setPic(pic)}
              />
              </div>
            ))}
          </div>
          <div className="big w-[553px] h-[553px]">
          <img
              className="rounded-[10px] w-full h-full"
              src={pic.src}
              alt={pic.alt}
            />
          </div>
          </div>
        </div>
        <div className="right">
            <ProductDetails txt1={`Areni 57.1'' Upholstered`} txt2={'Loveseat'} bg1={'bg-green-500'} bg2={'bg-gray-700'} price={'$549.99'} />
        </div>
        </div>
        <div className="des flex pt-[109px] gap-x-[84px]">
            <div className="w-[777px]">
                <h1 className="text-3xl font-semibold" >Description</h1>
                <div className="text-lg leading-7 pt-4">
                    <p>Add a contemporary design and a pop of colour to a cozy seating area or your living room with this chaise-inspired loveseat. We love all the mid-century details from the low-profile back and round arm to the sleek, black-finished</p>
                </div>
            </div>
            <div className="">
                <p className="text-xl">What's Included?</p>
                <ul className=''>
                    <li className=' flex  justify-center items-center'>
                      
                      <p><span className='text-3xl font-bold'>.</span> Toss Pillow</p>
                    </li>
                </ul>
            </div>
        </div>

      </Container>
    </div>
  )
}

export default Home
