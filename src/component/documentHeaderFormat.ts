import {
  convertMillimetersToTwip,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
} from "docx";

const margins = {
  bottom: convertMillimetersToTwip(5),
  left: convertMillimetersToTwip(20),
  right: convertMillimetersToTwip(10),
};

export class DocumentHeading extends Table {
  fontSize = 13;
  constructor(documentNo: string, dateOfSigning: Date) {
    super({
      borders: {
        top: { style: "none" },
        bottom: { style: "none" },
        left: { style: "none" },
        right: { style: "none" },
        insideHorizontal: { style: "none" },
        insideVertical: { style: "none" },
      },
      style: "TableGrid",

      rows: [
        new TableRow({
          children: [
            new TableCell({
              margins: margins,
              children: [
                new Paragraph({
                  style: "header-format",
                  //   spacing: { before: 0, after: 0 }, // <<< Ngăn thừa kế margin từ section
                  //   indent: { left: 0, right: 0 },
                  text: "CÔNG TY TRỰC THĂNG MIỀN NAM",
                }),
              ],
            }),
            new TableCell({
              margins: margins,
              children: [
                new Paragraph({
                  style: "header-format",
                  children: [
                    new TextRun({
                      text: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              margins: margins,
              children: [
                new Paragraph({
                  style: "header-format",
                  children: [
                    new TextRun({
                      text: "LIÊN CƠ QUAN",
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              margins: margins,
              children: [
                new Paragraph({
                  style: "header-format",
                  children: [
                    new TextRun({
                      text: "Độc lập - Tự do - Hạnh phúc",
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              margins: margins,
              verticalAlign: "bottom",
              children: [
                new Paragraph({
                  style: "header-format",
                  text: `Số: ${documentNo}/TTr-LCQ`,
                }),
              ],
            }),
            new TableCell({
              margins: margins,
              verticalAlign: "bottom",
              children: [
                new Paragraph({
                  style: "header-format",
                  children: [
                    new TextRun({
                      text: `Thành phố Hồ Chí Minh, ngày ${dateOfSigning.getDay()} tháng ${dateOfSigning.getMonth()} năm ${dateOfSigning.getFullYear()}`,
                      italics: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
}
