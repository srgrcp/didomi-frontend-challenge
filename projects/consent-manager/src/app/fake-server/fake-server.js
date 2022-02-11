import { createServer, Factory, Model } from 'miragejs';
import { consentOptions } from './consent-options';
import { v4 as uuidv4 } from 'uuid';

createServer({
  models: {
    consentOptions: Model,
    userConsent: Model
  },

  factories: {
    userConsent: Factory.extend({
      id() {
        return uuidv4();
      },
    }),
  },

  seeds(server) {
    server.db.loadData({
      consentOptions,
    });

    server.create('userConsent', {
      user: {
        name: 'John Doe',
        email: 'john@doe.com',
      },
      givenConsents: [
        consentOptions[0],
        consentOptions[1],
      ],
    }).save();
    server.create('userConsent', {
      user: {
        name: 'Jane Doe',
        email: 'jane@doe.com',
      },
      givenConsents: [
        consentOptions[0],
        consentOptions[1],
        consentOptions[2],
      ],
    }).save();
    server.create('userConsent', {
      user: {
        name: 'Bojack Horseman',
        email: 'bojack@horseman.com',
      },
      givenConsents: [
        consentOptions[0],
        consentOptions[1],
      ],
    }).save();
    server.create('userConsent', {
      user: {
        name: 'Princess Carolyn',
        email: 'princes@manager.com',
      },
      givenConsents: [
        consentOptions[0],
      ],
    }).save();
  },

  routes() {
    this.get('/consent-options', (schema) => ({
      data: schema.all('consentOptions').models,
    }))

    this.post('/consents', (schema, request) => {
      const { user, givenConsents } = JSON.parse(request.requestBody);
      
      const userConsent = schema.create('userConsent', {
        user,
        givenConsents,
      });

      return {
        data: userConsent,
      };
    })

    this.get('/consents', (schema, request) => {
      const page = Number(request.queryParams.page || 1);
      const perPage = Number(request.queryParams.perPage || 2);
      const offset = (page - 1) * perPage;
      const total = schema.all('userConsent').models.length;
      const totalPages = Math.ceil(total / perPage);
      const userConsents = schema.all('userConsent').models.slice(offset, offset + perPage);
      return {
        data: {
          data: userConsents,
          pagination: {
            total,
            totalPages,
            page,
            perPage,
          },
        },
      };
    })
  }
})
