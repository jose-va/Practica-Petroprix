'use client'

import React from 'react';
import { Carousel } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomePageComponent: React.FC = () => {

  return(
    <>
  <div className='w-full'>
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Práctica realizada por Jose Manuel Vilchez Arenas</h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        Puedes visitar mi repositorio de 
        <Link href="https://github.com/jose-va" className='font-bold text-cyan-300'> GitHub </Link> 
        para explorar mas proyectos
      </h3>
    </div>
  </Carousel>
  <Image src="/centro_educativo.webp" alt="Imagen del IES Fernando III" width={180} height={40} className='w-full opacity-10'/>
  </div>
  <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }}/>
  </>
  )
}

export default HomePageComponent;