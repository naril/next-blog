import Link from 'next/link'

const items = () => (
    <div>
        <Link href="/">
            <a>HOME</a>
        </Link>
        <Link href="/about">
            <a>ABOUT</a>
        </Link>
        <Link href="/archiv">
            <a>ARCHIV</a>
        </Link>
        <Link href="/kontakt">
            <a>KONTAKT</a>
        </Link>
        <style jsx>{`
            a {
                font-size: 16px;
                font-weight: 700;
                color: #333333;
                margin-left: 30px;
                line-height: 100px;
                text-decoration: none;
                transition: color 0.2s;
                display: inline-block;
            }
            a:hover {
                color: #bdbdbd;
                transition: color 0.2s;
            }
            a.active {
                border-bottom: 2px solid #5c6bc0;
            }
        `}</style>
    </div>
)

export default items