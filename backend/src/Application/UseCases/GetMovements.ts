import { Movement } from "../../Domain/Entities/Movement.js";

export class GetMovements {
  execute(): Movement[] {
    return [
      {
        id: "1",
        name: "Renaissance",
        period: "14th - 16th Century",
        description: "A fervent period of European cultural, artistic, political and economic 'rebirth'.",
        origin: "Italy"
      },
      {
        id: "2",
        name: "Baroque",
        period: "1600 - 1750",
        description: "Characterized by exaggerated motion and clear detail used to produce drama and exuberance.",
        origin: "Italy"
      }
    ];
  }
}