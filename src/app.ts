import fs from "fs";
import { construction } from "./constant/construction";
import { Doc2 } from "./entities/doc2.entity";
import { Packer } from "docx";
import path from "path";

const doc = new Doc2();

const generatedDoc = doc.generate(construction);
const dirPath = path.join(__dirname, "..", "output");
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const filePath = path.join(dirPath, "Doc2.docx");
const writeStr = fs.createWriteStream(filePath);

Packer.toBuffer(generatedDoc).then((docBuffer) => {
  writeStr.on("finish", () => {
    console.log("Document created successfully");
  });

  writeStr.write(docBuffer);
  writeStr.end();
});
