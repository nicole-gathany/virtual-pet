// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Pet = {
    name: string;
    id: string;
    age: number;
    hunger: number;
    happiness: number;
    cleanliness: number;
    playfulness: number; 
    fed: boolean;
    time_fed: Date;
}