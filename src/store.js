import { reactive } from 'vue';

export const store = reactive(
    {
        cardList: [],
        allArchetype: [],
        loading: true,
        search: '',
    }
)