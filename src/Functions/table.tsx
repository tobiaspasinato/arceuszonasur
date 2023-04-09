import Table from 'react-bootstrap/Table';

export default function DarkExample() {
  return (
    <Table size="sm" bordered className='App-color-table'>
      <thead>
        <tr>
          <th>Tipos</th>
          <th>Efectivo</th>
          <th>No Efectivo</th>
          <th>Debil</th>
          <th>Inmune</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Fuego</th>
          <th>Hielo, Planta, Bicho, Acero</th>
          <th>No Efectivo</th>
          <th>Debil</th>
          <th>Inmune</th>
        </tr>
        <tr>
          <th>Tipos</th>
          <th>Efectivo</th>
          <th>No Efectivo</th>
          <th>Debil</th>
          <th>Inmune</th>
        </tr>
        <tr>
          <th>Tipos</th>
          <th>Efectivo</th>
          <th>No Efectivo</th>
          <th>Debil</th>
          <th>Inmune</th>
        </tr>
      </tbody>
    </Table>
  );
}