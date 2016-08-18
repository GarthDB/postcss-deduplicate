import CleanCSS from 'clean-css';

function minify(rule) {
  return new CleanCSS().minify(rule.toString()).styles;
}

export default class Deduplicate {
  constructor(css) {
    this.root = css;
    const deduplicated = [];
    let duplicate;
    this.root.walkRules(rule => {
      duplicate = undefined;
      deduplicated.forEach(dedupeRule => {
        if (minify(rule) === minify(dedupeRule)) {
          duplicate = true;
          return;
        }
      });
      if (!duplicate) {
        deduplicated.push(rule);
      } else {
        rule.remove();
      }
    });
  }
}
