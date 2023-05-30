module.exports = {


  friendlyName: 'View hello',


  description: 'Display "Hello" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/hello'
    }

  },


  fn: async function () {
    return {
      title: '新しいアクション！',
      message: 'これは新たに作成したアクションです。'
    };

  }


};
