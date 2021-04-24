import React from "react"
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import YouTubeIcon from "@material-ui/icons/YouTube"
import TheatersIcon from "@material-ui/icons/Theaters"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball"
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects"
import SettingsIcon from "@material-ui/icons/Settings"
import FlagIcon from "@material-ui/icons/Flag"
import HelpIcon from "@material-ui/icons/Help"
import FeedbackIcon from "@material-ui/icons/Feedback"

function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr />
            <h3 className="colorGrey">MORE FROM YOUTUBE</h3>
            <SidebarRow Icon={YouTubeIcon} title="YouTube Premium" />
            <SidebarRow Icon={TheatersIcon} title="Movies" />
            <SidebarRow Icon={SportsEsportsIcon} title="Games" />
            <SidebarRow Icon={EmojiObjectsIcon} title="Learning" />
            <SidebarRow Icon={SportsBaseballIcon} title="Sports" />
            <hr />
            <SidebarRow Icon={SettingsIcon} title="Settings" />
            <SidebarRow Icon={FlagIcon} title="Report history" />
            <SidebarRow Icon={HelpIcon} title="Help" />
            <SidebarRow Icon={FeedbackIcon} title="Send feedback" />
            <hr />
            <h4 className="colorGrey">About Press Copyright <br />Contact us Creators<br /> Advertise Developers</h4><br />
            <h4 className="colorGrey">Terms Privacy Policy & Safety<br /> How YouTube works<br /> Test new features</h4>
        </div>
    )
}


export default Sidebar