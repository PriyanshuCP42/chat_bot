import { promises as fs } from "fs";

export const getData = async (filePath) => {
  const data = (await fs.readFile(filePath, "utf-8")) || "[]";
  return JSON.parse(data);
};
export const postData = async (filePath, entry) => {
  const data = await getData(filePath);
  data.push(entry);
  return await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

export const putData = async (filePath, data) => {
  return await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

export const verifyToken = async (token) => {
  const file = path.join(dbAddress, "tokenRegistry.json");
  const tokens = await getData(file);
  return tokens.includes(token);
};
