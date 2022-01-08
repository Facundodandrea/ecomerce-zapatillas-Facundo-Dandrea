import imghome from './img/imghome.png'

const Home = () => {
    return (
        
        <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__sneaker">
                        <div className="home__shape"></div>
                        <img src={imghome} className='home__img'/>
                    </div>

                    <div class="home__data">
                        <span className="home__new">New in</span>
                        <h1 className="home__title">YEEZY BOOST <br/> SPLY - 350</h1>
                        <p className="home__description">Explore the new collections of sneakers</p>
                        <a href="#products" class="button">Explore now</a>
                    </div>
                </div>
            </section>
        
    )
}

export default Home