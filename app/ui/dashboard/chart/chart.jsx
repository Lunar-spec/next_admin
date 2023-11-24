"use client"
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {

    const data = [
        {
            name: "Sun",
            visit: 4000,
            click: 2400,
        },
        {
            name: "Mon",
            visit: 3000,
            click: 1398,
        },
        {
            name: "Tue",
            visit: 2000,
            click: 3800,
        },
        {
            name: "Wed",
            visit: 2780,
            click: 3908,
        },
        {
            name: "Thu",
            visit: 1890,
            click: 4800,
        },
        {
            name: "Fri",
            visit: 2390,
            click: 3800,
        },
        {
            name: "Sat",
            visit: 3490,
            click: 4300,
        },
    ];


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background: "#151c2c", border: "none"}}/>
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#DE3163" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="click" stroke="#ffbf00" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart