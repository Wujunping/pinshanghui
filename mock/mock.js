module.exports = {
  rules: [

    {
      pattern: /\/api\/yijian\.php\?type=more\&pageNo=3/,
      respondwith: './yijian.json'
    },
    {
      pattern: /\/api\/home\.php/,
      respondwith: './home.json'
    },
    {
      pattern: /\/api\/47\.php/,
      respondwith: './47.json'
    },
    {
      pattern: /\/api\/74\.php/,
      respondwith: './74.json'
    },
    {
      pattern: /\/api\/66\.php/,
      respondwith: './66.json'
    },
    {
      pattern: /\/api\/113\.php/,
      respondwith: './113.json'
    },
     {
      pattern: /\/api\/71\.php/,
      respondwith: './71.json'
    },
     {
      pattern: /\/api\/20\.php/,
      respondwith: './71.json'
    },
     {
      pattern: /\/api\/10\.php/,
      respondwith: './10.json'
    },
    {
     pattern: /\/api\/1-2\.php/,
      respondwith: './1-2.json'
    },
    {
     pattern: /\/api\/2\.php/,
      respondwith: './2.json'
    }
  ]
};
