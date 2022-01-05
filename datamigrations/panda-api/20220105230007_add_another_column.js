/* eslint-disable */

//NEW MIGRATION FILE
// EDIT NAME AND FUNCTIONS AS FIT. MAKE STUCTURE CHANGES, NOT DATA CHANGES
module.exports = {
    name: 'Add Magick',
    forward: async (driver) => {
        const session = driver.session({
          database: 'neo4j',
        });
        await session.run(
          'CREATE (magick:Magick {name: $name, age: $age})',
          { name: 'Username', age: 30 },
        );
        session.close();
      },
      backward: async (driver) => {
        const session = driver.session({
          database: 'neo4j',
        });
        await session.run(
          'MATCH (magick:Magick {name: $name}) DELETE magick',
          { name: 'Username' },
        );
        session.close();
      },
  };