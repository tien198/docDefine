import { Paragraph } from "docx";
import { DXA } from "../entities/toDXA";

export class BreakLine extends Paragraph {
  constructor() {
    super({
      spacing: { line: DXA.fromMm(2.5) },
    });
  }
}
