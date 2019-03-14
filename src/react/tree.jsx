import React from 'react';
import { Treebeard } from 'react-treebeard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeBlock from './codeBlock';
import CommitBlock from './commitBlock';

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFile: false,
            code: []
        };
        this.onToggle = this.onToggle.bind(this);
        this.showCode = this.showCode.bind(this);
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

        if (this.state.cursor) { this.state.cursor.active = false; }
        node.active = true;
        if (node.children) { node.toggled = toggled; }
        this.setState({ 
            cursor: node,
            isFile: node.isFile,
            name: node.name
        });
    }

    showCode(value) {
        this.setState({ selectedBlocks: value })
    }

    render() {
        if (!this.state.tree) return null;
        return (
            <Container className="fullHeight" fluid='true'>    
                <Row className="fullHeight">
                    <Col className="tree" xl={2} >
                        <div className="topSection">Tree</div>
                        <Treebeard
                            data={this.state.tree}
                            onToggle={this.onToggle}
                        />
                    </Col>
                    {this.state.isFile &&
                        <React.Fragment>
                            <Col className="commitBlock" xl={9}>
                                <div className="topSection">Folder</div>
                                <div className="folderName">{this.state.name}</div>
                                <CommitBlock showCode={this.showCode} />
                            </Col>
                        </React.Fragment>
                    }
                </Row>
            </Container>
        );
    }
}

export default Tree

