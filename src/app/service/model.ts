export class Model {
    device_id!: string;
    isActice!: string;
    information!: {
        name: string,
        type: string,
        capacity: {
            ac: any,
            dc: any
        };
        serialNo: string;
        location: string;
        manufacture: string;
        model: string;
        deviceType: string;
        parsingVersion: string;
        description: string;
    }
}