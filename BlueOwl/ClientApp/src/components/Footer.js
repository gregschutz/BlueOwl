import React, { Component } from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = { label: '2019-2020 Blue Owl AI, inc. All rights reserved' };
    }

   

    render() {
        return (
            <div id="footer" className="footer-bottom p-4">
                <div className="row">
                    <div className="col-12 text-center">{this.state.label}</div>
                </div>
            </div>
        );
    }
}