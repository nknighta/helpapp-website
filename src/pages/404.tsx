import Link from "next/link";

export default function NOFOUND() {
    return (
        <>
            <div>
                <p>ページが見つかりませんでした</p>
                <Link href="/">
                    トップページに戻る
                </Link>
            </div>
        </>
    )
}