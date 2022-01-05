/* eslint-disable */

//NEW MIGRATION FILE
// EDIT NAME AND FUNCTIONS AS FIT. MAKE STUCTURE CHANGES, NOT DATA CHANGES
module.exports = {
    name: 'Add Volleyball to Sports',
    forward: async (driver) => {
        const session = driver.session({
          database: 'neo4j',
        });
        await session.run(
          'CREATE (sport:Sport {name: $name, players: $players})',
          { name: 'Volleyball', players: 6 },
        );
        session.close();
      },
      backward: async (driver) => {
        const session = driver.session({
          database: 'neo4j',
        });
        await session.run(
          'MATCH (sport:User {name: $name}) DELETE sport',
          { name: 'Volleyball' },
        );
        session.close();
      },
  };