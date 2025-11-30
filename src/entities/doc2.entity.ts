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
import { DocumentHeadingSection } from "../component/documentHeaderFormatSection";

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
              alignment: "center",
              indent: {
                hanging: DXA.fromMm(20),
                left: DXA.fromMm(20),
              },
            },
            run: {
              size: 26,
            },
          },
          {
            id: "administrative-document-type",
            paragraph: {
              alignment: "center",
            },
            run: {
              bold: true,
            },
          },
        ],
      },
      sections: [
        new DocumentHeadingSection(con.documentNo, dateOfSigning),
        {
          properties: {
            type: "continuous",
            page: {
              margin: {
                // top: DXA.fromMm(25),
                left: DXA.fromMm(35),
                bottom: DXA.fromMm(20),
                right: DXA.fromMm(15),
              },
            },
          },
          children: [
            new Paragraph({
              style: "administrative-document-type",
              children: [
                new TextRun("TỜ TRÌNH"),
                new TextRun({ break: 1 }),
                new TextRun("Về việc phê duyệt Kế hoạch LCNT"),
                new TextRun({ break: 1 }),
                new TextRun("và gói thầu “Thẩm tra Báo cáo kinh tế kỹ thuật”"),
                new TextRun({ break: 1 }),
                new TextRun(`Công trình: ${con.name}`),
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
