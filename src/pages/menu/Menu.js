//imports…
import { Divider } from "@mui/material";
//icons
import homeIcon from "../../assets/icons/home.svg"
import teamIcon from "../../assets/icons/team.svg"
//styles
import styles from "./menu.module.scss"

export default function Menu() {

    return (
        <div className={styles.menu}>
            <h1>Menu</h1>
            <Divider />
            <div className={styles.menuItem}>
                <img src={homeIcon} className={styles.menuIcons} alt="Home Icon" />
                <p>Home</p>
            </div>
            <Divider />
            <div className={styles.menuItem}>
                <img src={teamIcon} className={styles.menuIcons} alt="Team Icon" />
                <p>Execom</p>
            </div>
            <Divider />
        </div>
    );
}