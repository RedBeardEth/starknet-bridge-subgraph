import { UnfinishedDeposit } from "../../generated/schema";

export function loadOrCreateUnfinishedDeposit(id: string): UnfinishedDeposit {
  let unfinishedDeposit = UnfinishedDeposit.load(id);

  if (!unfinishedDeposit) {
    unfinishedDeposit = new UnfinishedDeposit(id);
    unfinishedDeposit.depositEvents = [];
    unfinishedDeposit.save();
  }

  return unfinishedDeposit;
}
