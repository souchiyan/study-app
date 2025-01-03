import { Link } from "@inertiajs/react";
import React from "react";

function Index(props) {
    const { materials } = props;

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    教材を選ぶ
                </h1>
                <form method="GET" action="/material">
                    <input
                        type="text"
                        name="keyword"
                        placeholder="キーワード入力"
                        className="border p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        検索
                    </button>
                </form>

                <div className="space-y-4">
                    {materials.map((material) => (
                        <div
                            key={material.id}
                            className="p-4 bg-white shadow rounded-md hover:shadow-lg transition"
                        >
                            <h2 className="text-lg font-semibold text-gray-700">
                                教材名
                            </h2>
                            <Link
                                href={`/material/${material.id}`}
                                className="text-blue-500 hover:underline"
                            >
                                {material.title}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="mt-6 space-x-4">
                    <Link
                        href="/material/create"
                        className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
                    >
                        新しく教材を追加する
                    </Link>
                    <Link
                        href="/dashboard"
                        className="inline-block px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition"
                    >
                        戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Index;
