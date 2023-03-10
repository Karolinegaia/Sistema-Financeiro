import { useState, useEffect } from "react";
import * as C from "./AppStyled"
import { Item } from "./types/Item"
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filteredListByMonth} from "./helpers/dataFilter"
import { TableArea} from "./Components/tableArea/TableArea"

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=> {
    setFilteredList(filteredListByMonth(list, currentMonth));
  },[list, currentMonth]);
  return (
    <C.Container>
      <C.Hedear>
        <C.HedearText>
          Sistema Financeiro
        </C.HedearText>
      </C.Hedear>
      <C.Body>
      <TableArea/>
        ...
      </C.Body>
    </C.Container>
  );
}



export default App;