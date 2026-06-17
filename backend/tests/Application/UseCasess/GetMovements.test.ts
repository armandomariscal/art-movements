import { GetMovements } from '../../../src/Application/UseCases/GetMovements';

describe('GetMovements Use Case', () => {
  const useCase = new GetMovements();

  it('should return a list of art movements', () => {
    const result = useCase.execute();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('name', 'Renaissance');
  });

  it('should have the correct structure for a Movement', () => {
    const result = useCase.execute();
    const movement = result[0];

    expect(movement).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        period: expect.any(String),
        description: expect.any(String),
        origin: expect.any(String),
      })
    );
  });
});