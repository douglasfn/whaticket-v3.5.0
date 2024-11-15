"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Adicionar a coluna flowBuilderId na tabela Whatsapp
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("FlowCampaigns", "whatsappId", {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: "Whatsapps",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
            allowNull: true
        });
    },
    down: (queryInterface) => {
        // Remover a coluna flowBuilderId da tabela Whatsapp
        queryInterface.removeColumn("FlowCampaigns", "whatsappId");
    }
};
