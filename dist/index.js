function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactPortal = require('react-portal');
var PropTypes = _interopDefault(require('prop-types'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var StickyISI = /*#__PURE__*/function (_Component) {
  _inheritsLoose(StickyISI, _Component);

  function StickyISI(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.determineState = function () {
      var scrollOffset = window.pageYOffset + window.innerHeight;

      var contentHeight = document.body.clientHeight - (_this.props.footerRef.offsetHeight + document.getElementById('normal-chappy-isi').offsetHeight - _this.props.stickyHeight);

      if (!_this.state.isAtBottom && scrollOffset >= contentHeight) {
        _this.setState({
          isAtBottom: true
        });

        _this.props.onFooterStateChange && _this.props.onFooterStateChange(true);
      } else if (_this.state.isAtBottom && scrollOffset < contentHeight - contentHeight * _this.props.stickAtThreshold) {
        _this.setState({
          isAtBottom: false
        });

        _this.props.onFooterStateChange && _this.props.onFooterStateChange(false);
      }
    };

    _this.handleScroll = function () {
      _this.determineState();
    };

    _this.state = {
      isAtBottom: false
    };
    return _this;
  }

  var _proto = StickyISI.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.observer = new MutationObserver(function (mutations) {
      _this2.determineState();
    });
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
    window.addEventListener('scroll', this.handleScroll);
    this.determineState();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.observer.disconnect();
    window.removeEventListener('scroll', this.handleScroll);
  };

  _proto.render = function render() {
    var fixedStyles = _extends(_extends({}, this.props.stickyStyles), {}, {
      position: 'fixed',
      bottom: 0
    });

    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      style: this.props.normalStyles,
      id: "normal-chappy-isi"
    }, this.props.children), !this.state.isAtBottom && /*#__PURE__*/React__default.createElement(reactPortal.Portal, null, /*#__PURE__*/React__default.createElement("div", {
      style: fixedStyles
    }, this.props.children)));
  };

  return StickyISI;
}(React.Component);
StickyISI.propTypes = {
  footerRef: PropTypes.node,
  stickyHeight: PropTypes.number,
  stickAtThreshold: PropTypes.number,
  stickyStyles: PropTypes.object,
  normalStyles: PropTypes.object,
  onFooterStateChange: PropTypes.func
};
StickyISI.defaultProps = {
  stickyHeight: 150,
  stickAtThreshold: 0.001,
  stickyStyles: {},
  normalStyles: {}
};

module.exports = StickyISI;
//# sourceMappingURL=index.js.map
