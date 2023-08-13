import React from 'react';
import Reminder from '../models/reminder';


interface ReminderListProps {
    items: Reminder[];
    onRemoveReminder: (id: number) => void;
}

function ReminderList({items, onRemoveReminder}: ReminderListProps): JSX.Element {
    return (
        <div className='container'>
            <div className='row row row-cols-1 row-cols-lg-3 row-cols-md-2 g-3 mt-5'>
            {items.map(item =>
            <div className='col' key={item.id}>
                <div className="card rounded-4 h-100 text-bg-dark mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                        {/* <p className="card-text">{item.title}</p> */}
                        {/* <a href="#" className="card-link">Delete</a> */}
                    </div>
                    <div className="m-3">
                        <button onClick={() => onRemoveReminder(item.id)} className="btn btn-light rounded-pill">Delete</button>
                    </div>
                </div>
            </div> )} 
            </div>
        </div>
    );
}



export default ReminderList;