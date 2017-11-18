import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <h1 className="text-format-large">Home Page</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <p className="text-format">Welcome to your site.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}