import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Deposit } from "../../generated/schema";

export function loadOrCreateDeposit(id: string, l1Sender: Address, createdTimestamp: BigInt): Deposit {
  let deposit = Deposit.load(id);

  if (!deposit) {
    deposit = new Deposit(id);
    deposit.l1Sender = l1Sender
    deposit.depositEvents = [];
    deposit.createdTimestamp = createdTimestamp;

    deposit.save();
  }

  return deposit;
}
