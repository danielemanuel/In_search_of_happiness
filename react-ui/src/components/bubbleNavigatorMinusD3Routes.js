import React, { Component } from 'react';
import shuffle from '../shuffleFunction';

export default class BubbleNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 650,
      forceStrength: -300,
      nodes: [],
      companies: [],
      names: ['Chocolate', 'Information Technology', 'Metallica', 'Namespace', 'Finance', 'Aerospace', 'Media', 'Software', 'Consulting', 'Hardware'],
      colors: shuffle(['chocolate', 'gray', 'mediumseagreen', 'darkkhaki', 'darksalmon', 'mediumpurple', 'orangered', 'teal', 'steelblue', 'violet', 'tan', 'olive', 'lightcoral'])
    };
  }
  componentDidMount() {
    this.state.names.forEach((name, index) => {
      this.state.nodes.push({
        name: name,
        r: 80,
        x: 0,
        y: 0,
        key: index,
        color: this.state.colors.pop()
      });
    });

  }

  render() {
    const nodes = this.state.nodes;
    return (
        <div id={'company-data'}>
          <svg width={this.state.width} height={this.state.height} id={'svg'}>
        {nodes.map((node, index) =>(
              <g key={index} id={'Media'}>
              <circle r={node.r} cx={node.x} cy={node.y} fill={node.color} key={node.index} />
              <text x={node.x} y={node.y} textAnchor={'middle'}>{node.name}</text>
              </g>
              ))}
        </svg>
        </div>
    );
  }  


}
