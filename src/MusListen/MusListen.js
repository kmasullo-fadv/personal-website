import React, {Component} from 'react'
import Iframe from "react-iframe"
import "./MusListen.css"


export default class MusListen extends Component {


    render() {
        return (
            <div className="musListen">
                <Iframe 
                    url="https://bandcamp.com/EmbeddedPlayer/album=133674501/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/"
                    position="absolute"
                    width="100%"
                    className="player"
                    height="100%"
                    seamless
                />
            </div>
        )
    }
}