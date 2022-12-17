import fs from "fs";
import path from "path";

export default function getFileList(dir: string[]) {
  const DIRECTORY = path.join(process.cwd(), ...dir);

  return fs.readdirSync(DIRECTORY);
}
