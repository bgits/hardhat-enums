import hre from "hardhat";
import { ethers } from "hardhat";
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import { getContractFactory } from "../ethers/src/internal/helpers";
const { Contract, ContractFactory, utils } = ethers;
import {MockProvider} from '@ethereum-waffle/provider';

describe("test", function() {
  before(async function () {
		await hre.network.provider.request({
			method: "hardhat_reset",
			params: [
				{
					forking: {
						chainId: 1,
						jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY}`,
						blockNumber: 12821000
					}
				}
			]
		})
	})

  it("should pass an enum in", async function() {
    const testFactory = await ethers.getContractFactory("Test");
    //const testFactory = await getContractFactory(ethers, "Test");
    const testContract = await testFactory.deploy();
    const res = await testContract.test(0);
  });
})
