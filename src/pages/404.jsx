import Link from "next/link";

export default function NOFOUND() {
    return (
        <>
            <div>
                <p>ページが見つかりませんでした</p>
                <Link href="/">

                    <a>トップページに戻る</a>
                </Link>
            </div>
        </>
    )
}