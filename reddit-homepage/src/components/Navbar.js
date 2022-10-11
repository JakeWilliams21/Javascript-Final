import React, {useState, useEffect} from "react";
import './Navbar.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TollIcon from '@mui/icons-material/Toll';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
    const [karma, setKarma] = useState(0)
    return (
        <div className = 'navbar-parent'>
            <div className = 'logo'>
                <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Wordmark-White-Dark-Background-Logo.wine.svg" alt = 'reddit logo'/>
            </div>
            <div className = 'subreddits'>
                <select placeholder = 'Home' className = 'subreddits-dropdown'>
                    <option>r/Test</option>
                    <option>r/Sample</option>
                    <option>r/Example</option>
                </select>
            </div>
            <div className = 'searchbar'>
                <input placeholder="Search Reddit"/>
            </div>
            <div className = 'buttons'>
                <button className = 'icon popular'><TrendingUpIcon/></button>
                <button className = 'icon coin'><TollIcon/></button>
                <div className = 'vertical-line'></div>
                <button className = 'icon chat'><ChatBubbleOutlineIcon/></button>
                <button className = 'icon alerts'><NotificationsNoneIcon/></button>
                <button className = 'icon post'><AddIcon/></button>
                <button className = 'advertise'>Advertise</button>
            </div>
            <div className = 'profile-dropdown'>
                <div className = 'profile-dropdown-left'>
                <div className = 'profile-picture'><img src=""/></div>
                <div className = 'user-info'>
                    <span>username</span>
                    <div>
                        <img src = 'https://toppng.com/uploads/preview/flower-orange-transparent-11546686986eesoo81trq.png'/>
                        <span>{karma} karma</span>
                    </div>
                </div>
                </div>
                <ArrowDropDownIcon className = 'arrow' />
            </div>
        </div>
    )
}

export default Navbar