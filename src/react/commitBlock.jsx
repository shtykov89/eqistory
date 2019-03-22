import React from 'react';
import { commits } from '../data.js';
import Col from 'react-bootstrap/Col';

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
        this.setState({ selectedBlocks: newBlocks })
        this.props.showCode(newBlocks);
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
            <Col className="commitBlock" xl={4}>
                <div className="topSection">Folder</div>
                <div className="folderName">{this.props.name}</div>
                {
                    commits.map(data => (
                        <div
                            key={data.id}
                            className={this.diffSelect(data.id)}
                            onClick={() => {
                                this.onSelect(data.id);
                            }}>
                            <div className="header">{data.header}</div>
                            <p className="comment">{data.comment}</p>
                        </div>)
                    )
                }
            </Col>
        )
    }
}

export default CommitBlock
