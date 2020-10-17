import { alexa as ax } from "@chitchatjs/alexa";
import init from "./states/init";
import orderDrink from "./states/orderDrink";
import orderSnacks from "./states/orderSnacks";
import orderType from "./states/orderType";

let skill = ax
  .skill()
  .addState(init)
  .addState(orderType)
  .addState(orderDrink)
  .addState(orderSnacks)
  .build();

export = ax.dialogManager(skill).exports();
