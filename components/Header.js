import MenuItems from '../components/MenuItems'
import Logo from '../components/Logo'

const Header = () => (
    <div className="header">
        <div className="logoBox">
            <Logo/>
        </div>
        <div className="menu">
            <MenuItems/>
        </div>
        <style jsx>{`
            .header {
                margin: 75px 0 40px 0;
                height: 100px;
            }
            .logoBox {
                display: inline-block;
                width: 20%;
                height: 100%;
                float: left;
            }
            .menu {
                text-align: right;
                display: inline-block;
                width: 80%;
                height: 100%;
                float: left;
            }
        `}</style>
    </div>
)

export default Header