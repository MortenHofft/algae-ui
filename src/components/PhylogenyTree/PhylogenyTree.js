import React from "react";
import styled from "styled-components";
import example from "./example";
/*
interface:
newick or parsed
  {key, name, length, children, opts}
selectChildren: true|false
maximumOneBranch: true|false
maxChildren: int
selected: [keys], (makes in controlled)
onChange: clicked, selected, 
*/

const NodeWrapper = styled.li`
  /* text-align: right; */
  color: palevioletred;
  line-height: 24px;
  display: block;
  // &:before {
  //   content: "";
  //   display: block;
  //   border-radius: 50%;
  //   height: 0.4em;
  //   width: 0.4em;
  //   border: 2px solid #aaa;
  //   background: papayawhip;
  //   position: absolute;
  //   left: -0.4em;
  //   top: 0.35em;
  //   z-index: 2;
  // }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Children = styled.ul`
  margin: 0;
  padding-left: 20px;
  position: relative;
`;

const Li = styled.li`
  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

const Pipe = styled.span`
  display: inline-block;
  background: tomato;
  width: 1px;
  position: absolute;
  top: ;
  bottom: 0.5em;
`;

const NodeContainer = styled.div`
  input {
    display: inline-block;
  }
`;

class PhylogenyTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: []
    };
  }

  clicked = (e, node) => {
    let children = {};
    let checked = this.state.clade !== node.key ? true : e.target.checked;
    this.selectChildren(children, node, checked);
    this.setState({ selected: children, clade: node.key });
  };

  selectChildren = (list, node, checked) => {
    list[node.key] = checked;
    if (node.children)
      node.children.forEach(child => this.selectChildren(list, child, checked));
  };

  renderNode = node => {
    if (node.children) {
      return (
        <Li
          key={node.key}
          dataRef={node}
          name={node.name}
          // style={{
          //   paddingLeft: node.length ? Math.round(node.length * 100) : 0
          // }}
        >
          <div>
            <input type="checkbox" checked={!!this.state.selected[node.key]} onChange={e => this.clicked(e, node)}/>
            {/* {node.name} */}
          </div>
          {node.children && (
            <Children>{node.children.map(this.renderNode)}</Children>
          )}
        </Li>
      );
    } else {
      return (
        <Li
          key={node.key}
          dataRef={node}
          // style={{
          //   paddingLeft: node.length ? Math.round(node.length * 100) : 0
          // }}
        >
          <div>
            <input type="checkbox" checked={!!this.state.selected[node.key]} onChange={e => this.clicked(e, node)}/>
            {node.name}
          </div>
        </Li>
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <Children>{this.renderNode(example)}</Children>
      </Wrapper>
    );
  }
}

export default PhylogenyTree;
