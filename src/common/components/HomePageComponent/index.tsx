import React from 'react';
import { Carousel, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import Link from 'next/link';

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
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Práctica realizada por Jose Manuel Vilchez Arenas, desarrollador de 2º DAW en el IES Fernando III</h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        Puedes visitar mi repositorio de 
        <Link href="https://github.com/jose-va" className='font-bold text-purple-500'> GitHub </Link> 
        para mas proyectos como este
      </h3>
    </div>
  </Carousel>
  <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }}/>
  </>
  )
}

export default HomePageComponent;