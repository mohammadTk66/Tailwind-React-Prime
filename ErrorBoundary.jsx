// ErrorBoundary.js
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      //   return <h1>Something went wrong.</h1>;
      return (
        <div style={{ color: "red" }}>
          <p>Oops! Something went wrong and we are working on it</p>
        </div>
      );
      //   return this.props.fallback
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
