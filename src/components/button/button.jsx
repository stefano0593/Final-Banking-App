import './button.css';
export default function Button(props) {
    return (
        <button className="button-acces" onClick={props.onClick}>
            Login
        </button>
    );
}
// button cu props(i-am spus ce sa faca cand se apasa)
