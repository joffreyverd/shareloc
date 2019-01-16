import React from 'react';

export default class TaskView extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        history.push('/taskView');
    }

    render() {
        return(
            <>
                <h1>Modifier une tâche</h1>
            </>
        );
    }
}
