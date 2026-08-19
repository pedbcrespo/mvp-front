import { createStore } from "./store/store.js";

const store = createStore({count: 0});

store.subscribe((state) => {
    console.log("Pagina A viu a mudança", state.count)
});

store.subscribe((state) => {
    console.log("Pagina B viu a mudança", state.count)
});

store.setState({count: 1});

store.setState({count: 2});