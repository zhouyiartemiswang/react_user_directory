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
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchUser(this.state.search);
    // };

    render() {
        return (
            <Container>
                <div className="row">
                    {/* Search */}
                    <div className="col-md-6">
                        <Search>

                        </Search>
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
                        name={user.name.first + user.name.last}
                        phone={user.phone}
                        email={user.email}
                        age={user.dob.age}
                    />)}

            </Container>
        );
    }
}
