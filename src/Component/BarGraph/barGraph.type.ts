export type BarGraphProps = {
    xLabel?:string,
    yLabel?:string,
    data: BarData[],
    
}

export type BarProps = {
    xLabel:string, yValue:number, height:number
}

export type BarData = {
    label : string,
    value : number
}