import { useForm, Link, router } from "@inertiajs/react";
import React from "react";

function create(props) {
    const { materials } = props;
    const { data, setData, put } = useForm({
        title: materials.title,
        description: materials.description,
        file_path: materials.file_path,
    });
    // console.log(data);

    const handleSendPost = (e) => {
        e.preventDefault();
        put(`/material/${materials.id}`);
    };

    return (
        <>
            <form onSubmit={handleSendPost}>
                <label htmlFor="title">教材名</label>
                <input
                    type="text"
                    id="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <label htmlFor="file_path"></label>
                <input
                    id="file_path"
                    type="text"
                    value={data.file_path}
                    onChange={(e) => setData("file_path", e.target.value)}
                />
                <label htmlFor="description">メモ</label>

                <textarea
                    id="description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                ></textarea>
                <button type="submit">追加する</button>
            </form>
            <Link href="/material">戻る</Link>
        </>
    );
}

export default create;
