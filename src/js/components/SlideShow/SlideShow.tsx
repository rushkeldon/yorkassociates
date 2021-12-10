import React from 'react';
import './SlideShow.css';

type props = {
  h1 : string;
  p : string;
  imgURLs : string[];
};

export default function SlideShow({
  h1 = 'title here',
  p = 'body copy here',
  imgURLs = []
} : props ) {
  return <div className="slide-show">
      <div className="msg">
        <h1>We are a civil engineering consulting firm</h1>
        <p>committed to providing our clients with the best solution to meet their needs cost-effectively and efficiently. Our team has over 30 years of experience, and we are licensed to work in Georgia, Florida, and Alabama.</p>

      </div>
    </div>;
}
