const getAll = () => {
    const section1 = {
        title: 'Contact Me',
        description: [
            {
                title: 'Email: m.anangnur@gmail.com',
                link: 'm.anangnur@gmail.com'
            },
            {
                title: 'Telegram: @anangm182',
                link: 'https://t.me/anangm182'
            }
        ]
    }

    const section2 = {
        title: 'Stay at',
        description: 'Jakarta, Indonesia'
    }

    const section3 = {
        title: 'Social',
        list: [
            {
                title: 'Facebook',
                link: 'https://www.facebook.com/mohammadanang182/'
            },
            {
                title: 'Twitter',
                link: 'https://twitter.com/anangm182'
            },
            {
                title: 'Instagram',
                link: 'https://www.instagram.com/anangm182/'
            },
            {
                title: 'Youtube',
                link: 'https://www.youtube.com/channel/UCKJx6n1PIpMrjx0zYQhDYRQ'
            },
            {
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/anangm182/'
            }
        ]
    }

    const data = {
        section1,
        section2,
        section3
    }

    return data;
};

module.exports = {
    getAll,
};