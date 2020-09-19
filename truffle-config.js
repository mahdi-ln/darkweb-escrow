module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        gas: 6721975,
        network_id: "*" // Match any network id
      }
    },
    compilers: {
    solc: {
        version: "0.4.23",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
}
  };
  