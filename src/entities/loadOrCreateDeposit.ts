import { Deposit } from "../../generated/schema";

export function loadOrCreateDeposit(id: string): Deposit {
  let deposit = Deposit.load(id);

  if (!deposit) {
    deposit = new Deposit(id);
    deposit.depositEvents = [];
    deposit.save();
  }

  return deposit;
}
