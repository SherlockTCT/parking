import { defineComponent } from "vue";
import s from './home.module.scss';
export const home = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <h1 class={s.test}>Home</h1>
            </div>
        );
    }
});