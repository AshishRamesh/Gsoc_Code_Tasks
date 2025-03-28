import React, { useState} from "react";

const EditTask = ({task}) => {
    const [isEdit, setIsEditing] = useState(false);

    return (
        <div>
            {isEdit ? (
                <div>Ok</div>
        ) : (
            <>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsEditing(true)}>
            Edit</button>
            </>
        )}
        </div>
    );
};

export default EditTask;