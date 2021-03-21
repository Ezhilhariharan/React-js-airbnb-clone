import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult.js";

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage-info">
            <p>62 Stays.26 August to 30 August . 2 Guest</p>
                <h1>Stay nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place </Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and bed </Button>
                <Button variant="outlined">More Filter </Button>
            </div>
            <SearchResult
                src="/card7.jfif"
                location="Private room center of the london"
                title="Stay at the Spacious Edwarden house"
                description="1 guest. 1 bedroom . 1bed . 1.5 shared bathrooms . kitchen .  free parking.washing machine"
                star={ 4.73 }
                price="$30/night"
                total="$117 total"
            />
            <SearchResult
                src="/card8.jfif"
                location="Private room center of the london"
                title="Stay at the Spacious Edwarden house"
                description="1 guest. 1 bedroom . 1bed . 1.5 shared bathrooms . kitchen .  free parking.washing machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
            />
            <SearchResult
                src="/card1.jfif"
                location="Private room center of the london"
                title="Stay at the Spacious Edwarden house"
                description="1 guest. 1 bedroom . 1bed . 1.5 shared bathrooms . kitchen .  free parking.washing machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
            />
            <SearchResult
                src="/card2.jfif"
                location="Private room center of the london"
                title="Stay at the Spacious Edwarden house"
                description="1 guest. 1 bedroom . 1bed . 1.5 shared bathrooms . kitchen .  free parking.washing machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
            />
            <SearchResult
                src="/card3.jfif"
                location="Private room center of the london"
                title="Stay at the Spacious Edwarden house"
                description="1 guest. 1 bedroom . 1bed . 1.5 shared bathrooms . kitchen .  free parking.washing machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
            />
            <SearchResult
                src="/card4.jfif"
                location="Private room center of the london"
                title="Stay at the Spacious Edwarden house"
                description="1 guest. 1 bedroom . 1bed . 1.5 shared bathrooms . kitchen .  free parking.washing machine"
                star={4.73}
                price="$30/night"
                total="$117 total"
            />
          </div>
    );
}

export default SearchPage;