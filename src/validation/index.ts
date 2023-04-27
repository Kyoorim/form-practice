export const required = (message: string) => (value?: string) => {
  if (value === undefined || value === "성별") return message;
  else return undefined;
};

export const isChecked = (message: string) => (value?: boolean) => {
  if (value === false) return message;
  else return undefined;
};

export const min = (length: number) => (value: string | number) => {
  if (String(value).length < length)
    return `최소 ${length}글자 이상 입력해주세요`;
  else return undefined;
};

export const max = (length: number) => (value: string | number) => {
  if (String(value).length > length)
    return `최대 ${length}글자 이하로 입력해주세요`;
  else return undefined;
};
