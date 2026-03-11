import { Request, Response } from 'express';
import { GetMovements } from '../../Application/UseCases/GetMovements.js';

export class MovementController {
  private getMovementsUseCase = new GetMovements();

  getAll = (req: Request, res: Response) => {
    try {
      const movements = this.getMovementsUseCase.execute();
      res.status(200).json(movements);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving art movements" });
    }
  }
}