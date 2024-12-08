import { useForm, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Count() {
    const { data, setData, post } = useForm({
        subject: "",
        start_time: "",
        end_time: "",
        duration: "",
    });

    const [time, setTime] = useState(0); // 経過時間（秒単位）
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1); // 1秒ごとに増加
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval); // クリーンアップ
    }, [isRunning]);

    const handleStart = () => {
        const now = new Date();
        const startTime = formatTime(now);
        setData("start_time", startTime);
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
        const now = new Date();
        const endTimeFormatted = formatTime(now);
        setData("end_time", endTimeFormatted);
    };

    const handleCount = () => {
        const duration = time / 3600;
        setData("duration", duration.toFixed(2));
    };

    const handleSendPosts = (e) => {
        e.preventDefault();
        if (!data.subject) {
            alert("科目を入力してください！");
            return;
        }
        post("/time");
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setData("start_time", "");
        setData("end_time", "");
        setData("duration", "");
        setData("subject", "");
    };

    const formatTime = (date) => {
        const year = date.getFullYear();
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const displayTime = () => {
        const hours = `0${Math.floor(time / 3600)}`.slice(-2);
        const minutes = `0${Math.floor((time % 3600) / 60)}`.slice(-2);
        const seconds = `0${time % 60}`.slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">勉強計測</h1>
            <form
                onSubmit={handleSendPosts}
                className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4"
            >
                <label className="block text-gray-700 font-semibold">
                    科目:
                    <input
                        type="text"
                        value={data.subject}
                        onChange={(e) => setData("subject", e.target.value)}
                        placeholder="例: 数学"
                        className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                    />
                </label>
                <div className="text-gray-600 space-y-2">
                    <p>
                        計測時間:{" "}
                        <span className="font-semibold">{displayTime()}</span>
                    </p>
                    <p>
                        開始時間:{" "}
                        <span className="font-semibold">
                            {data.start_time || "未設定"}
                        </span>
                    </p>
                    <p>
                        終了時間:{" "}
                        <span className="font-semibold">
                            {data.end_time || "未設定"}
                        </span>
                    </p>
                    <p>
                        勉強時間:{" "}
                        <span className="font-semibold">
                            {data.duration || "未設定"}
                        </span>{" "}
                        時間
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {isRunning ? (
                        <button
                            type="button"
                            onClick={handlePause}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            計測終了
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleStart}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        >
                            計測開始
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={handleCount}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        勉強時間を計算する
                    </button>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                    >
                        データを送信
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    >
                        リセット
                    </button>
                </div>
            </form>
            <Link href="/time" className="mt-4 text-blue-500 hover:underline">
                戻る
            </Link>
        </div>
    );
}

export default Count;
