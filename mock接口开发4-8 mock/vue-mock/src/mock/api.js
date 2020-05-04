import mock from 'mockjs'

mock.mock(/^cocoonut.top\/list.*/, {
  'status|+1': 1,
  ['data|6']: [
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