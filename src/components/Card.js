import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";

import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({isLikedArr,index, ...course}) => {
    const description = course.description.length < 110 ? course.description : `${course.description.substr(0,110)}...`;
    const [desc, setDesc] = useState(description);
    const [readBtn, setReadBtn] = useState(" Read More");
    const [isReadActive, setIsReadActive] = useState(true);
    const [likeBtn, setLikeBtn] = useState(false);

    function descHandler(){
        setIsReadActive(!isReadActive);
        setDesc(isReadActive ? course.description : description);
        setReadBtn(isReadActive ? " Show Less" : " Read More")
    }
    function LikeBtnHandler(id){
        isLikedArr[id] = !isLikedArr[id];
        setLikeBtn(!likeBtn);
        if(isLikedArr[id])
            toast.success("Liked Sucessfully");
        else{
            toast.warning("Liked Removed");
        }
    }
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={course.image.url} alt={course.image.alt} />
            <div className='like-btn'>
                <button onClick={() => LikeBtnHandler(index)}>
                    {
                        likeBtn ? (<FcLike fontSize="2rem" />) : (<FcLikePlaceholder fontSize="2rem"/>)
                    }
                </button>
            </div>
        </div>
        <div className='card-info'>
            <h3>{course.title}</h3>
            <p>
                {desc}
                <span onClick={descHandler}>{readBtn}</span>
            </p>
        </div>
    </div>
  )
}

export default Card;