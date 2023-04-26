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
          <th>Agua, Roca, Dragon, Fuego</th>
          <th>Agua, Roca, Tierra</th>
          <th></th>
        </tr>
        <tr>
          <th>Agua</th>
          <th>Roca, Tierra, Fuego</th>
          <th>Agua, Planta, Dragon</th>
          <th>Planta, Electrico</th>
          <th></th>
        </tr>
        <tr>
          <th>Planta</th>
          <th>Agua, Roca, Tierra</th>
          <th>Acero, Volador, Planta, Bicho, Fuego, Veneno, Dragon</th>
          <th>Volador, Hielo, Bicho, Fuego, Veneno</th>
          <th></th>
        </tr>
        <tr>
          <th>Normal</th>
          <th></th>
          <th>Acero, Roca</th>
          <th>Lucha</th>
          <th>Fantasma</th>
        </tr>
        <tr>
          <th>Siniestro</th>
          <th>Psiquico, Fantasma</th>
          <th>Lucha, Hada, Siniestro</th>
          <th>Lucha, Bicho, Hada</th>
          <th></th>
        </tr>
        <tr>
          <th>Electrico</th>
          <th>Agua, Volador</th>
          <th>Planta, Electrico, Dragon</th>
          <th>Tierra</th>
          <th></th>
        </tr>
        <tr>
          <th>Dragon</th>
          <th>Dragon</th>
          <th>Acero</th>
          <th>Hielo, Hada, Dragon</th>
          <th></th>
        </tr>
        <tr>
          <th>Lucha</th>
          <th>Hielo, Normal, Roca, Siniestro, Acero</th>
          <th>Volador, Bicho, Hada, Psiquico, Veneno</th>
          <th>Volador, Psiquico, Hada</th>
          <th></th>
        </tr>
        <tr>
          <th></th>
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