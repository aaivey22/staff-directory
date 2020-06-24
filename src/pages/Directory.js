import React, { useState, useEffect } from "react";
// import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

// class Search extends Component {
//     state = {
//       search: "",
//       name: [],
//       employees: [],
//       error: ""
//     };
  function Directory(){
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(
            "https://randomuser.me/api/?results=100"
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    }

    return (
        <div>
            {items.map(results => (
                <h1>Name: {results.name.first} {results.name.last}</h1>
            ))}
        </div>
    )
    //   API.getRandomStaffList()
    //     .then(res => {
    //       console.log({res});
    //       this.setState({ employees: res.results });
    //     })
    //     .catch(err => console.log(err));
    // }
  
    // handleInputChange = event => {
    //   this.setState({ search: event.target.value });
    // };
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   API.getStaffByName(this.state.search)
    //     .then(res => {
    //       if (res.data.status === "error") {
    //         throw new Error(res.data.message);
    //       }
    //       this.setState({ results: res.data.message, error: "" });
    //     })
    //     .catch(err => this.setState({ error: err.message }));
    // };
    // render() {
    //   return (
    //     <div>
    //       <Container style={{ minHeight: "80%" }}>
    //         <h1 className="text-center">Employee Directory</h1>
    //         <Alert
    //           type="danger"
    //           style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
    //         >
    //           {this.state.error}
    //         </Alert>
    //         {/* <SearchForm
    //           handleFormSubmit={this.handleFormSubmit}
    //           handleInputChange={this.handleInputChange}
    //           employees={this.state.employees}
    //         />
    //         <SearchResults results={this.state.results} /> */}
    //       <h3>{this.employees}</h3>
    //       </Container>
    //     </div>
    //   );
    // }
  }
  
  export default Directory;