import React from 'react';
import { RiDeleteBin5Fill, RiEdit2Fill } from 'react-icons/ri'

const MyReviewTable = ({ myReview, handleDelete }) => {
    const { _id, serviceName, comments, rating } = myReview;
    return (

        <tr>
            <td>
                <p className="font-bold">{serviceName}</p>
            </td>
            <td>{comments}</td>
            <td>
                {rating}
            </td>
            <th>
                <button><RiEdit2Fill></RiEdit2Fill></button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)}><RiDeleteBin5Fill></RiDeleteBin5Fill></button>
            </th>
        </tr>
    );
};

export default MyReviewTable;