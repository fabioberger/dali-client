import React from 'react';

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.element,
    },
    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    },
});

module.exports = App;
