import { alexa as ax } from "@chitchatjs/alexa";

export default ax
  .start()
  .block(
    ax
      .compound()
      .add(ax.info().name("Coffee Shop").invocationName("coffee shop next door").build())
      .add(ax.slotType("Drink").values(["latte", "tea", "coffee", "hot chocolate", "macchiato", "cappuccino"]).build())
      .add(ax.slotType("Size").values(["small", "medium", "large"]).build())
      .add(ax.slotType("DeliveryPickup").values(["delivery", "pickup"]).build())
      .add(ax.intent("AMAZON.YesIntent", ["yes"]).build())
      .add(ax.intent("AMAZON.NoIntent", ["no"]).build())
      .add(ax.ask("Good day! I have a lot of coffee and snacks. What can I get you?").build())
      .add(ax.goto("OrderType"))
      .build()
  )
  .build();
