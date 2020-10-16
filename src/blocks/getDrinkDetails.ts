import { alexa as ax } from "@chitchatjs/alexa";

const orderCoffeeUtterances = [
  "do you have {drink}",
  "can i get a {size} {drink} for {deliveryPickup}",
  "can i get {drink}",
  "{drink}",
  "{qty} {drink} for {deliveryPickup}",
  "{qty} {size} {drink}",
  "{qty} {size} {drink} please",
  "{qty} {size} {drink} for {deliveryPickup} please",
  "i need a cup of {drink}",
  "{size} size",
  "i want {size} size",
  "i want to get it {deliveryPickup}",
  "i want to {deliveryPickup}",
  "for {deliveryPickup}",
];

export default ax
  .whenUserSays(orderCoffeeUtterances)
  .withSlotType("drink", "Drink")
  .withSlotType("size", "Size")
  .withSlotType("deliveryPickup", "DeliveryPickup")
  .withSlotType("qty", "AMAZON.NUMBER")
  .then(
    ax
      .whenMissingSlot("drink")
      .then(
        ax.ask("which drink would you like? I have coffee, lattee, macchiato and more.").build()
      )
      .otherwise(
        ax
          .whenMissingSlot("size")
          .then(ax.ask("what size of {drink} would you like? small, medium or large?").build())
          .otherwise(
            ax
              .whenMissingSlot("qty")
              .then(ax.ask("how many would you like?").build())
              .otherwise(
                ax
                  .whenMissingSlot("deliveryPickup")
                  .then(ax.ask("delivery or pickup?").build())
                  .otherwise(
                    ax
                      .ask("okay, that was {qty} {size} {drink} for {deliveryPickup}, right?")
                      .build()
                  )
                  .build()
              )
              .build()
          )
          .build()
      )
      .build()
  )
  .build();
