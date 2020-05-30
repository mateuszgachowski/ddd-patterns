# Reconciliation pattern

This pattern can be used with feature flags for easier refactoring of complicated systems in the style of Big Ball of Mud Refactoring.

The reconsiliation class takes `Reaction` class as dependency and can create a strategy how the logic should react if models change.
Two example reactions are added as an example:

1. Just logging to console that difference was found and still returning the new model.
2. Logging and switching the feature flag to return old model. This is a more safe and backward compatible solution.

If you see any errors or improvements feel free to contribute.