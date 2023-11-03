import logo from './logo.svg';
import './App.css';
// import { useGetPokemonByNameQuery } from './services/pokemon'
import { useGetPodcastByIdQuery } from "./services/podcasts";
import { useDispatch, useSelector } from "react-redux";
import {decrement, increment, setPodcastId} from "./slices/counter/counterSlice";
import { useEffect } from "react";


function App() {
  // const { pokemonData, pokemonError, pokemonIsLoading } = useGetPokemonByNameQuery('bulbasaur')
    const podcastId = useSelector((state) => state.counter.podcastId)
    const { data, error, loading, isError, isSuccess } = useGetPodcastByIdQuery(podcastId,{
        skip:podcastId===null
    })
    useEffect(() => {
        console.log(data)
    }, [isSuccess]);
    const dispatch = useDispatch()

    const count = useSelector((state) => state.counter.value)
    const showAudio = data?.hasOwnProperty('file') ?? false

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <div>

            <>
                <input onInput={(event)=>dispatch(setPodcastId(event.target.value))} type="number"/>
                {(isError || loading)?(<h3>error</h3>):(<h3>bob {data?.title}</h3>)}
                {count}
                { showAudio ? (<p>Ayyyyyydio</p>) : (<p>nodio</p>)}
                <button onClick={() => dispatch(increment())}
                >Increment</button>
                <button onClick={() => dispatch(decrement())}
                >Decrement</button>
            </>
      </div>
  );
}

export default App;
