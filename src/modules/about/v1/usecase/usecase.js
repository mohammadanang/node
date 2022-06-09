const getAll = () => {
    const title = 'About Page';
    const description = 
        `This is my updated portofolio. I actually work using Github.`
    const license = 
        `[1]Udemy, "gRPC [Golang] Master Class: Build Modern API & Microservices",UC-b2d9f9d6-fd61-47a7-bcf1-f060d3ab9262, Mar 2022.
         [2]Udemy1, “Go: The Complete Developer’s Guide (Golang)", UC-bccb13ea-9cbb-4b41-adfa-19efae55e687, Jul 2021.
         [3]Udemy1, “iPhone Photography | Take Professional Photos On Your iPhone”, UC-92eb8ecf-0e17-4f8e-bfc5-79e2d8a36526, Mei 2021.
         [4]Udemy1, “Clean Code”, UC-aa06090a-f59e-467a-839d-5738b4cf3b19, Apr 2021.
         [5]Ekipa2, “Indonesia Scrum Master I”, TGDQZGGQHZ-YWWPSYMY-RPJHDLHTHJ, Des 2020.
         [6]Udemy1, “Optimizing Web Performance and Critical Rendering Path”, UC-04efb058-483d-4b0f-a92a-5f22dd38e199, Aug 2020.`
    const wishlist = 
        `* Contribute to Open Source more.
         * Write a book.
         * Starting to creating Youtube videos.
         * Make libraires or packages or plugins more.
         * Workout routinely`
    const refrence = 
        `* Udemy course.
         * Github repos.
         * Acedemind Youtube channel.`
    const data = {
        title: title,
        description: description,
        license: license,
        wishlist: wishlist,
        refrence: refrence,
    };

    return data;
};

module.exports = {
    getAll,
};