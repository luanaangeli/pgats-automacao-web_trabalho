import { faker } from '@faker-js/faker'

export function getRandomNumber(){
    //return new Date().getTime()
   // return faker.number.hex({ min: 10000, max: 65535 })
   return faker.number.bigInt()
}

export function getRandomEmail() {
    //return `qa-tester-${getRandomNumber()}@test.com`
    return faker.internet.email({ firstName: 'QATesterPgats' })
}
