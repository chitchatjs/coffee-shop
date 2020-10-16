import { alexa as ax } from "@chitchatjs/alexa";

export default ax
  .state("OrderSnacks")
  .block(
    ax
      .compound()
      .add(
        ax
          .whenUserSays(["chips please", "i want a sandwich"])
          .then(ax.ask("ok ordered your snack. Anything else?").build())
          .build()
      )
      .add(
        // TODO we can't use the same link in the whenUserSays(..) because it duplicates the generated intent
        // https://github.com/chitchatjs/chitchatjs/issues/41
        ax
          .whenUserSays(["can i order drink also", "drink also please"])
          .then(
            ax
              .compound()
              .add(ax.ask("what kind of drink?").build())
              .add(ax.goto("OrderDrink"))
              .build()
          )
          .build()
      )
      .build()
  )
  .build();
