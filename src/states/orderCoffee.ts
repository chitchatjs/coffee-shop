import { alexa as ax } from "@chitchatjs/alexa";
import getDrinkDetails from "../blocks/getDrinkDetails";
import builtins from "../builtins";

export default ax
  .state("OrderDrink")
  .block(
    ax
      .compound()
      .add(getDrinkDetails)
      .add(ax.whenIntentName("AMAZON.YesIntent").then(ax.say("ok ordered!")).build())
      .add(
        ax
          .whenIntentName("AMAZON.NoIntent")
          .then(
            ax
              .ask(
                "Sorry for misunderstanding. Please tell me once again, what would you like to drink?"
              )
              .build()
          )
          .build()
      )
      .add(
        ax
          .whenUserSays(["can i order snacks also", "snacks also please"])
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
