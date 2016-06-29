var React = require('react');
var Pane = require('./Pane');

var Collapsible = React.createClass({
	displayName: 'Collapsible',
	propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps: function () {
  	return {
    	expanded: true
    };
  },
  getInitialState: function () {
    return {
    	expanded: this.props.expanded
    };
  },
  shouldComponentUpdate(nextProps, nextState) {
  	return this.props !== nextProps || this.state !== nextState;
  },
  toggleVisibility: function () {
  	event.preventDefault();
    this.setState({
    	expanded: !this.state.expanded
    });
    console.log(this.state.expanded);
  },
	render: function () {
    var expanded = this.state.expanded;
    console.log(this.props.children);
//    <span>{componentName} <span className="subcomponent">{subComponentName}</span></span>
  	return (
      <div className={'component collapsible' + (expanded ? '' : ' collapsed')}>
        <div className="static">
          <div className="button" onClick={this.toggleVisibility}></div>
          {this.props.children[0]}
        </div>
        <div className={'content' + (expanded ? '' : ' hide')}>
          {this.props.children[1]}
        </div>
      </div>
    );
  }
});

module.exports = Collapsible;
