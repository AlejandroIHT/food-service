export const sanitizerData = async (
  //TODO: Update type
  queryFn: any,
) => {
  const res = await queryFn();
  return res.data;
}