import './conversion.css';
export default function Conversion(props) {
    const { fromCoin, toCoin, fromFlag, toFlag, onClick, isActive, order } = props;
    // propsuri pentru primire de la API steagurile si monedele de schimb

    const getConversionPair = () => {
        onClick(fromCoin, toCoin);
    };
    // returneaza valorile introduse(monedele)
    return (
        <div>
            <a className={isActive ? 'selected ' : 'item '} onClick={getConversionPair}>
                <img src={fromFlag} />
                <img src={toFlag} />
                <span class="pop-pairs">
                    {fromCoin} - {toCoin}
                </span>
            </a>
        </div>
    );
}
