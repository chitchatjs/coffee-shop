import { alexa as ax } from "@chitchatjs/alexa";
import getDrinkDetails from "../blocks/getDrinkDetails";
import builtins from "../builtins";
import { orderSnacksUtterances } from "./orderType";

export default ax
  .state("OrderDrink")
  .block(
    ax
      .compound()
      .add(getDrinkDetails)
      .add(
        ax
          .whenIntentName("AMAZON.YesIntent")
          .then(ax.say("what would you like, another drink or i have snacks as well?"))
          .build()
      )
      .add(
        ax
          .whenIntentName("AMAZON.NoIntent")
          .then(ax.ask("Ok thank you for your order.").build())
          .build()
      )
      .add(
        ax
          .whenUserSays(orderSnacksUtterances)
          .then(
            ax
              .compound()
              .add(ax.ask("okay what kind of snacks would you like?").build())
              .add(ax.goto("OrderSnacks"))
              .build()
          )
          .build()
      )
      .add(builtins)
      .build()
  )
  .build();
