export const saveData = (key: any, data: any) => {
  if (!key) return;
  localStorage.setItem(
    key,
    typeof data === "string" ? data : JSON.stringify(data)
  );
};

export const getData = (key: any) => {
  if (!key) return;
  return localStorage.getItem(key);
};

export const deleteData = (key: any) => {
  localStorage.removeItem(key);
};
