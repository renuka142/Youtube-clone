import React from "react"
import "./SearchPage.css"
import VideoRow from "./VideoRow"
import ChannelRow from "./ChannelRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"

function SearchPage(){
    return(
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="edureka!"
                verified
                subs="2.56M"
                noOfVideos={4162}
                description="World’s #1 E-Learning Platform. Edureka's online training helps you land your dream job."
            />
            <hr />
            <div>
                <VideoRow 
                    image="https://i.ytimg.com/vi/0bPJPiX89K0/maxresdefault.jpg"
                    views="502"
                    subs="2.56M"
                    description="This Edureka video on Azure Certification in 2021 will give you an idea about what exactly are Azure certifications & explain some of the benefits of the certifications."
                    timestamp="1 day ago"
                    title="Azure Certifications | Azure Certification Path | Microsoft Azure Training | Edureka"
                    channel="edureka!"
                />
                <VideoRow 
                    image="https://i.pinimg.com/originals/55/72/e1/5572e1358f94e0a9eafbfe321178466f.jpg"
                    views="2.8M"
                    subs="2.56M"
                    description="Got a question on the topic? Please share it in the comment section. For more information, please write back to us at sales@edureka.in or call us at IND: 9606058406 / US: 18338555775 (toll-free)."
                    timestamp="1 year ago"
                    title="Python Full Course - Learn Python in 12 Hours | Python Tutorial For Beginners | Edureka"
                    channel="edureka!"
                />
                <VideoRow 
                    image="https://www.edureka.co/blog/wp-content/uploads/2019/08/C-Programming-Tutorial-1.jpg"
                    views="803K"
                    subs="2.56M"
                    description="This Edureka video on C Programming  will help you to Learn C Programming basics with examples. This C tutorial for beginners covers all the topics for all the three categories of learners, beginner, intermediate and experienced professionals. "
                    timestamp="1 year ago"
                    title="C Programming For Beginners | Learn C Programming | C Tutorial For Beginners | Edureka"
                    channel="edureka!"
                />
                <VideoRow 
                    image="https://i.ytimg.com/vi/hBh_CC5y8-s/maxresdefault.jpg"
                    views="1.8K"
                    subs="2.56M"
                    description="This Edureka Java Full Course will help you in understanding the various fundamentals of Java in detail with examples."
                    timestamp="1 year ago"
                    title="Java Full Course | Java Tutorial for Beginners | Java Online Training | Edureka"
                    channel="edureka!"
                />
                <VideoRow 
                    image="https://i.ytimg.com/vi/gmmV4drPTS4/maxresdefault.jpg"
                    views="5K"
                    subs="2.56M"
                    description="This Edureka video on Random Forest in Machine Learning explains the concept of the Random Forest algorithm in Python and how is it used."
                    timestamp="1 day ago"
                    title="Random Forest in Machine Learning | Machine Learning Training | Edureka | Machine Learning Live - 1"
                    channel="edureka!"
                />
            </div>
        </div>
    )
}

export default SearchPage