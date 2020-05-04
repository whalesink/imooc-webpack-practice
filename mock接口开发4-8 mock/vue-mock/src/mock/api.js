import mock from 'mockjs'

mock.mock(/^cocoonut.top\/list.*/, (opt) => {

  // 这种方法只适用于要提取的参数在最后的情况
  
  let snippet = opt.url.match(/num.*$/)[0];
  let num = snippet.slice(snippet.indexOf('=')+1);
  
  return mock.mock({
    'status|+1': 1,
    ['data|'+ num]: [
      {
        'tid|+1': 1,
        'title': '@sentence(5)',
        'catalog': 'index',
        'fav|1000-9999': 1000,
        'created': '@date(yyyy-MM-dd HH:mm:ss)',
        'isEnd|1': false,
        'answer': /\d{2}/,
        'user': {
          'avatar': '@image("200x200")',
          'name': '@cname',
          'isVip|1': false,
          'level|1-6': 1
        }
      }
    ],
    'msg': 'success'
  });
});

