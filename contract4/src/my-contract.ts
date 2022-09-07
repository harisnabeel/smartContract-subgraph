import { BigInt } from "@graphprotocol/graph-ts";
import {
  MyContract,
  Amount,
  State,
  Timed,
} from "../generated/MyContract/MyContract";
import { NewAmount, NewState, NewTimed } from "../generated/schema";

export function handleAmount(event: Amount): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = NewAmount.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new NewAmount(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
  }

  // BigInt and BigDecimal math are supported
  // Entity fields can be set based on event parameters
  entity.amount = event.params.amount;

  // Entities can be written to the store with `.save()`
  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balances(...)
}

export function handleState(event: State): void {
  let entity = NewState.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new NewState(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
  }

  entity.stateStatus = event.params.stateStatus;
  entity.name = event.params.name.toString();

  entity.save();
}

export function handleTimed(event: Timed): void {
  let entity = NewTimed.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new NewTimed(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
  }

  entity.time = event.params.time;

  entity.save();
}
