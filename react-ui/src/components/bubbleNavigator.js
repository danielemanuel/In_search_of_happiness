import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as d3 from 'd3';
import shuffle from '../shuffleFunction';
import Table from './table';
import Footer from './footer';

class BubbleNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 750,
      forceStrength: -500,
      nodes: [],
      companies: [],
      names: ['Finance', 'Information Technology', 'Telecommunications', 'Aerospace & Defense', 'Travel & Tourism', 'Business Services', 'Retail', 'Media', 'Manufacturing', 'Oil, Gas, Energy & Utilities'],
      colors: shuffle(['chocolate', 'gray', 'mediumseagreen', 'darkkhaki', 'darksalmon', 'mediumpurple', 'orangered', 'teal', 'steelblue', 'violet', 'tan', 'olive', 'lightcoral'])
    };
  }
  componentDidMount() {
    this.state.names.forEach((name, index) => {
      this.state.nodes.push({
        name: name,
        r: 85,
        x: 0,
        y: 0,
        key: index,
        color: this.state.colors.pop()
      });
    });

    this.force = d3.forceSimulation(this.state.nodes)
      .force('charge',
        d3.forceManyBody()
        .strength(this.state.forceStrength)
      )
      .force('x', d3.forceX(this.state.width / 2))
      .force('y', d3.forceY(this.state.height / 2))
      .force('collide', d3.forceCollide(90));


    this.force.on('tick', () => this.setState({nodes: this.state.nodes}));
  }

  render() {
    const nodes = this.state.nodes;
    return (
      <div id={'BubbleNavigator'}>
        <Route path="/companies/:sector" component={Table} />
        <svg width={this.state.width} height={this.state.height}>
          {nodes.map((node, index) =>(
          <Link key={index} id={node.name} to={'/companies/' + node.name}>
            <circle id={node.name + 'Circle'} r={node.r} cx={node.x} cy={node.y} fill={node.color} key={node.index} />
            <text x={node.x} y={node.y} textAnchor={'middle'}>{node.name}</text>
          </Link>
          ))}
        </svg>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default BubbleNavigator;
