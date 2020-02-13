const got = require('got');

require('dotenv').config();

(async () => {
  try {
    const { body } = await got.post(
      'https://e0t2x4sk.api.sanity.io/v1/data/mutate/production',
      {
        headers: { Authorization: `Bearer ${process.env.TOKEN}` },
        responseType: 'json',
        json: {
          mutations: [
            {
              create: {
                _type: 'category',
                name: `Test mutation ${new Date().toLocaleString()}`,
              },
            },
          ],
        },
      },
    );
    console.log(body);
  } catch (error) {
    console.log('erreur test HTTP', error);
  }
})();
