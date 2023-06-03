import FavouriteList from "../../components/favourite-list/FavouriteList"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mail-list/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/property-list/PropertyList"
import TrendingList from "../../components/trending-list/TrendingList"
import "./home.scss"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <PropertyList />
      <TrendingList />
      <FavouriteList />
      <MailList />
      <Footer />
    </div>
  )
}
