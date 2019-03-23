import React from "react";
import docs from "./document.txt";
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

export default class Document extends React.Component {
  render() {
    const result = md.render(docs);
    return (
      <div className="normal-content">
        <div id="content" dangerouslySetInnerHTML={{ __html: result }} />
      </div>
    );
  }
}
