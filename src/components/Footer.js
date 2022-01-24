const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__box">
                    <h3 className="footer__title">Sneaker Chill</h3>
                    <p className="footer__description">New collection of shoes <br/> 2022.</p>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Home</a></li>
                        <li><a href="#" className="footer__link">Men</a></li>
                        <li><a href="#" className="footer__link">Women</a></li>
                        <li><a href="#" className="footer__link">New</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">SUPPORT</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Product Help</a></li>
                        <li><a href="#" className="footer__link">Customer Care</a></li>
                        <li><a href="#" className="footer__link">Athorized service</a></li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy">© 2022 Facundo E. D'Andrea. All right reserved</p>
        </footer>
    )
}

export default Footer