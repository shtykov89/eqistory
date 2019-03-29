export const commits = [
    {
        id: 1,
        date: '19.03.2019',
        header: 'Initial commit',
        comment: 'Initial commit',
        code:`
            onSubmit(e) {
                e.preventDefault();
                    const job = {
                    title: 'Developer' 
                };
            }
            ` 
    },
    {
        id: 2,
        date: '20.03.2019',
        header: 'Commit',
        comment: 'Added variable "a" and "company:" string',
        code:`
            onSubmit(e) {
                e.preventDefault();
                    let a = 100,
                    const job = {
                    title: 'Developer',
                    company: 'Facebook'
                };
            }
            `
    },
    {
        id: 3,
        date: '21.03.2019',
        header: 'Commit',
        comment: 'Сhanged variable "a" and "company:" string',
        code: `
            onSubmit(e) {
                e.preventDefault();
                    let a = 101
                    const job = {
                    title: 'Developer',
                    company: 'Twitter' 
                };
            }
            `
    },
    {
        id: 4,
        date: '22.03.2019',
        header: 'Commit',
        comment: 'Сhanged variable "a" and "company:" string again',
        code: `
            onSubmit(e) {
                e.preventDefault();
                    let a = 102
                    const job = {
                    title: 'Developer',
                    company: 'instagram' 
                };
            }
            `
    }
] 