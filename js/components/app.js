import React from 'react';

var App = React.createClass({
    propTypes: {
        children: React.PropTypes.element,
    },
    render() {
        return (
            <div className="app">
                <h1>Dali</h1>
                {this.props.children}
            </div>
        );
    },
});

module.exports = App;