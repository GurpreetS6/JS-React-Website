import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function CovidPage() {
    return (
        <div className="CovidPage">
            <Tittle title={'Covid-19 Social Distancing Project'} />
            <h4><span> Main Objective</span></h4>
            <p className="about-text">
                The purpose of this project was to...
                </p>
        </div>

    )
}

export default CovidPage;
