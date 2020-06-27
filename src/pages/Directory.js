import React, { useState, useEffect, useCallback } from "react";
import Select from 'react-select';

// import API from "../utils/API";
// import Container from "../components/Container";
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
    { value: 'All', label: 'All' }
];



function Directory() { // functional component
    // When the component mounts, get a list of 100 profiles

    const [employees, setEmployees] = useState([]);
    const [selectedOption, setSelectedOption] = useState({ value: 'All', label: 'All' });
    const handleChange = (option) => {
        console.log(option.value)
        setSelectedOption(option);
        console.log(`Option selected:`, selectedOption);
    };
    //return the arr where the gender === the selected option
    const filterEmployees = (unfilteredEmployees) => {
        const filteredEmployees = unfilteredEmployees.filter(employee => employee.gender === selectedOption.value)
        console.log("filteredEmployees", filteredEmployees)
        return filteredEmployees
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
    // compare function

    const sortDirectory = useCallback(() => {
        let original = employees;
        let sorted = original.sort((a, b) => {
            let nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
            let nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        })
        console.log(sorted)
        setEmployees([...sorted]);
    }, [employees]
    )

    return (
        <div>
            <button onClick={sortDirectory}> Sort A-Z </button>

            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                styles={customStyles}
                placeholder={"filter by gender"}
            />
            {employees.map(results => (
                <div>
                    <h1>Name: {results.name.last}, {results.name.first} </h1>
                    <h1>Gender: {results.gender} </h1>
                </div>
            ))}
        </div>
    )
}

export default Directory;