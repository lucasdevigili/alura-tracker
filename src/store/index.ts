import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> =  Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toDateString(),
                nome: 'TypeScript'
            },
            {
                id: new Date().toDateString(),
                nome: 'Vue'
            },
            {
                id: new Date().toDateString(),
                nome: 'Vuex'
            }
        ]
    }
})