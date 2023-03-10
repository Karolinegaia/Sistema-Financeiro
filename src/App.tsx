import { useState, useEffect } from "react";
import * as C from "./Components/AppStyled"
import { Item } from "./types/Item"
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth} from "./helpers/dataFilter"

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=> {

  },[list, currentMonth]);
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


