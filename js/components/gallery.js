import React from 'react';

var Gallery = React.createClass({
    _renderItem: function(item) {
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
    render: function() {
        const item = {
            'id': 1,
            'created_date': '2016-02-01T00:00:00Z',
            'name': 'The Persistence of Memory',
            'description': 'By Salvador Dali (1931)',
            'slug': 'the-persistence-of-memory',
            'source': 'custom',
            'url_image': 'http://uploads5.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg',
        };
        return (
            <div className="gallery">
                {this._renderItem(item)}
            </div>
        );
    },
});

module.exports = Gallery;
