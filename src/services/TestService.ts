interface IMessage {
    message: string;
}

class TestService {
    
    async execute() {
        const text = "Info sent back";
        return text;
    }
}

export { TestService };