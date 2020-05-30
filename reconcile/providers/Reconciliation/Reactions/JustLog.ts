import { ReactionInterface } from "../Support";
import { Diff } from "../Diff/Diff";

export default class JustLogReaction implements ReactionInterface {
  reactTo(diff: Diff<any>) {
    console.log(diff);
  }
}