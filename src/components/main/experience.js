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

    {state.item === 'a' &&
      props.mobile === true && (
    <Slide direction="left" in={state.transition}>
    <div className="expSubItem redBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p>Eat</p>
    <p>Eat</p>
    <p>Eat</p>
    <Button className="yellowButton mainBtn" onClick={handleStateChange.bind(this,{item:'',transition:false})}>
      X
    </Button>
    </div>
    </Slide>
    )}

    {state.item === 'b' &&
      props.mobile === true && (
    <Slide direction="right" in={state.transition}>
    <div className="expSubItem yellowBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p>Code</p>
    <p>Code</p>
    <p>Code</p>
    <Button className="redButton mainBtn" onClick={handleStateChange.bind(this,{item:'',transition:false})}>
      X
    </Button>
    </div>
    </Slide>
    )}
    {state.item === 'c' &&
      props.mobile === true && (
    <Slide direction="left" in={state.transition}>
    <div className="expSubItem greenBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p>Sleep</p>
    <p>Sleep</p>
    <p>Sleep</p>
    <Button className="yellowButton mainBtn" onClick={handleStateChange.bind(this,{item:'',transition:false})}>
      X
    </Button>
    </div>
    </Slide>
    )}
    {state.item === 'd' &&
      props.mobile === true && (
    <Slide direction="right" in={state.transition}>
    <div className="expSubItem redBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p>Repeat</p>
    <p>Repeat</p>
    <p>Repeat</p>
    <Button className="yellowButton mainBtn" onClick={handleStateChange.bind(this,{item:'',transition:false})}>
      X
    </Button>
    </div>
    </Slide>
    )}
    {state.item === 'e' &&
      props.mobile === true && (
    <Slide direction="left" in={state.transition}>
    <div className="expSubItem yellowBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p>Sleep</p>
    <p>Sleep</p>
    <p>Sleep</p>
    <Button className="greenButton mainBtn" onClick={handleStateChange.bind(this,{item:'',transition:false})}>
      X
    </Button>
    </div>
    </Slide>
    )}
    {state.item === 'f' &&
      props.mobile === true && (
    <Slide direction="right" in={state.transition}>
    <div className="expSubItem greenBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p>Repeat</p>
    <p>Repeat</p>
    <p>Repeat</p>
    <Button className="redButton mainBtn" onClick={handleStateChange.bind(this,{item:'',transition:false})}>
      X
    </Button>
    </div>
    </Slide>
    )}

    {props.mobile === true ? (

      <Timeline align="alternate" className="timeline">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="redBg"/>
            <TimelineConnector className="timelineConnector"/>
          </TimelineSeparator>
          <TimelineContent className="experienceItem">
          {state.item !== 'a' &&(
            <Button variant="outlined" color="primary" onClick={handleStateChange.bind(this,{item:'a',transition:true})}>
              Eat
            </Button>
          )}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="yellowBg" />
            <TimelineConnector className="timelineConnector"/>
          </TimelineSeparator>
          <TimelineContent className="experienceItem">
          {state.item !== 'b' &&(
            <Button variant="outlined" color="primary" onClick={handleStateChange.bind(this,{item:'b',transition:true})}>
              Code
            </Button>
          )}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="greenBg" />
            <TimelineConnector className="timelineConnector"/>
          </TimelineSeparator>
          <TimelineContent className="experienceItem">
          {state.item !== 'c' &&(
            <Button variant="outlined" color="primary" onClick={handleStateChange.bind(this,{item:'c',transition:true})}>
              Sleep
            </Button>
          )}

          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="redBg"/>
            <TimelineConnector className="timelineConnector"/>
          </TimelineSeparator>
          <TimelineContent className="experienceItem">
          {state.item !== 'd' &&(
            <Button variant="outlined" color="primary" onClick={handleStateChange.bind(this,{item:'d',transition:true})}>
              Repeat
            </Button>
          )}

          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="yellowBg" />
            <TimelineConnector className="timelineConnector"/>
          </TimelineSeparator>
          <TimelineContent className="experienceItem">
          {state.item !== 'e' &&(
            <Button variant="outlined" color="primary" onClick={handleStateChange.bind(this,{item:'e',transition:true})}>
              Sleep
            </Button>
          )}

          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="greenBg"/>
          </TimelineSeparator>
          <TimelineContent className="experienceItem">
          {state.item !== 'f' &&(
            <Button variant="outlined" color="primary" onClick={handleStateChange.bind(this,{item:'f',transition:true})}>
              Repeat
            </Button>
          )}

          </TimelineContent>
        </TimelineItem>
      </Timeline>
    ):(
      <Timeline align="alternate" className="timeline">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="redBg"/>
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
          <div className="expSubItem redBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
            <TimelineDot className="yellowBg" />
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
          <div className="expSubItem yellowBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
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
            <TimelineDot className="greenBg" />
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
          <div className="expSubItem greenBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
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
            <TimelineDot className="redBg"/>
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
          <div className="expSubItem redBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
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
            <TimelineDot className="yellowBg" />
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
          <div className="expSubItem yellowBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
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
            <TimelineDot className="greenBg"/>
          </TimelineSeparator>
          <TimelineContent className="experienceItem">
          {state.item !== 'f' &&(
            <Button variant="outlined" color="primary" onMouseEnter={handleStateChange.bind(this,{item:'f',transition:true})}>
              Repeat
            </Button>
          )}
          {state.item === 'f' && (
          <Slide direction="right" in={state.transition}>
          <div className="expSubItem greenBorderGlow" onMouseLeave={handleStateChange.bind(this,{item:'',transition:false})}>
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
    )}

    </div>
  )
}

export default Experience;
