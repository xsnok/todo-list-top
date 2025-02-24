class IdCounter {
    static id = 0;

    generateId() {
        id++;
        return id;
    }
}