module.exports = {
  rules: [
    {
      pattern: /\/api\/livelist\.php\?type=more\&pageNo=1/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=more\&pageNo=2/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/yijian\.php\?type=more\&pageNo=3/,
      respondwith: './yijian.json'
    },
     {
      pattern: /\/api\/livelist\.php\?type=refresh/,
      respondwith: './livelist-refresh.json'
    }
  ]
};
