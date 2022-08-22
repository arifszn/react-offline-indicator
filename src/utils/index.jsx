export const hasBrowserCompatibility = (browser) => {
  return !/Windows.*Chrome|Windows.*Firefox|Linux.*Chrome/.test(browser);
};
