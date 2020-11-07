import React from 'react';

export default function Sort(props) {

    return (
        <form>
            <div className="col-md-6 form-group">
                <label>Sort by: </label>
                <select
                    value={props.value}
                    onChange={props.handleSortChange}
                    name="sort"
                    className="form-control">
                    <option value="bestMatch">Best Match</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="age">Age</option>
                </select>
            </div>
        </form>
    )
}
