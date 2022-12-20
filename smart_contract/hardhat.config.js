// https://eth-goerli.g.alchemy.com/v2/UygSyfbW1wdnKrja95_c6q3hfi0nNXXn

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/UygSyfbW1wdnKrja95_c6q3hfi0nNXXn",
      accounts: [
        "c4960ad2916c966d972cf9de87f56b7fbc6b137813b3d5e586f2ce99ab158f9a",
      ],
    },
  },
};
