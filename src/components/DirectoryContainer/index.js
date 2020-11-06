import React, { Component } from 'react';
import API from '../../utils/API';
import Container from '../Container';
import Search from '../Search';
import Sort from '../Sort';
import TableRow from '../TableRow';

export default class DirectoryContainer extends Component {

    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchUser(10);
    }

    searchUser = numResults => {
        API.search(numResults)
            .then(res => {
                this.setState({ result: res.data.results })
                // console.log(this.state.result);
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
        // console.log(this.state.search);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const filteredArray = this.state.result.filter(user =>
            user.name.first.includes(this.state.search) ||
            user.name.last.includes(this.state.search));
        this.setState({ result: filteredArray });
    };

    render() {
        return (
            <Container>
                <div className="row">
                    {/* Search */}
                    <div className="col-md-6">
                        <Search
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </div >
                    {/* Sort */}
                    <div className="col-md-6">
                        <Sort>

                        </Sort>
                    </div>
                </div>

                <TableRow image="Image" name="Name" phone="Phone" email="Email" age="Age" />
                {this.state.result.map(user =>
                    <TableRow
                        image={user.picture.thumbnail}
                        name={user.name.first + " " + user.name.last}
                        phone={user.phone}
                        email={user.email}
                        age={user.dob.age}
                    />)}

            </Container>
        );
    }
}
