class IdCounter {
    static id = 0;

    generateId() {
        IdCounter.id++;
        return IdCounter.id;
    }
}
export default IdCounter;