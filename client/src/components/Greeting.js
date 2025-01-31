import React from 'react';

class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Hello {this.props.name}!</h1>
                <p>this is greeting class instance.</p>
            </div>
        )
    }
}

export default Greeting;