import { useState } from "react";
import * as C from "./Components/AppStyled"
import { Item } from "./types/Item"
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth} from "./helpers/dataFilter"

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)
  return (
    <C.Container>
      <C.Hedear>
        <C.HedearText>
          Sistema Financeiro
        </C.HedearText>
      </C.Hedear>
      <C.Body>
        ...
      </C.Body>
    </C.Container>
  );
}

export default App
