import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretUp,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
// } from '@fortawesome/free-brands-svg-icons';
import './main.css';

const Works = (props) => {

  const categories = props.works.map(x=> x = x.category);

  const [state, setState] = useState({value:categories[0],transition:true});
  const nextState = () => {
    let index = categories.indexOf(state.value)
    let next;
    if (index === categories.length-1) {
      next = categories[0]
    } else {
      next = categories[index+1]
    }
    setState({value: next, transition: true});
    setWork({value:props.works.filter(x=> x.category === next)[0].works[0],transition:true})
   }
  const prevState = () => {
    let index = categories.indexOf(state.value)
    let prev;
    if (index === 0) {
      prev = categories[categories.length-1]
    } else {
      prev = categories[index-1]
    }
    setState({value: prev, transition: true});
    setWork({value:props.works.filter(x=> x.category === prev)[0].works[0],transition:true})
   }

   const [work, setWork] = useState({
     value:props.works.filter(x=> x.category === state.value)[0].works[0],
     transition: true
   })
   const nextWork = () => {
     setWork({value: work, transition: false})
     let works = props.works.filter(x=> x.category === state.value)[0].works;
     let index = works.indexOf(work.value)
     let next;
     if (index === works.length-1) {
       next = works[0]
     } else {
       next = works[index+1]
     }
     setTimeout(()=>{
       setWork({value:next,transition:true})
     },100)

   }
   const prevWork = () => {
     setWork({value: work, transition: false})
     let works = props.works.filter(x=> x.category === state.value)[0].works;
     let index = works.indexOf(work.value)
     let prev;
     if (index === 0) {
       prev = works[works.length-1]
     } else {
       prev = works[index-1]
     }
     setTimeout(()=>{
       setWork({value:prev,transition:true})
     },100)

   }
  return (
    <div className="mainTop">
    {props.mobile === true ? (
      <Grid container spacing={1} className="mainGridContainer">
        <Grid item xs={5}  className="workGridCellEmpty">

        </Grid>
        <Grid item xs={7}  className="workGridCell edgeCell redBorderGlow">
        <p>
        <span>
        <FontAwesomeIcon icon={faCaretLeft} onClick={prevState} size="2x" className="worksControls left"/>
        </span>
        <span className="category">Category</span>
        <FontAwesomeIcon icon={faCaretRight} onClick={nextState} size="2x" className="worksControls right"/>
        </p>
        <p>
        {state.value}
        </p>
        </Grid>

        <Grid item xs={12}  className="workGridCell workMidCell yellowBorderGlow">

        {state.value === 'a' && (
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 500 } : {})}
        >
        <div>
        <Grid container spacing={1} className="mainGridContainerWorks">
          <Grid item xs={12} className="worksDetailGrid">
          {work.transition === true && (
          <Slide direction="left" in={work.transition}>
          <p>
          {work.value}
          </p>
          </Slide>
          )}
          </Grid>
        </Grid>

        </div>
        </Grow>
        )}
        {state.value === 'b' && (
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 500 } : {})}
        >
        <div>
        <Grid container spacing={1} className="mainGridContainerWorks">
          <Grid item xs={1} className="worksDetailGrid">
          <ul className="worksDetailselectList">
          <li>
          <FontAwesomeIcon icon={faCaretUp} onClick={prevWork} size="3x" className="worksControls"/>
          </li>
          <li>
          <FontAwesomeIcon icon={faCaretDown} onClick={nextWork} size="3x" className="worksControls"/>
          </li>
          </ul>
          </Grid>
          <Grid item xs={10} className="worksDetailGrid">
          {work.transition === true && (
          <Slide direction="left" in={work.transition}>
          <p>
          {work.value}
          </p>
          </Slide>
          )}
          </Grid>
        </Grid>

        </div>
        </Grow>
        )}
        {state.value === 'c' && (
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 500 } : {})}
        >
        <div>
        <Grid container spacing={1} className="mainGridContainerWorks">
          <Grid item xs={12} className="worksDetailGrid">
          {work.transition === true && (
          <Slide direction="left" in={work.transition}>
          <p>
          {work.value}
          </p>
          </Slide>
          )}
          </Grid>
        </Grid>

        </div>
        </Grow>
        )}

        </Grid>

        <Grid item xs={9}  className="workGridCell edgeCell greenBorderGlow">
        {state.value === 'a' && (
        <Slide direction="up" in={state.transition}>
        <div>
        <p>
        description Aa
        </p>
        <p>
        links Aa
        </p>
        </div>
        </Slide>
        )}
        {state.value === 'b' && (
        <Slide direction="up" in={state.transition}>
        <div>
        <p>
        description Bb
        </p>
        <p>
        links Bb
        </p>
        </div>
        </Slide>
        )}
        {state.value === 'c' && (
        <Slide direction="up" in={state.transition}>
        <div>
        <p>
        description Cc
        </p>
        <p>
        links Cc
        </p>
        </div>
        </Slide>
        )}
        </Grid>
        <Grid item xs={3}  className="workGridCellEmpty">
        <ul className="worksDetailselectList">
        <li>
        <FontAwesomeIcon icon={faCaretUp} onClick={prevWork} size="3x" className="worksControls"/>
        </li>
        <li>
        <FontAwesomeIcon icon={faCaretDown} onClick={nextWork} size="3x" className="worksControls"/>
        </li>
        </ul>
        </Grid>
      </Grid>

    ):(
      <Grid container spacing={1} className="mainGridContainer">
        <Grid item xs={7}  className="workGridCellEmpty">

        </Grid>
        <Grid item xs={5}  className="workGridCell edgeCell redBorderGlow">
        <p>
        <span>
        <FontAwesomeIcon icon={faCaretLeft} onClick={prevState} size="2x" className="worksControls"/>
        </span>
        <span className="category">Category</span>
        <FontAwesomeIcon icon={faCaretRight} onClick={nextState} size="2x" className="worksControls"/>
        </p>
        <p>
        {state.value}
        </p>
        </Grid>

        <Grid item xs={12}  className="workGridCell workMidCell yellowBorderGlow">

        {state.value === 'a' && (
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 500 } : {})}
        >
        <div>
        <Grid container spacing={1} className="mainGridContainerWorks">
          <Grid item xs={1} className="worksDetailGrid">
          <ul className="worksDetailselectList">
          <li>
          <FontAwesomeIcon icon={faCaretUp} onClick={prevWork} size="5x" className="worksControls"/>
          </li>
          <li>
          <FontAwesomeIcon icon={faCaretDown} onClick={nextWork} size="5x" className="worksControls"/>
          </li>
          </ul>
          </Grid>
          <Grid item xs={10} className="worksDetailGrid">
          {work.transition === true && (
          <Slide direction="left" in={work.transition}>
          <p>
          {work.value}
          </p>
          </Slide>
          )}
          </Grid>
        </Grid>

        </div>
        </Grow>
        )}
        {state.value === 'b' && (
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 500 } : {})}
        >
        <div>
        <Grid container spacing={1} className="mainGridContainerWorks">
          <Grid item xs={1} className="worksDetailGrid">
          <ul className="worksDetailselectList">
          <li>
          <FontAwesomeIcon icon={faCaretUp} onClick={prevWork} size="5x" className="worksControls"/>
          </li>
          <li>
          <FontAwesomeIcon icon={faCaretDown} onClick={nextWork} size="5x" className="worksControls"/>
          </li>
          </ul>
          </Grid>
          <Grid item xs={10} className="worksDetailGrid">
          {work.transition === true && (
          <Slide direction="left" in={work.transition}>
          <p>
          {work.value}
          </p>
          </Slide>
          )}
          </Grid>
        </Grid>

        </div>
        </Grow>
        )}
        {state.value === 'c' && (
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 500 } : {})}
        >
        <div>
        <Grid container spacing={1} className="mainGridContainerWorks">
          <Grid item xs={1} className="worksDetailGrid">
          <ul className="worksDetailselectList">
          <li>
          <FontAwesomeIcon icon={faCaretUp} onClick={prevWork} size="5x" className="worksControls"/>
          </li>
          <li>
          <FontAwesomeIcon icon={faCaretDown} onClick={nextWork} size="5x" className="worksControls"/>
          </li>
          </ul>
          </Grid>
          <Grid item xs={10} className="worksDetailGrid">
          {work.transition === true && (
          <Slide direction="left" in={work.transition}>
          <p>
          {work.value}
          </p>
          </Slide>
          )}
          </Grid>
        </Grid>

        </div>
        </Grow>
        )}

        </Grid>

        <Grid item xs={7}  className="workGridCell edgeCell greenBorderGlow">
        {state.value === 'a' && (
        <Slide direction="up" in={state.transition}>
        <div>
        <p>
        description Aa
        </p>
        <p>
        links Aa
        </p>
        </div>
        </Slide>
        )}
        {state.value === 'b' && (
        <Slide direction="up" in={state.transition}>
        <div>
        <p>
        description Bb
        </p>
        <p>
        links Bb
        </p>
        </div>
        </Slide>
        )}
        {state.value === 'c' && (
        <Slide direction="up" in={state.transition}>
        <div>
        <p>
        description Cc
        </p>
        <p>
        links Cc
        </p>
        </div>
        </Slide>
        )}
        </Grid>
        <Grid item xs={5}  className="workGridCellEmpty">

        </Grid>
      </Grid>
    )}


    </div>
  )
}

export default Works;
