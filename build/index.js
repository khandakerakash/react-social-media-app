var person = {
    name: 'Mr. Max',
    location: 'Dhanmondi, Dhaka-1205',
    occupation: {
        title: 'Network Engineer',
        employer: '@ Tutexp.'
    },
    photo: './assets/images/avater.png',
    updates: [{
        platform: 'twitter',
        status: 'Don\'t be upset!'
    }, {
        platform: 'facebook',
        status: 'Be confident!'
    }, {
        platform: 'facebook',
        status: 'Yes, I did it!'
    }]
};

class Photo extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'photo' },
            React.createElement('img', { className: 'card-img-top', src: this.props.photo, alt: 'Avater' })
        );
    }
}

class Bio extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'card-body bio' },
            React.createElement(
                'h4',
                { className: 'card-title' },
                this.props.name
            ),
            React.createElement(
                'h5',
                { className: 'lead location' },
                this.props.location
            ),
            React.createElement(
                'div',
                { className: 'occupation' },
                React.createElement(
                    'p',
                    { className: 'lead' },
                    this.props.occupation.title,
                    ' ',
                    this.props.occupation.employer
                )
            )
        );
    }
}

class Updates extends React.Component {

    updates() {
        return this.props.updates.map(function (update) {
            return React.createElement(
                'li',
                { className: 'list-group-item' },
                update.status
            );
        });
    }

    render() {
        return React.createElement(
            'ul',
            { className: 'list-group list-group-flush updates' },
            this.updates()
        );
    }
}

class Card extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'card' },
            React.createElement(Photo, { photo: "assets/images/avater.png" }),
            React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
            React.createElement(Updates, { updates: person.updates })
        );
    }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById('root'));