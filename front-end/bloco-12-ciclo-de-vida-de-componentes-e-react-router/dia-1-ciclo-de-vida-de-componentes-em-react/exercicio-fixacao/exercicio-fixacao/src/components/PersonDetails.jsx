import React from 'react';
import Loading from './Loading';

class PersonDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            person: [],
        }
    }
       
    componentDidMount() {
        const url = 'https://api.randomuser.me/';
        fetch(url).then((response) => response.json()).then((data) => {
            this.setState({
                person: data.results,
                loading: false,
            })
        })
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return(
            <div>

            </div>
        );
    }
}

export default PersonDetails;