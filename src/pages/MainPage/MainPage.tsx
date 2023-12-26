import React from "react";
import {Hero} from "../../components/MainPageComp/Hero/Hero";
import {About} from "../../components/MainPageComp/About/About";

export function MainPage() {
    return(
        <>
           <div className="ovf-hidden">
               <Hero/>
               <About/>
           </div>
        </>
    )
}