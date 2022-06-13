const getAll = () => {
    const about = {
        title: 'About me',
        text: 'This is my updated portfolio. I actually work using GitHub.',
        link: 'https://github.com/mohammadanang'
    }

    const license = {
        title: 'Licenses & certifications.',
        list: [
            {
                title: 'Udemy1, “gRPC [Golang] Master Class: Build Modern API & Microservices", UC-b2d9f9d6-fd61-47a7-bcf1-f060d3ab9262, Mar 2022.',
                link: 'https://ude.my/UC-b2d9f9d6-fd61-47a7-bcf1-f060d3ab9262/'
            },
            {
                title: `Udemy1, “Go: The Complete Developers Guide (Golang)", UC-bccb13ea-9cbb-4b41-adfa-19efae55e687, Jul 2021.`,
                link: 'https://ude.my/UC-bccb13ea-9cbb-4b41-adfa-19efae55e687/'
            },
            {
                title: 'Udemy1, “iPhone Photography | Take Professional Photos On Your iPhone”, UC-92eb8ecf-0e17-4f8e-bfc5-79e2d8a36526, Mei 2021.',
                link: 'https://ude.my/UC-92eb8ecf-0e17-4f8e-bfc5-79e2d8a36526/'
            },
            {
                title: 'Udemy1, “Clean Code”, UC-aa06090a-f59e-467a-839d-5738b4cf3b19, Apr 2021.',
                link: 'https://ude.my/UC-aa06090a-f59e-467a-839d-5738b4cf3b19/'
            },
            {
                title: 'Ekipa2, “Indonesia Scrum Master I”, TGDQZGGQHZ-YWWPSYMY-RPJHDLHTHJ, Des 2020.',
                link: 'https://drive.google.com/file/d/1mOARJi6ZQemAywJSyck6FDRfRReGFY_l/view?usp=sharing'
            },
            {
                title: 'Udemy1, “Optimizing Web Performance and Critical Rendering Path”, UC-04efb058-483d-4b0f-a92a-5f22dd38e199, Aug 2020.',
                link: 'http://ude.my/UC-04efb058-483d-4b0f-a92a-5f22dd38e199/'
            }
        ]
    }

    const wishlist = {
        title: 'Wishlist',
        list: [
            {
                title: 'checked: Contribute to Open Sources more 😄⚙️.',
                checked: true
            },
            {
                title: 'Write a book 😠🔥.'
            },
            {
                title: 'Start to creating Youtube videos 😬🎥.',
                link: 'https://www.youtube.com/channel/UCKJx6n1PIpMrjx0zYQhDYRQ'
            },
            {
                title: 'Make libraries or packages or plugins more 😮👍.',
                checked: true
            },
            {
                title: 'Workout routinely 🥱💪.',
                checked: true
            }
        ]
    }

    const references = {
            list: [
                {
                    title: 'Udemy course.',
                    link: 'https://www.udemy.com/'
                },
                {
                    title: 'GitHub repos.',
                    link: 'https://github.com/'
                },
                {
                    title: 'Academind YouTube channel.',
                    link: 'https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w'
                }
            ]
    }

    const data = {
        about,
        license,
        wishlist,
        references,
    };

    return data;
};

module.exports = {
    getAll,
};