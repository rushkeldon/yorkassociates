import React from 'react';
import './PageHome.css';
import SlideShow from '../SlideShow/SlideShow';

export default function PageHome() {
  return <>
    <div className="page page-home">
      <SlideShow
        h1="We are a civil engineering consulting firm"
        p="committed to providing our clients with the best solution to meet their needs cost-effectively and efficiently. Our team has over 30 years of experience, and we are licensed to work in Georgia, Florida, and Alabama."
      />
    </div>
  </>;
}
