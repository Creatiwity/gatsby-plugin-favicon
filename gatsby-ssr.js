const ReactParser = require('html-react-parser');
const path = require('path');
const fs = require('fs');

module.exports.onRenderBody = ({ setHeadComponents }) => {
  const statsPath = path.join(process.cwd(), 'public', '.iconstats.json');
  const stats = JSON.parse(fs.readFileSync(statsPath, {encoding: 'utf8'}));

  setHeadComponents(stats.html.map(htmlRow => ReactParser(htmlRow)));
};
