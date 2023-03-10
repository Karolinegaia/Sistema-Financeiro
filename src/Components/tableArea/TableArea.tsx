import *as C from './TableArea.style';

export const TableArea = () => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableColumn>Data</C.TableColumn>
                    <C.TableColumn>Categoria</C.TableColumn>
                    <C.TableColumn>Título</C.TableColumn>
                    <C.TableColumn>Valor</C.TableColumn>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </C.Table>
    );
}