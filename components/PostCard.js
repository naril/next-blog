import Link from 'next/link'

export default (props) => (
    <div className="wrapper">
        <div className="category">
            {props.catName}
        </div>
        <div className="date">
            {props.date}
        </div>
        <h2>
            {props.title}
        </h2>
        <hr/>
        <div className="body">
            {props.text}
        </div>
        <Link href={`/a/${props.id}`} className="more">
            <a>READ MORE</a>
        </Link>
        <div className="tags">
            {
                props.hash.map(function (hash) {
                    return <Link class="hash" href={`/h/${hash}`}>
                            <a>#{hash}</a>
                    </Link>
                })
            }
        </div>
        <style jsx>{`
            .wrapper {
                padding: 50px 80px;
                margin-bottom: 50px;
                box-shadow: 0px 0px 39px 11px rgba(206,206,202,0.75);
                background: #ffffff;
                position: relative;
            }
            .date {
                color: #c6c6c6;
                font-size: 14px;
                font-weight: 700;
            }
            hr {
                display: block;
                height: 1px;
                border: 0;
                border-top: 1px solid #eeeeee;
                margin: 1em 0;
                padding: 0;
            }
            .category {
                position: absolute;
                top: 20px;
                right: -15px;
                width: 90px;
                height: 36px;
                font-weight: 700;
                text-align: center;
                line-height: 36px;
                background: #5c6bc0;
                color: #ffffff;
            }
            h2 {
                font-size: 40px;
            }
            .body {
                font-size: 17px;
                margin: 40px 0;
            }
            a {
                text-decoration: none;
                font-size: 21px;
                color: #5c6bc0;
                transition: color 0.2s;
                font-weight: 700;
            }
            a:hover {
                color: #bdbdbd;
                transition: color 0.2s;
            }
            .tags {
                display: inline;
                float: right;
            }
            .tags a {
                color: #bcbcbc;
                font-size: 15px;
                font-weight: 400;
                padding: 0 5px;
            }
            .tags a:hover {
                color: #000000;
            }
        `}</style>
    </div>
)