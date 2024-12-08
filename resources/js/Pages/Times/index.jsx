import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
function Index(props) {
    const { counts } = props;
    ChartJS.register(ArcElement, Tooltip, Legend);

    const subjects = counts.map((count) => count.subject);
    const durations = counts.map((count) => count.duration);
    const data = {
        // x 軸のラベル
        labels: "勉強時間",
        datasets: [
            {
                label: "Dataset",
                // データの値
                data: durations,
                // グラフの背景色
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                ],
                // グラフの枠線の色
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                ],
                // グラフの枠線の太さ
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div>
                <h1>勉強時間一覧</h1>
                <table>
                    <thead>
                        <tr>
                            <th>科目</th>
                            <th>開始時間</th>
                            <th>終了時間</th>
                            <th>勉強時間（時間）</th>
                        </tr>
                    </thead>
                    <tbody>
                        {counts.map((count) => (
                            <tr key={count.id}>
                                <td>{count.subject}</td>
                                <td>{count.start_time}</td>
                                <td>{count.end_time}</td>
                                <td>{count.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pie data={data} />;
        </>
    );
}

export default Index;
