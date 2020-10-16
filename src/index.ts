import { alexa as ax } from "@chitchatjs/alexa";
import Init from "./states/init";
import OrderCoffee from "./states/orderCoffee";
import OrderSnacks from "./states/orderSnacks";
import OrderType from "./states/orderType";

let skill = ax
  .skill()
  .addState(Init)
  .addState(OrderType)
  .addState(OrderCoffee)
  .addState(OrderSnacks)
  .build();

export = ax.dialogManager(skill).exports();
