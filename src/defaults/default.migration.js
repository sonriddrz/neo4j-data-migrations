/* eslint-disable */

//NEW MIGRATION FILE
// EDIT NAME AND FUNCTIONS AS FIT. MAKE STUCTURE CHANGES, NOT DATA CHANGES
module.exports = {
    name: 'Add User',
    forward: async (driver) => {
        const session = driver.session({
          database: 'neo4j',
        });
        await session.run(
          'CREATE (user:User {name: $name, age: $age})',
          { name: 'Username', age: 30 },
        );
        session.close();
      },
      backward: async (driver) => {
        const session = driver.session({
          database: 'neo4j',
        });
        await session.run(
          'MATCH (user:User {name: $name}) DELETE user',
          { name: 'Username' },
        );
        session.close();
      },
  };