import React, { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";

function TodoList(props) {
    const { todos } = props;
    const [state, setState] = useState({});

    // ページロード時に状態を復元
    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem("todoState")) || {};
        const initialState = todos.reduce((acc, todo) => {
            acc[todo.id] = savedState[todo.id] || {
                isChecked: false,
                priority: "最優先！",
            };
            return acc;
        }, {});
        setState(initialState);
    }, [todos]);

    // 状態が変わるたびにローカルストレージに保存
    useEffect(() => {
        localStorage.setItem("todoState", JSON.stringify(state));
    }, [state]);

    const handleCheckboxChange = (id) => {
        setState((prevState) => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                isChecked: !prevState[id]?.isChecked,
            },
        }));
    };

    const handlePriorityChange = (id, newPriority) => {
        setState((prevState) => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                priority: newPriority,
            },
        }));
    };

    const deleteHandler = (id) => {
        router.delete(`/todo/${id}`, {
            onBefore: () => confirm("削除しますか？"),
        });

        // 削除後に状態を更新
        setState((prevState) => {
            const newState = { ...prevState };
            delete newState[id];
            return newState;
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Todoリスト
            </h2>

            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                完了
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                やること
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                締切日
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                優先度
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                メモ
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                編集
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                                削除
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr
                                key={todo.id}
                                className="even:bg-gray-50 odd:bg-white"
                            >
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <input
                                        type="checkbox"
                                        checked={
                                            state[todo.id]?.isChecked || false
                                        }
                                        onChange={() =>
                                            handleCheckboxChange(todo.id)
                                        }
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {todo.title}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {todo.due_date}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select
                                        value={
                                            state[todo.id]?.priority ||
                                            "最優先！"
                                        }
                                        onChange={(e) =>
                                            handlePriorityChange(
                                                todo.id,
                                                e.target.value
                                            )
                                        }
                                        className="w-full p-4 bg-white border border-gray-300 rounded-md"
                                    >
                                        <option value="最優先！">
                                            最優先！
                                        </option>
                                        <option value="やや優先">
                                            やや優先
                                        </option>
                                        <option value="後でもいいかな...">
                                            後でもいいかな...
                                        </option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {todo.description}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <Link
                                        href={`/todo/${todo.id}/edit`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        編集
                                    </Link>
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => deleteHandler(todo.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        削除
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link
                href="/todo/create"
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
            >
                追加する
            </Link>
            <Link
                href="/dashboard"
                className="mt-4 inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md shadow hover:bg-gray-300 hover:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
                戻る
            </Link>
        </div>
    );
}

export default TodoList;
