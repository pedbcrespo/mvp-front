import Title from "../componentes/title";
import { appStore } from "../store/appStore";

export default function HomePage(container) {
    function render() {
        container.innerHTML = Title(appStore.getState().title);
    }

    appStore.subscribe(render);

    render();
}