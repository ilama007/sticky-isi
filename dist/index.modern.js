import React, { Component } from 'react';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';

class StickyISI extends Component {
  constructor(props) {
    super(props);

    this.determineState = () => {
      const scrollOffset = window.pageYOffset + window.innerHeight;
      const contentHeight = document.body.clientHeight - (this.props.footerRef.offsetHeight + document.getElementById('normal-chappy-isi').offsetHeight - this.props.stickyHeight);

      if (!this.state.isAtBottom && scrollOffset >= contentHeight) {
        this.setState({
          isAtBottom: true
        });
        this.props.onFooterStateChange && this.props.onFooterStateChange(true);
      } else if (this.state.isAtBottom && scrollOffset < contentHeight - contentHeight * this.props.stickAtThreshold) {
        this.setState({
          isAtBottom: false
        });
        this.props.onFooterStateChange && this.props.onFooterStateChange(false);
      }
    };

    this.handleScroll = () => {
      this.determineState();
    };

    this.state = {
      isAtBottom: false
    };
  }

  componentDidMount() {
    this.observer = new MutationObserver(mutations => {
      this.determineState();
    });
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
    window.addEventListener('scroll', this.handleScroll);
    this.determineState();
  }

  componentWillUnmount() {
    this.observer.disconnect();
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    let fixedStyles = { ...this.props.stickyStyles,
      position: 'fixed',
      bottom: 0
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: this.props.className,
      style: this.props.normalStyles,
      id: "normal-chappy-isi"
    }, this.props.children), !this.state.isAtBottom && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", {
      className: this.props.className,
      style: fixedStyles
    }, this.props.children)));
  }

}
StickyISI.propTypes = {
  footerRef: PropTypes.instanceOf(Element),
  stickyHeight: PropTypes.number,
  stickAtThreshold: PropTypes.number,
  stickyStyles: PropTypes.object,
  normalStyles: PropTypes.object,
  onFooterStateChange: PropTypes.func,
  className: PropTypes.string
};
StickyISI.defaultProps = {
  stickyHeight: 150,
  stickAtThreshold: 0.001,
  stickyStyles: {},
  normalStyles: {}
};

export default StickyISI;
//# sourceMappingURL=index.modern.js.map
