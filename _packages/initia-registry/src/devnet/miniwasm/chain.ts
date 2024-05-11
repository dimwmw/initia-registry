import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "miniwasm",
  chain_id: "miniwasm-3",
  website: "https://initia.xyz",
  pretty_name: "Miniwasm",
  status: "live",
  network_type: "devnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/2588fd87a8e081f6a557f43ff14f05dddf5e34cb27afcefd6eaf81f1daea30d0",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom:
          "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  codebase: {},
  description: "miniwasm Closed Devnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.miniwasm-3.initia.xyz",
        provider: "Foundation",
      },
    ],
    rest: [
      {
        address: "https://lcd.miniwasm-3.initia.xyz",
        provider: "Foundation",
      },
    ],
    api: [
      {
        address: "https://api.miniwasm-3.initia.xyz",
        provider: "Foundation",
      },
    ],
    grpc: [
      {
        address: "grpc://34.124.190.216:9090",
        provider: "Foundation",
      },
    ],
  },
  explorers: [
    {
      kind: "explorer",
      url: "https://explorer.mahalo-3.initia.xyz/?layer=miniwasm",
      tx_page:
        "https://explorer.mahalo-3.initia.xyz/tx/${txHash}?layer=miniwasm",
      account_page:
        "https://explorer.mahalo-3.initia.xyz/address/${accountAddress}?layer=miniwasm",
    },
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/miniwasm-2",
      tx_page: "https://scan.initia.xyz/miniwasm-2/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/miniwasm-2/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.svg",
  },
  metadata: {
    op_bridge_id: "2",
    op_denoms: ["uinit"],
    ibc_channels: [
      {
        chain_id: "mahalo-3",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "mahalo-3",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v0.2.8",
    },
  },
};
export default info;
