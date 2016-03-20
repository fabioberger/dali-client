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
    componentDidMount() {
        const oneHourInMiliseconds = 3600000;
        setInterval(this._showNextItem, oneHourInMiliseconds);
    },
    getInitialState() {
        return {
            displayedItemIndex: 0,
        };
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
    _showNextItem() {
        const nextDisplatedItemIndex = this.state.displayedItemIndex !== this.props.items.length - 1 ? this.state.displayedItemIndex + 1 : 0;
        this.setState({
            displayedItemIndex: nextDisplatedItemIndex,
        });
    },
    render() {
        return (
            <div className="gallery">
                {this._renderItem(this.props.items[this.state.displayedItemIndex])}
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
