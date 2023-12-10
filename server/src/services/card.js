const { Pool } = require('pg');
const config = require('../config/db_config');

const pool = new Pool(config);

const { models } = require('../db/sequelize')



  async function getcards()
  {
    const Cards = await models.Cards.findAll();
    return Cards
  }

  async function saveNewcard(name,age, sex, date, description)
  {
    const cardCreated = await models.Cards.create({
      name: name,
      age: age,
      sex: sex,
      date: date,
      description: description
    })

    console.log(cardCreated)

  }

  async function updatecard(cardId, name, age, sex, date, description)
  {
    const card = await models.Cards.findByPk(cardId)

    if (!card)
    {
      throw new Error("card not found")
    }

    await card.update({
      name: name,
      age: age,
      sex: sex,
      date: date,
      description: description
    })
    
  }
  
  async function upsertcard(cardId, name, age, sex, date, description)
  {
    const card = await models.Cards.findByPk(cardId)
    
    if (!card)
    {
      this.saveNewcard(name, age, sex, date, description)
    }
    
    await card.update({
      name: name,
      age: age,
      sex: sex,
      date: date,
      description: description
    })
  }

  async function deletecard(cardId)
  {
    const prodctToDelete = await models.Cards.findByPk(cardId)
    prodctToDelete.destroy()
  }


module.exports = {
  getcards,
  saveNewcard,
  updatecard,
  upsertcard,
  deletecard  
} 
