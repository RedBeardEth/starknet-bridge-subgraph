import { Address } from "@graphprotocol/graph-ts";
import { Deposit } from "../../generated/schema";

export function loadOrCreateDeposit(id: string, l1Sender: Address): Deposit {
  let deposit = Deposit.load(id);

  if (!deposit) {
    deposit = new Deposit(id);
    deposit.l1Sender = l1Sender
    deposit.depositEvents = [];
    deposit.save();
  }

  return deposit;
}
