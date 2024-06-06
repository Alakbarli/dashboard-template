import { SnackBarTypes } from "./const";

export class SnackBarData {
    constructor(message:string,actionType:SnackBarTypes,actionMessage?:string|null) {
        this.message=message;
        this.actionType=actionType;
        this.actionMessage=actionMessage;
    }
    message:string;
    actionType:SnackBarTypes;
    actionMessage:string|null|undefined;
}