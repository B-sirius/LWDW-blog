import Link from 'next/link';

export default function Custom404() {
    return (
        <div>
            <h1>404</h1>
            <div>
                <Link href="/">返回主页</Link>
            </div>
        </div>
    )
}