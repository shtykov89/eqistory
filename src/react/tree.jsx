import React from 'react';
import { Treebeard } from 'react-treebeard';
import Col from 'react-bootstrap/Col';

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFile: false
        }
        this.onToggle = this.onToggle.bind(this);
    }

    componentDidMount() {
        const tree = this.getNode('root', this.props.fs)
        tree.toggled = true;
        this.setState({
            tree: tree
        })
    }

    getNode(name, node) {
        if (node.path) {
            return { name: name, isFile: true }
        }
        const children = Object.entries(node)
        return {
            name: name,
            children: children.map(child => this.getNode(child[0], child[1]))
        };
    }

    onToggle(node, toggled) {
        if (this.state.cursor) {
            this.state.cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState({
            cursor: node,
            isFile: node.isFile,
            name: node.name
        });
        this.props.isFileUpdate(node.isFile);
        this.props.showName(node.name);
    }

    render() {
        if (!this.state.tree) return null;

        return (
            <Col className="tree" xl={2} >
                <div className="topSection">Tree</div>
                <Treebeard
                    data={this.state.tree}
                    onToggle={this.onToggle}
                />
            </Col>
        )
    }
}

export default Tree;