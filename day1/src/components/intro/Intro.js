import "./Intro.css";
import React, {useRef, useEffect} from 'react'
import anime from './anime-master/lib/anime.es.js';

function Intro() {
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: '#lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3000,
      delay: 0/*function(el, i) { return i * 250 }*/,
      direction: 'alternate',
      loop: true
    });
    /*var gridStaggering = function() {
anime({
  targets: '.staggering-grid-demo .el',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});
}
  */ 
    animation.current = anime({
      targets: '.staggering-grid-demo .el',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [2, 5], from: 'center'})
    });
  }, []);

  return (
    <div className="intro">
        <section id="welcome">
            <div class="container one-div">
                <div class="title-container">
                    <h1>Welcome and hello!</h1>
                    <p>My name is Nadir</p>
                    <p>I'm a full stack developer.</p>
                </div>
                <div id="lineDrawing">
                  <svg viewBox="0 0 792 512">
                  <g class="lines">
                  <path class="my-path" d="M 40 200 L 80 100 L 120 100 L 140 170 L 170 100 L 200 100 L 150 200 L 120 200 L 100 120 L 70 200 L 40 200 "
                  />
                  <path class="my-path" d="M 250 100 L 190 200 L 220 200 L 240 170 L 270 170 L 290 200 L 320 200 L 280 100 L 240 100 "
                  />
                  <path class="my-path" d="M 240 150 L 270 150 L 260 130 L 255 130 L 240 150 "
                  />
                  <path class="my-path" d="M 380 100 L 350 200 Q 420 200 430 150 Q 440 100 380 100 "
                  />
                  <path class="my-path" d="M 390 130 L 375 175 Q 405 175 410 150 Q 410 130 390 130 "
                  />
                  <path class="my-path" d="M 480 100 L 560 100 L 550 120 L 530 120 L 515 185 L 535 185 L 530 205 L 460 205 L 465 185 L 490 185 L 505 120 L 475 120 L 480 100 "
                  />
                  <path class="my-path" d="M 620 100 L 590 205 L 620 205 L 635 155 L 650 205 L 680 205 L 665 155 Q 690 155 685 120 Q 680 100 650 100 L 620 100 " />
                  <path class="my-path" d="M 650 115 L 645 135 C 670 140 670 110 650 115 " />
                  <path class="underline" d="M 390 250 L 650 250 Z" />
                  <path class="underline" d="M 400 250 L 100 250 Z" />
                  </g>
                  </svg>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Intro
