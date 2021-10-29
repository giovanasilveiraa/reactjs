import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContex } from "../../TransactionsContex";

export function Summary(){
    const { transactions } = useContext(TransactionsContex);

    console.log();


    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="background-green">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$500,00</strong>
            </div>

        </Container>
    );
}