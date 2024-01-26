type FormValues = {
    [key : string] : string | number
}

type AnyType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key : any] : any | null | undefined
} & any