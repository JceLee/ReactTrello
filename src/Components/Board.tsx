import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Lane} from "./Lane";
import {Card} from "./Card"


export const Board : React.FC = () => {
    const cardList = useSelector((state: RootReducerType) => state.filter.isFilterOn);

    return <div>
    
    </div>
}
