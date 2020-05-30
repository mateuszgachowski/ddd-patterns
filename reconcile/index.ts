import Reconciliation from "./providers/Reconciliation/Reconciliation"
import JustLogReaction from "./providers/Reconciliation/Reactions/JustLog"
import LogAndSwitch from "./providers/Reconciliation/Reactions/LogAndSwitch"

const modelFacade = () => {
  const oldModel = { a:1, b:3 } 
  const newModel = { a:1, b:4 }
  
  const reaction = new JustLogReaction()
  const reaction2 = new LogAndSwitch()

  // const reconciliation = new Reconciliation(reaction)
  const reconciliation = new Reconciliation(reaction2)

  reconciliation.compare(oldModel, newModel)

  return newModel;
}

const modelResult = modelFacade();

console.log(modelResult)