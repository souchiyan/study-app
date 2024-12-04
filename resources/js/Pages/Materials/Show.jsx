import React from "react";
import { Link, router } from "@inertiajs/react";

function Show(props) {
    const { material } = props;
    // console.log(props);
   
    const deletehandler = (id) =>{
        router.delete(`/material/${id}`, {
            onBefore: () => confirm("削除しますか？"),
        });
    };

    return (
        <>
            <div>詳細画面</div>
            <div>
                <h1>{material.title}</h1>
                <h3>ファイル</h3>
                <p>{material.file_path}</p>
                <h3>メモ</h3>
                <p>{material.description}</p>
            </div>

            <Link href="/material">戻る</Link>
            <div>
                <Link href={`/material/${material.id}/edit`}>編集</Link>
            </div>
            <div>
                <button onClick={()=>deletehandler(material.id)}>削除する</button>
            </div>
            
        </>
    );
}

export default Show;
