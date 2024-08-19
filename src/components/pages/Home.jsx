import React, { useState } from 'react'
import Container from '../layer/Container'
import P1 from '/img/p1.jpg'
import P4 from '/img/p4.jpg'

const picData = [
  {
    src : P1,
    alt : "/img/p1.jpg",
  },
  {
    src : P4,
    alt : "/img/p1.jpg",
  },
  {
    src : P1,
    alt : "/img/p1.jpg",
  },
  {
    src : P4,
    alt : "/img/p1.jpg",
  },
  {
    src : P4,
    alt : "/img/p1.jpg",
  },
]


const Home = () => {
  const [pic,setPic] = useState(picData[0]);
  return (
    <div>
      <Container className={'py-28'}>
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
        
        </div>

      </Container>
    </div>
  )
}

export default Home
