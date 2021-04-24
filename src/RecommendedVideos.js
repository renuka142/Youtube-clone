import React from "react"
import "./RecommendedVideos.css"
import Video from "./Video"
import ReactPlayer from "react-player"
import "./Video.css"
import ButtonSection from "./ButtonSection"

function RecommendedVideos(){
    return(
        <div className="recommendedvideos">
            <ButtonSection /><br />
            <div className="recommendedvideos__videos">
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=ulprqHHWlng"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="AWS Basics for Beginners - Full Course"
                        channel="freeCodeCamp.org"
                        views="164K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwni4AGzJtUXYq65ouThQXWJoVDCDadZNxIwx3WZF=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="1 month ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="React JS Crash Course 2021"
                        channel="Traversy Media"
                        views="589K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="3 months ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=qz0aGYrrlhU"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="HTML Tutorial for Beginners: HTML Crash Course [2021]"
                        channel="Programming with Mosh"
                        views="518K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="3 months ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=A9GyVeV1Yu8"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Friends: Funniest Moments of Season 3 (Mashup) | TBS"
                        channel="TBS"
                        views="7.6M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIvd_lfz1ns9gKYGAx7ZdnsejouD_mbYAO_z-7UA=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="5 months ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=iTLssSIetq0"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="The World in 2021: five stories to watch out for | The Economist"
                        channel="The Economist"
                        views="2.4M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnj7dAlwD7NwcVl9lbr3pdVLGt6rPhRO_s8zxT_BqcQ=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="3 months ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=ycPr5-27vSI"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Joe Rogan Experience #1169​ - Elon Musk"
                        channel="PowerfulJRE"
                        views="42M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwni4AGzJtUXYq65ouThQXWJoVDCDadZNxIwx3WZF=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="2 years ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=fSp2C7QPH8M"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="React.js Full Course for Beginners | Learn React.js in 4 Hours | React.js Tutorial | Edureka"
                        channel="edureka!"
                        views="188K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="1 year ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=CTu3UYbLzIc"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Shinchan In Hindi New Episode 2021 Shinchan hindi all kids channel"
                        channel="All kids channel"
                        views="234K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwniIo0yHt4MY3uoWWxzUdIDqSSpduyDT0m51VDd6=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="1 month ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=grAQ4-FpULo"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="How Well Do You Know Your Memes? | Ok Tested"
                        channel="Ok Tested"
                        views="208K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhQICPtm714qXFPWl0ixMfSjjnyXodCKZ_MgAqN=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="3 days ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=79fyggVS6p4"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Why Jet Airways Failed - Indigo, Pilots & Airports in India | Kenny Sebastian - Stand Up Comedy"
                        channel="Kenny Sebastian"
                        views="4.9M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfYKhLnJXblDjtnWVGbvZHWCpWBogayEwhwIY9=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="1 year ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=ebqbIyicCFU"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="How to Use Git and GitHub in Android Studio"
                        channel="Learn to Droid"
                        views="12K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwngl_ilr6JyEDVRAtjfRyzwAGpP-JlFQ-OGjEyvV=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="1 year ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=giWIr7U1deA"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Marvel Studios’ Shang-Chi and the Legend of the Ten Rings | Official Teaser"
                        channel="Marvel Entertainment"
                        views="13M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhe7O9GvvpT9Xpju21bHY9He61Tpv-GT56cKVipzjs=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="3 days ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=8IqXgZd-P98"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Army of the Dead | Official Trailer | Netflix"
                        channel="Netflix"
                        views="8.3M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwni_LdnpDi-SOIhjp4Kxo2l_yVBoYsfdDCpUM5VDzg=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="1 week ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=pWWOEcd7f6k"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Top Future Technologies In 2021 | New Technologies of 2021"
                        channel="Simplilearn"
                        views="133K"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhJqtFsDmOEb6Hr30-AtA9e_K2-rJE1J-IbfaB0WQ=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="4 months ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=Hu4Yvq-g7_Y"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="How to Get Your Brain to Focus | Chris Bailey | TEDxManchester"
                        channel="TEDx Talks"
                        views="9M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwngdP3okXEWSNOV0jPGYSd7ulTVjYg3cJ3ENrvxU5w=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="2 years ago"
                    />
                </div>
                <div className="vnum">
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=mhDJNfV7hjk"
                        height="140px"
                        width="250px"
                        controls
                    /><br />
                    <Video 
                        title="Gordon's Quick & Simple Recipes | Gordon Ramsay"
                        channel="Gordon Ramsay"
                        views="11M"
                        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhSeGCbeHJD09S7X-Qo8yuQKJqYdHa85OqkBDzSmg=s176-c-k-c0x00ffffff-no-rj"
                        timestamp="1 year ago"
                    />
                </div>
            </div>
        </div>
    )
}


export default RecommendedVideos
