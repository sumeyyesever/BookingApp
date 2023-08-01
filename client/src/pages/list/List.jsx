import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.scss";
import SearchItem from "../../components/search-item/SearchItem";

export default function List() {
  return (
    <>
      <Navbar />
      <Header type = "list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="left">
            <h3>Filter by:</h3>
            <div className="filter-item">
            <h4>Popular Filters</h4>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Hotels</label>
              </div>
              <div>
              <span>100</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>5 stars</label>
              </div>
              <div>
              <span>39</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Resorts</label>
              </div>
              <div>
              <span>5</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Air conditioning</label>
              </div>
              <div>
              <span>100</span>
              </div>   
              </div>
            </div>
            <div className="filter-item">
            <h4>Popular Filters</h4>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>1 star</label>
              </div>
              <div>
              <span>4</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>2 stars</label>
              </div>
              <div>
              <span>5</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>3 stars</label>
              </div>
              <div>
              <span>1234</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>4 stars</label>
              </div>
              <div>
              <span>100</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>5 stars</label>
              </div>
              <div>
              <span>107</span>
              </div>   
              </div>
            </div>
            <div className="filter-item">
            <h4>Property Type</h4>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Apartments</label>
              </div>
              <div>
              <span>2610</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Hotels</label>
              </div>
              <div>
              <span>876</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Hostels</label>
              </div>
              <div>
              <span>300</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Guesthouses</label>
              </div>
              <div>
              <span>100</span>
              </div>   
              </div>
              <div className="input-item">
              <div className="input-container">
              <input type="checkbox"></input>
                <label>Homestays</label>
              </div>
              <div>
              <span>107</span>
              </div>   
              </div>
            </div>
          </div> 
          <div className="right">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            
          </div>

        </div>
    </div>
    </>
  )
}
