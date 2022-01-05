const neo4j = require('neo4j-driver');

/**
 * Environment variables needed to initialize the database.
 */

 const {
    DB_HOST = 'bolt://localhost',
    DB_USER = 'neo4j',
    DB_PASSWORD = 'meow'
  } = process.env;

/**
 * Neo4j driver configuration
 *
 * Return: configured neo4j driver.
 */
module.exports = () => neo4j.driver(
    DB_HOST,
    neo4j.auth.basic(DB_USER, DB_PASSWORD),
    { disableLosslessIntegers: true }
  );
