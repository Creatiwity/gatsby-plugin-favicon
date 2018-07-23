const ReactParser = require('html-react-parser');
const path = require('path');

module.exports.onRenderBody = ({ setHeadComponents }) => {
  const stats = require(path.join(process.cwd(), 'public', '.iconstats.json'));
  const prefix = __PATH_PREFIX__ ? __PATH_PREFIX__ : '';
  const prefixedOutputFilePrefix = `${prefix}/${stats.outputFilePrefix}`;

  setHeadComponents(stats.html.map(htmlRow =>
    ReactParser(htmlRow.replace(`/${stats.outputFilePrefix}`, prefixedOutputFilePrefix))
  ));
}
