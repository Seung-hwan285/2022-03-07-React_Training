import { Component } from 'react';
import Purchase from "./components/Purchase";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lottoBundle: [],
        };

        this.onPurchaseLotto = this.onPurchaseLotto.bind(this);
    }

    onPurchaseLotto({ numOfLotto }) {
        this.setState({ lottoBundle: Array(numOfLotto) });
    }

    render() {
        const { lottoBundle } = this.state;

        return (
            <div>
                <h1>🎱 행운의 로또</h1>
                <main>
                    <Purchase lottoBundle={lottoBundle} onPurchaseLotto={this.onPurchaseLotto} />

                </main>
            </div>
        );
    }
}

//
// function App() {
//   return (
//     <div className="App">
//
//
//       <h1>행운의 로또</h1>
//
//       <main>
//             <Purchase/>
//
//       </main>
//     </div>
//   );
// }
//
// export default App;
