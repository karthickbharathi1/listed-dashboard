import React , { useState , useEffect } from 'react'
import "./LineChart.css";
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
  } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        labels: {
          font: {
            size: 13,
            weight: 700,
          },
          color: "#333",
          padding: 25,
  
          usePointStyle: true,
          pointStyle: "circle",
        },
        display: true,
        position: "top",
        align: "end",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 600,
        ticks: {
          stepSize: 100,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };


const LineChart = () => {
    const [Data, setData] = useState([]);
    const [date, setDate] = useState(0);
    useEffect(() => {
      fetch("./data/Data.json")
        .then((response) => response.json())
        .then((data) => setData(data[date]))
        .catch((err) => console.log(err));
    }, [date]);
   
  
    const data = {
      labels: Data?.map((activity) => activity.label),
      datasets: [
        {
          label: "User",
          pointBackgroundColor: "#9BDD7C",
          data: Data?.map((activity) => activity.user),
          backgroundColor: "transparent",
          borderColor: "#9BDD7C",
          pointBorderColor: "transparent",
          pointBorderWidth: 4,
          tension: 0.4,
        },
        {
          label: "Guest",
          pointBackgroundColor: "#E9A0A0",
          data: Data?.map((activity) => activity.guest),
          backgroundColor: "transparent",
          borderColor: "#E9A0A0",
          pointBorderColor: "transparent",
          pointBorderWidth: 4,
          tension: 0.4,
        },
      ],
    };
  return (
    <div className="container">
      <h1 className="text-black text-[18px] font-bold">Activity</h1>
      <select
        value={0}
        onChange={(e) => setDate(e.target.value)}
        className="graph-data-dropdown"
      >
        <option value={0}>May-June 2021</option>
        <option value={1}>July-August 2021</option>
        <option value={2}>September-October 2021</option>
        <option value={3}>November-December 2021</option>
      </select>
      <div className="line-graph-container">
        <Line options={options} data={data} />
      </div>
    </div>
   
  )
}

export default LineChart