import React from 'react';
import ResumeCard from './ResumeCard';
import EmploymentHistoryCard from './EmploymentHistoryCard';
import AreaOfExpertise from './AreaOfExpertise';
import AcademicProfile from './AcademicProfile';
import TechnicalSkills from './TechnicalSkills';
import Interests from './Interests';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Typography, Box } from '@material-ui/core';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeStyles = {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '50px'
}

export default function Resume() {
    return (
        <div id='resume' style={resumeStyles}>
            <Typography variant='h3'>Claudynn Lee</Typography>
            <br />
            <br />
            <Typography variant='h5'>Software <span style={{color: '#E55934'}}>Developer</span> and <span style={{color: '#C3BF6D'}}>Product Champion</span></Typography>
            <br />
            <br />
            <Box>
                <ResumeCard title="Employment History" content={<EmploymentHistoryCard/>}/>
                <ResumeCard title="Area of Expertise" content={<AreaOfExpertise/>} />
                <ResumeCard title="Academic Profile" content={<AcademicProfile />}/>
                <ResumeCard title="Technical Skills" content={<TechnicalSkills/>}/>
                <ResumeCard title="Interests" content={<Interests />}/>
            </Box>
        </div>
    )
}