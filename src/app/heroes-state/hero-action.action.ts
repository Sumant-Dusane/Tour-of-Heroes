import { createAction, props } from "@ngrx/store";
import { Hero } from "../heroInterface";

export const addHeroDetail = createAction(
  "[ADD] Add Heros",
  props<{ payload: Hero }>(),
)
