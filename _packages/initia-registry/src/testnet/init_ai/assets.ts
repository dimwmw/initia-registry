import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "init_ai",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/aadf1a9da6a38b7e7e11839364ee42002260eff1657f403b9ce608337bcb986b",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/aadf1a9da6a38b7e7e11839364ee42002260eff1657f403b9ce608337bcb986b",
      display: "INIT",
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/INIT.svg",
      },
    },
  ],
};
export default info;
