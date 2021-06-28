/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import './Home--Top.scss'
import {gsap, Power4} from "gsap";

export default () => {
    
    const [hideButtons, setHideButtons] = useState(false)

    useEffect (() => {
        const loadAll = async () => {
            
            const cols = 3;
            const main = document.getElementById('main');
            let parts = [];

            let images = [
            "https://wallpapercave.com/wp/wp2878153.jpg",
            "https://wallpaper.dog/large/5518832.jpg",
            "https://images6.alphacoders.com/360/thumb-1920-360937.jpg",
            "https://wallpaperaccess.com/full/404250.jpg"
            ];
            let current = 0;
            let playing = false;

            for (let i in images) {
                new Image().src = images[i];
            }

            for (let col = 0; col < cols; col++) {
                let part = document.createElement('div');
                part.className = 'part';
                let el = document.createElement('div');
                el.className = "section";
                let img = document.createElement('img');
                img.src = images[current];
                el.appendChild(img);
                part.style.setProperty('--x', -100/cols*col+'vw');
                part.appendChild(el);
                main.appendChild(part);
                parts.push(part);
            }

            let animOptions = {
                duration: 2.3,
                ease: Power4.easeInOut
            };

            function go(dir) {
                const scrollListener = () => {
                    if(window.scrollY > 0){
                      return null;
                    }
                }
                window.addEventListener('scroll', scrollListener)
    
                if ((!playing) && (window.scrollY <= 0)) {
                    disableScroll();
                    playing = true;
                    if (current + dir < 0) current = images.length - 1;
                    else if (current + dir >= images.length) current = 0;
                    else current += dir;

                    function up(part, next) {
                        part.appendChild(next);
                        gsap.to(part, {...animOptions, y: -window.innerHeight}).then(function () {
                            part.children[0].remove();
                            gsap.to(part, {duration: 0, y: 0});
                        })
                    }

                    function down(part, next) {
                        part.prepend(next);
                        gsap.to(part, {duration: 0, y: -window.innerHeight});
                        gsap.to(part, {...animOptions, y: 0}).then(function () {
                            part.children[1].remove();
                            playing = false;
                            enableScroll();
                        })
                    }

                    for (let p in parts) {
                        let part = parts[p];
                        let next = document.createElement('div');
                        next.className = 'section';
                        let img = document.createElement('img');
                        img.src = images[current];
                        next.appendChild(img);

                        if ((p - Math.max(0, dir)) % 2) {
                            down(part, next);
                        } else {
                            up(part, next);
                        }
                    }
                }
                  window.addEventListener('scroll', scrollListener)
                  return () => {
                    window.removeEventListener('scroll', scrollListener)
                  }
            }

            window.addEventListener('keydown', function(e) {
            if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
                go(1);
            }

            else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
                go(-1);
            }
            });

            function lerp(start, end, amount) {
                return (1-amount)*start+amount*end
            }

            const cursor = document.createElement('div');
            cursor.className = 'cursor';

            const cursorF = document.createElement('div');
            cursorF.className = 'cursor-f';
            let cursorX = 0;
            let cursorY = 0;
            let pageX = 0;
            let pageY = 0;
            let size = 8;
            let sizeF = 36;
            let followSpeed = .16;

            document.body.appendChild(cursor);
            document.body.appendChild(cursorF);

            if ('ontouchstart' in window) {
                cursor.style.display = 'none';
                cursorF.style.display = 'none';
            }

            cursor.style.setProperty('--size', size+'px');
            cursorF.style.setProperty('--size', sizeF+'px');

            window.addEventListener('mousemove', function(e) {
                pageX = e.clientX;
                pageY = e.clientY;
                cursor.style.left = e.clientX-size/2+'px';
                cursor.style.top = e.clientY-size/2+'px';
            });

            function loop() {
                cursorX = lerp(cursorX, pageX, followSpeed);
                cursorY = lerp(cursorY, pageY, followSpeed);
                cursorF.style.top = cursorY - sizeF/2 + 'px';
                cursorF.style.left = cursorX - sizeF/2 + 'px';
                requestAnimationFrame(loop);
            }

            loop();

            let startY;
            let endY;
            let clicked = false;

            function mousedown(e) {
                gsap.to(cursor, {scale: 4.5});
                gsap.to(cursorF, {scale: .4});

                clicked = true;
                startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
            }
            function mouseup(e) {
                gsap.to(cursor, {scale: 1});
                gsap.to(cursorF, {scale: 1});

                endY = e.clientY || endY;
                if (clicked && startY && Math.abs(startY - endY) >= 40) {
                    go(!Math.min(0, startY - endY)?1:-1);
                    clicked = false;
                    startY = null;
                    endY = null;
                }
            }/**/
            window.addEventListener('mousedown', mousedown, false);
            window.addEventListener('touchstart', mousedown, false);
            window.addEventListener('touchmove', function(e) {
            if (clicked) {
                endY = e.touches[0].clientY || e.targetTouches[0].clientY;
            }
            }, false);
            window.addEventListener('touchend', mouseup, false);
            window.addEventListener('mouseup', mouseup, false);
            document.getElementById('go-1').addEventListener("click", function(){
                go(-1);
            }, false);
            document.getElementById('go1').addEventListener("click", function(){
                go(1);
            }, false);
        }         
        loadAll();
    }, [])
        
    useEffect(() => {
        const scrollListener = () => {
          if(window.scrollY > 0){
            setHideButtons(true);
          } else {  
            setHideButtons(false);
          }
        }
    
        window.addEventListener('scroll', scrollListener)
        return () => {
          window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get:  supportsPassive = true
        }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    return (
        <div id="main">
            <div className="Background--vertical">
                    <div className="Background--horizontal">
                <h1>Veneza</h1>
                <div style={{
                    transition: '0.5s',
                    visibility: hideButtons ? 'hidden' : 'visible',
                    opacity: hideButtons ? 0 : 1,
                }}class="buttons">    
                    <button class="next" id="go-1"></button>
                    <button class="prev" id="go1"></button>
                </div>
                </div>
            </div>
        </div>
    )
}