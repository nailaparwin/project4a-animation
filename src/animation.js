import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import useWebAnimations, { rotateOut } from "@wellyshen/use-web-animations";
import lion from './images/oie.gif';
import cloud from './images/cloud.png';
import bird from './images/bird.gif';
import bird2 from './images/bird2.gif';
import jungle from './images/jngle.png';
import star from './images/sst.png';
function Animation() {

  //const { ref, playState, getAnimation} = useWebAnimations({...rotateOut});
   const { ref:o1 } = useWebAnimations({
    keyframes:[
      {transform: "translate(-300px, 150px)", opacity:100},
      {transform: "translate(200px, 150px)", opacity:80},
      {transform: "translate(300px, 150px)", opacity:0}      
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 4,
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });


  const { ref:o2} = useWebAnimations({
    keyframes:[
      {transform: "translate(300px, -240px)", opacity:1},
      {transform: "translate(100px, -240px)", opacity:1},
      {transform: "translate(0px, -240px)", opacity:0},
      {transform: "translate(-200px, -240px)", opacity:0}
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 4,      
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });

  const { ref:o3} = useWebAnimations({
    keyframes:[
      {transform: "translate(-100px, -30px)", opacity:100},
      {transform: "translate(230px, 0px)", opacity:100},
      {transform: "translate(240px, 0px)", opacity:0}
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 4,
      //direction: "alternate",
      //easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });

  const { ref:o4, playState, getAnimation} = useWebAnimations({
    keyframes:[
      {transform: "translate(0px, -400px)",opacity:100},
      {transform: "translate(0px, 40px)",opacity:100},
      {transform: "translate(0px, 70px)",opacity:0}
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 4,
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });

  const { ref:main} = useWebAnimations({
    keyframes:[
      {backgroundImage:`url(${jungle})` },
      {backgroundColor: "white"},         
      {backgroundColor: "black"},            
      
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 4,
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });

  const { ref:o5} = useWebAnimations({
    keyframes:[
      {backgroundColor: 'yellow', transform: "translate(350px, -10px)"},
      {backgroundColor: 'white', transform: "translate(100px, -10px)"}
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 1,      
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });

  const { ref:o6} = useWebAnimations({
    keyframes:[
      {transform: "scale(0.2)", opacity:0},
      {transform: "scale(0.2)",opacity:0},
      {transform: "scale(0.1)",opacity:0},
      {transform: "scale(0.8)",opacity:1}
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 1,      
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });

  const { ref:o7} = useWebAnimations({
    keyframes:[
      {transform: "scale(0.2)", opacity:0},      
      {transform: "scale(0.1)",opacity:0},
      {transform: "scale(0.8)",opacity:1}
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 1,      
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });

  const { ref:o8} = useWebAnimations({
    keyframes:[
      {transform: "scale(0.2)", opacity:0},    
      {transform: "scale(0.1)",opacity:0},
      {transform: "scale(0.8)",opacity:1}
    ],
    timing:{
      duration: 11000,
      iterations: Infinity,
      //iterations: 1,      
      //direction: "alternate",
      easing: "ease-in-out"
      //easing: "steps(4,end)"
    },
  });
  return (
    // <div style={{ marginLeft:"180px", borderBottom: " solid white 6px", height:"230px", width:"200px", border:"solid red 2px"}}>
      
      
      <div id="outer-div">
      
      <div ref={main}  style={{height:'500px'}}>
            
      <img src={bird} width="100px" ref={o3}/>      
      
      <div ref={o5} className="round">      
      </div>  
     
      <div  >
      <img src={lion} width= "300px" ref={o1} />
      </div>
     {/*  <div ref={o2} >
      <img src={cloud} width= "130px" />
      </div>*/}
      <div ref={o4} >
      <img src={bird2} width="100px" />
      </div>
      <div ref={o6} style={{position: 'absolute', top: 150, left: 200}} >
      <img src={star} width="40px" />
      </div>
      <div ref={o7} style={{position: 'absolute', top: 200, left: 250}} >
      <img src={star} width="40px" />
      </div>
      <div ref={o8} style={{position: 'absolute', top: 150, left: 400}} >
      <img src={star} width="40px" />
      </div> 
      </div>
      </div>
   
  );
}

export default Animation;
