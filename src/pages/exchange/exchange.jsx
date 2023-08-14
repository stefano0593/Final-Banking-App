import { Conversions } from '../../data/exchange';
import Conversion from '../../components/exchange/conversion';
import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './exchange.css';
import Footer from '../../components/footer/footer';
export default function Exchange() {
    const [isActive, setIsActive] = useState(null);
    const [exchangeSum, setSum] = useState('');
    const [returnSum, setReturn] = useState('');

    const [fromCoin, setFromCoin] = useState('');
    const [toCoin, setToCoin] = useState('');

    const getSum = (event) => {
        setSum(event.target.value);
    };
    // salvat valoarea de convertire DIN INPUT(valoarea)
    const change = () => {
        const sumAsNumber = parseInt(exchangeSum);

        fetch(
            `https://api.frankfurter.app/latest?amount=${sumAsNumber}&from=${fromCoin}&to=${toCoin}`
        )
            .then((conversion) => conversion.json())
            .then((conversion) => setReturn(conversion.rates[toCoin.toString()]));
    };

    const setConversionPair = (order, fromCoin, toCoin) => {
        setIsActive(order === isActive ? null : order);
        setFromCoin(fromCoin);
        setToCoin(toCoin);
        console.log(order, fromCoin, toCoin);
    };

    return (
        <section id="popular">
            <div>
                <Navbar />
                <div className="exchange-container">
                    <div className="exchange">
                        <label className="exchange-text">Introdu suma</label>
                        <input
                            className="exchange-input"
                            placeholder="...xxxxx..."
                            onChange={getSum}
                        ></input>
                        <p className="exchange-input2">{returnSum}</p>
                        <button className="calcul-buton" onClick={change}>
                            Schimba
                        </button>
                    </div>

                    <div className="popular-container">
                        <p className="popular-title">Conversii</p>
                        <div className="grid-container">
                            <Conversion
                                isActive={isActive === 1}
                                order={1}
                                fromFlag="https://currencyfreaks.com/photos/flags/gbp.png"
                                toFlag="https://currencyfreaks.com/photos/flags/eur.png"
                                fromCoin={Conversions.gbp_eur.fromCoin}
                                toCoin={Conversions.gbp_eur.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        1,
                                        Conversions.gbp_eur.fromCoin,
                                        Conversions.gbp_eur.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 2}
                                order={2}
                                fromFlag="https://currencyfreaks.com/photos/flags/eur.png"
                                toFlag="https://currencyfreaks.com/photos/flags/usd.png"
                                fromCoin={Conversions.eur_usd.fromCoin}
                                toCoin={Conversions.eur_usd.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        2,
                                        Conversions.eur_usd.fromCoin,
                                        Conversions.eur_usd.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 3}
                                order={3}
                                fromFlag="https://currencyfreaks.com/photos/flags/eur.png"
                                toFlag="https://currencyfreaks.com/photos/flags/ron.png"
                                fromCoin={Conversions.eur_ron.fromCoin}
                                toCoin={Conversions.eur_ron.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        3,
                                        Conversions.eur_ron.fromCoin,
                                        Conversions.eur_ron.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 4}
                                order={4}
                                fromFlag="https://currencyfreaks.com/photos/flags/sek.png"
                                toFlag="https://currencyfreaks.com/photos/flags/eur.png"
                                fromCoin={Conversions.sek_eur.fromCoin}
                                toCoin={Conversions.sek_eur.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        4,
                                        Conversions.sek_eur.fromCoin,
                                        Conversions.sek_eur.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 5}
                                order={5}
                                fromFlag="https://currencyfreaks.com/photos/flags/jpy.png"
                                toFlag="https://currencyfreaks.com/photos/flags/usd.png"
                                fromCoin={Conversions.jpy_usd.fromCoin}
                                toCoin={Conversions.jpy_usd.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        5,
                                        Conversions.jpy_usd.fromCoin,
                                        Conversions.jpy_usd.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 6}
                                order={6}
                                fromFlag="https://currencyfreaks.com/photos/flags/czk.png"
                                toFlag="https://currencyfreaks.com/photos/flags/eur.png"
                                fromCoin={Conversions.czk_eur.fromCoin}
                                toCoin={Conversions.czk_eur.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        6,
                                        Conversions.czk_eur.fromCoin,
                                        Conversions.czk_eur.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 7}
                                order={7}
                                fromFlag="https://currencyfreaks.com/photos/flags/eur.png"
                                toFlag="https://currencyfreaks.com/photos/flags/huf.png"
                                fromCoin={Conversions.eur_huf.fromCoin}
                                toCoin={Conversions.eur_huf.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        7,
                                        Conversions.eur_huf.fromCoin,
                                        Conversions.eur_huf.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 8}
                                order={8}
                                fromFlag="https://currencyfreaks.com/photos/flags/try.png"
                                toFlag="https://currencyfreaks.com/photos/flags/eur.png"
                                fromCoin={Conversions.try_eur.fromCoin}
                                toCoin={Conversions.try_eur.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        8,
                                        Conversions.try_eur.fromCoin,
                                        Conversions.try_eur.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 9}
                                order={9}
                                fromFlag="https://currencyfreaks.com/photos/flags/gbp.png"
                                toFlag="https://currencyfreaks.com/photos/flags/cad.png"
                                fromCoin={Conversions.gbp_cad.fromCoin}
                                toCoin={Conversions.gbp_cad.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        9,
                                        Conversions.gbp_cad.fromCoin,
                                        Conversions.gbp_cad.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 10}
                                order={10}
                                fromFlag="https://currencyfreaks.com/photos/flags/brl.png"
                                toFlag="https://currencyfreaks.com/photos/flags/usd.png"
                                fromCoin={Conversions.brl_usd.fromCoin}
                                toCoin={Conversions.brl_usd.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        10,
                                        Conversions.brl_usd.fromCoin,
                                        Conversions.brl_usd.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 11}
                                order={11}
                                fromFlag="https://currencyfreaks.com/photos/flags/aud.png"
                                toFlag="https://currencyfreaks.com/photos/flags/hkd.png"
                                fromCoin={Conversions.brl_usd.fromCoin}
                                toCoin={Conversions.brl_usd.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        11,
                                        Conversions.brl_usd.fromCoin,
                                        Conversions.brl_usd.toCoin
                                    )
                                }
                            />
                            <Conversion
                                isActive={isActive === 12}
                                order={12}
                                fromFlag="https://currencyfreaks.com/photos/flags/mxn.png"
                                toFlag="https://currencyfreaks.com/photos/flags/brl.png"
                                fromCoin={Conversions.mxn_brl.fromCoin}
                                toCoin={Conversions.mxn_brl.toCoin}
                                onClick={() =>
                                    setConversionPair(
                                        12,
                                        Conversions.mxn_brl.fromCoin,
                                        Conversions.mxn_brl.toCoin
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}
