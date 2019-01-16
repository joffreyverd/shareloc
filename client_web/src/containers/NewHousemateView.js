import React from 'react';

export default class NewHousemateView extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/newHousemateView');
    }

    render() {
        return(
            <>
                <h1>Add a housemate :)</h1>
            </>
        );
    }
}
