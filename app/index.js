var person = {
    name: 'Mr. Max',
    location: 'Dhanmondi, Dhaka-1205',
    occupation: {
        title: 'Network Engineer',
        employer: '@ Tutexp.'
    },
    photo: './assets/images/avater.png',
    updates: [
        {
            platform: 'twitter',
            status: 'Don\'t be upset!'
        },
        {
            platform: 'facebook',
            status: 'Be confident!'
        },
        {
            platform: 'facebook',
            status: 'Yes, I did it!'
        }
    ]
}

class Photo extends React.Component {
    render() {
        return(
            <div className="photo">
                <img className="card-img-top" src={this.props.photo} alt="Avater"/>
            </div>
    )
    }
}

class Bio extends React.Component {
    render() {
        return (
            <div className="card-body bio">
                <h4 className="card-title">{this.props.name}</h4>
                <h5 className="lead location">{this.props.location}</h5>
                <div className="occupation">
                    <p className="lead">{this.props.occupation.title} {this.props.occupation.employer}</p>
                </div>
            </div>
        )
    }
}

class Updates extends React.Component {

    updates() {
        return this.props.updates.map(function (update) {
            return (
                <li className="list-group-item">
                    {update.status}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group list-group-flush updates">
                {this.updates()}
            </ul>
        )
    }
}

class Card extends React.Component {
    render() {
        return(
            <div className="card">
            <Photo photo={"assets/images/avater.png"}/>
            <Bio name={person.name} location={person.location} occupation={person.occupation}/>
            <Updates updates={person.updates}/>
            </div>
        )
    }
}

ReactDOM.render(<Card/>, document.getElementById('root'))