import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImg from "../../../assets/userImg.png";
import homeIcon from "../../../assets/home-run (1).svg";
import more from "../../../assets/more.svg";
// import list from "../../../assets/list.svg";
import { tokenstorage } from "../../../App";
import "./afterLoginHeader.css";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AfterLoginHeader=()=>{
    const navigate= useNavigate()
    const [token, settoken] = useContext(tokenstorage)
    const logout=()=>{
        settoken(null);
        localStorage.clear()
    }
    if(token){
    return(
        <>
            <div className="home-container">
                <div className="home-header">
                    <div className="in-home-header">
                        <div className="header-title">
                            <h1>LAUNDRY</h1>
                        </div>

                        <div className="home-header-navigate">
                            <p>Pricing</p>
                            <p>Career</p>
                        </div>
                    </div>

                    <div className="home-header-userInfo">
                        <div className="home-header-userImg">
                            <img src={userImg} alt="Img" />
                        </div>
                        <button onClick={logout} className="logout">
                             {localStorage.getItem("Name")} 
                        </button>
                    </div>
                </div>

                <nav className="home-navbar">
                    <Link className="linkdiv" to={"/home"}>
                        <img src={homeIcon} alt="home" />
                    </Link>
                    <Link className="linkdiv" to={"/createOrder"}>
                        <img src={more} alt="more" />
                    </Link>
                    <Link className="linkdiv" to={"/pastorders"}>
                        {/* <img style={{backgroundColor:"white"}} src={list} alt="list" /> */}
                        <FontAwesomeIcon icon={faList} />
                    </Link> 
                </nav>

                <footer className="home-footer">
                    <p>2023 &#169; Laundry</p>
                </footer>
            </div>
        </>
    )}else{
        navigate("/")
    }
}

export default AfterLoginHeader;