import React, { useState, useEffect, Component } from "react";
import Select from 'react-select';
// import { Dropdown } from 'semantic-ui-react'

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
    { value: 'name', label: 'name' },
    { value: 'gender', label: 'gender' },
];


class Directory extends Component {
    state = {
        selectedOption: null,
        employees: []
    }
    handleChange = selectedOption => {
        console.log("hello")
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };


    render() {
        return (
            <div>
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    styles={customStyles}
                    placeholder={"filter by..."}

                />
            </div>
        )
    }
}

// function Directory() { // functional component
//     // When the component mounts, get a list of 100 profiles
//     useEffect(() => {
//         fetchItems();
//     }, []);

//     const [employees, setEmployees] = useState([]);
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleChange = selectedOption => {
//         console.log("hello")
//         setSelectedOption(selectedOption);
//         console.log(`Option selected:`, selectedOption);
//     };

//     const fetchItems = async () => {
//         const data = await fetch(
//             "https://randomuser.me/api/?results=100"
//         );
//         const employees = await data.json();
//         console.log(employees.results);
//         setEmployees(employees.results);
//     }



//     return (

//         <div>
//             {/* <Select
//                 value={selectedOption}
//                 onChange={handleChange}
//                 options={options}
//                 styles={customStyles}
//                 placeholder={"filter by..."}
//             /> */}

//             <Dropdown text='File'>
//                 <Dropdown.Menu>
//                     <Dropdown.Item text='New' />
//                     <Dropdown.Item text='Open...' description='ctrl + o' />
//                     <Dropdown.Item text='Save as...' description='ctrl + s' />
//                     <Dropdown.Item text='Rename' description='ctrl + r' />
//                     <Dropdown.Item text='Make a copy' />
//                     <Dropdown.Item icon='folder' text='Move to folder' />
//                     <Dropdown.Item icon='trash' text='Move to trash' />
//                     <Dropdown.Divider />
//                     <Dropdown.Item text='Download As...' />
//                     <Dropdown.Item text='Publish To Web' />
//                     <Dropdown.Item text='E-mail Collaborators' />
//                 </Dropdown.Menu>
//             </Dropdown>


//             {employees.map(results => (
//                 <h1>Name: {results.name.first} {results.name.last}</h1>
//             ))}
//         </div>
//     )
// }

export default Directory;