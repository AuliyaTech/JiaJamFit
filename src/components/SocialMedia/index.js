import React from "react";
import API from "../../utils/API";
import "./style.css";

function SocialMedia() {
    const SocialMedia = API.getContacts[0].content.social_media;
    
    return (
        <div className="heading">
            <h1> Follow us...</h1>
            <a href={SocialMedia.facebook}><p>Facebook</p></a>
            <a href={SocialMedia.instagram}><p>Instagram</p></a>
            <a href={SocialMedia.twitter}><p>Twitter</p></a>
            <a href={SocialMedia.youtube}><p>Youtube</p></a>
            <a href={SocialMedia.pintrest}><p>Pintrest</p></a>
        </div>
    )
}

export default SocialMedia;