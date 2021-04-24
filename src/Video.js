import React from "react"
import Avatar from "@material-ui/core/Avatar"


function Video({channelImage,channel,title,views,timestamp}){
    return(
        <div className="videoCard">
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>

        </div>
    )
}

export default Video