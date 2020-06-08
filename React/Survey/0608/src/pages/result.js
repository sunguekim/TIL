import React, { useState, useEffect,ReactDOM } from 'react';
import axios from "axios";
import { Doughnut, Bar } from "react-chartjs-2"
import Mresult from "./data/man-animal"
import WMresult from "./data/woman-animal"
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const Result = () => {
    const [result, setResult] = useState([]);

    const setData = {
        labels: ["남자", "여자"],
        datasets: [
            {
                labels: ["남자", "여자"],
                data: [result[0], result[1]],
                borderWidth: 2,
                hoverBorderWidth: 3,
                backgroundColor: [
                    "rgba(98, 181, 229, 1)",
                    "rgba(238, 102, 121, 1)",
                ],
                fill: true
            }
        ]
    };
    const data = {
        labels: ['남자', '여자'],
        datasets: [
            {
                label: '남녀 인구통계',
                backgroundColor: [
                    "rgba(98, 181, 229, 1)",
                    "rgba(238, 102, 121, 1)",
                ],
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [result[0], result[1]],
            }
        ]
    }


    useEffect(() => {
        axios.get('/api/gender')
            .then(response => {
                setResult(response.data)
            })
    }, [])


    return (
        <Router >
            <div id="app">
                
                {/* <Doughnut
                    options={{
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }}
                    data={setData}
                    height={120}
                /> */}
                <Bar
                    options={{
                        legend:{
                            display:false
                        },
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                   }}
                    data={data}
                    width={150}
                    height={100}
                />
                <Link to="/man">
                    <Button variant="outline-primary">남자상세</Button>
                </Link>
                <Link to="/woman">
                    <Button variant="outline-primary">여자상세</Button>
                </Link>
                <Switch>
                    <Route path="/man" component={Mresult} />
                    <Route path="/woman" component={WMresult} />
                </Switch>
            </div>
        </Router>
    );

}

export default Result;

