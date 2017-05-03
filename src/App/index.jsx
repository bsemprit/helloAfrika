import React  from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("Starting Afrika App");
    }

    render() {
        return(
            <div className="afrika">
                Hello Afrika
            </div>
        )
    }
}