import React, {useState} from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import Swipe from "react-easy-swipe";

function Carousel({app}) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [, setPaused] = useState(false)


    const nextSlide = () => {
        let newSlide =
            currentSlide === app.screenshots.length - 1
                ? 0
                : currentSlide + 1;
        setCurrentSlide(newSlide)

    };

    const prevSlide = () => {
        let newSlide =
            currentSlide === 0
                ? app.screenshots.length - 1
                : currentSlide - 1;
        setCurrentSlide(newSlide)
    };

    return (
        <div className="mt-8">
            <div className="max-w-lg h-72 flex overflow-hidden relative">
                <AiOutlineLeft
                    onClick={prevSlide}
                    className="absolute left-0 text-3xl inset-y-1/2 text-black cursor-pointer"
                />

                <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
                    {app.screenshots.map((slide, index) => {
                        return (
                            <img
                                src={slide}
                                alt="This is a carousel slide"
                                key={index}
                                className={
                                    index === currentSlide
                                        ? "block w-200 h-auto object-cover"
                                        : "hidden"
                                }
                                onMouseEnter={() => {
                                    setPaused(true)
                                }}
                                onMouseLeave={() => {
                                    setPaused(false)
                                }}
                            />
                        );
                    })}
                </Swipe>

                <div className="absolute w-full flex justify-center bottom-0">
                    {app.screenshots.map((element, index) => {
                        return (
                            <div
                                className={
                                    index === currentSlide
                                        ? "h-2 w-2 bg-red-700 rounded-full mx-2 mb-2 cursor-pointer"
                                        : "h-2 w-2 bg-black rounded-full mx-2 mb-2 cursor-pointer"
                                }
                                key={index}
                                onClick={() => {
                                    setCurrentSlide(index);

                                }}
                            >

                            </div>
                        );
                    })}
                </div>

                <AiOutlineRight
                    onClick={nextSlide}
                    className="absolute right-0 text-3xl inset-y-1/2 text-black cursor-pointer"
                />
            </div>
        </div>
    );
}

export default Carousel;