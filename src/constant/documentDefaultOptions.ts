import { IDocumentDefaultsOptions } from "docx";
import { DXA } from "../entities/toDXA";

export const DocumentDefaultsOptions: IDocumentDefaultsOptions = {
  run: {
    font: "Times New Roman",
    size: 28,
  },
  paragraph: {
    indent: {
      firstLine: DXA.fromMm(10),
      // hanging: DXA.fromMm(0.5),
      // left: DXA.fromMm(2),
    },
  },
};
