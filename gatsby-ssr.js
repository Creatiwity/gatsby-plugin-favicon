const React = require('react')
const ReactParser = require('html-react-parser');
const path = require('path');
const fs = require('fs');

module.exports.onRenderBody = ({ setHeadComponents }) => {
  const statsPath = path.join(process.cwd(), 'public', '.iconstats.json');
  const stats = JSON.parse(fs.readFileSync(statsPath, {encoding: 'utf8'}));

  let count = 1;

  const parserOptions = {
    // Insert key for React on the tags (if not already present)
    replace: ({ attribs, name }) => {
      if (attribs && !attribs.hasOwnProperty('key')) {
        attribs.key = `gatsby-plugin-favicon-${count}`;
        count++;
        return React.createElement(name, attribs);
      }
    },
  };

  setHeadComponents(stats.html.map(htmlRow => ReactParser(htmlRow, parserOptions)));
};
