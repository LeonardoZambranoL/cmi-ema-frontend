export type FAQType = {
    question: string;
    answer: string;
}

export type CountryType = {
    id: string;
    name: string;
}

export type SchoolType = {
    id: string;
    name: string;
    country_id: string;
}

export type RessourceType = {
    title: string;
    description: string;
    content: string;
    link: string;
    free: boolean;
}

export type SingUpFormType = {
    firstName?: string;
    lastName?: string;
    email?: string;
    country?: string;
    school?: string;
    newSchool?: string;
    birth?: string;
}