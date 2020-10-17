import { alexa as ax } from "@chitchatjs/alexa";
import { orderDrinkUtterances } from "./orderType";

export default ax
  .state("OrderSnacks")
  .block(
    ax
      .compound()
      .add(
        ax
          .whenUserSays(["chips please", "i want a sandwich"])
          .then(ax.ask("ok added snacks as well. Anything else?").build())
          .build()
      )
      .add(
        ax
          .whenUserSays(orderDrinkUtterances)
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
