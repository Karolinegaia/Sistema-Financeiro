import *as C from './TableArea.style';
import { Item } from "../../types/Item"

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableColumn width={100}>Data</C.TableColumn>
                    <C.TableColumn width={130}>Categoria</C.TableColumn>
                    <C.TableColumn>Título</C.TableColumn>
                    <C.TableColumn width={150}>Valor</C.TableColumn>
                </tr>
            </thead>
            <tbody>
                {list.map(() => (
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </C.Table>
    );
}