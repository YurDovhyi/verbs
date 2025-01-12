import { nanoid } from "nanoid";

function TableVerbs({ items }) {
  console.log(items);
  return(
    <aside>
      <table>
        <thead>
          <tr>
            <th>base form</th>
            <th>Past Simple</th>
            <th>Past Participle </th>
            <th>Translate </th>
          </tr>
        </thead>
        <tbody>
          { items.map(({baseForm, pastSimple, pastParticiple,translation }) => (

            <tr key={nanoid()}>
              <td>{baseForm}</td>
              <td>{pastSimple}</td>
              <td>{pastParticiple}</td>
              <td>{translation}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </aside>)
}

  export default TableVerbs;