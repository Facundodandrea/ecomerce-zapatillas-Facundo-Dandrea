import ItemListContainer from "./ItemListContainer"

const AllProducts = () => {
    return (
        <section class="products section" id="products">
                <h2 class="section-title">All Products</h2>

                <div class="featured__container bd-grid">
                    <ItemListContainer/>
                </div>
            </section>
    )
}

export default AllProducts
