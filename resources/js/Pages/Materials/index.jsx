import { Link } from "@inertiajs/react";
import React from "react";

function index(props) {
    const { materials } = props;
    console.log(props);

    return (
        <>
            <h1>教材を選ぶ</h1>
            {materials.map((material) => (
                <div key={material.id}>
                    <h1>教材名</h1>
                    <Link href={`/material/${material.id}`}>
                        {material.title}
                    </Link>
                </div>
            ))}
            <Link href="/material/create">新しく教材を追加する</Link>
        </>
    );
}

export default index;
