const cardService = require('../services/card');

const createCard = async (req, res) => {
    try {
        const { name, age, sex, date, description } = req.body;
        const card = await cardService.saveNewcard(name, age, sex, date, description);
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCards = async (req, res) => {
    try {
        const cards = await cardService.getcards();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCard = async (req, res) => {//es para crear e insertar same time
    try {
        const cardId = await cardService.updatecard(req.params.id, req.body);
        const {name,age,sex,date,description}=req.body
        await cardService.updatecard(cardId,name,age, sex, date, description);
        res.json(cardId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const upsertCard = async (req, res) => {//es para editar
    try {
        const cardId = req.params.id;
        const { name, age, sex, date, description } = req.body;
        await cardService.upsertcard(cardId, name,age, sex, date, description);
        res.json(cardId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteCard = async (req, res) => {//es para editar
    try {
        const cardId = req.params.id;
        await cardService.deletecard(cardId);
        res.json(cardId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createCard,
    getCards,
    getCards,
    updateCard,
    upsertCard,
    deleteCard
};