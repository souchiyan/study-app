import React from "react";
import { Link, router } from "@inertiajs/react";

function Show(props) {
    const { material } = props;

    const deleteHandler = (id) => {
        router.delete(`/material/${id}`, {
            onBefore: () => confirm("削除しますか？"),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    教材詳細
                </h1>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">
                            教材名
                        </h2>
                        <p className="text-gray-600">{material.title}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">
                            ファイルパス
                        </h2>
                        <p className="text-gray-600">{material.file_path}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">
                            メモ
                        </h2>
                        <p className="text-gray-600">{material.description}</p>
                    </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <Link
                        href="/material"
                        className="text-blue-500 hover:underline"
                    >
                        戻る
                    </Link>
                    <div className="flex space-x-4">
                        <Link
                            href={`/material/${material.id}/edit`}
                            className="bg-yellow-500 text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                        >
                            編集
                        </Link>
                        <button
                            onClick={() => deleteHandler(material.id)}
                            className="bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            削除する
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Show;
