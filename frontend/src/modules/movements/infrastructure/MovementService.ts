import type { Movement } from '../domain/Movement.js';

export const fetchMovements = async (): Promise<Movement[]> => {
  const response = await fetch('http://localhost:3000/api/movements');
  if (!response.ok) {
    throw new Error('Error al obtener los movimientos de arte');
  }
  return await response.json();
};