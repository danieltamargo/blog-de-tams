export interface IPost {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: {
        title?: string;
        description?: string;
        date?: string;
        tags?: string[];
    };
}