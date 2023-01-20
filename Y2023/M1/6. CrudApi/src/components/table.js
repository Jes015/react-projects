//KEY
import { v4 as uuidv4 } from 'uuid'
import TableRow from './tableRow';

export default function DataTable({users,setForm,deleteData}) {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <table>
        <thead>
          <tr>
            <td>Nickname</td>
            <td>Password</td>
            <td>Email</td>
            <td>id</td>
          </tr>
        </thead>
        <tbody>
          {users && users.map((data) => <TableRow key={uuidv4()} data={data} deleteData={deleteData} setForm={setForm} />)}
        </tbody>
      </table>
    </div>
  );
}