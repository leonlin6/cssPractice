import React, {useState} from 'react';

const FavoriteIcon = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <img alt="favorite icon" className="heartIcon" onClick={()=>{setIsFavorite(!isFavorite)}} src={isFavorite ? "/unknown.png" : "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/favorite_border.png"}></img>
    );
}

export default FavoriteIcon;