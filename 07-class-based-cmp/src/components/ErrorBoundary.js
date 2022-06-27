import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }

    //any class based component and made this comp as error boundary
    //fun comp does not have any equivalent for this
    componentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;