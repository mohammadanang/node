const getAll = () => {
    const title = 'The Home Page';
    const description = 
        `To Whom It May Concern
        
        Hello!, My name is Mohammad Anang.
        Typing is my daily activities. I can't live without typing.
        Sometimes thinking. Sometimes sleeping
        Eyes up and down, Head left and right.
        No matter how i tired I am, I will always typing.
        That's  what people called a Software Enginering.`
    const activities = 
        `Daily life cycle

        [1] Wake up.
        [2] Eating.
        [3] Typing.
        [4] Sleeping.`
    const data = {
        title: title,
        description: description,
        activities: activities,
    };

    return data;
};

module.exports = {
    getAll
};