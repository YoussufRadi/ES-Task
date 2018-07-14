import uuid from "uuid";
import mime from "mime";
import Promise from "bluebird";

export const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});

export const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
};
const fs = Promise.promisifyAll(require("fs"));

export const accessFile = async path => {
  try {
    await fs.accessAsync(path);
  } catch (e) {
    return false;
  }

  return true;
};

export const generateFileId = mimetype =>
  `${uuid.v4()}.${mime.getExtension(mimetype)}`;
