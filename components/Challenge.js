import ReactMarkdown from 'react-markdown/with-html'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const renderers = {
    code: ({ language, value }) => {
        return <SyntaxHighlighter language="javascript" children={value} showLineNumbers />
    }
}

export default function Challenge({ quest, level, data }) {
    return (
        <div>
            <div className="challengediv">
                <ReactMarkdown plugins={[gfm]} renderers={renderers} allowDangerousHtml>
                    {data}
                </ReactMarkdown>
            </div>
            <div className="challengediv">
                Submit your answer here: {data}
            </div>
        </div>
    )
}