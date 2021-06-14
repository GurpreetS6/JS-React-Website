import port1 from '../img/portImages/social-distancing.png';
import port2 from '../img/portImages/signal-processing.jpg';
import port3 from '../img/portImages/scraping-image-3.jpg';
import port4 from '../img/portImages/api-1.png';
import port5 from '../img/portImages/senior-proj.jpg';
import port6 from '../img/portImages/skinai-1.png';
import port7 from '../img/portImages/data-analysis-1.jpg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const portfolios = [
    {
        id: 1,
        category: 'MATLAB',
        link1: "/covid",
        link2: 'https://www.github.com/GurpreetS6',
        icon1: 'Info',
        icon2: 'Github',
        image: port1,
        title: 'Covid-19 Social Distancing Detection'
    },
    {
        id: 2,
        category: 'MATLAB',
        link1: 'https://www.youtube.com',
        link2: 'https://www.github.com/GurpreetS6',
        icon1: 'Info',
        icon2: 'Github',
        image: port2,
        title: 'Signal Processing'
    },
    {
        id: 3,
        category: 'Python',
        link1: 'https://www.youtube.com',
        link2: 'https://www.github.com/GurpreetS6',
        icon1: 'Info',
        icon2: 'Github',
        image: port3,
        title: 'Web Scraper'
    },
    {
        id: 4,
        category: 'Python',
        link1: 'https://www.youtube.com',
        link2: 'https://www.github.com/GurpreetS6',
        icon1: 'Info',
        icon2: 'Github',
        image: port4,
        title: 'Flickr API - Images'
    },
    {
        id: 5,
        category: 'Amazon Web Services',
        link1: 'https://www.youtube.com',
        link2: 'https://www.github.com/GurpreetS6',
        icon1: 'Info',
        icon2: 'Github',
        image: port6,
        title: 'SkinAI - Skin disease detection'
    },
    {
        id: 6,
        category: 'R',
        link1: 'https://www.youtube.com',
        link2: 'https://www.github.com/GurpreetS6',
        icon1: 'Info',
        icon2: 'Github',
        image: port7,
        title: 'Some Data Analysis'
    },
    {
        id: 7,
        category: 'Robotics - Senior Project / C++',
        link1: 'https://www.youtube.com',
        link2: 'https://www.github.com/GurpreetS6',
        icon1: 'Info',
        icon2: 'Github',
        image: port5,
        title: 'Senior Project'
    }
]

export default portfolios;