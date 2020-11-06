import React from 'react';

export default function Sort(props) {

    return (
        <form>
            <div className="col-md-6 form-group">
                <label>Sort by: </label>
                <select className="form-control" id="sort-list">
                    <option>Best Match</option>
                    <option>First Name</option>
                    <option>Last Name</option>
                    <option>Age</option>
                </select>
            </div>
        </form>
    )
}
