import { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = { hasError: false };
  // this method catch an error
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("error boundary has an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. Go back to{" "}
          <Link to="/">Home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
