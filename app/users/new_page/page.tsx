"use client";

import React from "react";
import ProductCard from "../components/product_card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { userAction } from "../../GlobalRedux/_actions/user.action";

const NewPage = () => {
    const dispatch = useDispatch();
    const { user: { name, value } } = useSelector((state: RootState) => state);

    const incrementValue = () => {
        let value:Number = 1;

        dispatch(userAction.incrementSample(value) as any);
    }

    return (
        <React.Fragment>
            <span>{ value }</span>
            <div>New Page { name }</div>

            <button onClick={ incrementValue }>Sample Increment</button>
            <ProductCard />
        </React.Fragment>
    )
}

export default NewPage