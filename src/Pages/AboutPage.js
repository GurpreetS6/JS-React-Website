import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MATLAB'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Networks (CCNA)'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'C++'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Arduinos'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Web Design'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'SQL'} progress={'70%'} width={'70%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Data Analysis'} 
                text={'Using programming languages such as R and Python, I have grown to enjoy \
                analyzing data. I have many projects where I analyze data from an engineering  \
                perspective using MATLAB. I have transitioned much of my knowledge from  an \
                engineering perspective to a statistical and programming oriented focus.'}
                />
                <ServicesSection image={intelligence} title={'Arduino Programming'} 
                text={"I love using my programming knowledge combined with what I've learned as \
                an engineer to develop projects. I start robotics projects from scratch from \
                deciding which materials to use and then implement programming to help bring it \
                to life through the use of Arduino IDE's and C/C++!"}
                />
                <ServicesSection image={gamedev} title={'Signal and Image Processing'} 
                text={"Using MATLAB and Python, I've been able to delve into image and signal \
                processing by implementing mathematical equations. Taking graduate level courses \
                and studying Fourier Series has solidified my knowledge in signal processing and \
                allowed for me to take on big projects!"}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
