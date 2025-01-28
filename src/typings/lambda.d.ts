interface LambdaContext {
    expression: string,
    index: number,
    inputCount: number,
    inputIds: number[],
    lastResult: any | null,
    resultType: number
}
