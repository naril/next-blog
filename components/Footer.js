import Container from '../components/Container'
import MenuItems from '../components/MenuItems'

export default () => (
    <div className="footer">
        <Container>
            <div className="inner">
                <img src="../static/img/logo_tree--invert.png" alt=""/>
                <MenuItems/>
                <div className="author">Created by Tomas Prokop</div>
            </div>
        </Container>
        <style jsx>{`
            .footer {
                background-color: #000000;
            }
            .inner {
                text-align: center;
                color: #ffffff;
            }
            img {
                height: 150px
                margin-top: 40px;
            }
            .author {
                padding: 15px;
                color: #333333;
            }
        `}</style>
    </div>
)