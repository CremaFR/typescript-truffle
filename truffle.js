module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: 5777,
      gas: 4600000,
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    }
  }
};


//seed geth  -- addr : 6e47940acb066aecfeb11f8bdf2f44ad11352726
// 0x67056bB7CcC08f1F9B0cE3EfDbA5130ED3043E0c

// geth --rpc --rpccorsdomain "*" --ws  --wsorigins "*"  --networkid 16 --datadir pnet/ --port "30303" --nodiscover console
// personal.unlockAccount('0x4a17415b7915ba0e4b1f7065c32a01a098adf2d2', 'geth')
// personal.unlockAccount('0xe927bd9c4a9508f8ffb2aae7d0131b34fc5fc953')

