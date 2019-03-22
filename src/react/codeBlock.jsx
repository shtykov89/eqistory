import React from 'react';
import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
import { commits } from '../data.js';
import Col from 'react-bootstrap/Col';
var Diff = require('diff');

class CodeBlock extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  highlight(){
    let first = 'this.props.commits.code';
    let second = 'this.props.commits.code';
    let diff = Diff.diffLines(first,second);
    }
  
  render() {

    if (!this.props.commits) {
      return null
    }

    const codeBlocks =
      commits
        .filter((c) => {
          return this.props.commits.indexOf(c.id) >= 0
        })
        .map((c) => {
          return c.code
        })

    return (
      <Col xl={4}>
        {this.highlight()}
        <pre className="line-numbers codeBlock">
          <code className="language-javascript">
            {
              codeBlocks.map((code, i) =>
                <span key={i}>{code}</span>)
            }
          </code>
        </pre>
      </Col>
    )
  }
}

export default CodeBlock