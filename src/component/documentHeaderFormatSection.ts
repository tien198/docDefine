import {
  FileChild,
  ISectionOptions,
  ISectionPropertiesOptions,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
} from "docx";
import { DXA } from "../entities/toDXA";
import { BreakLine } from "./breakLine";

const margins = {
  bottom: DXA.fromMm(5),
  left: DXA.fromMm(5),
  right: DXA.fromMm(10),
};

export class DocumentHeadingSection implements ISectionOptions {
  fontSize = 13;
  children: readonly FileChild[];
  properties?: ISectionPropertiesOptions | undefined;
  constructor(documentNo: string, dateOfSigning: Date) {
    this.properties = {
      page: {
        margin: {
          top: DXA.fromMm(25),
          bottom: DXA.fromMm(10),
          left: DXA.fromMm(10),
          right: DXA.fromMm(5),
          footer: DXA.fromMm(10),
        },
      },
    };
    this.children = [
      new Table({
        width: {
          type: "pct",
          size: 100,
        },
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
                children: [
                  new Paragraph({
                    style: "header-format",
                    spacing: {
                      after: DXA.fromMm(1.5),
                    },
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
                verticalAlign: "bottom",
                children: [
                  new BreakLine(),
                  new Paragraph({
                    style: "header-format",
                    text: `Số: ${documentNo}/TTr-LCQ`,
                  }),
                ],
              }),
              new TableCell({
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
      }),
      new BreakLine(),
    ];
  }
}
