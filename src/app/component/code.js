import React from "react";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import "highlight.js/styles/atom-one-light.css";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  }
});

export default class Code extends React.Component {
  render() {
    const { content } = this.props;
    const result = md.render(content);
    return <div id="content" dangerouslySetInnerHTML={{ __html: result }} />;
  }
}
