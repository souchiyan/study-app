import React from "react";
import { Link, useForm } from "@inertiajs/react";

function TodoCreate() {
    const { data, setData, post } = useForm({
        title: "",
        description: "",
        due_date: "",
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/todo");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    新しいTodoを追加
                </h2>
                <form onSubmit={handleSendPosts} className="space-y-4">
                    <div>
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            締切日
                        </label>
                        <input
                            id="date"
                            type="date"
                            value={data.due_date}
                            onChange={(e) =>
                                setData("due_date", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            やること
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            メモ
                        </label>
                        <textarea
                            placeholder="詳細"
                            id="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            rows="4"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Link
                            href="/todo"
                            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            戻る
                        </Link>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                        >
                            送信する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TodoCreate;
