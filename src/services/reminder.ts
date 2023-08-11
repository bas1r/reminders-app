import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
    http = axios.create({
        baseURL: 'http://jsonplaceholder.typicode.com/'
    });

    async getReminders() {
        const respond = await this.http.get<Reminder[]>('/todos');
        return respond.data;
    }

    async addReminder(title: string ) {
        const respond = await this.http.post('/todos', { title });
        return respond.data;
    }

    async removeReminder(id: number) {
        const respond = await this.http.delete('/todos' + id);
        return respond.data;
    }
}

export default new ReminderService();