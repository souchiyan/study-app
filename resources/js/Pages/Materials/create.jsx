import { useForm, Link } from "@inertiajs/react";
import React from "react";

function create() {
    const { data, setData, post } = useForm({
        title: "",
        description: "",
        file_path: "",
    });
    console.log(data);

    const handleSendPost = (e) => {
        e.preventDefault();
        post("/material");
    };
    return (
        <>
            <form onSubmit={handleSendPost}>
                <label htmlFor="title">教材名</label>
                <input
                    type="text"
                    id="title"
                    onChange={(e) => setData("title", e.target.value)}
                />
                <label htmlFor="file_path"></label>
                <input
                    id="file_path"
                    type="text"
                    onChange={(e) => setData("file_path", e.target.value)}
                />
                <label htmlFor="description">メモ</label>

                <textarea
                    id="description"
                    onChange={(e) => setData("description", e.target.value)}
                ></textarea>
                <button type="submit">追加する</button>
            </form>
            <Link href="/material">戻る</Link>
        </>
    );
}

export default create;
