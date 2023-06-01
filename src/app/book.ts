export class book {
    constructor(
        public bookID: number = 0,
        public bookName: string = '',
        public publisher: string = '',
        public price: number = 0,
        public inStock: boolean = false
    ) {
    }
}