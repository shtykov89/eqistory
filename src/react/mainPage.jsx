import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CodeBlock from './codeBlock';
import CommitBlock from './commitBlock';
import Tree from './tree'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newBlocks: [],
            isFile: false,
            name: ''
        };
        this.showCode = this.showCode.bind(this);
        this.isFileUpdate = this.isFileUpdate.bind(this);
        this.showName = this.showName.bind(this);
    }

    showCode(value) {
        this.setState({ newBlocks: value })
    }

    isFileUpdate(value) {
        this.setState({ isFile: value })
    }

    showName(value) {
        this.setState({ name: value })
    }

    render() {
        return (
            <Container className="fullHeight" fluid='true'>
                <Row className="fullHeight">
                    <Tree
                        fs={this.props.fs}
                        isFileUpdate={this.isFileUpdate}
                        showName={this.showName}
                    />
                    {
                        this.state.isFile &&
                        <CommitBlock
                            showCode={this.showCode}
                            name={this.state.name}
                        />
                    }
                    <CodeBlock commits={this.state.newBlocks} />
                </Row>
            </Container>
        );
    }
}

export default MainPage

