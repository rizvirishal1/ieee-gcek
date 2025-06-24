//imports…
import Navbar from "../components/Navbar"
//styles
import styles from "./layout.module.scss"

export default function Layout(props) {

    return (
        <div className={styles.layout}>
            <Navbar />
            <div >{props.children}</div>
        </div>
    );
}