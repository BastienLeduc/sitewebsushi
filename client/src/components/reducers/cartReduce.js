import Item1 from '../../images/BdD/maki-saumon.png'
import Item2 from '../../images/BdD/maki-cheese-avocat.png'
import Item3 from '../../images/BdD/maki-thon.png'
import Item4 from '../../images/BdD/california-saumon-avocat.png'
import Item5 from '../../images/BdD/california-thon-avocat.png'
import Item6 from '../../images/BdD/chirashi-mixte-thon-saumon.png'
import Item7 from '../../images/BdD/chirashi-saumon-avocat.png'
import Item8 from '../../images/BdD/chirashi-saumon.png'
import Item9 from '../../images/BdD/soupe-miso.png'
import Item10 from '../../images/BdD/salade-de-choux.png'
import Item11 from '../../images/BdD/saumon.png'
import Item12 from '../../images/BdD/thon.png'

import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'
import API from "../../utils/API";

const initState = {
    items: [],
    addedItems: [],
    total: 0

}
API.getAllSushi().then(response => {
    console.log(response.data.data);
    initState.items = response.data.data;
    for (let i = 0; i < 12; i++) {
        switch (initState.items[i].id) {
            case 1:
                initState.items[i].img = Item1;
                break;
            case 2:
                initState.items[i].img = Item2;
                break;
            case 3:
                initState.items[i].img = Item3;
                break;
            case 4:
                initState.items[i].img = Item4;
                break;
            case 5:
                initState.items[i].img = Item5;
                break;
            case 6:
                initState.items[i].img = Item6;
                break;
            case 7:
                initState.items[i].img = Item7;
                break;
            case 8:
                initState.items[i].img = Item8;
                break;
            case 9:
                initState.items[i].img = Item9;
                break;
            case 10:
                initState.items[i].img = Item10;
                break;
            case 11:
                initState.items[i].img = Item11;
                break;
            case 12:
                initState.items[i].img = Item12;
                break;
            default:
                break;
        }
    }
    console.log(initState.items);
})
    .catch(error => {
        console.log(error.response)
    })



const cartReducer = (state = initState, action) => {
    console.log(state);


    //INSIDE SHOP COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.prix
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.prix

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.prix * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.prix
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.prix
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.prix
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 2
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 2
        }
    }

    else {
        return state
    }

}

export default cartReducer