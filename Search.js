import React,{useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Button } from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from "react-router-dom";

function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"Selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

        return (
            <div className="search">
                <h2>Number of Guests <PeopleIcon /></h2>
                <input min={0} defaultValue={2} type="number" />
                <Button onClick={() => history.push("/Search")}>  Search Airbnb  </Button>
                <DateRangePicker ranges={[selectionRange]} onChange={ handleSelect}/>
        </div>
    );
}

export default Search;
