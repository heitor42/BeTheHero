const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    // lista itens do banco de dados
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        //desestruturação para pegar dados em variaveis separadas
        const { name, email, whatsapp, city, uf} = request.body;

        const id = generateUniqueId();
        
        //conexão com o banco de dados
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    }
}