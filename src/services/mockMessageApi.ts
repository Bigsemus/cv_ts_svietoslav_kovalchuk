
interface MessageType {
    id?: number;
    name?: string;
    txtEN?: string;
    txtUA?: string;
}
interface MyMessagesData {
    studyingMessages: MessageType[],
    aboutMessages: MessageType[],
}

const mockMessageApi = { getMessage: async () => {
        const dataMessage: MyMessagesData = {
            studyingMessages: [
                {'id': 1, "name": 'red', 'txtEN': 'Ambitious, quick-learner, diligent, challenges', 'txtUA': 'Амбітний, швидке навчання, старанний, кидає виклики'},
                {'id': 2, "name": 'blue', 'txtEN': 'Responsible, persistent, stress-resistant, flexible', 'txtUA': 'Відповідальний, наполегливий, стресостійкий, гнучкий'},
                {'id': 3, "name": 'light-blue', 'txtEN': 'Communicable, enjoying life', 'txtUA': 'Комунікабельний, насолода від життя'},
            ],
            aboutMessages: [
                {'id': 1, "name": 'red', 'txtEN': 'It would be great to work on projects that use technologies that I would like to learn.', 'txtUA': 'Було б чудово працювати над проектами, які використовують технології, які я хотів би вивчити.'},
                {'id': 2, "name": 'blue', 'txtEN': 'It will also be great to work on problems with people who already have some experience with these technologies.', 'txtUA': 'Також буде чудово працювати над проблемами з людьми, які вже мають певний досвід роботи з цими технологіями.'},
                {'id': 3, "name": 'light-blue', 'txtEN': 'I definitely want to build react apps. And of course, develop higher further)', 'txtUA': 'Я точно хочу створювати додатки для реагування. І звісно розвиватися вище)'},
            ]
        }
        return dataMessage
    }};

export default mockMessageApi