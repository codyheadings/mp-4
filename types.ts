export type ObjectProps = {
    id: number;
    title: string;
    description: string;
    period: string;
    dated: string;
    classification: string;
    technique: string;
    colors: ColorProps[];
    people: PeopleProps[];
    dimensions: string;
    images: ImageProps[];
}

export type ColorProps = {
    color: string;
    spectrum: string;
    hue: string;
    percent: number;
    css3: string;
}

export type PeopleProps = {
    personid: number;
    name: string;
    role: string;
    birthplace: string;
    deathplace: string;
    displaydate: string;
    gender: string;
}

export type ImageProps = {
    alttext: string;
    width: number;
    height: number;
    idsid: number;
}