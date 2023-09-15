"use client";
import { sampleIncrement } from "../_reducers/user.reducer";

export const userAction = {
    incrementSample: (params) => {
        return (dispatcher) => {
            /* DO MAGIC HERE */
            params += 2;
            dispatcher(sampleIncrement(params));
        }
    },
}