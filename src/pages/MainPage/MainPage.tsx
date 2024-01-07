import React from "react";
import {Hero} from "./MainPageComp/Hero/Hero";
import {About} from "./MainPageComp/About/About";
import {Slider} from "./MainPageComp/Comments/Slider"
import {HowWork} from "./MainPageComp/HowWork/HowWork";
import {ScrollBanner} from "./MainPageComp/ScrollBanner/ScrollBanner";

export function MainPage() {
    return (
        <>
            <Hero/>
            <About/>
            <HowWork/>
            <Slider/>
        </>
    )
}