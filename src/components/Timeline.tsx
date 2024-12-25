import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Northino</h4>
            <p className="vertical-timeline-element-subtitle">Kano, Nigeria</p>
            <p>
            Python, PyTourch, Tensorflow Artificial Intelligence (AI), Natural Language Processing (NLP)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ctrl F2</h4>
            <p className="vertical-timeline-element-subtitle">Texas, United State</p>
            <p>
            Software Development, React, Nextjs, Nodejs, ExpressJs, PostgreSQL, Agile Methodologies, SSDL, Google Cloud Platform (GCP)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">FlexiSAF Edusoft</h4>
            <p className="vertical-timeline-element-subtitle">Abuja, Nigeria</p>
            <p>
            Backend Development, Java, Spring, JUnit, PostgreSQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2024 - Oct 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Bookbay</h4>
            <p className="vertical-timeline-element-subtitle">Kano, Nigeria</p>
            <p>
            Backend Development, Express.js, Redux,  Nodejs, MongoDB, Firebase
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Northino</h4>
            <p className="vertical-timeline-element-subtitle">Kano, Nigeria</p>
            <p>
            Software Development, Project Management, Security Best Practices, Cloud Platform, Nodejs, Express, MongoDB
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pailot</h4>
            <p className="vertical-timeline-element-subtitle">Lagos, Nigeria</p>
            <p>
            Backend Development, Nodejs, ExpressJs, NestJs, PostgreSQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Development Facilitator</h3>
            <h4 className="vertical-timeline-element-subtitle">GDSC</h4>
            <p className="vertical-timeline-element-subtitle">Katsina, Nigeria</p>
            <p>
            MySQL, PHP, Technology Leadership,Team Building, Public Speaking
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder & CTO</h3>
            <h4 className="vertical-timeline-element-subtitle">Northino</h4>
            <p className="vertical-timeline-element-subtitle">Kano, Nigeria</p>
            <p>
            Product Development, Teamwork, Networking, Leadership, Project Managment 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2016 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & Lead Graphic Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">BHC Designs</h4>
            <p className="vertical-timeline-element-subtitle">Kano, Nigeria</p>
            <p>
            Adobe Photoshop, Image Design, CorelDRAW, Photoshop cs6
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;