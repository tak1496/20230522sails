module.exports = {

  index: async function (req, res) {
    return res.view({
      title: 'Sample!',
      message: 'これはサンプルで作成したコントローラーです。'
    });
  },

  add: async function (req, res) {
    return res.json({
      todo: 'add() is not implemented yet!'
    });
  },

  edit: async function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },

  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }

};

