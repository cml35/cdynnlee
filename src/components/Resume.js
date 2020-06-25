import React from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import PortfolioCard from './PortfolioCard';
import Image from 'react-bootstrap/Image';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TestImage from '../media/home_page.JPG';
import pdfFile from '../media/Resume2020.pdf';
import { Typography } from '@material-ui/core';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 

const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        {/* <Image src="../media/home_page.JPG/100px250" fluid /> */}
        <img src={TestImage} alt='logo'/>
    </Parallax>
);

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

const resumeStyles = {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '50px',
    width: '600px',
}

export default function Resume() {
    return (
        <div id='resume' style={resumeStyles}>
            {/* <ParallaxImage /> */}
            <ParallaxBanner
                className="resume-content"
                layers={[
                    {
                        children: <PortfolioCard 
                            projectName='Movie Rating App'     
                            projectDescription='This application uses React and Laravel to rate different movies and tv shows available on different streaming services.'
                        />,
                        amount: 0.2
                    }
                ]}
                style={{
                    height: '500px ',
                }}
            >
            <Typography variant='h3'>Claudynn Lee</Typography>
            <br />
            <br />
            <Typography variant='h5'>Software <span style={{color: '#F8E9A1'}}>Developer</span> and <span style={{color: '#F76C6C'}}>Product Champion</span></Typography>
            </ParallaxBanner>
            {/* <Document
                file={pdfFile}
                options={options}
            > 
                <Page pageNumber={1}  width={600}/>
            </Document> */}
        </div>
    )
}