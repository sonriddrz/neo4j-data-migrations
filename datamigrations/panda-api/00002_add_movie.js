module.exports = {
    name: 'Add movie',
    forward: async (driver) => {
      const session = driver.session({
        database: 'neo4j',
      });
      await session.run(
        'CREATE (movie:Movie {name: $name, releaseDate: $releaseDate})',
        { name: 'BoxOffice', releaseDate: 2022 },
      );
      session.close();
    },
    backward: async (driver) => {
      const session = driver.session({
        database: 'neo4j',
      });
      await session.run(
        'MATCH (movie:Movie {name: $name}) DELETE movie',
        { name: 'BoxOffice' },
      );
      session.close();
    },
  };