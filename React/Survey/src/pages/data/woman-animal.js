import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Doughnut } from "react-chartjs-2"

const WMresult = ()=>{
    const [result, setResult] = useState([]);


    const setData = {
        labels: ["호랑이","코끼리","독수리"],
        datasets: [
            {
                labels: ["호랑이","코끼리","독수리"],
                data: [result[0],result[1],result[2]],
                borderWidth: 2,
                hoverBorderWidth: 3,
                backgroundColor: [
                    "rgba(98, 181, 229, 1)",
                    "rgba(238, 102, 121, 1)",
                    "rgba(255, 198, 0, 1)"
                ],
                fill: true
            }
        ]
    };


    useEffect(() => {
        axios.get('/api/woman')
            .then(response => {
                setResult(response.data)
                console.log(response.data)
            })
    },[])

    return (
        <div>
            <Doughnut
                options={{
                    legend: {
                        display: true,
                        position: "bottom"
                    }
                }}
                data={setData}
                height={120}
            />
        </div>
    );

}

export default WMresult