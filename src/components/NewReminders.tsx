import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

function NewReminders({ onAddReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState("")

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return 

        onAddReminder(title)
        setTitle("")
    }


    return (
        <form onSubmit={onSubmit} className="row row-cols-lg-auto g-3 align-items-center justify-content-lg-center ">
            <div className="col-12">
                    <input value={title} onChange={e => setTitle(e.target.value)} className="form-control form-control-lg rounded-pill" type="text" placeholder="Add reminder!" aria-label=".form-control-lg example"></input> 
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-light btn-lg rounded-pill">&#43; Add Reminder</button>
            </div>
        </form> 
    );
}

export default NewReminders;