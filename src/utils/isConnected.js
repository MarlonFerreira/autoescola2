const isConnected = () => {
  const isConnected = sessionStorage.getItem("nome");
  if (isConnected) return true;
  else return false;
};
export default isConnected;
