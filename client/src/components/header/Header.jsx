import { AttractionsOutlined, BedOutlined, CalendarViewMonthOutlined, FlightTakeoff, HailOutlined, KeyboardArrowDownOutlined, Person2Outlined, TimeToLeaveOutlined } from "@mui/icons-material";
import "./header.scss";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {  useNavigate } from "react-router-dom";

export default function Header({type}) {

    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    },]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

   const handleOptions = (name, operation) => {
    setOptions((prev)=>{
        return {
            ...prev,
            [name]:operation === "i" ? options[name] + 1 : options[name] - 1,
        }
    });
   }

   const handleSearch = ()=>{
    navigate("/hotels", {state: {destination, date, options}});
   }



    return (
        <div className="header">
            <div className={type === "list" ? "container listMode" : "container"}>
                <div className="choices">
                    <div className="item">
                        <BedOutlined />
                        <span>Stays</span>
                    </div>
                    <div className="item">
                        <FlightTakeoff />
                        <span>Flights</span>
                    </div>
                    <div className="item">
                        <TimeToLeaveOutlined />
                        <span>Car rentals</span>
                    </div>
                    <div className="item">
                        <AttractionsOutlined />
                        <span>Attractions</span>
                    </div>
                    <div className="item">
                        <HailOutlined />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                    <div className="texts">
                    <h1>Find your next stay</h1>
                    <h3>Search deals on hotels, homes and much more...</h3>
                </div>
                    </>
                )}
                
                <div className="search-container">
                    <div className="search-item">
                        <BedOutlined />
                        <input onChange={(e) => setDestination(e.target.value)} placeholder="Where are you going?"></input>
                    </div>
                    <div className="calender">
                        <CalendarViewMonthOutlined />
                        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && (<DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            className="date"
                            ranges={date}
                        />)}
                    </div>
                    <div className="search-item">
                        <Person2Outlined />
                        <span>{` ${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                        <KeyboardArrowDownOutlined className="down" onClick={()=>setOpenOptions(!openOptions)}/>
                        {openOptions && (
                            <div className="options">
                                <div className="option-item">
                                    <span>Adult</span>
                                    <div className="option-counter">
                                        <button disabled = {options.adult <=1} onClick={()=>handleOptions("adult", "d")}>-</button>
                                        <span className="counter">{options.adult}</span>
                                        <button onClick={()=>handleOptions("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span>Children</span>
                                    <div className="option-counter">
                                        <button disabled = {options.children <=0} onClick={()=>handleOptions("children", "d")}>-</button>
                                        <span className="counter">{options.children}</span>
                                        <button onClick={()=>handleOptions("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span>Room</span>
                                    <div className="option-counter">
                                        <button disabled = {options.room <=1} onClick={()=>handleOptions("room", "d")}>-</button>
                                        <span className="counter">{options.room}</span>
                                        <button onClick={()=>handleOptions("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>


                        )
                           
                        }
                    </div>
                    <div className="search-item" style={{backgroundColor:"#004cb8"}}>
                        <button onClick={()=>handleSearch()} className="btn">Search</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
