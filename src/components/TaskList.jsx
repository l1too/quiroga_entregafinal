import { IoTrashBin } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
const TaskList =({ tasks, onDeleteTask, onChangeStatus })=> {

  return (
    <>
        <div className="overflow-x-auto">
        <table className="table w-4/5 mx-auto">
      <thead>
        <th className="text-2xl font-bold">id</th>
        <th className="text-2xl font-bold">descripción</th>
        <th className="text-2xl font-bold">borrar</th>
        <th className="text-2xl font-bold">marcar</th>
      </thead>
      <tbody>
        {tasks.map(t => <tr key={t.id}
          className={`hover ${t.isCompleted ? "completed" : ""}`}
        >
          <td className="text-xl font-bold">
            {t.id.slice(-5)}
          </td>
          <td className="text-xl font-bold">
            {t.description}
          </td>
          <td>
            <IoTrashBin size={20} color={'red'} className="icons" onClick={() => onDeleteTask(t.id)} />
          </td>
            <td>
              <IoIosCloseCircle className="icons" size={20} color="blue" onClick={() => onChangeStatus(t.id)} />
            </td>
          </tr>)}
        </tbody>
      </table>

    </div>
    </>
  );
}

export default TaskList;