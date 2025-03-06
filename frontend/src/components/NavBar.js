function NavBar() {
    return (
        <div className="nav-container">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo"/>
            <ul className="nav">
                <li className="nav-items"><a href="/" className="Button">Quay Lại</a></li>
                <li className="nav-items"><a href="/Rewatch" className="Button">Xem Lại</a></li>
            </ul>
        </div>
    )
};

export default NavBar