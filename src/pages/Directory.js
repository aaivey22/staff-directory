import React, { useState, useEffect } from "react";
import Select from 'react-select';

// import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

// sets style for the drop-down menu
const customStyles = {
    control: (provided) => ({
        ...provided,
        marginTop: 111,
        marginRight: '110px',
        width: '75%',
        background: '#A333C8',
        color: 'white',
        border: 'solid 2px black',
        cursor: 'pointer'
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? 'red' : '',
        cursor: 'pointer'
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white'
    })
}

// This uses react-select to set the drop-down value options
const options = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
    { value: 'All', label: 'All'}
];



function Directory() { // functional component
    // When the component mounts, get a list of 100 profiles

    const [employees, setEmployees] = useState([]);
    const [selectedOption, setSelectedOption] = useState({ value: 'All', label: 'All'});
    const handleChange = selectedOption => {
        console.log(selectedOption.value)
        // if (setSelectedOption.value === 'All')  {
        //     setSelectedOption(null)
        // } else {
            setSelectedOption(selectedOption);
        // } // func resets the value
        console.log(`Option selected:`, selectedOption);

    };
    //return the arr where the gender === the selected option
    const filterEmployees = (unfilteredEmployees) => {

            const filteredEmployees = unfilteredEmployees.filter(employee => employee.gender === selectedOption.value)
            console.log("filteredEmployees" , filteredEmployees)
            return filteredEmployees
            // setEmployees(filteredEmployees) // sets the state of the employees arr to the new filtered arr

    }

    const fetchItems = async () => {
        const data = await fetch(
            "https://randomuser.me/api/?results=100"
        );
        const employees = await data.json();
        console.log("results", employees.results);
        //if condition for filtered employees

        if (selectedOption.value === 'All') {
            setEmployees(employees.results)
        } else {
            const filteredEmployees = filterEmployees(employees.results)
            setEmployees(filteredEmployees);    

        }

    }
    useEffect(() => {
        fetchItems();
    }, [selectedOption]);

    // to sort use arr method called sort to sort alphabetically and use react-select to create a menu

    return (

        <div>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                styles={customStyles}
                placeholder={"filter by gender"}
            />
            {employees.map(results => (
                <div>

                    <h1>Name: {results.name.first} {results.name.last}</h1>
                    <h1>Gender: {results.gender} </h1>
                </div>
            ))}

        </div>
    )
}

export default Directory;