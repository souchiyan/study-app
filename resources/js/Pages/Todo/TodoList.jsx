import React from "react";
import { Link, router } from "@inertiajs/react";

function TodoList(props) {
    const { todos } = props;
    console.log(props);

    const deleteHandler = (id) => {
        router.delete(`/todo/${id}`, {
            onBefore: () => confirm("削除しますか？"),
        });
    };
    return (
        <>
            <div>
                <h2>Todoリスト</h2>
                <table>
                    <tr>
                        <td>完了</td>
                        <td>やること</td>
                        <td>締切日</td>
                        <td>優先度</td>
                        <td>メモ</td>
                    </tr>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <input type="checkbox" />
                            <td>{todo.title}</td>
                            <td>{todo.due_date}</td>
                            <td>
                                <select>
                                    <option value="最優先！">最優先！</option>
                                    <option value="やや優先">やや優先</option>
                                    <option value="後でもいいかな...">
                                        後でもいいかな...
                                    </option>
                                </select>
                            </td>
                            <td>{todo.description}</td>
                            <td>
                                <Link href={`/todo/${todo.id}/edit`}>編集</Link>
                            </td>
                            <td>
                                <button onClick={() => deleteHandler(todo.id)}>
                                    削除
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <Link href="/todo/create">追加する</Link>
        </>
    );
}

export default TodoList;
