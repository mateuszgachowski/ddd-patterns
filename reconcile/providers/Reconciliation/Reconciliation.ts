import { ReactionInterface } from "./Support";
import { Diff } from "./Diff/Diff";

export default class Reconciliation<T> {
  private reaction: ReactionInterface;

  constructor(reaction: ReactionInterface) {
    this.reaction = reaction;
  }

  public compare(oldPayload: T, newPayload: T) {
    const difference = new Diff<T>(oldPayload, newPayload);

    if (difference.exists()) {
      this.reaction.reactTo(difference);
    }

    return difference
  }
}