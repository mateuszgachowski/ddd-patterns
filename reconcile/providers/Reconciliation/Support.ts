import { Diff } from "./Diff/Diff";


export interface ReactionInterface {
  reactTo(diff: Diff<any>);
}