export const sanitizerData = async (
  queryFn: any,
) => {
  const res = await queryFn();
  return res.data;
}