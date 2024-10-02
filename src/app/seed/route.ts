import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, pets } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
  
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );
  
    return insertedUsers;
  }

  async function seedPets() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
    CREATE TABLE IF NOT EXISTS pets (
      name VARCHAR(255) NOT NULL,
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      birthdate TIMESTAMP NOT NULL,
      age INT NOT NULL,
      hunger INT NOT NULL,
      happiness INT NOT NULL,
      cleanliness INT NOT NULL,
      playfulness INT NOT NULL,
      fed BOOLEAN NOT NULL,
      time_fed TIMESTAMP NOT NULL
    );
  `;

  const insertedPets = await Promise.all(
    pets.map((pet) => client.sql`
    INSERT INTO pets (name, id, birthdate, age, hunger, happiness, cleanliness, playfulness, fed, time_fed)
    VALUES(${pet.name}, ${pet.id}, ${pet.birthdate}, ${pet.age}, ${pet.hunger}, ${pet.happiness}, ${pet.cleanliness}, ${pet.playfulness}, ${pet.fed}, ${pet.time_fed})
    `)
  )

  return insertedPets;

  }

  export async function GET() {
   
    try {
      await client.sql`BEGIN`;
      await seedUsers();
      await seedPets()
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }