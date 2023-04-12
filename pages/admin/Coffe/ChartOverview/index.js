import { TYPE_CHART } from '@/common/constant';
import React, { PureComponent, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Case, Switch } from 'react-if';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';



const ChartOverview = ({
  typeChart = TYPE_CHART.barChart,
  sizeChart = {}
}) => {
  const widthContainer = useRef(null)
  const widthChart = useRef(null)

  useEffect(() => {
    window.addEventListener('resize',function(){
      widthChart.current = widthContainer.current?.current
    })
    setTimeout(() => {
      widthChart.current = widthContainer.current?.current
    }, 500)
    return ()=>{
      // window.removeEventListener('resize',()=>{})
    }
  }, [])
  console.log({widthChart:widthChart.current});
  const ChartBar = () => {
    const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    return (
      <BarChart
        width={widthChart.current?.clientWidth}
        height={widthChart.current?.clientHeight}
        style={{with:'100%'}}
        className='w-full'
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
      </BarChart>
    )
  }
  const ChartPie = () => {
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    return(
      <PieChart
        width={widthChart.current?.clientWidth}
        height={widthChart.current?.clientHeight}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )

  }
  return (
    <ResponsiveContainer
      ref={widthContainer}
      width={'100%'}
      height={sizeChart?.height ?? 200}>
      <Switch>
        <Case condition={typeChart === TYPE_CHART.barChart}>
          {ChartBar()}
        </Case>
        <Case condition={typeChart === TYPE_CHART.pieChart}>
          {ChartPie()}
        </Case>
      </Switch>

    </ResponsiveContainer>

  )
}

export default ChartOverview
