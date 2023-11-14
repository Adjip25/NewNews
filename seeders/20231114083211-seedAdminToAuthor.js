"use strict";

const { hashPassword } = require("../helpers/bcrypt");
const fs = require("fs").promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = JSON.parse(await fs.readFile("./data/author.json", "utf-8")).map(
      (el) => {
        delete el.id;
        el.createdAt = new Date();
        el.updatedAt = new Date();
        return el;
      }
    );

    for (const author of data) {
      author.password = await hashPassword(author.password);
    }

    await queryInterface.bulkInsert("Authors", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Authors", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
