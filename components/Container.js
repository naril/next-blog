const Container = (props) => (
    <div>
        {props.children}
        <style jsx>{`
            div {
                max-width: 1009px;
                width: 100%;
                margin: 0 auto;
            }
        `}</style>
    </div>
)

export default Container