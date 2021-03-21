import React from 'react';
import './Home.css';
import Banner from './Banner.js';
import Card from './Card.js';

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home-search">
                <Card
                    src="/card3.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                />
                <Card
                    src="/card1.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                />
                <Card
                    src="/card2.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                />
                
            </div>
            <div className="home-search">
                <Card
                    src="/card4.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                    price="$130/night"
                />
                <Card
                    src="/card5.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                    price="$350/night"
                />
                <Card
                    src="/card6.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                    price="$70/night"
                />
            </div>
            <div className="home-search">
                <Card
                    src="/card7.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                    price="$130/night"
                />
                <Card
                    src="/card8.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                    price="$350/night"
                />
                <Card
                    src="/card1.jfif"
                    title="Online Experiences"
                    description="Unique activity of we can do together,led by a world of hosts"
                    price="$70/night"
                />
            </div>
        </div>
    );
}

export default Home;
