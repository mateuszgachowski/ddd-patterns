export class Diff<T> {
  private oldPayload: T;
  private newPayload: T;

  constructor(oldOne: T, newOne: T) {
    this.oldPayload = oldOne;
    this.newPayload = newOne;
  }

  public exists(): boolean {
    return JSON.stringify(this.oldPayload) !== JSON.stringify(this.newPayload)
  }
}