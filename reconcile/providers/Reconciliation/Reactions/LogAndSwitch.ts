import { ReactionInterface } from "../Support";
import { Diff } from "../Diff/Diff";

export default class LogAndSwitch implements ReactionInterface {
  reactTo(diff: Diff<any>) {
    console.log(diff);
    console.log('SOMETHING ELSE');
  }
}