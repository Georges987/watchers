interface IProcess {
    id: string;
    name: string;
    description: string;
    key: string;
    icon?: string;
    status: string;
    program: IProgram;
    created?: string;
    updated?: string;
}

interface IProgram {
    id: string;
    name: string;
    components: any;
}

export type {
    IProcess,
    IProgram
}