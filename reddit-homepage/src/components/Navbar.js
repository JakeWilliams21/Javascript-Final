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
    const [drop, setDrop] = useState(false)
    const dropDownButton = document.querySelector('.profile-dropdown-menu')

    const handleClick = () => {
        if(drop) {
            setDrop(false)
            dropDownButton.classList.add('hidden')
        } else {
            setDrop(true)
            dropDownButton.classList.remove('hidden')
        }
    }

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
            <div className = 'profile-dropdown' id="menu" onClick = {handleClick}>
                <div className = 'profile-dropdown-left'>
                <div className = 'profile-picture'><img src=""/></div>
                <div className = 'user-info'>
                    <span>username</span>
                    <div>
                        <img src = 'https://toppng.com/uploads/preview/flower-orange-transparent-11546686986eesoo81trq.png' alt = 'karma'/>
                        <span>{karma} karma</span>
                    </div>
                </div>
                </div>
                <ArrowDropDownIcon className = 'arrow' />
            </div>
            <div className = 'profile-dropdown-menu hidden'>
                <div className = 'my-stuff'>
                    <span>My Stuff</span>
                    <div>
                        <div>Online Status</div>
                        <div>Profile</div>
                        <div>Style Avatar</div>
                        <div>User Settings</div>
                    </div>
                </div>
                <hr/>
                <div className = 'view-options'>
                    <span>View Options</span>
                    <div>Dark Mode</div>
                </div>
                <hr/>
                <div className = 'info-section'>
                    <div>Create A Community</div>
                    <div>Advertise on Reddit</div>
                    <div>Coins</div>
                    <div>Talk</div>
                    <div>Explore</div>
                    <div>Help Center</div>
                    <div>More</div>
                    <div>Terms and Policies</div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Navbar