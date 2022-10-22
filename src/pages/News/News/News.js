import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news=useLoaderData()
    console.log(news)
    const{title,details,image_url,category_id}=news
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         <Link to={`/catagory/${category_id}`}>
         <Button variant="primary">All News category</Button>
         </Link>
        </Card.Body>
      </Card>
    );
};

export default News;