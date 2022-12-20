const Api = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

import axios from "axios"


export const GetAllData = async () => {
    const List = await axios.get(Api)
    return List.data
}
