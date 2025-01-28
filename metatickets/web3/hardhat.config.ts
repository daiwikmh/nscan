import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  defaultNetwork: "telos_testnet",
  networks: {
    telos_testnet: {
      url: "https://rpc.testnet.telos.net",
      accounts: process.env.TELOS_TESTNET_PRIVATE_KEY
        ? [process.env.TELOS_TESTNET_PRIVATE_KEY]
        : [],
      chainId: 41,
    },
  },
};

export default config;
