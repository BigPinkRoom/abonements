module.exports = {
  extends: ['stylelint-config-airbnb', 'stylelint-config-rational-order', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin', 'stylelint-scss'],
  rules: {
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true,
      },
    ],
    'string-quotes': 'single',
  },
};
