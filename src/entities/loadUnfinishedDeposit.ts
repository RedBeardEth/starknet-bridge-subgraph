import { log } from "@graphprotocol/graph-ts";
import { UnfinishedDeposit } from "../../generated/schema";

export function loadUnfinishedDeposit(id: string): UnfinishedDeposit {
  let unfinishedDeposit = UnfinishedDeposit.load(id);

  if (!unfinishedDeposit) {
    log.error("UnfinishedDeposit with id {} not found", [id]);
    throw new Error("UnfinishedDeposit not found");
  }

  return unfinishedDeposit;
}
