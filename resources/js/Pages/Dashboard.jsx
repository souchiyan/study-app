import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        勉強管理
                    </h2>
                }
            >
                <Head title="Dashboard" />
            </AuthenticatedLayout>
            <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                    機能一覧
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                        href="/todo"
                        className="block p-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition"
                    >
                        Todoリスト
                    </Link>
                    <Link
                        href="/material"
                        className="block p-4 bg-green-500 text-white text-center rounded-lg hover:bg-green-600 transition"
                    >
                        資料整理
                    </Link>
                    <Link
                        href="/time"
                        className="block p-4 bg-purple-500 text-white text-center rounded-lg hover:bg-purple-600 transition"
                    >
                        勉強時間計測
                    </Link>
                </div>
            </div>
        </>
    );
}
