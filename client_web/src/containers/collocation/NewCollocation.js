import React from 'react';

export default class NewCollocation extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/newCollocation');
    }

    render() {
        return(
            <>
                <h1>Créer une collocation</h1>
            </>
        );
    }
}
