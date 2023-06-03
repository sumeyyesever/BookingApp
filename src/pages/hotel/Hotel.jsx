import "./hotel.scss";
import Navbar from '../../components/navbar/Navbar'
import MailList from "../../components/mail-list/MailList"
import Footer from "../../components/footer/Footer"
import { LocationOn } from '@mui/icons-material'

export default function Hotel() {
  return (
    <>
     <Navbar />
     <div className='hotel-container'>
        <div className='hotel-wrapper'>
            <div className='hotel-top'>
              <div className='top-information'>
                <h1>Hotel Casa Amsterdam</h1>
                <p>Great location - Amsterdam Amstel station is within 400m</p>
                <span ><LocationOn /> Eerste Ringdijkstraat 4, Oost, 1097 BC Amsterdam, Netherlands</span>
                
              </div>
              <button>Reserve</button>
            </div>
            <div className='hotel-center'>
              <img src='/assets/hotel_0.jpg' />
              <img src='/assets/hotel_1.jpg' />
              <img src='/assets/hotel_2.jpg' />
              <img src='/assets/hotel_3.jpg' />
              <img src='/assets/hotel_4.jpg' />
              <img src='/assets/hotel_5.jpg' />
            </div>
            <div className='hotel-bottom'>
                <p>Hotel Casa Amsterdam is a modern hotel offering a bar, rooftop terrace 
                (only opens during the summertime) and an in-house restaurant. It features underground on-site 
                parking and is only 300 m from Amsterdam Amstel Railway Station and Amstel Metro. This is the 
                first hotel in Amsterdam to achieve a 3-star Superior award this year. Each modern room has a 
                flat-screen TV with several interactive functions. Extra long beds, a work desk and refrigerator 
                are also provided as standard in the rooms at Hotel Casa Amsterdam. During the summer 30 different 
                craft beers and easy bites are served on the roof terrace.</p>
                <div className='price-container'>
                    <h3>Perfect for a 9-nights stay</h3>
                    <h6>Highly rated by the previous guests!</h6>
                    <span className='price'><b>$945</b></span>
                    <button>Reserve</button>
                </div>

            </div>
        </div>
     </div>
     <MailList />
     <Footer />
    </>
   
  )
}
