const getAll = () => {
    const title = 'Contact';
    const description = 
        `Contact me.
        
        Email: m.anangnur@gmail.com
        Telegram: @anang182`
    const social = 
        `Social
        
        [1]Facebook
        [2]Twitter
        [3]Instagram
        [4]Youtube
        [5]Linkedin`
    const data = {
        title: title,
        description: description,
        social: social,
    }

    return data;
};

module.exports = {
    getAll,
};