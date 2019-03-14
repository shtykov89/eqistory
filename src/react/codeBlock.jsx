import React from 'react';
import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
import { commits } from '../data.js';
import { diffLines } from 'diff'

class CodeBlock extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    if (!this.props.commits) {
      return null;
    }
    const codeBlocks = commits.filter(c => this.props.commits.indexOf(c.id) >= 0).map(c => c.code);

    return (
      <pre className="line-numbers codeBlock">
        <code className="language-javascript">
          {
            codeBlocks.map((code, i) =>
              <span key={i}>{code}</span>)
          }
        </code>
      </pre>
    )
  }
}

export default CodeBlock