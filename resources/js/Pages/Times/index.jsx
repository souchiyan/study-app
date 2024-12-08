import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function Index(props) {
    const { counts } = props;
    ChartJS.register(ArcElement, Tooltip, Legend);

    const subjects = counts.map((count) => count.subject);
    const durations = counts.map((count) => count.duration);
    const data = {
        labels: subjects,
        datasets: [
            {
                label: "勉強時間",
                data: durations,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">勉強時間一覧</h1>

            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                科目
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                開始時間
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                終了時間
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                勉強時間（時間）
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {counts.map((count) => (
                            <tr key={count.id} className="even:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">
                                    {count.subject}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {count.start_time}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {count.end_time}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {count.duration}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    勉強時間の円グラフ
                </h2>
                <Pie data={data} />
            </div>
            <Link
                href="/dashboard"
                className="mt-4 inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md shadow hover:bg-gray-300 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
                戻る
            </Link>
        </div>
    );
}

export default Index;
