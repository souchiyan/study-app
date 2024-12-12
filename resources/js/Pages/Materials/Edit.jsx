import { useForm, Link } from "@inertiajs/react";
import React from "react";

function Create(props) {
    const { materials } = props;
    const { data, setData, put } = useForm({
        title: materials.title,
        description: materials.description,
        file_path: materials.file_path,
    });

    const handleSendPost = (e) => {
        e.preventDefault();
        put(`/material/${materials.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    教材を編集
                </h1>
                <form onSubmit={handleSendPost} className="space-y-4">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            教材名
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="例: 英語の基礎"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="file_path"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ファイルパス
                        </label>
                        <input
                            id="file_path"
                            type="text"
                            value={data.file_path}
                            onChange={(e) =>
                                setData("file_path", e.target.value)
                            }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="例: /path/to/file"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            メモ
                        </label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="教材に関する簡単なメモを入力"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        更新する
                    </button>
                </form>
                <Link
                    href="/material"
                    className="block text-center mt-4 text-gray-500 hover:underline"
                >
                    戻る
                </Link>
            </div>
        </div>
    );
}

export default Create;
