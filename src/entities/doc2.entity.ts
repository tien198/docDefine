import {
  Document,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { Construction } from "../type/construction.type";
import { DXA } from "./toDXA";
import { DocumentDefaultsOptions } from "../constant/documentDefaultOptions";
import { DocumentHeading } from "../component/documentHeaderFormat";

export class Doc2 {
  generate(con: Construction) {
    const dateOfSigning = new Date(con.dateOfSigning);
    const doc = new Document({
      styles: {
        default: {
          document: DocumentDefaultsOptions,
        },
        paragraphStyles: [
          {
            id: "header-format",
            paragraph: {
              // alignment: "center",
              indent: {
                firstLine: 0,
              },
            },
            run: {
              size: 26,
            },
          },
        ],
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: DXA.fromMm(25),
                left: DXA.fromMm(35),
                bottom: DXA.fromMm(20),
                right: DXA.fromMm(15),
              },
            },
          },
          children: [
            new DocumentHeading(con.documentNo, dateOfSigning),
            new Paragraph({
              alignment: "center",
              children: [
                new TextRun(con.name),
                new TextRun({
                  text: "\tFoo Bar",
                  bold: true,
                }),
                new TextRun({
                  text: "\nGithub is the best",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(
                  "\tCó vẻ dùng đc rồi. kakaka kakaka kakaka kakaka  kakaka kakaka kakaka kakaka                 kakaka kakaka kakaka kakaka kakaka  kakaka kakaka kakaka kakaka                 kakaka kakaka kakaka kakaka kakaka  kakaka kakaka kakaka kakaka                 kakaka kakaka kakaka kakaka kakaka  kakaka kakaka kakaka kakaka                 kakaka"
                ),
              ],
            }),
          ],
        },
      ],
    });
    return doc;
  }
}
