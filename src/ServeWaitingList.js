import { useState } from "react";

function ServeWaitingList (filename) {
    const [floor, setFloor] = useState(filename.dataFromParent);
    console.log(filename.dataFromParent[0])
    return (
        <div>
            {
                floor.map((item) => <li>Table: {item.Table} Diners: {item.Diners}</li>)
            }

        </div>
    )
}
export default ServeWaitingList;