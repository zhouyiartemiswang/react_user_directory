import React from 'react';

export default function Search(props) {
    return (
        <form>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for a User"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
            </div>
        </form>
    )
}

