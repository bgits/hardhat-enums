import { ethers } from "hardhat";
import { BigNumberish, Contract, ContractFactory, utils } from "ethers";
import {MockProvider} from '@ethereum-waffle/provider';

describe("test", function() {
  it("should pass an enum in", async function() {
    const testFactory = await ethers.getContractFactory("Test");
    const testContract = await testFactory.deploy();
    const res = await testContract.test(0);
  });
})
