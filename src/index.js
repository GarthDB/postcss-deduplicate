import postcss from 'postcss';
import Deduplicate from './deduplicate';

export default postcss.plugin('postcss-deduplicate',
  () =>
    (css) =>
      new Deduplicate(css)
);
