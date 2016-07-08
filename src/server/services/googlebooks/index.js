'use strict';
const got = require('got');

const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  find(params) {
    const rootUrl = 'https://www.googleapis.com/books/v1/volumes';
    const query = `q=${params.query.query}`;
    const constraints = 'maxResults=40&orderBy=relevance&printType=books';
    const fields = 'fields=items(id%2CselfLink%2CvolumeInfo(authors%2C' +
      'categories%2Cdescription%2CimageLinks%2CmainCategory%2CpageCount%2C' +
      'publishedDate%2Cpublisher%2Csubtitle%2Ctitle))';
    const key = `key=${this.app.get('googleBooksKey')}`;

    const target = `${rootUrl}?${query}&${constraints}&${fields}&${key}`;

    return got(target)
      .then(response => response.body)
      .then(data => {
        const parsed = JSON.parse(data);
        const formatted = parsed.items.map(b => Object.assign({}, {
          googleId: b.id,
          title: b.volumeInfo.title
        }));

        return formatted;
      })
      .catch(error => error);

    // return Promise.resolve(require('./mockdata.json'));
  }

  // get(id, params) {}
  // create(data, params) {}
  // update(id, data, params) {}
  // patch(id, data, params) {}
  // remove(id, params) {}
}

module.exports = function initGoogleBooks() {
  const app = this;

  app.use('/googlebooks', new Service());

  const googleBooksService = app.service('/googlebooks');

  googleBooksService.before(hooks.before);
  googleBooksService.after(hooks.after);
};

module.exports.Service = Service;
