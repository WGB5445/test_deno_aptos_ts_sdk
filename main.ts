import { Aptos, AptosConfig, Network } from "npm:@aptos-labs/ts-sdk";
 
async function example() {
  // 0. Setup the client and test accounts
  const config = new AptosConfig({ network: Network.MAINNET });
  const aptos = new Aptos(config);

  console.log(await aptos.getAccountAPTAmount({
    accountAddress: "0x1"
  }))
}
 
await example();