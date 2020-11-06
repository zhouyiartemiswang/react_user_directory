import React from 'react';

export default function Search(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for Name"
                    id="search"
                />
                <button className="btn btn-primary">Search</button>
            </div>
        </form>
    )
}

