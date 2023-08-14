import './button.css';
export default function Button(props) {
    return (
        <button className="button-acces" onClick={props.onClick}>
            Login
        </button>
    );
}
