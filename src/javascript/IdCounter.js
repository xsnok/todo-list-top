class IdCounter {
    constructor() {
        this.id = 0;
    }

    generateId() {
        this.id++;
        return this.id;
    }
}
export default IdCounter;