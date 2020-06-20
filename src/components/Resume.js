import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdfFile from '../media/Resume2020.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            <Document
                file={pdfFile}
                options={options}
            > 
                <Page pageNumber={1}  width={600}/>
            </Document>
        </div>
    )
}