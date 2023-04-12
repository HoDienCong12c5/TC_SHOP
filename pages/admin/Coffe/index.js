import { Line } from '@react-three/drei'
import { Col, Row } from 'antd'
import React from 'react'
import Media from 'react-media'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartOverview from './ChartOverview';
import { TYPE_CHART } from '@/common/constant';


const Coffee = () => {
  const renderDesktop = () => {
    return <>
      <Row justify={'space-around'}>
        <Col span={11} >
          <ChartOverview />
        </Col>
        <Col span={11} offset={1} >
          <ChartOverview typeChart={TYPE_CHART.pieChart}/>

        </Col>
      </Row>
    </>
  }
  const renderMobile = () => {

  }
  return (
    <div className='w-full h-100vh'>
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </div>
  )
}
export default Coffee
