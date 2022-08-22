const express = require('express');
const Drug1 = require('../models/Drug1.model');
const Drug2 = require('../models/Drug2.model');
const router = express.Router();

router.post('/drug1', async function (req, res) {
  const user = await Drug1.create(req.body);
  return res.send({ user });
}),
  router.get('/drug1', async function (req, res) {
    //const users = await Drug1.find();
    let data = {
      fields: [
        {
          label: 'Date of Birth (YYYY-MM-DD)',
          key: 'birthday',
          isRequired: true,
          order: 1,
          isReadonly: false,
          type: 'date',
        },
        {
          label: 'Gestational Age',
          key: 'gestationalAge',
          isRequired: true,
          order: 3,
          unit: 'weeks',
          isReadonly: false,
          type: 'number',
        },
        {
          label: 'Sex',
          items: [
            {
              value: 'male',
              text: 'Male',
            },
            {
              value: 'female',
              text: 'Female',
            },
          ],
          key: 'sex',
          isRequired: true,
          order: 4,
          isReadonly: false,
          type: 'dropdown',
        },
        {
          label: 'Height',
          key: 'height',
          isRequired: true,
          order: 5,
          unit: 'cm',
          isReadonly: false,
          type: 'number',
        },
        {
          label: 'Weight',
          key: 'weight',
          isRequired: true,
          order: 6,
          unit: 'kg',
          isReadonly: false,
          type: 'number',
        },
        {
          label: 'BMI',
          key: 'bmi',
          order: 11,
          unit: 'kg/m²',
          isReadonly: true,
          type: 'number',
        },
      ],
    };
    return res.send(data);
  });

router.post('/drug2', async function (req, res) {
  const user = await Drug2.create(req.body);
  return res.send({ user });
}),
  router.get('/drug2', async function (req, res) {
    //const users = await Drug2.find();
    let drug2data = {
      fields: [
        {
          label: 'Date of Birth (YYYY-MM-DD)',
          key: 'birthday',
          isRequired: true,
          order: 1,
          isReadonly: false,
          type: 'date',
        },
        {
          label: 'Sex',
          items: [
            {
              value: 'male',
              text: 'Male',
            },
            {
              value: 'female',
              text: 'Female',
            },
          ],
          key: 'sex',
          isRequired: true,
          order: 2,
          isReadonly: false,
          type: 'dropdown',
        },
        {
          label: 'Weight',
          key: 'weight',
          isRequired: true,
          order: 3,
          unit: 'kg',
          isReadonly: false,
          type: 'number',
        },
      ],
    };
    return res.send(drug2data);
  });
module.exports = router;
