import React from 'react';

export default class NewAchievedTask extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/newAchievedTask');
    }

    render() {
        return(
            <>
                <h1>Accomplir une tâche</h1>
            </>
        );
    }
}
