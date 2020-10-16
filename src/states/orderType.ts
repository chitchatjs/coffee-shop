import { alexa as ax } from "@chitchatjs/alexa";
import builtins from "../builtins";

const orderDrinkUtterances = ["i want to order drink", "drink please", "i want drink"];
const orderSnacksUtterances = ["snacks please", "i want to order snacks", "i want snacks"];

// asks user if s/he wants a drink or snacks
export default ax
  .state("OrderType")
  .block(
    ax
      .compound()
      .add(
        ax
          .whenUserSays(orderDrinkUtterances)
          .then(
            ax
              .compound()
              .add(ax.ask("ok what kind of drink would you like?").build())
              .add(ax.goto("OrderDrink"))
              .build()
          )
          .build()
      )
      .add(
        ax
          .whenUserSays(orderSnacksUtterances)
          .then(
            ax
              .compound()
              .add(ax.ask("ok what kind of snacks would you like?").build())
              .add(ax.goto("OrderSnacks"))
              .build()
          )
          .build()
      )
      .add(builtins)
      .build()
  )
  .build();
