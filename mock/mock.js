module.exports = {
  rules: [
    {
      pattern: /\/api\/yijian\.php\?type=more\&pageNo=3/,
      respondwith: './yijian.json'
    },
    {
      pattern: /\/api\/home\.php/,
      respondwith: './home.json'
    }
  ]
};
