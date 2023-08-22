import fs from "fs";

export enum GetFilesFileType {
  post = "post",
}

export function getFiles(type: GetFilesFileType) {
  switch (type) {
    case GetFilesFileType.post:
      const folder = "data/";
      const posts = fs.readdirSync(folder);
      return posts
    default:
      return []
  }
}
