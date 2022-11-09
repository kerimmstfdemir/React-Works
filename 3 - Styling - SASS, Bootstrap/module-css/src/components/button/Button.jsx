// import "./Button.css";
import ButtonStyle from "./button.module.css";

const Button = ({ btn }) => {
    console.log(btn)
    return (
        <div className={ButtonStyle.title}>
            <button className={ButtonStyle["btn-blue"]}>{btn}</button>
        </div>
    )
}

export default Button;