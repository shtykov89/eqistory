import React from 'react';
import { commits } from '../data.js';
import Col from 'react-bootstrap/Col';
import Codeblock from './codeBlock'

class CommitBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBlocks: [],
        }
    }

    onSelect(id) {
        let newBlocks = [... this.state.selectedBlocks];
        const idx = newBlocks.indexOf(id);
        if (this.state.selectedBlocks.length === 2 && idx < 0) {
            return
        }
        if (idx >= 0) {
            newBlocks = newBlocks.filter((block, i) => i !== idx);
        } else {
            newBlocks.push(id);
        }
        this.props.showCode(newBlocks);
        this.setState({ selectedBlocks: newBlocks })
    }

    diffSelect(id) {
        const selBlocks = this.state.selectedBlocks;
        const idx = selBlocks.indexOf(id);
        const firstSelect = 'firstSelect commitBox';
        const secondSelect = 'secondSelect commitBox';
        const notSelected = 'notSelected commitBox';

        if (idx === 0) {
            return firstSelect;
        } else if (idx === 1) {
            return secondSelect;
        } else {
            return notSelected;
        }
    }

    render() {
        return (
            <Col className="commitBlock" xl={8}>
                <div className="topSection">Folder</div>
                <div className="folderName">{this.props.name}</div>
                {commits.map(d => (
                    <div
                        key={d.id}
                        className={this.diffSelect(d.id)}
                        onClick={() => {
                            this.onSelect(d.id);
                        }}>
                        <div className="header">{d.header}</div>
                        <p className="comment">{d.comment}</p>
                    </div>)
                )}
            </Col>
        )
    }
}

export default CommitBlock
