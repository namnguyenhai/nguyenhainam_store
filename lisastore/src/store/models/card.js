import Cardimage1 from "images/Content/cardimage1.svg";
const data = [
    {
        status: "sales",
        cardimage: "",
        cardinfo: {
            nameitem: "Adicolor classiscs joggers",
            typeitem: "dress",
            priceitem: "$2"
        }
    },
    {
        status: "sales",
        cardimage: "",
        cardinfo: {
            nameitem: "Adicolor classiscs joggers",
            typeitem: "dress",
            priceitem: "$2"
        }
    },
    {
        status: "sales",
        cardimage: "",
        cardinfo: {
            nameitem: "Adicolor classiscs joggers",
            typeitem: "dress",
            priceitem: "$2"
        }
    },
    {
        status: "sales",
        cardimage: "",
        cardinfo: {
            nameitem: "Adicolor classiscs joggers",
            typeitem: "dress",
            priceitem: "$2"
        }
    },
    {
        status: "sales",
        cardimage: "",
        cardinfo: {
            nameitem: "Adicolor classiscs joggers",
            typeitem: "dress",
            priceitem: "$2"
        }
    },
    {
        status: "sales",
        cardimage: "",
        cardinfo: {
            nameitem: "Adicolor classiscs joggers",
            typeitem: "dress",
            priceitem: "$2"
        }
    }
]
export const card = {
    state: {
        listdata: data,
        count: data.length
    },  
    reducers:{
        setListData(state,listdata){
            return{
                ... state,
                listdata
            }
        }
    },
    effects: (dispath)=>({

    }),
    selectors: (slice,createSelector) => ({
        selectCount(){
            return slice(state => state.count);
        }
    })
}