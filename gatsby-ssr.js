const ReactParser = require('html-react-parser');
const path = require('path');
const fs = require('fs');

module.exports.onRenderBody = ({ setHeadComponents }) => {
  const statsPath = path.join(process.cwd(), 'public', '.iconstats.json');
  const stats = JSON.parse(fs.readFileSync(statsPath, {encoding: 'utf8'}));
  const prefix = __PATH_PREFIX__ ? __PATH_PREFIX__ : '';
  const prefixedOutputFilePrefix = `${prefix}/${stats.outputFilePrefix}`;

  setHeadComponents(stats.html.map(htmlRow =>
    ReactParser(htmlRow.replace(`/${stats.outputFilePrefix}`, prefixedOutputFilePrefix))
  ));
};
