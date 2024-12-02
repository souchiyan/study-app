import React from "react";
import { Link, useForm } from "@inertiajs/react";

function Edit(props) {
    const { todo } = props;
    const { data, setData, put } = useForm({
        title: todo.title,
        description: todo.description,
        due_date: todo.due_date,
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/todo/${todo.id}`);
    };

    return (
        <div>
            <form onSubmit={handleSendPosts}>
                <div>
                    <label htmlFor="date">締切日</label>
                    <input
                        id="date"
                        type="date"
                        value={data.due_date}
                        onChange={(e) => setData("due_date", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="title">やること</label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">メモ</label>
                    <textarea
                        placeholder="詳細"
                        id="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                </div>
                <button type="submit">送信する</button>
            </form>
            <Link href="/todo">戻る</Link>
        </div>
    );
}

export default Edit;
