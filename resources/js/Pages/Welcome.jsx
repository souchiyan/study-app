import { Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            <div className="text-center text-white p-8 rounded-lg shadow-xl bg-opacity-75">
                <h1 className="text-4xl font-bold mb-6">
                    効率的な学習を始めよう！
                </h1>
                <p className="mb-8 text-lg">
                    学習時間の記録、目標設定、モチベーションアップをサポートします。
                </p>
                <div className="space-x-4">
                    <Link
                        href="/login"
                        className="px-6 py-2 text-xl bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        ログイン
                    </Link>
                    <Link
                        href="/register"
                        className="px-6 py-2 text-xl bg-green-600 rounded-full hover:bg-green-700 transition duration-300"
                    >
                        新規登録
                    </Link>
                </div>
            </div>
        </div>
    );
}
