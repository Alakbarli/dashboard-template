export interface MenuItem{
    icon?:string;
    label:string;
    link?:string;
    children?:Array<MenuItem>;
}