const getAll = () => {
    const section_1 = {
        title: 'To Whom It May Concern.',
        description: `Hello! My name is Mohammad Anang. \nTyping is my daily activities. I can’t live without typing. \nSometimes thinking. Sometimes sleeping. \nEyes up and down. Head left and right. \nNo matter how tired I am. I will always typing. \nThat’s what people called a Software Engineer.`
    }

    const section_2 = {
        title: 'Daily life cycle.',
        list: [
            'Wake Up 🌅.',
            'Eating 🍜.',
            'Typing ⌨️.',
            'Sleeping 🌙.',
        ]
    }

    const section_3 = {
        title: 'Quote of the day',
        description: '> Remember to eat, sleep & blink !'
    }
    const data = {
        section_1,
        section_2,
        section_3,
    };

    return data;
};

module.exports = {
    getAll
};