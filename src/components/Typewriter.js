import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const words = [
    {
        topic:"LEGO.",
        message:"Usually spaceships... mostly Star Wars"
    },
    {
        topic:"food.",
        message:"commonly known as 'cooking'"
    },
    {
        topic:"websites.",
        message:"That's probably why you're here, huh?"
    },
]

const Typewriter = (props) => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true); 
    const [messageIndex, setMessageIndex] = useState(0);
    const [mesReverse, setMesReverse] = useState(false)

    //blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink(!blink)
        }, 500)
        return () => clearTimeout(timeout2)
    }, [blink])

    //typewriting
    useEffect(() => {

        if (index === words.length - 1 && subIndex < 0 && reverse) {
            setTimeout(() => {
                setReverse(false)
                setIndex(0)
            }, 300)
            return
        }

        if (index < words.length && subIndex === words[index].topic.length && !reverse) {
            setTimeout(() => {
                setReverse(true)
            }, 2250)
            return
        }

        if (index < words.length && subIndex < 0 && reverse) {
            setTimeout(() => {
                setReverse(false)
                setIndex(index + 1)
            }, 300)
            return
        }

        const interval = setInterval(() => {
            setSubIndex(subIndex + (reverse ? -1 : 1))
        }, Math.random() * (150 - 75) + 75)

        return () => clearInterval(interval)
    }, [subIndex, index, reverse])

    return(
        <div className={"w-full" + " text-" + props.colorScheme.textColor}>

            <div className="flex w-full text-3xl md:text-6xl">
                <div className="w-1/2 text-right">
                    <h2>
                        I build&nbsp;
                    </h2>

                </div>
                <h2>
                    {`${words[index].topic.substring(0, subIndex + 1)}${blink ? "|" : ""}`}
                </h2>
        
            </div>
            <div className="text-center text-2xl md:text-3xl pt-5 h-2.5">
                {subIndex === words[index].topic.length ? `(${words[index].message})` : " " }
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return({
      colorScheme: state.colorScheme
    })
  }
  
  export default connect(mapStateToProps)(Typewriter);