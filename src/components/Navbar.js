//imports…
import closeIcon from "../assets/icons/close.svg"
import IconButton from '@mui/material/IconButton';
import ieeeLogoMotto from "../assets/icons/ieee-logo-motto.svg"
import menuIcon from "../assets/icons/menu.svg"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//styles
import styles from "./navbar.module.scss"


export default function Navbar() {

    //variables...
    const currentPath = useLocation().pathname;
    const navigate = useNavigate();
    //boolean

    const onMenuClick = () => {

        if (currentPath.includes("/menu")) {
            const menuClosePath = currentPath.replace("/menu", "");
            navigate(menuClosePath);
        }
        else {
            navigate(`${currentPath}/menu`);
        }
    }

    return (
        <div className={styles.navbar}>
            <img className={styles.logo} src={ieeeLogoMotto} alt="IEEE Logo" />
            <IconButton
                onClick={onMenuClick}

            >
                <img
                    className={styles.menuIcon}
                    src={currentPath.includes("/menu") ? closeIcon : menuIcon}
                    alt="Menu Icon"
                />
            </IconButton>

        </div>
    );
}