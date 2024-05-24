"use client"


import React, { useEffect, useState } from 'react'

function Counter({ count }) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {

            switch (count) {
                case count < 100:
                    setCounter((prevCounter) => prevCounter + 1)
                    break;
                case count > 100 && count < 2000:
                    setCounter((prevCounter) => {
                        if (prevCounter + 53 >= count) {
                            return prevCounter + 1
                        }
                        else {
                            return prevCounter + 53
                        }
                    })
                    break;
                case count > 100 && count < 2000:
                    setCounter((prevCounter) => {
                        if (prevCounter + 191 >= count) {
                            return prevCounter + 1
                        }
                        else {
                            return prevCounter + 191
                        }
                    })
                    break;
                case count > 2000 && count < 25000:
                    setCounter((prevCounter) => {
                        if (prevCounter + 480 >= count) {
                            return prevCounter + 2
                        }
                        else {
                            return prevCounter + 480
                        }
                    })
                    break;

                default: setCounter((prevCounter) => {
                    if (prevCounter + 1080 >= count) {
                        return prevCounter + 2
                    }
                    else {
                        return prevCounter + 1080
                    }
                })
                    break;
            }

            // if (count < 100) {
            //     setCounter((prevCounter) => prevCounter + 1)
            // }
            // if (count > 100 && count < 3000) {
            //     setCounter((prevCounter) => prevCounter + 21)
            // }
            // if (count > 3000 && count < 30000) {
            //     setCounter((prevCounter) => prevCounter + 191)
            // }
            // else {
            //     setCounter((prevCounter) => prevCounter + 993)
            // }
        }, 10)

        if (count <= counter) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [counter])



    return <span >{counter.toLocaleString()}</span>

}

export default Counter