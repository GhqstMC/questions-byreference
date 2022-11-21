import syllables from 'nlp-syllables/src/syllables.js'
import { Question } from './types.js'
console.log(syllables('Through your offspring all peoples on earth will be blessed.'))

export function renderSyllables(question: Question, index: number): string {
    let str = question.contentPrefix

    return str
}

// nlp.plugin(syllables)
//
// // ;(nlp as any).termWithSyllables('simplicity').then(term => {
// //     console.log(term)
// // })
//
// let text = nlp('What time is it?')

// console.log((text as any).syllables())