import React from 'react';

export default class NewTaskView extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/newTaskView');
    }

    render() {
        return(
            <>
                <h1>Créer une tâche</h1>
            </>
        );
    }
}
