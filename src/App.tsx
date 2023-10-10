import { useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { amountAdded, incremented } from "./features/counter/counter_slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs_api_slice";

function App() {
  // Counter
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(incremented());
  };

  const handle4Click = () => {
    dispatch(amountAdded(4));
  };

  // Dogs API
  const [numDogs, setNumDogs] = useState(10);
  // ? isFetching destructured from useFetchBreedsQuery
  const { data = [] } = useFetchBreedsQuery(numDogs);

  return (
    <section>
      <h1>Redux Toolkit</h1>
      <div>
        <label htmlFor="dogs-select">Dogs to fetch:</label>
        <select
          name="dogs"
          id="dogs-select"
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt="" height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
      <div className="card">
        <button onClick={handle4Click}>Add 4: count is {count}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
  );
}

export default App;
