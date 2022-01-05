module.exports = {
    name: 'Add user',
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