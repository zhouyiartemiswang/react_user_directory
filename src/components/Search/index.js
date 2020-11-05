import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Search" />
                    </div>
                </div>
            </form>
        )
    }
}
