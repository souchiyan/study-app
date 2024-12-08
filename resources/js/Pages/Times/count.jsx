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
        setData("end_time", endTimeFormatted); // フォームデータに終了時間を設定

        // 勉強時間（秒単位から時間単位に変換）
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

        console.log("送信データ:", data); // デバッグ用ログ

        post("/time"); // データ送信
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
        <div>
            <h1>勉強計測</h1>
            <form onSubmit={handleSendPosts}>
                <label>
                    科目:
                    <input
                        type="text"
                        value={data.subject}
                        onChange={(e) => setData("subject", e.target.value)}
                        placeholder="例: 数学"
                    />
                </label>
                <p>計測時間: {displayTime()}</p>
                <p>開始時間: {data.start_time || "未設定"}</p>
                <p>終了時間: {data.end_time || "未設定"}</p>
                <p>勉強時間: {data.duration || "未設定"} 時間</p>
                {isRunning ? (
                    <button type="button" onClick={handlePause}>
                        計測終了
                    </button>
                ) : (
                    <button type="button" onClick={handleStart}>
                        計測開始
                    </button>
                )}
                <button type="button" onClick={handleCount}>
                    勉強時間を計算する
                </button>
                <button type="submit">データを送信</button>
                <button type="button" onClick={handleReset}>
                    リセット
                </button>
            </form>

            <Link href="/time">戻る</Link>
        </div>
    );
}

export default Count;
