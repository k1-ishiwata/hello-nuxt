module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
   'vue'
  ],
  rules: {
    'no-console': 0, // console.logの許可
    'vue/html-self-closing': 0, // HTMLセルフ閉じタグ許可
    'vue/require-default-prop': 0, // propsのrequire設定なしを許可
    'vue/html-indent': 0, // component内のインデントを許可
    'vue/attribute-hyphenation': 0, // プロパディ名の型の許容
    'comma-dangle': 0, // 末尾カンマを許可
    'space-before-function-paren': 0, // 特定キーワード前のスペースを許可
  }
}
