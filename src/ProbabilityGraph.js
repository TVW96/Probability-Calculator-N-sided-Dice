import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProbabilityGraph = ({ data }) => {
    console.log(data);
    return (
        <div className="graph">
            <h2>Probability Distribution</h2>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sum" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="probability" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default ProbabilityGraph;