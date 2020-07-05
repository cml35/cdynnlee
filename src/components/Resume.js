import React from 'react';
import { Link } from 'react-router-dom';
import ResumeCard from './ResumeCard';
import EmploymentHistoryCard from './EmploymentHistoryCard';
import AreaOfExpertise from './AreaOfExpertise';
import AcademicProfile from './AcademicProfile';
import TechnicalSkills from './TechnicalSkills';
import Interests from './Interests';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Typography, Box, Button } from '@material-ui/core';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeStyles = {
    textAlign: 'center',
    paddingTop: '50px'
}

const buttonStyle = {
    padding: '10px',
    border: '1px solid',
    letterSpacing: '2px',
    textDecoration: 'none'
}

export default function Resume() {
    return (
        <div id='resume' style={resumeStyles}>ome
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
            <br />
            <br />
            <Link to="/files/Resume2020.pdf" target="_blank" download>
                <Button style={buttonStyle} variant="contained" color="primary" size='medium'>Download Resume</Button>
            </Link>
        </div>
    )
}