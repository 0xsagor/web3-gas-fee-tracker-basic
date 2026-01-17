import { getGasPrice } from "./gas.js";

document.getElementById("refreshBtn").onclick = async () => {
  const price = await getGasPrice();
  document.getElementById("gas").innerText = "Gas Price: " + price;
};
