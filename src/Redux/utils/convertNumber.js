export const converNumber = (date) => {
  const sp = date.split("-");
  let st = "";
  sp.map((s) => (st += Number(s)));
  return st;
};
