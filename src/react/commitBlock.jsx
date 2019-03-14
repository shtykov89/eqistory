import React from 'react';
import { commits } from '../data.js';

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


        if (idx === 0) {
            return 'firstSelect commitBox';
        } else if (idx === 1) {
            return 'secondSelect commitBox';
        } else {
            return 'notSelected commitBox';
        }
    }

    render() {
        return (
            commits.map(d => (
                <div
                    key={d.id}
                    className={this.diffSelect(d.id)}
                    onClick={() => {
                        this.onSelect(d.id);
                    }}>
                    <div className="header">{d.header}</div>
                    <p className="comment">{d.comment}</p>
                </div>
            )
            )
        )
    }
}

export default CommitBlock
