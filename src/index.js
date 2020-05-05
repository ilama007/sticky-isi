import React, { Component } from 'react';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';

/**
 * Credit: https://www.npmjs.com/package/react-sticky-footer
 * Modified little to custom fit ISI styles, accept footer reference
 * Added dependency: react-portal
 */
export default class StickyISI extends Component {
  observer;

  constructor(props) {
    super(props);
    this.state = {
      isAtBottom: false
    };
  }

  componentDidMount() {
    this.observer = new MutationObserver((mutations) => {
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
    let fixedStyles = {
      ...this.props.stickyStyles,
      position: 'fixed',
      bottom: 0
    };
    return (
      <div>
        <div
          className={this.props.className}
          style={this.props.normalStyles}
          id='normal-chappy-isi'
        >
          {this.props.children}
        </div>
        {!this.state.isAtBottom && (
          <Portal>
            <div className={this.props.className} style={fixedStyles}>
              {this.props.children}
            </div>
          </Portal>
        )}
      </div>
    );
  }

  determineState = () => {
    const scrollOffset = window.pageYOffset + window.innerHeight;
    const contentHeight =
      document.body.clientHeight -
      (this.props.footerRef.offsetHeight +
        document.getElementById('normal-chappy-isi').offsetHeight -
        this.props.stickyHeight);

    if (!this.state.isAtBottom && scrollOffset >= contentHeight) {
      this.setState({ isAtBottom: true });
      this.props.onFooterStateChange && this.props.onFooterStateChange(true);
    } else if (
      this.state.isAtBottom &&
      scrollOffset < contentHeight - contentHeight * this.props.stickAtThreshold
    ) {
      this.setState({ isAtBottom: false });
      this.props.onFooterStateChange && this.props.onFooterStateChange(false);
    }
  };

  handleScroll = () => {
    this.determineState();
  };
}

StickyISI.propTypes = {
  /**
   * Element reference to footer
   */
  // eslint-disable-next-line no-undef
  footerRef: PropTypes.instanceOf(Element),
  /**
   * Height of the sticky on the screen(normally fixed)
   */
  stickyHeight: PropTypes.number,
  /**
   * A value that tells the component how much the user should scroll back up before the sticky footer shows up again.
   * The default is 0.001. A number greater than the default would require the user scroll up more before the
   * sticky footer shows up.
   */
  stickAtThreshold: PropTypes.number,
  /**
   * Styles to be applied to the sticky footer only.
   */
  stickyStyles: PropTypes.object,
  /**
   * Styles to be applied to the footer in its standard location only.
   */
  normalStyles: PropTypes.object,
  /**
   * Callback that informs when the state of the footer has changed from sticky to being in normal document flow, via boolean argument.
   * true means it is in normal flow, false means it is sticky.
   */
  onFooterStateChange: PropTypes.func,
  /** Common class name for both sticky and normal ISI. normalStyles and stickyStyles override the class styles */
  className: PropTypes.string
};

StickyISI.defaultProps = {
  stickyHeight: 150,
  stickAtThreshold: 0.001,
  stickyStyles: {},
  normalStyles: {}
};
