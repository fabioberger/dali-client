import React from 'react';
const ReactRedux = require('react-redux');

const Gallery = React.createClass({
    propTypes: {
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                description: React.PropTypes.string.isRequired,
                url_image: React.PropTypes.string.isRequired,
            })
        ).isRequired,
    },
    _renderItem(item) {
        return (
            <div className="item">
                <img className="image" title={item.name} src={item.url_image} />
                <div className="title">
                    <div className="name">{item.name}</div>
                    <div className="description">{item.description}</div>
                </div>
            </div>
        );
    },
    render() {
        return (
            <div className="gallery">
                {this._renderItem(this.props.items[0])}
            </div>
        );
    },
});

function mapStateToProps(state) {
    return {
        items: state.items.items,
    };
}

module.exports = ReactRedux.connect(mapStateToProps)(Gallery);
