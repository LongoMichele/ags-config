import { Variable } from "astal";

export const timeFormat = "+%H:%M:%S";

export const getTime = (format?: string) => {
  return Variable("").poll(1000, `date '${format ?? timeFormat}'`)();
};
