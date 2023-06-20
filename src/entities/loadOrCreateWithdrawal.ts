import { Address } from "@graphprotocol/graph-ts";
import { Withdrawal } from "../../generated/schema";

export function loadOrCreateWithdrawal(
  id: string,
  l2Sender: Address
): Withdrawal {
  let withdrawal = Withdrawal.load(id);

  if (!withdrawal) {
    withdrawal = new Withdrawal(id);
    withdrawal.l2Sender = l2Sender;
    withdrawal.withdrawalEvents = [];
    withdrawal.save();
  }

  return withdrawal;
}
