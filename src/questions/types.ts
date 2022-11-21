export enum QuestionType {
    'GENERAL',
    'ACCORDING_TO',
    'CONTEXT',
    'BOOK_AND_CHAPTER',
    'SITUATION',
    'VERSE',
    'REFERENCE',
    'QUOTE'
}

export type Reference = {
    formatted: string
    book: string
    chapter: number
    verse: number
}

export type ReferenceMultiple = {
    formatted: string
    book: string
    chapter: number
    verse: number | number[]
}

export type Question = {
    type: QuestionType
    question: string
    prefix: string
    contentPrefix: string // Something like a quotation mark that comes before first word but not in prefix area
    contentSuffix: string
    answer: string
    reference: ReferenceMultiple
    syllables: string[][]

}