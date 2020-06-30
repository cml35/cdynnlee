import React from 'react';
import { Typography } from '@material-ui/core';

export default function EmploymentHistoryCard() {
    return (
        <div id='employment-history'>
            <br />
            <Typography variant="h6">FullStack Engineer</Typography>
            <Typography variant="h7">ezyVet | 2018 - Present</Typography>
            <br />
            <br />  
            <Typography variant="p">
                I am currently working within a scrum team to deliver features and
                projects, diagnose and resolve system glitches, write internal
                integrations, rectify slow performance and refactor legacy code.
                These are a few of my day to day responsibilities.
                Besides these development tasks, I scope and refine projects in
                preparation for engineering, contact clients directly to gain feedback
                on prototypes and deliver weekly product updates. In addition to
                this, I help with grooming the backlog and enforce processes to
                achieve business goals.
            </Typography>
            <br />
            <br />
            <Typography variant="h6">Software Development Intern</Typography>
            <Typography variant="h7">Foodstuffs | 2017 - 2018</Typography>
            <br />
            <br />  
            <Typography variant="p">
                I worked with the Online Service team to refine and deliver both
                features and bugs for a variety of their services. These included
                minor enhancements to their iShop mobile application, writing unit
                and e2e tests and taking part in daily standups, retrospectives and
                demonstrations.
            </Typography>
        </div>
    );
}