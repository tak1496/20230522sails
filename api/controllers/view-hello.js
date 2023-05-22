module.exports = {


  friendlyName: 'View hello',


  description: 'Display "Hello" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/hello'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
