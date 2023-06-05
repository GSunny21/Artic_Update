import React, { useState} from 'react'
import '../pages/NewsCard.css';
import NewsDesc from './NewsDesc';
import defaultimg from '../resources/defaultimg.jpg';

export default function NewsItem(props) {
  let { title, description, imageURL, url, author, date, source } = props;

    const [borderStyles,setBorderStyles] = useState({
        left: '11px solid #F8F6F4', 
        right: '11px solid #F8F6F4', 
        bottom: '12px solid transparent',
        flag: 0
    });

    const handleBookmarkClick = () =>{
        
        if(borderStyles.flag == 0)
        {
            props.incrementCount();
            localStorage.setItem(props.count,title);
            console.log(props.count,title);
            setBorderStyles({
                left: '11px solid #7fbefa', 
                right: '11px solid #7fbefa', 
                bottom: '12px solid transparent',
                flag: 1
            });
        }
        else if(borderStyles.flag == 1)
        {
            props.decrementCount();
            localStorage.removeItem(props.count,title);
            console.log(props.count,title);
            setBorderStyles({
                left: '11px solid #F8F6F4', 
                right: '11px solid #F8F6F4', 
                bottom: '12px solid transparent',
                flag: 0
            });
        }
    }
      

  return (
    <>
    <div className='card mx-4 my-4' style={{width: '20rem'}}>
        <div className='card-img'>
            <a href={url}>
                <img src={imageURL ? imageURL : defaultimg} className='card-img-top cover-img' target="_blank"/>
            </a>
            <div className="bookmark" style={{borderLeft: borderStyles.left,borderRight: borderStyles.right, borderBottom: borderStyles.bottom}} onClick={handleBookmarkClick}>
            </div>
        </div>

        <div className='card-body col justify-content-center' style={{marginTop:'0px', paddingTop: '0px'}}>
            <p className='source'>{source}</p>
            <p className='card-text mt-2'>{title}...</p>
            <p className='author'>By {author ? author : "Unknown"}</p>
            <p className='mb-4'>{new Date(date).toGMTString()}</p>
            <p className='desc overlay'>
                <NewsDesc description = {description}/>
            </p>
        </div>
    </div>
  </>
  )
}
