import React, {useState} from 'react';
import Slide from '@material-ui/core/Slide';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import Button from '@material-ui/core/Button';

import './main.css';

const Experience = (props) => {

  const [state, setState] = useState('');
  const handleStateChange = (args) => {
    setState({item: args.item,transition:args.transition});
   }

  return (
    <div className="timelineTop">
    <Timeline align="alternate" className="timeline">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector className="timelineConnector"/>
        </TimelineSeparator>
        <TimelineContent className="experienceItem">
        {state.item !== 'a' &&(
          <Button variant="outlined" color="primary" onMouseEnter={handleStateChange.bind(this,{item:'a',transition:true})}>
            Eat
          </Button>
        )}
        {state.item === 'a' && (
        <Slide direction="left" in={state.transition}>
        <div className="expSubItem" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
        <p>Eat</p>
        <p>Eat</p>
        <p>Eat</p>
        <p>Eat</p>
        </div>
        </Slide>
        )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector className="timelineConnector"/>
        </TimelineSeparator>
        <TimelineContent className="experienceItem">
        {state.item !== 'b' &&(
          <Button variant="outlined" color="primary" onMouseEnter={handleStateChange.bind(this,{item:'b',transition:true})}>
            Code
          </Button>
        )}
        {state.item === 'b' && (
        <Slide direction="right" in={state.transition}>
        <div className="expSubItem" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
        <p>Code</p>
        <p>Code</p>
        <p>Code</p>
        <p>Code</p>
        </div>
        </Slide>
        )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector className="timelineConnector"/>
        </TimelineSeparator>
        <TimelineContent className="experienceItem">
        {state.item !== 'c' &&(
          <Button variant="outlined" color="primary" onMouseEnter={handleStateChange.bind(this,{item:'c',transition:true})}>
            Sleep
          </Button>
        )}
        {state.item === 'c' && (
        <Slide direction="left" in={state.transition}>
        <div className="expSubItem" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
        <p>Sleep</p>
        <p>Sleep</p>
        <p>Sleep</p>
        <p>Sleep</p>
        </div>
        </Slide>
        )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector className="timelineConnector"/>
        </TimelineSeparator>
        <TimelineContent className="experienceItem">
        {state.item !== 'd' &&(
          <Button variant="outlined" color="primary" onMouseEnter={handleStateChange.bind(this,{item:'d',transition:true})}>
            Repeat
          </Button>
        )}
        {state.item === 'd' && (
        <Slide direction="right" in={state.transition}>
        <div className="expSubItem" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
        <p>Repeat</p>
        <p>Repeat</p>
        <p>Repeat</p>
        <p>Repeat</p>
        </div>
        </Slide>
        )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector className="timelineConnector"/>
        </TimelineSeparator>
        <TimelineContent className="experienceItem">
        {state.item !== 'e' &&(
          <Button variant="outlined" color="primary" onMouseEnter={handleStateChange.bind(this,{item:'e',transition:true})}>
            Sleep
          </Button>
        )}
        {state.item === 'e' && (
        <Slide direction="left" in={state.transition}>
        <div className="expSubItem" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
        <p>Sleep</p>
        <p>Sleep</p>
        <p>Sleep</p>
        <p>Sleep</p>
        </div>
        </Slide>
        )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent className="experienceItem">
        {state.item !== 'f' &&(
          <Button variant="outlined" color="primary" onMouseEnter={handleStateChange.bind(this,{item:'f',transition:true})}>
            Repeat
          </Button>
        )}
        {state.item === 'f' && (
        <Slide direction="right" in={state.transition}>
        <div className="expSubItem" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
        <p>Repeat</p>
        <p>Repeat</p>
        <p>Repeat</p>
        <p>Repeat</p>
        </div>
        </Slide>
        )}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  )
}

export default Experience;
