import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  Image  from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCart = ({news}) => {
    const{_id,title,author,details,image_url,total_view,rating}=news
    return (
        <Card className="mb-5">
        <Card.Header  className="d-flex justify-content-between items-center">

       <div className='d-flex '>
       <Image
          roundedCircle
            src={author.img}
             style={{height:'60px'}}
            >
        </Image>
        <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
        </div>
       </div>
       <div>
        <FaRegBookmark></FaRegBookmark>
        <FaShareAlt></FaShareAlt>
       </div>

        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url}/>
          <Card.Text>
            {details.length>200?
             <p>{details.slice(0,250) + '...'}<Link to={`/news/${_id}`}> read more</Link></p>
             :
             <p>{details}</p>
            }
          </Card.Text>
         
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between items-center">

            <div>
                <FaStar className='text-warnning'></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <span>{total_view}</span>
                <FaEye></FaEye>
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCart;