// https://eth-ropsten.alchemyapi.io/v2/_KsGr0W9_gTkxeuOeyZgFjp9qlNxShIW

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/_KsGr0W9_gTkxeuOeyZgFjp9qlNxShIW",
      acaunt: [
        "d568867f8319ceb6176f2b43f30a88deb432f3343a6c2d07cdec3a5fb5e7088c",
      ],
    },
  },
};
