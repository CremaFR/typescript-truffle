import {Component} from "react";
import {withRouter} from "react-router";

/**
 * Wrapper to auto scroll the page to the top when changing location (url)
 */
class ScrollToTop extends Component<any> {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scroll(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop)