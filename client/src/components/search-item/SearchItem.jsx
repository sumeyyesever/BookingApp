import "./searchItem.scss";

export default function SearchItem() {
  return (
    <div className="searchItem-container">
    <div className="searchItem-wrapper">
        <div className="searchItem-left">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/276806861.webp?k=e2af090f5b80d9db9d57259d94624879440a827fcf75d2b404272446e433fce6&o="></img>
            <div className="item-info">
                <h1>Hotel 32 Krakow Old Town ⭐⭐⭐</h1>
                <span>0.9 km from center</span>
                <p>Located 1640 feet from Wawel Royal Castle and 2297 feet from the Market Square in Kraków, Hotel 32 Kraków Old Town offers a sauna and free WiFi.</p>
            </div>
        </div>
        <div className="searchItem-right">
            <div className="reviews">
                <div>
                    <h4>Wonderful</h4>
                    <p>3247 reviews</p>
                </div>
                <div>
                    <span className="rating">9.0</span>
                </div>
            </div>
            <h3>Location 9.4</h3>
            <button>Show Prices</button>
        </div>
    </div>
      
    </div>
  )
}
